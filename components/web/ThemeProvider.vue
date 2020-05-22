<script>
import Vue from "vue";
import { mapGetters } from "vuex";
import { buildParam } from "./utils";

export default {
  props: ["theme"],
  data() {
    return {
      themer: this.buildParam(this.theme)
    };
  },
  watch: {
    theme(newTheme) {
      this.themer = this.buildParam(newTheme);
    }
  },
  provide() {
    const me = this;
    return {
      get theme() {
        return me.$data.themer;
      }
    };
  },
  methods: {
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
    return this.$slots.default;
  }
};
</script>
