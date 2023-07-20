import { build, BuildOptions } from "esbuild";

const shared: BuildOptions = {
  bundle: true,
  entryPoints: ["src/index.ts"],
  logLevel: "info",
  minify: true,
  platform: "neutral",
  sourcemap: "linked",
  treeShaking: true,
};

(async () => {
  await Promise.all([
    build({
      ...shared,
      format: "cjs",
      outfile: "dist/index.cjs",
      target: ["esnext", "node20.0.0"],
    }),
    build({
      ...shared,
      format: "esm",
      outfile: "dist/index.mjs",
      target: ["esnext", "node20.0.0"],
    }),
  ]);
})();
