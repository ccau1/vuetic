import { story } from "../../utils";
import ButtonStatus from "./ButtonStatus.story.vue";
import ButtonRounded from "./ButtonRounded.story.vue";
import ButtonFull from "./ButtonFull.story.vue";
import ButtonDisabled from "./ButtonDisabled.story.vue";

export default {
  title: "Button"
};
console.log("story", story);

export const buttonStatus = story(ButtonStatus);
export const buttonRounded = story(ButtonRounded);
export const buttonFull = story(ButtonFull);
export const buttonDisabled = story(ButtonDisabled);
