<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["currentLocale"])
  },
  mounted() {
    // ensure i18n syncs with vuex
    this.$i18n.locale = this.currentLocale;
  },
  render() {
    return this.$slots.default;
  }
};
</script>
