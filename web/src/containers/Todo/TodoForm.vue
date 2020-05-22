<template>
  <div class="container">
    <TextInput
      label="New Todo"
      placeholder="placing holders"
      float
      full
      class="text-input"
      :value="text"
      :error="errors.text"
      @enter="e => _addTodo(e)"
      @input="e => onChangeText(e.target.value)"
      @blur="onInputBlur"
    />
    <Spacer width="5px" />
    <Button @click="e => _addTodo(e)">Add Todo</Button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  components: {},
  computed: {
    ...mapGetters(["todos"])
  },
  methods: {
    ...mapActions(["addTodo"]),
    validate() {
      const errors = {};
      if (!this.text) {
        errors.text = "This is required";
      }
      return errors;
    },
    onChangeText(value) {
      this.text = value;
      this.errors = this.validate();
    },
    onInputBlur() {
      if (!this.text) {
        this.errors = {};
      }
    },
    _addTodo() {
      this.errors = this.validate();
      if (Object.keys(this.errors).length) return;
      this.addTodo({
        todo: {
          text: this.text
        }
      });
      this.text = "";
    }
  },
  data: function() {
    return {
      text: "",
      errors: {}
    };
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.text-input {
  flex: 1;
}
</style>
