import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { describe, it } from "node:test";

import {
  HERO_STUDIO_ANCHORS,
  STUDIO_BRIDGE_VERSION,
  STUDIO_PROFILE_ID,
  createStudioReadyMessage,
  isTrustedStudioOrigin,
  parseStudioHostMessage,
  studioAnchorAttributes,
} from "../../src/studio/heroContract.ts";

const envelope = { version: STUDIO_BRIDGE_VERSION, channelId: "channel_1234" };

describe("GoCharbon Hero Studio contract", () => {
  it("maps exactly eight semantic surfaces to the homepage source", async () => {
    const page = await readFile(
      new URL("../../src/pages/index.astro", import.meta.url),
      "utf8",
    );
    const ids = Object.keys(HERO_STUDIO_ANCHORS);
    assert.equal(ids.length, 8);
    assert.equal(new Set(ids).size, 8);
    for (const [id, anchor] of Object.entries(HERO_STUDIO_ANCHORS)) {
      assert.match(
        page,
        new RegExp(
          `studioAnchorAttributes\\(\\"${id.replace(".", "\\.")}\\"\\)`,
        ),
      );
      assert.equal(anchor.source.path, "site/src/pages/index.astro");
      assert.equal(anchor.source.confidence, "exact");
    }
    assert.equal(
      page.match(
        /import\.meta\.env\.DEV \? studioAnchorAttributes\("hero\.[a-z]+"\) : \{\}/g,
      )?.length,
      8,
    );
    assert.deepEqual(studioAnchorAttributes("hero.miner"), {
      "data-sg-studio-anchor": "hero.miner",
      "data-sg-studio-profile": STUDIO_PROFILE_ID,
    });
    assert.doesNotMatch(page, /data-sg-studio-anchor=/);
  });

  it("keeps the bridge envelope closed and profile-specific", () => {
    assert.equal(
      parseStudioHostMessage({ ...envelope, type: "studio.attach" })?.type,
      "studio.attach",
    );
    assert.equal(
      parseStudioHostMessage({
        ...envelope,
        type: "studio.select",
        anchorId: "hero.miner",
      })?.type,
      "studio.select",
    );
    assert.equal(
      parseStudioHostMessage({
        ...envelope,
        type: "studio.select",
        anchorId: "hero.unknown",
      }),
      null,
    );
    assert.equal(
      parseStudioHostMessage({
        ...envelope,
        type: "studio.attach",
        selector: "body",
      }),
      null,
    );
    const anchor = {
      id: "hero.title",
      ...HERO_STUDIO_ANCHORS["hero.title"],
      bounds: { x: 1, y: 2, width: 3, height: 4 },
    };
    assert.equal(
      createStudioReadyMessage("channel_1234", [anchor]).profileId,
      STUDIO_PROFILE_ID,
    );
  });

  it("accepts only the exact Studio parent origin", () => {
    assert.equal(isTrustedStudioOrigin("http://127.0.0.1:3005"), true);
    assert.equal(isTrustedStudioOrigin("http://localhost:3005"), false);
    assert.equal(
      isTrustedStudioOrigin("http://127.0.0.1:3005.evil.test"),
      false,
    );
  });

  it("does not compare cross-origin WindowProxy objects during handshake", async () => {
    const bridge = await readFile(
      new URL("../../src/studio/heroBridge.ts", import.meta.url),
      "utf8",
    );
    assert.doesNotMatch(bridge, /event\.source/);
    assert.match(
      bridge,
      /isTrustedStudioOrigin\(event\.origin, parentOrigin\)/,
    );
    assert.match(bridge, /message\.channelId !== channelId/);
  });
});
