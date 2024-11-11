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
    <main class="layout-default__content">
      <slot />
    </main>
    <app-footer class="layout-default__footer" />
  </div>
</template>

<style lang="scss" scoped>
.layout-default {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  &__content {
    width: 616px;
    margin: 30px auto 0px;
    flex-grow: 1;
  }
}
</style>
