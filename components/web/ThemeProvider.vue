<script>
import { buildParam } from "./utils";

export default {
  props: ["theme"],
  data() {
    return {
      themer: this.buildParam(this.theme),
      renderComponent: true
    };
  },
  watch: {
    theme(newTheme) {
      this.themer = this.buildParam(newTheme);
      this.forceRerender();
    }
  },
  provide() {
    const thisData = this.$data;
    return {
      get theme() {
        return thisData.themer;
      }
    };
  },
  methods: {
    forceRerender() {
      // Remove my-component from the DOM
      this.renderComponent = false;

      this.$nextTick(() => {
        // Add the component back in
        this.renderComponent = true;
      });
    },
    buildParam(theme) {
      // define how many times the buildParam will retry for pending/dependent paths
      const RETRIES = 5;
      const { value: _theme, pendingPaths } = buildParam(
        theme,
        // JSON.parse(JSON.stringify(theme || {})),
        undefined,
        RETRIES
      );

      if (pendingPaths.length) {
        throw new Error(`unresolved theme fields: ${pendingPaths.join(", ")}`);
      }

      return _theme;
    }
  },
  render() {
    return this.renderComponent ? this.$slots.default : null;
  }
};
</script>
