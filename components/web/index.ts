import { ThemeTextInput } from "./TextInput";
import { ThemeTypography } from "./Typography";
import { ThemeButton } from "./Button";
import { ThemeCard } from "./Card";

export interface ThemeField {
  [key: string]: ThemeField | string | number;
}

export interface Theme {
  colors: ThemeField;
  dimensions: {
    scale: string | number;
  };
  breakpoints: {
    xs: string | number;
    sm: string | number;
    md: string | number;
    lg: string | number;
    xl: string | number;
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
    card: ThemeCard;
  };
}
