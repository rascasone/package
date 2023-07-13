import { cp } from "fs/promises";
import { join } from "path";
import { TEMPLATES_DIR } from "../../src/constants.js";
import { createPackage } from "../../src/utils.js";
import { Template } from "../../src/types.js";

const MAIN = "dist/index.cjs";

const TYPES = "dist/index.d.ts";

const EXPORTS = {
  exports: {
    ".": {
      types: "./dist/index.d.ts",
      import: "./dist/index.mjs",
      require: "./dist/index.cjs",
    },
  },
};

export const FILES = ["dist/*.cjs", "dist/*.mjs", "dist/*.map", "dist/*.ts"];

const SCRIPTS = {
  "fix:format": 'prettier --write "**/*.{json,mjs,cjs,js,ts}"',
  "fix:lint": "eslint --fix --ext .json,.mjs,.cjs,.js,.ts .",
  fix: "pnpm fix:lint && pnpm fix:format",
  "check:format": 'prettier --check "**/*.{json,mjs,cjs,js,ts}"',
  "check:lint": "eslint --ext .json,.mjs,.cjs,.js,.ts .",
  check: "pnpm check:lint && pnpm check:format",
  "husky:pre-commit": "pnpm check",
  "husky:pre-push": "pnpm check",
  build:
    "pnpm clean && ts-node scripts/build.ts && tsc --emitDeclarationOnly --outDir dist",
  clean: "rm -rf dist",
  prepublishOnly: "pnpm build",
  release: "release-it",
};

const DEV_DEPENDENCIES = {
  "release-it": "15.11.0",
  "ts-node": "10.9.1",
  husky: "8.0.3",
  esbuild: "0.18.6",
  "@release-it/keep-a-changelog": "3.1.0",
};

export default {
  variants: () => ["private", "public"],
  create: async ({ packageName, templateName, variant }) => {
    const dirPrivate = join(TEMPLATES_DIR, templateName, "private");
    const dirPublic = join(TEMPLATES_DIR, templateName, "public");

    const { packageDir, json, saveJson } = await createPackage(
      dirPrivate,
      packageName,
    );

    if (variant === "public") {
      json.main = MAIN;
      json.types = TYPES;
      json.exports = EXPORTS;
      json.files = FILES;
      json.devDependencies = {
        ...json.devDependencies,
        ...DEV_DEPENDENCIES,
      };
      json.scripts = {
        ...json.scripts,
        ...SCRIPTS,
      };

      await cp(dirPublic, packageDir, { recursive: true });
      await saveJson();
    }
  },
} satisfies Template<["private", "public"]>;
