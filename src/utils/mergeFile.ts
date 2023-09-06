import { toJSON } from "./toJSON.js";
import { deepMerge } from "./deepMerge.js";
import { fromJSON } from "./fromJSON.js";

export const mergeFile = (
  type: string,
  srcContent: string,
  destContent: string,
) => {
  if (type === "json") {
    return toJSON(deepMerge(fromJSON(srcContent), fromJSON(destContent)));
  }

  return srcContent + "\n" + destContent;
};
