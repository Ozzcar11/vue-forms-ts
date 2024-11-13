<script lang="ts" setup>
import { computed } from "vue";
import { UiInput, UiButton } from "@/components/ui";
import { useVuelidate } from "@vuelidate/core";
import { maxValue, maxLength, required, onlyCirilic } from "@/utils/validators";

const name = defineModel<string>("name");
const age = defineModel<number | null>("age");

const rules = computed(() => ({
  name: { required, maxValue: maxLength(50), onlyCirilic },
  age: { required, maxValue: maxValue(100) },
}));
const v = useVuelidate(rules, { name, age });

defineEmits(["remove"]);
</script>

<template>
  <div class="child">
    <ui-input
      v-model="name"
      label="Имя"
      :errorMessages="v.name.$errors.map((e) => e.$message)"
    />
    <ui-input
      v-model="age"
      label="Возраст"
      type="number"
      :errorMessages="v.age.$errors.map((e) => e.$message)"
    />
    <ui-button class="child__button" variant="flat" @click="$emit('remove')"
      >Удалить</ui-button
    >
  </div>
</template>

<style lang="scss" scoped>
.child {
  display: flex;
  align-items: center;
  gap: 18px;
  margin-bottom: 10px;

  &__button {
    max-height: 56px;
  }
}
</style>
