import { Theme } from "@components/web";

export default {
  colors: {
    primary: "#2ec4b6",
    secondary: "#ff9f1c",
    info: "#03A9F4",
    danger: "#F44336",
    warning: "#FFC107",
    success: "#4CAF50",
    background: "#464646",
    backgroundContent: "#464646",
    backgroundSection: "#fff",
    text: {
      bgLight: "#000",
      bgDark: "#fff",
      bgContent: "@bgDark",
      bgInfo: "@bgDark",
      bgWarning: "@bgDark",
      bgPrimary: "$$colors.text.bgLight",
      bgSecondary: "@bgLight",
      bgDanger: "@bgLight",
      bgSuccess: "@bgLight"
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
    contentHorizontalPadding: 0,
    contentVerticalPadding: "$scale * 30"
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
    },
    button: {
      defaultRounded: true
    },
    textInput: {
      defaultRounded: true
    }
  }
} as Theme;
