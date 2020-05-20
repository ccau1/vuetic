<script>
import { buildParameters, buildParam } from './utils';
export default {
  name: "ThemeProvider",
  props: ['theme'],
  provide() {
    // define how many times the buildParam will retry for pending/dependent paths
    const RETRIES = 5;
    const curatedTheme = Object.keys(this.theme).reduce((accTheme, themeKey) => {
    // clean objects to simple json (could initially be observers, making
    // logs harder to read and possible unwanted alteration to fields)
      const themeObj = JSON.parse(JSON.stringify(this.theme[themeKey] || {}));
      // build param for this object key
      const themeFieldStructured = buildParam(themeObj, undefined, RETRIES);
      // if after building params with retry and there are still
      // pending paths, throw error
      if (themeFieldStructured.pendingPaths.length) {
        throw new Error(`cannot decode the following fields after ${RETRIES} retries for ${themeKey}: ${themeFieldStructured.pendingPaths.join(', ')}`);
      }
      // store structured param to our accumulated theme object
      accTheme[themeKey] = themeFieldStructured.value;
      return accTheme;
    }, {});
    // return curated theme
    return {theme: curatedTheme};
  },
  render() {
    return this.$slots.default
  }
}
</script>