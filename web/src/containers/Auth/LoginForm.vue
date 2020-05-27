<template>
  <div>
    <Typography category="h1">Login</Typography>
    <TextInput
      :value="values.input"
      @input="ev => onChange('input')(ev)"
      @focus="onFocus('input')"
      @blur="onBlur('input')"
      label="Username"
      :error="errors.input"
      v-focus
      full
    />
    <TextInput
      :value="values.password"
      @input="ev => onChange('password')(ev)"
      @focus="onFocus('password')"
      @blur="onBlur('password')"
      secureTextEntry
      label="Password"
      :error="errors.password"
      full
    />
    <label
      ><input
        type="checkbox"
        :checked="values.rememberMe"
        @change="ev => onChange('rememberMe')(ev)"
        label="Remember Me"
      />
      Remember Me</label
    >
    <Button full @click="handleSubmit" :disabled="formState.$pending"
      >Login</Button
    >
    <pre style="text-align: left;">{{ values }}</pre>
    <hr />
    <pre style="text-align: left;">{{ formState }}</pre>
  </div>
</template>

<script>
import Form from "../../lib/Form";
import { mapActions } from "vuex";

export default {
  name: "LoginForm",
  props: {
    onLoggedIn: Function
  },
  data() {
    const form = new Form({
      initialValues: {
        input: "",
        password: ""
      },
      onSubmit: this.onSubmit
    });
    console.log("form", form);

    return {
      ...form
    };
  },
  methods: {
    ...mapActions(["login"]),
    async onSubmit(values) {
      const user = await this.login(values);
      this.$emit("onLoggedIn", user);
    }
  }
};
</script>
