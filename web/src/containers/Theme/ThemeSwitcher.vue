<template>
  <div>
    <label>
      <label>
        <input
          type="checkbox"
          :checked="isThemeDark"
          @change="setIsThemeDark(!isThemeDark)"
        />
        Is Dark
      </label>
      <!-- <Checkbox :selected="isThemeDark" label="Is Dark" @change="_setIsThemeDark(!isThemeDark)" /> -->
    </label>
    <div class="theme-box-list-container">
      <div
        v-for="(theme, key, index) in themes"
        :key="key"
        class="theme-box-list-item"
      >
        <Spacer v-if="index > 0" width="5px" />
        <div
          @click="setTheme(key.replace(/\.dark$/, ''))"
          class="theme-box-container"
          :class="{ selected: currentTheme === key.replace(/\.dark$/, '') }"
        >
          <div class="theme-box" :style="getStyle(theme, key)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import themes from "@/themes";
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["currentTheme", "isThemeDark"]),
    themes() {
      return this.getThemes();
    }
  },
  methods: {
    ...mapActions(["setTheme", "setIsThemeDark"]),
    getThemes() {
      return Object.keys(themes).reduce((newThemes, themeKey) => {
        if (
          (!this.isThemeDark && !/\.dark$/.test(themeKey)) ||
          (this.isThemeDark && /\.dark$/.test(themeKey))
        ) {
          newThemes[themeKey] = themes[themeKey];
        }
        return newThemes;
      }, {});
    },
    getStyle(theme) {
      const style = {
        borderTopColor: theme.colors.primary,
        borderRightColor: theme.colors.secondary
      };
      return style;
    }
  }
};
</script>

<style scoped>
.theme-box-list-container {
  display: flex;
  flex-direction: row;
}
.theme-box-container {
  border: 1px solid rgba(0, 0, 0, 0.5);
}
.theme-box-container.selected {
  border: 1px solid rgba(255, 255, 255, 0.5);
}
.theme-box-list-item {
  display: flex;
  flex-direction: row;
}

.theme-box {
  display: inline-block;
  /* FIXME: temp fix for weird bottom space */
  margin-bottom: -6px;
  border-top: 30px solid rgba(0, 0, 0, 0.5);
  border-right: 30px solid rgba(255, 255, 255, 0.5);
}
</style>
