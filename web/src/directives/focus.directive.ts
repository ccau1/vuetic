import { DirectiveOptions } from "vue";

export default {
  // When the bound element is inserted into the DOM...
  inserted: function(el) {
    // do basic focus for basic elements
    el.focus();
    // do fallback to find nested input to focus
    const childData = el.querySelectorAll("input")?.[0];
    if (childData) {
      childData.focus();
    }
  }
} as DirectiveOptions;
