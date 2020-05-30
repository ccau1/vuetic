import { Theme } from "@vuetic/components/web";

export default {
  colors: {
    primary: "#ff6700",
    secondary: "#004e98",
    info: "#03A9F4",
    danger: "#F44336",
    warning: "#FFC107",
    success: "#4CAF50",
    background: "#272727",
    backgroundContent: "#272727",
    backgroundSection: "#fff",
    text: {
      bgLight: "#000",
      bgDark: "#fff",
      bgContent: "@bgDark",
      bgInfo: "@bgDark",
      bgWarning: "@bgDark",
      bgPrimary: "$$colors.text.bgLight",
      bgSecondary: "@bgDark",
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
    sideBarColor: "$$colors.text.bgDark",
    sideBarVerticalPadding: "$$dimensions.scale * 60",
    sideBarSeparatorColor: "rgba(255, 255, 255, 0.1)"
  },
  components: {
    typography: {
      color: {
        primary: "$$colors.primary",
        secondary: "$$colors.secondary",
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
