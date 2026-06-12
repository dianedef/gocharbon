import { resolveInternalRoute } from "./internal-links";

type NodeLike = {
  type?: string;
  url?: string;
  children?: NodeLike[];
};

function visit(node: NodeLike, callback: (target: NodeLike) => void) {
  callback(node);
  if (!Array.isArray(node.children)) return;
  for (const child of node.children) visit(child, callback);
}

export function remarkInternalLinks() {
  return (tree: NodeLike) => {
    visit(tree, (node) => {
      if (node.type !== "link" || typeof node.url !== "string") return;
      node.url = resolveInternalRoute(node.url);
    });
  };
}
