import { build, BuildOptions } from "esbuild";
import { source, main as cjs, module as esm } from "../package.json";

const shared: BuildOptions = {
  bundle: true,
  entryPoints: [source],
  logLevel: "info",
  minify: true,
  platform: "neutral",
  sourcemap: "linked",
  treeShaking: true,
  outdir: "dist",
  target: ["esnext", "node18.0.0"],
};

(async () => {
  await Promise.all([
    build({
      ...shared,
      format: "cjs",
      outfile: cjs,
      target: ["esnext", "node18.0.0"],
    }),
    build({
      ...shared,
      format: "esm",
      outfile: esm,
      target: ["esnext", "node18.0.0"],
    }),
  ]);
})();
