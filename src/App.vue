<script setup lang="ts">
import { capitalize, computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const layout = computed(
  () => capitalize(route.meta.layout ?? "default") + "Layout"
);
</script>

<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<style lang="scss"></style>
