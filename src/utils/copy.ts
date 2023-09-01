import {readdir, writeFile} from "node:fs/promises";
import {cp, readFile} from "fs/promises";
import {join} from "path";
import {mkdirSafe} from "./mkdirSafe.js";

const merge = {
  json: async (srcFile, destFile) => {
    return JSON.stringify({
      ...JSON.parse(destFile),
      ...JSON.parse(srcFile),
    }, null, 2);
  }
} satisfies Record<string, (srcFile: string, destFile: string) => Promise<string>>;

const fileMimeType = (file: string) => file.split(".").at(-1) as string;

const safeReadFile = async (path: string) => {
  try {
    return await readFile(path, "utf8");
  } catch {
    return false;
  }
}

export const mergeFile = async (name: string, src: string, dest: string) => {
  const destFile = await safeReadFile(dest);

  if(destFile) {
    const mimeType = fileMimeType(name);
    const srcFile = await readFile(src, "utf8");

    await writeFile(dest, mimeType in merge
      ? (await merge[mimeType as keyof typeof merge](srcFile, destFile))
      : destFile + "\n" + srcFile
    );
  } else {
    await cp(src, dest);
  }
}

export const copyDir = async (src: string, dest: string, level = 0) => {
  const files = await readdir(src, { withFileTypes: true });
  const promises = files.map(async (file) => {
    const srcPath = join(src, file.name);
    const destPath = join(dest, file.name);

    if (level !== -1 && file.isDirectory()) {
      await mkdirSafe(destPath);
      await copyDir(srcPath, destPath, level + 1);
    } else if (level === 0) {
      await mergeFile(file.name, srcPath, destPath);
    } else if (level > 0) {
      await cp(srcPath, destPath);
    }
  });

  await Promise.all(promises);
}
