import { Theme } from "@components/web";

/**
 * THEME RULES
 * - paths:
 *   - @ = current level
 *   - $ = current root level (ie. colors, dimensions)
 *   - $$ = root level
 */

const requireFiles = require.context(".", true, /[\w-]+\.ts$/);

const themes = requireFiles
  .keys()
  .reduce<{ [key: string]: Theme }>((themeObj, filePath: string) => {
    // get name of filePath
    const name = filePath
      .split("/")
      .pop()
      ?.replace(/\.(ts|js)$/, "");
    // skip index file
    if (!name || name === "index") return themeObj;
    // get the content of the file
    const themeFile = requireFiles(filePath);
    // add content of the file to theme object
    themeObj[name] = themeFile["default"] || themeFile;
    // return theme object
    return themeObj;
  }, {});

export default themes;
