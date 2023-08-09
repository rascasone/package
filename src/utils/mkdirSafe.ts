import { access, mkdir } from "fs/promises";

export const mkdirSafe = async (path: string) => {
  try {
    await access(path);
  } catch {
    await mkdir(path);
  }
};
