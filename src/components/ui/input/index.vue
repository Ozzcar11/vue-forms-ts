<script setup lang="ts">
import { computed, ref } from "vue";
import { useBEMNamespace } from "@/composables/useBEMNamespace";
import { type InputProps, InputPropsDefaults } from "./types";

const props = withDefaults(defineProps<InputProps>(), InputPropsDefaults);

const modelValue = defineModel<string | number | null>("modelValue", {
  default: "",
});

const ns = useBEMNamespace("ui-input");

const input = ref<HTMLInputElement>();
const typeValue = ref(props.type);
const isFocused = ref(false);

const inputClasses = computed(() => [
  ns.block(),
  ns.is("disabled", props.disabled),
  ns.is("error", !!props.errorMessages?.length),
]);

function focusInput() {
  input.value?.focus();
}

const labelHandler = computed(
  () => !isFocused.value && !modelValue.value && !props.placeholder
);
</script>

<template>
  <div :class="inputClasses">
    <div v-if="errorMessages?.length" class="ui-input__error">
      {{ errorMessages[0] }}
    </div>
    <div tabindex="-1" class="ui-input__wrapper" @click="focusInput">
      <div
        class="ui-input__label"
        :class="{ 'ui-input__label--active': labelHandler }"
      >
        {{ props.label }}
      </div>
      <input
        ref="input"
        v-model="modelValue"
        class="ui-input__input"
        @focus="isFocused = true"
        @blur="isFocused = false"
        :disabled="disabled"
        :type="typeValue"
        :placeholder="props.placeholder"
        :autocomplete="typeValue === 'password' ? 'current-password' : 'off'"
      />
    </div>
  </div>
</template>

<style lang="scss">
.ui-input {
  position: relative;
  width: 100%;

  &__wrapper {
    @include p2-regular;

    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 56px;
    color: $colors-black;
    background-color: $colors-white;
    border: 1px solid $colors-gray-l;
    border-radius: 4px;
    outline: none;
    overflow: hidden;
    padding: 8px 16px;
    cursor: text;
    transition: all 0.2s ease;

    &:focus-within {
      box-shadow: 0px 0px 12px #0000001a;
    }
    .ui-input--error & {
      border: 1.5px solid #ff0000;
    }
  }

  &__input {
    transition: all 0.2s ease;
  }

  &__label {
    @include p3-regular;
    color: $colors-gray;

    position: absolute;
    top: 17px;
    left: 16px;
    transform: translateY(-50%);
    pointer-events: none;
    transition: top 0.2s ease, font-size 0.2s ease;

    &--active {
      @include p2-regular;

      top: 50%;
    }
  }

  &__error {
    @include p2-regular;
    color: $colors-red;
  }

  input {
    outline: none;
    width: 100%;
    border: none;
    padding-top: 18px;

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
    }

    &::-ms-reveal {
      display: none;
    }
  }
}

.is-error {
  .ui-input__wrapper {
    background-color: $colors-red-xs;
  }

  .ui-input__input {
    background-color: $colors-red-xs;
  }
}
</style>
