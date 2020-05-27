import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";

// require in a base component context
const requireComponent = require.context(".", true, /[\w-]+\.vue$/);

export default requireComponent
  .keys()
  // eslint-disable-next-line
  .reduce<{ [componentName: string]: any }>((obj, fileName) => {
    // get component config
    const componentConfig = requireComponent(fileName);

    // get pascal case name of the component
    const componentName = upperFirst(
      camelCase(
        (fileName.split("/").pop() || "")
          .replace(/^\.\//, "")
          .replace(/\.\w+$/, "")
      )
    );
    obj[componentName] = componentConfig.default || componentConfig;

    return obj;
    // register component globally
    // Vue.component(componentName, componentConfig.default || componentConfig);
  }, {});
