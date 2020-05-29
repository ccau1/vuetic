import { Theme } from ".";

export default {
  colors: {
    primary: "#197278",
    secondary: "#c44536",
    info: "#03A9F4",
    danger: "#F44336",
    warning: "#FFC107",
    success: "#4CAF50",
    background: "#edddd4",
    backgroundContent: "#edddd4",
    backgroundSection: "#fff",
    text: {
      bgLight: "#000",
      bgDark: "#fff",
      bgContent: "@bgLight",
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
    scale: 1
  },
  breakpoints: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920
  },
  layout: {
    contentMaxWidth: "$$dimensions.scale * 1100",
    contentHorizontalPadding: "$$dimensions.scale * 5",
    contentVerticalPadding: "$$dimensions.scale * 60",
    headerBg: "$$colors.primary",
    footerBg: "$$colors.primary",
    sideBarBg: "$$colors.background",
    sideBarColor: "$$colors.text.bgLight",
    sideBarVerticalPadding: "$$dimensions.scale * 60",
    sideBarSeparatorColor: "rgba(0, 0, 0, 0.1)"
  },
  components: {
    typography: {
      status: {
        primary: "#000",
        success: "$$colors.success",
        info: "$$colors.info",
        danger: "$$colors.danger",
        warning: "$$colors.warning",
        hint: "rgba(0, 0, 0, 0.6)"
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