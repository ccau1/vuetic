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
    contentMaxWidth: string | number;
    contentHorizontalPadding: string | number;
    contentVerticalPadding: string | number;
  };
  components: {
    typography: ThemeTypography;
    button: ThemeButton;
    textInput: ThemeTextInput;
  };
}
