import camelCase from "lodash/camelCase";
const requireModule = require.context(".", false, /\.ts$/);

// eslint-disable-next-line
const modules: { [key: string]: any } = {};

requireModule.keys().forEach((fileName: string) => {
  if (fileName === "./index.ts") return;

  const moduleName = camelCase(fileName.replace(/(.store)?\.(ts|js)/g, ""));

  const moduleFile = requireModule(fileName);

  modules[moduleName] = moduleFile.default || moduleFile;
});

export default modules;

export type RootState = {};
