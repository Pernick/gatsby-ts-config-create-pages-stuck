import type { GatsbyNode } from "gatsby";
import { createPages as createCustomPages } from "./scripts";

export const createPages: GatsbyNode["createPages"] = async (
  args,
  options,
  callback
) => {
  console.log(`Create Pages - START`);
  await createCustomPages(args, options, callback);
  console.log(`Create Pages - END`);
};
