import Vue from "vue";

export const COMPUTE_REGEX = /(\$|\$\$|@)([\w_\d.]+)/;

type Parameters = { [key: string]: string | Parameters };
// type ParameterArrayItem = {key: string, field: string};

export const subPath = (
  param: Parameters,
  _subPath?: string,
  setValue?: string | Parameters
): Parameters | string => {
  // if no subpath, just return current param
  if (!_subPath) return param;
  // break subpath by ".", and drill down each level,
  // returning final level
  return _subPath.split(".").reduce((p: Parameters | string, path, index) => {
    if (typeof p === "string") {
      // if p is a string, we can't get path of p, so throw error
      throw new Error(`invalid handlebar path: ${_subPath}`);
    } else {
      if (setValue && _subPath.split(".").length - 1 === index) {
        p[path] = setValue;
      }
      // else return the path at p
      return p[path];
    }
  }, param);
};

export const capitalizeText = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const buildParam = (
  parameters: Parameters,
  _subPath?: string,
  retries = 5
): { value: string | Parameters; pendingPaths: string[] } => {
  // instantiate return values
  let pendingPaths: string[] = [];
  let value: Parameters | string = {};
  // if no parameters present
  if (!parameters) {
    // just return default structure
    return { pendingPaths, value };
  }
  // get subpath in parameters
  const subPathParameters = subPath(parameters, _subPath);

  // if sub path param is a string
  if (typeof subPathParameters === "string") {
    // handle its value, replacing any handlebar fields
    // with actual fields
    value = subPathParameters.replace(
      new RegExp(COMPUTE_REGEX, "g"),
      (full: string, scope: string, matchedPath: string) => {
        let scopedParameters = parameters;
        switch (scope) {
          case "$":
            scopedParameters = subPath(
              parameters,
              _subPath ? _subPath.split(".").shift() : undefined
            ) as Parameters;
            break;
          case "$$":
            scopedParameters = parameters;
            break;
          case "@":
            scopedParameters = subPath(
              parameters,
              _subPath
                ? _subPath
                    .split(".")
                    .slice(0, -1)
                    .join(".")
                : undefined
            ) as Parameters;
            break;
        }
        // get the value of the path
        const item = subPath(scopedParameters, matchedPath);

        // if the value is a string
        if (typeof item === "string") {
          // test if value has handlebars
          if (COMPUTE_REGEX.test(item)) {
            // if it does have handlebars,
            // add pending count so we can track total pending
            // count
            pendingPaths.push(_subPath || "");
            // return original string for now
            return `${scope}${matchedPath}`;
          } else {
            // dependent var resolved, return that var
            return item;
          }
        } else if (typeof item === "number") {
          return item;
        } else if (typeof item === "object") {
          // item is object? just return object string for now
          return "[object object]";
        } else {
          // neither object nor string, throw error
          throw new Error(
            `invalid handlebar path: ${matchedPath} in ${_subPath}`
          );
        }
      }
    );
    // if it can eval, eval field
    try {
      value = eval(value as string);
    } catch (err) {
      // don't need to catch, because if can't eval, already stored as string
    }
  } else {
    // sub path parameter is a parameter, so go through
    // each field, and call itself

    // define variable as a fixed type first
    const param = subPathParameters as Parameters;
    // go through each key in param
    Object.keys(param).forEach(p => {
      // define the current path by combining
      // original subPath (if any) to this key
      const thisPath = [];
      if (_subPath) thisPath.push(_subPath);
      thisPath.push(p);

      // call buildParam since it handles both object and string
      const result = buildParam(parameters, thisPath.join("."), 0);
      // append any pending
      pendingPaths = pendingPaths.concat(result.pendingPaths);
      // set new value to param (also references parameters)
      param[p] = result.value;
    });
    // save updated param object to value
    value = param;
  }

  // for any pending paths, try each out until "retries" runs out
  // or pendingPaths empty
  for (let r = 0; r < retries && pendingPaths.length !== 0; r++) {
    // go through each pending path
    pendingPaths = pendingPaths.reduce<string[]>(
      (newPendingPaths, pendingPath) => {
        // rebuild field at path
        const result = buildParam(parameters, pendingPath, 0);
        // set the parameter value at path
        subPath(parameters, pendingPath, result.value);
        // return any new pending paths
        return newPendingPaths.concat(result.pendingPaths);
      },
      []
    );
  }

  // if there are items pending and can still retry, call this
  // function again. Else, just return result
  return { value, pendingPaths };
};

export const story = (
  StoryComponent: Vue.Component & { __source: string },
  options = {}
) => {
  // Get the `withSource` option, default to true. Making this an option
  // allows us to opt-out of displaying the source of a story.
  const { withSource } = Object.assign({ withSource: true }, options);

  // The story export that Storybook will use
  const storyExport = () => StoryComponent;

  // Attach the source as a story paramter
  if (withSource) {
    storyExport.story = {
      parameters: {
        // `.__source` is from our custom <include-source> SFC block
        // and webpack loader
        source: StoryComponent.__source,
        // Default config for the docs tab
        docs: {
          inlineStories: true,
          source: {
            code: StoryComponent.__source
          }
        }
      }
    };
  }

  return storyExport;
};
