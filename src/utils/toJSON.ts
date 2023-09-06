export const toJSON = (content: Record<string, unknown>) =>
  JSON.stringify(content, null, 2);
