import { Theme } from "@components/web";

export default {
  colors: {
    primary: "#2ec4b6",
    secondary: "#ff9f1c",
    info: "#03A9F4",
    danger: "#F44336",
    warning: "#FFC107",
    success: "#4CAF50",
    background: "#cbf3f0",
    backgroundContent: "#cbf3f0",
    backgroundSection: "#fff",
    text: {
      bgLight: "#000",
      bgDark: "#fff",
      bgContent: "@bgLight",
      bgInfo: "@bgLight",
      bgWarning: "@bgLight",
      bgPrimary: "$$colors.text.bgDark",
      bgSecondary: "@bgDark",
      bgDanger: "@bgDark",
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
