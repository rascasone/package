import { writeFile } from "fs/promises";

export const saveFile = (dest: string, content: string) => {
  return writeFile(dest, content, "utf-8");
};
