<script lang="ts">
export default {
  layout: "default",
};
</script>

<script setup lang="ts">
import { ref } from "vue";
const searchText = ref("");
const myData = ref([]) as any;

async function searchForStuff() {
  const data = await fetch(`/api/hello?search=${searchText.value}`);
  const json = await data.json();
  myData.value = json;
}
</script>

<template>
  <div>
    <form class="form" @submit.prevent="searchForStuff">
      <input type="text" v-model="searchText" />
      <button>Search for TV Shows</button>
    </form>
    <div class="showList">
      <div v-for="show in myData" :key="show.show?.id">
        <img :src="show.show?.image?.medium" alt="" srcset="" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.showList {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;

  & div {
    padding: 5px;
  }
}
</style>
