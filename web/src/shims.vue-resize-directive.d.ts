declare module "vue-resize-directive" {
  import { DirectiveFunction } from "vue";
  namespace VueResizeDirective {
    export const inserted: DirectiveFunction;
    export const unbind: DirectiveFunction;
  }

  export default VueResizeDirective;
}
