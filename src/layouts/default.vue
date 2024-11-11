<script lang="ts" setup>
import AppHeader from "@/components/app/app-header.vue";
import AppFooter from "@/components/app/app-footer.vue";

defineOptions({
  name: "DefaultLayout",
});
</script>

<template>
  <div class="layout-default">
    <app-header class="layout-default__header" />
    <div class="layout-default__content">
      <slot />
    </div>
    <app-footer class="layout-default__footer" />
  </div>
</template>

<style lang="scss" scoped>
.layout-default {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  &__content {
    flex-grow: 1;
  }
}
</style>
