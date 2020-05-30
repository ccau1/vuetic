<template>
  <ThemeProvider :theme="theme">
    <div>
      <Card>
        <CardHeader
          title="Life in serenity"
          subtitle="great things lies ahead"
        />
        <CardImage
          src="https://walkerfurniture.com/images/thumbs/0011024_leonard-queen-bedroom-set_1500.jpeg"
          style="height: 400px"
        />
        <CardContent>
          abc content
        </CardContent>
        <CardActions>
          <Button status="link">Action 1</Button>
          <Button status="link">Action 2</Button>
        </CardActions>
      </Card>
      <Spacer height="20px" />
      <Card>
        <CardImage
          src="https://walkerfurniture.com/images/thumbs/0011024_leonard-queen-bedroom-set_1500.jpeg"
          style="height: 400px"
        />
        <CardHeader
          title="Life in serenity"
          subtitle="great things lies ahead"
        />
        <CardContent>
          abc content
        </CardContent>
        <CardActions>
          <Button status="link">Action 1</Button>
          <Button status="link">Action 2</Button>
        </CardActions>
      </Card>
    </div>
  </ThemeProvider>
</template>

<script>
import ThemeProvider from "../../ThemeProvider.vue";
import theme from "../../baseTheme.ts";
import Card from "../Card.vue";
import CardHeader from "../CardHeader.vue";
import CardActions from "../CardActions.vue";
import CardImage from "../CardImage.vue";
import CardContent from "../CardContent.vue";
import Button from "../../Button/Button.vue";
import Spacer from "../../Spacer/Spacer.vue";

export default {
  name: "CardElevation",
  components: {
    Card,
    CardHeader,
    CardImage,
    CardContent,
    CardActions,
    Spacer,
    ThemeProvider,
    Button
  },
  data() {
    return {
      theme
    };
  }
};
</script>

<style scoped>
div.container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
}
div.container > .card {
  width: 20%;
  margin-bottom: 20px;
  margin-right: 1px;
}
</style>

<include-source />
