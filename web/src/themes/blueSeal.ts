import { Theme } from "@vuetic/components/web";

export default {
  colors: {
    primary: "#1982c4",
    secondary: "#ff595e",
    info: "#03A9F4",
    danger: "#F44336",
    warning: "#FFC107",
    success: "#4CAF50",
    background: "#e6e6e6",
    backgroundContent: "#e6e6e6",
    backgroundSection: "#fff",
    border: "rgba(0, 0, 0, 0.2)",
    text: {
      bgLight: "#000",
      bgDark: "#fff",
      bgContent: "@bgLight",
      bgPrimary: "$$colors.text.bgDark",
      bgSecondary: "@bgDark",
      bgInfo: "@bgLight",
      bgDanger: "@bgDark",
      bgWarning: "@bgLight",
      bgSuccess: "@bgDark",
      bgLink: "$$colors.info"
    },
    test: {
      zero: "$test.one",
      one: "$primary",
      two: "@one"
    }
  },
  dimensions: {
    scale: 1,
    borderRadius: 8
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
    contentHorizontalPadding: "$$dimensions.scale * 20",
    contentVerticalPadding: "$$dimensions.scale * 60",
    headerBg: "$$colors.primary",
    footerBg: "$$colors.primary",
    sideBarBg: "$$colors.background",
    sideBarColor: "$$colors.text.bgLight",
    sideBarVerticalPadding: "$$dimensions.scale * 60",
    sideBarSeparatorColor: "rgba(0, 0, 0, 0.1)"
  },
  components: {
    button: {
      defaultRounded: true
    },
    card: {
      paddingHorizontal: "$$dimensions.scale * 25",
      paddingVertical: "$$dimensions.scale * 25",
      cornerRadius: 8,
      defaultElevation: 3
    },
    table: {
      table: {
        borderColor: "$$colors.border",
        borderRadius: "$$dimensions.borderRadius"
      },
      tableRow: {},
      tableCell: {
        borderHorizontalColor: "$$colors.border",
        paddingHorizontal: "$$dimensions.scale * 20",
        paddingVertical: "$$dimensions.scale * 20"
      }
    },
    textInput: {
      defaultRounded: true
    },
    typography: {
      color: {
        primary: "$$colors.primary",
        secondary: "$$colors.secondary",
        success: "$$colors.success",
        info: "$$colors.info",
        danger: "$$colors.danger",
        warning: "$$colors.warning"
      }
    }
  }
} as Theme;
