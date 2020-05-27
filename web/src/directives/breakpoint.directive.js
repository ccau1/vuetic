export default {
  bind(el, binding, vnode) {
    const action = binding.arg;

    // get the breakpoints requested
    let breakpoints = [];
    if (typeof binding.value === "string") {
      // if value is a string, split it by commas and
      // assign it to breakpoints
      breakpoints = binding.value.replace(" ", "").split(",");
    } else if (Array.isArray(binding.value)) {
      // if value is array, just assign it to breakpoints
      breakpoints = binding.value;
    }
    // get the current theme's breakpoints from main instance
    let themeBreakpoints = vnode.context?.theme?.breakpoints;
    // if no breakpoints found, log warning and fallback to default
    if (!themeBreakpoints) {
      console.warn(
        "directive::breakpoint-show - Cannot find theme from parent component. Fallback to default"
      );
      themeBreakpoints = {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920
      };
    }

    // store original display value
    const originalDisplay = el.style.display;

    // define window resize function
    el.handleResize = () => {
      // get screen width
      const screenWidth = window.innerWidth;
      // get current breakpoint based on theme's breakpoints
      // and screen's width
      const currentBreakpoint =
        Object.keys(themeBreakpoints)
          .sort((a, b) => themeBreakpoints[b] - themeBreakpoints[a])
          .find(bp => {
            return screenWidth > themeBreakpoints[bp];
          }) || "md";

      // get whether value is inside requested breakpoints
      const isActionTrue = breakpoints.includes(currentBreakpoint);
      // if current breakpoint in requested array and either show/hide,
      // handle it accordingly
      if (
        (action === "show" && !isActionTrue) ||
        (action === "hide" && isActionTrue)
      ) {
        el.style.display = "none";
      } else {
        el.style.display = originalDisplay;
      }
    };

    // call initial handling
    el.handleResize();

    // handle window resize
    window.addEventListener("resize", el.handleResize);
  },
  unbind(el) {
    // on unbind, remove listener for resize
    window.removeEventListener("resize", el.handleResize);
  }
};
