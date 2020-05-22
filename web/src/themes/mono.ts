import { Theme } from "@components/web";

export default {
  colors: {
    primary: "#23f",
    secondary: "#c44536",
    info: "#03A9F4",
    danger: "#F44336",
    warning: "#FFC107",
    success: "#4CAF50",
    background: "#edddd4",
    backgroundSection: "#fff",
    text: {
      bgLight: "#000",
      bgDark: "#fff",
      bgPrimary: "$$colors.text.bgDark",
      bgSecondary: "@bgDark",
      bgInfo: "@bgLight",
      bgDanger: "@bgDark",
      bgWarning: "@bgLight",
      bgSuccess: "@bgDark"
    },
    test: {
      zero: "$test.one",
      one: "$primary",
      two: "@one"
    }
  },
  dimensions: {
    scale: 1.5,
    contentMaxWidth: "$scale * 700",
    screenHorizontalPadding: "$scale * 20"
  },
  components: {
    typography: {
      status: {
        primary: "#000",
        success: "$$colors.success",
        info: "$$colors.info",
        danger: "$$colors.danger",
        warning: "$$colors.warning"
      }
    }
  }
} as Theme;
