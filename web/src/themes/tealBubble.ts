import { Theme } from "@vuetic/components/web";

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
    border: "rgba(0, 0, 0, 0.2)",
    text: {
      bgLight: "#000",
      bgDark: "#fff",
      bgContent: "@bgLight",
      bgInfo: "@bgLight",
      bgWarning: "@bgLight",
      bgPrimary: "$$colors.text.bgDark",
      bgSecondary: "@bgDark",
      bgDanger: "@bgDark",
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
    card: {
      paddingHorizontal: "25",
      paddingVertical: "25",
      cornerRadius: 8,
      defaultElevation: 3
    },
    button: {
      defaultRounded: true
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
