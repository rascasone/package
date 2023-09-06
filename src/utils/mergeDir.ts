import { mkdirSafe } from "./mkdirSafe.js";
import { exists } from "./exists.js";
import { dirFiles } from "./dirFiles.js";
import { loadFile } from "./loadFile.js";
import { saveFile } from "./saveFile.js";
import { getFileType } from "./getFileType.js";
import { mergeFile } from "./mergeFile.js";

export const mergeDir = async (src: string, dest: string) => {
  if (await exists(src)) {
    await mkdirSafe(dest);

    const srcFiles = await dirFiles(src);

    for (const file of srcFiles) {
      if (file.isDirectory()) {
        await mergeDir(`${src}/${file.name}`, `${dest}/${file.name}`);
      } else {
        const srcContent = (await loadFile(`${src}/${file.name}`)) as string;
        const destContent = await loadFile(`${dest}/${file.name}`);
        if (destContent === null) {
          await saveFile(`${dest}/${file.name}`, srcContent);
        } else {
          const type = getFileType(file.name);
          const mergedContent = mergeFile(type, srcContent, destContent);
          await saveFile(`${dest}/${file.name}`, mergedContent);
        }
      }
    }
  }
};
