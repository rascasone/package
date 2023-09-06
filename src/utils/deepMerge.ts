export const deepMerge = (
  srcContent: Record<string, unknown>,
  destContent: Record<string, unknown>,
) => {
  const mergedContent = { ...destContent, ...srcContent };

  for (const key in mergedContent) {
    if (Array.isArray(mergedContent[key])) {
      mergedContent[key] = [
        ...((destContent[key] as unknown[]) || []),
        ...((srcContent[key] as unknown[]) || []),
      ];
    } else if (typeof mergedContent[key] === "object") {
      mergedContent[key] = deepMerge(
        (srcContent[key] as Record<string, unknown>) || {},
        (destContent[key] as Record<string, unknown>) || {},
      );
    }
  }

  return mergedContent;
};
