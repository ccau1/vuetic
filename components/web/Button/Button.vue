<template>
  <button
    @click="$emit('click', $event)"
    :class="[
      'status-' + (this.status || 'primary'),
      { rounded: this.rounded !== undefined }
    ]"
  >
    <slot />
    <!-- <style>
      :root {
        --status-primary-color: {{this.theme.colors.primary || '#42b882'}}
        --status-secondary-color: {{this.theme.colors.secondary || '#35495d'}}
        --status-info-color: {{this.theme.colors.info || '#17a2b8'}}
        --status-success-color: {{this.theme.colors.success || '#28a745'}}
        --status-warning-color: {{this.theme.colors.warning || '#ffc107'}}
        --status-danger-color: {{this.theme.colors.danger || '#dc3545'}}
      }
    </style> -->
  </button>
</template>

<script>
export default {
  name: "Button",
  props: ["click", "status", "rounded", "appearance"],
  inject: ['theme'],
  data() {
    console.log('theme', this.theme);
    return {};
  }
};
</script>

<style lang="scss" scoped>
button {
  position: relative;
  border: 1px solid #eee;
  padding: 15px 20px;
  &.rounded {
    border-radius: 8px;
  }
  &:focus {
    outline: none;
  }
  &:active::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.2);
  }
  &.status-primary {
    background-color: #42b882;
    color: #fff;
  }
  &.status-secondary {
    background-color: #35495d;
    color: #fff;
  }
  &.status-info {
    background-color: #17a2b8;
    color: #fff;
  }
  &.status-success {
    background-color: #28a745;
    color: #fff;
  }
  &.status-warning {
    background-color: #ffc107;
  }
  &.status-danger {
    background-color: #dc3545;
    color: #fff;
  }
}
</style>
