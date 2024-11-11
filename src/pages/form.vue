<script setup lang="ts">
import { ref } from "vue";
import { UiInput } from "@/components/ui";

const personalData = ref({
  name: "",
  age: null,
});
</script>

<template>
  <div class="form">
    <h3 class="form__title">Персональные данные</h3>
    <ui-input v-model="personalData.name" label="Имя" />
    <ui-input v-model="personalData.age" label="Возраст" />
  </div>
</template>

<style lang="scss" scoped>
.form {
  &__title {
    @include p2-medium;
    margin-bottom: 20px;
  }
}
</style>
