import { build, BuildOptions } from "esbuild";

const shared = {
  bundle: true,
  entryPoints: ["src/index.tsx"],
  logLevel: "info",
  minify: true,
  platform: "node",
  sourcemap: "linked",
  treeShaking: true,
  outdir: "dist",
  target: ["esnext", "node18.0.0"],
	external: ["react-devtools-core"]
} as BuildOptions;

Promise.all([
  build({
    ...shared,
    format: "esm",
    outExtension: { ".js": ".mjs.js" },
    splitting: true,
  })
]);
