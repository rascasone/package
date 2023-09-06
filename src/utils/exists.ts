import { access } from "fs/promises";

export const exists = async (src: string) => {
  try {
    await access(src);
    return true;
  } catch {
    return false;
  }
};
