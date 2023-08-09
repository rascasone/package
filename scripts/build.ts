import { build } from "esbuild";

build({
  bundle: true,
  entryPoints: ["src/index.tsx"],
  logLevel: "info",
  // minify: true,
  platform: "node",
  sourcemap: "linked",
  treeShaking: true,
  outdir: "dist",
  target: ["esnext", "node18.0.0"],
  external: ["react-devtools-core"],
  format: "esm",
  outExtension: { ".js": ".mjs" },
  splitting: true,
});
