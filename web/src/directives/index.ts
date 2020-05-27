import { DirectiveOptions } from "vue";

const requireFiles = require.context(".", true, /[\w-]+\.directive.(ts|js)$/);

const directives = requireFiles
  .keys()
  .reduce<{ [key: string]: DirectiveOptions }>(
    (directiveObj, filePath: string) => {
      // get name of filePath
      const name = filePath
        .split("/")
        .pop()
        ?.replace(/\.directive\.(ts|js)$/, "");
      // skip index file
      if (!name || name === "index") return directiveObj;
      // get the content of the file
      const directiveFile = requireFiles(filePath);
      // add content of the file to theme object
      directiveObj[name] = directiveFile["default"] || directiveFile;
      // return theme object
      return directiveObj;
    },
    {}
  );

export default directives;
