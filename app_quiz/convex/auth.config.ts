/**
 * Convex verifies Firebase ID tokens before any authenticated function runs.
 *
 * Do not replace this with a client-supplied uid. The Firebase project values
 * are intentionally environment variables so this repository contains no
 * provider credentials or project identifiers.
 */
export default {
  providers: [
    {
      domain: process.env.FIREBASE_AUTH_ISSUER!,
      applicationID: process.env.FIREBASE_AUTH_AUDIENCE!,
    },
  ],
};
