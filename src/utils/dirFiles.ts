import { readdir } from "fs/promises";

export const dirFiles = (src: string) => {
  return readdir(src, { withFileTypes: true });
};
