import { Theme } from "@components/web";

export default {
  colors: {
    primary: "#e63946",
    secondary: "#457b9d",
    info: "#03A9F4",
    danger: "#F44336",
    warning: "#FFC107",
    success: "#4CAF50",
    background: "#1d3557",
    backgroundContent: "#1d3557",
    backgroundSection: "#fff",
    text: {
      bgLight: "#000",
      bgDark: "#fff",
      bgContent: "@bgDark",
      bgPrimary: "$$colors.text.bgDark",
      bgSecondary: "@bgDark",
      bgInfo: "@bgDark",
      bgDanger: "@bgLight",
      bgWarning: "@bgDark",
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
