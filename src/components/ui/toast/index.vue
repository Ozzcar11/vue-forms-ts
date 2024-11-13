<script lang="ts" setup>
import { UiIcon } from "../icon";
import { type ToastProps } from "./types";

const props = defineProps<ToastProps>();
</script>

<template>
  <Teleport to="body">
    <div class="ui-toast" :style="{ 'margin-bottom': `${props.index * 50}px` }">
      <ui-icon icon="mdi-check" class="ui-toast__icon" />
      {{ props.message }}
      <slot></slot>
    </div>
  </Teleport>
</template>

<style lang="scss" scoped>
.ui-toast {
  position: fixed;
  bottom: 76px;
  right: 0;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  color: $colors-white;
  background-color: $colors-success;
  border-radius: 4px;
  z-index: 100;
  animation: slide-in-out 0.4s ease-in-out;

  &__icon {
    margin-right: 10px;
  }
}
</style>
