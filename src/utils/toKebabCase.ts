export const toKebabCase = (value: string) => {
  return value.replace(
    /[A-Z]+(?![a-z])|[A-Z]/g,
    (v, ofs) => (ofs ? "-" : "") + v.toLowerCase(),
  );
};
