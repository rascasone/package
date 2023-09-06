import { readFile } from "fs/promises";

export const loadFile = async (src: string) => {
  try {
    return await readFile(src, "utf-8");
  } catch {
    return null;
  }
};
