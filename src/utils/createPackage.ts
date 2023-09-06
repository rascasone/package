import { join } from "path";
import { HERE, SHARED_DIR, TEMPLATES_DIR } from "../constants.js";
import { Props } from "../types.js";
import { writeDotPackage } from "./writeDotPackage.js";
import { createMap } from "./createMap.js";
import { mergeDir } from "./mergeDir.js";

export const createPackage = async (props: Props) => {
  const { language, template, variant, name } = props;
  const packageDir = join(HERE, name);
  const templateDir = join(TEMPLATES_DIR, language, template, variant);

  await mergeDir(join(SHARED_DIR, "any"), packageDir);
  await mergeDir(join(SHARED_DIR, `any-${variant}`), packageDir);
  await mergeDir(join(SHARED_DIR, language), packageDir);
  await mergeDir(join(SHARED_DIR, `${language}-${variant}`), packageDir);

  if (variant === "public") {
    await mergeDir(join(SHARED_DIR, `${language}-private`), packageDir);
    await mergeDir(
      join(TEMPLATES_DIR, language, template, "private"),
      packageDir,
    );
  }

  await mergeDir(templateDir, packageDir);
  await writeDotPackage(packageDir, props);

  await createMap[language]({
    ...props,
    packageDir,
    templateDir,
  });
};
