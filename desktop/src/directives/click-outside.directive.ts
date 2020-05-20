import Vue from "vue";

Vue.directive("click-outside", {
  // bind() {
  //   this.event = (event: any) => this.vm.$emit(this.expression, event);
  //   this.el.addEventListener("click", this.stopProp);
  //   document.body.addEventListener("click", this.event);
  // },
  // unbind() {
  //   this.el.removeEventListener("click", this.stopProp);
  //   document.body.removeEventListener("click", this.event);
  // }
  // stopProp(event: any) {
  //   event.stopPropagation();
  // }
});
