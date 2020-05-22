<script>
export default {
  name: "Typography",
  props: {
    category: {
      default: "body1",
      validate: val =>
        [
          "h1", // display h1
          "h2", // display h2
          "h3", // display h3
          "h4", // display h4
          "subtitle1", // display like page title or list item title
          "subtitle2", // display like subtitle1 but bold
          "body1", // default display like p in html
          "body2", // default display body1 but bold
          "button1", // display in button and input
          "button2", // like button1 but bold
          "caption1", // display small text
          "caption2", // display small text but bold
          "label1", // smaller than caption display in input label
          "label2" // display like label1 but bold
        ].includes(val)
    },
    status: {
      default: "primary",
      validate: val =>
        ["primary", "success", "info", "danger", "hint"].includes(val)
    },
    background: {
      validate: val =>
        [
          "bgContent",
          "bgLight",
          "bgDark",
          "bgPrimary",
          "bgSecondary",
          "bgInfo",
          "bgDanger",
          "bgWarning",
          "bgSuccess"
        ].includes(val)
    }
  },
  inject: ["theme"],
  functional: true,
  render(h, context) {
    let tag = "p";

    switch (context.props.category) {
      case "h1":
      case "h2":
      case "h3":
      case "h4":
        tag = context.props.category;
        break;
      case "subtitle1":
        tag = "h5";
        break;
      case "subtitle2":
        tag = "h6";
        break;
      case "body1":
      case "body2":
        tag = "p";
        break;
      case "caption1":
      case "caption2":
        tag = "small";
        break;
      case "label1":
      case "label2":
        tag = "p";
        break;
    }

    // FIXME: horrific way to define styles. Should make use of
    // data/computed to handle this. Also seems to block parent
    // style attr?
    context.data.attrs.style = context.data.attrs.style || "";
    if (context.props.background) {
      const capitalizeText =
        context.props.background.charAt(0).toUpperCase() +
        context.props.background.slice(1);
      context.data.attrs.style += `
        color: ${context.injections?.theme?.colors?.text?.[
          `bg${capitalizeText}`
        ] || "inherit"};
      `;
    } else if (context.props.status) {
      context.data.attrs.style += `
        color: ${context.injections?.theme?.components?.typography?.status?.[
          context.props.status
        ] || "inherit"};
      `;
    }

    return h(tag, context.data, context.children);
  }
};
</script>

<style lang="scss" scoped></style>
