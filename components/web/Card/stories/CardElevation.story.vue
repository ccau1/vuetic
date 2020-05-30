<template>
  <ThemeProvider :theme="theme">
    <div class="container">
      <Card><CardContent>Default Card</CardContent></Card>
      <Card :elevation="0"><CardContent>Card Elevation 0</CardContent></Card>
      <Card :elevation="1"><CardContent>Card Elevation 1</CardContent></Card>
      <Card :elevation="2"><CardContent>Card Elevation 2</CardContent></Card>
      <Card :elevation="3"><CardContent>Card Elevation 3</CardContent></Card>
      <Card :elevation="4"><CardContent>Card Elevation 4</CardContent></Card>
      <Card :elevation="5"><CardContent>Card Elevation 5</CardContent></Card>
      <Card :elevation="6"><CardContent>Card Elevation 6</CardContent></Card>
      <Card :elevation="7"><CardContent>Card Elevation 7</CardContent></Card>
      <Card :elevation="8"><CardContent>Card Elevation 8</CardContent></Card>
      <Card :elevation="9"><CardContent>Card Elevation 9</CardContent></Card>
      <Card :elevation="10"><CardContent>Card Elevation 10</CardContent></Card>
      <Card :elevation="11"><CardContent>Card Elevation 11</CardContent></Card>
      <Card :elevation="12"><CardContent>Card Elevation 12</CardContent></Card>
      <Card :elevation="13"><CardContent>Card Elevation 13</CardContent></Card>
      <Card :elevation="14"><CardContent>Card Elevation 14</CardContent></Card>
      <Card :elevation="15"><CardContent>Card Elevation 15</CardContent></Card>
      <Card :elevation="16"><CardContent>Card Elevation 16</CardContent></Card>
      <Card :elevation="17"><CardContent>Card Elevation 17</CardContent></Card>
      <Card :elevation="18"><CardContent>Card Elevation 18</CardContent></Card>
      <Card :elevation="19"><CardContent>Card Elevation 19</CardContent></Card>
      <Card :elevation="20"><CardContent>Card Elevation 20</CardContent></Card>
      <Card :elevation="21"><CardContent>Card Elevation 21</CardContent></Card>
      <Card :elevation="22"><CardContent>Card Elevation 22</CardContent></Card>
      <Card :elevation="23"><CardContent>Card Elevation 23</CardContent></Card>
      <Card :elevation="24"><CardContent>Card Elevation 24</CardContent></Card>
    </div>
  </ThemeProvider>
</template>

<script>
import ThemeProvider from "../../ThemeProvider.vue";
import theme from "../../baseTheme.ts";
import Card from "../Card.vue";
import CardContent from "../CardContent.vue";

export default {
  name: "CardElevation",
  components: { Card, CardContent, ThemeProvider },
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
