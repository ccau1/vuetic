import { ThemeTextInput } from "./TextInput";
import { ThemeTypography } from "./Typography";
import { ThemeButton } from "./Button";

export interface ThemeField {
  [key: string]: ThemeField | string | number;
}

export interface Theme {
  colors: ThemeField;
  dimensions: {
    scale: string | number;
  };
  layout: {
    contentMaxWidth: string | number;
    contentHorizontalPadding: string | number;
    contentVerticalPadding: string | number;
    headerBg: string;
    footerBg: string;
    sideBarBg: string;
    sideBarColor: string;
    sideBarVerticalPadding: string | number;
    sideBarSeparatorColor: string;
  };
  components: {
    typography: ThemeTypography;
    button: ThemeButton;
    textInput: ThemeTextInput;
  };
}
