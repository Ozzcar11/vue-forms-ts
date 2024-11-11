<script lang="ts" setup>
import { useFormStore } from "@/store/form";

const formStore = useFormStore();
</script>

<template>
  <div>{{ formStore.personalData }}</div>
</template>

<style lang="scss" scoped></style>
