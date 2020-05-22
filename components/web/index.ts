export interface ThemeField {
  [key: string]: ThemeField | string | number;
}

export interface Theme {
  colors: ThemeField;
  dimensions: ThemeField;
  components: ThemeField;
}
