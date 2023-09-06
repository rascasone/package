export const getFileType = (src: string) => {
  return src.split(".").at(-1) as string;
};
