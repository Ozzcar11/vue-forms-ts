<script setup lang="ts">
import { computed, ref } from "vue";
import { useBEMNamespace } from "@/composables/useBEMNamespace";
import { type InputProps, InputPropsDefaults } from "./types";
import { UiIcon } from "@/components/ui/icon";

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
]);

const showButtons = computed(() => !!modelValue.value && isFocused.value);

function focusInput() {
  input.value?.focus();
}

function showPassword() {
  typeValue.value = typeValue.value === "password" ? "text" : "password";
}
</script>

<template>
  <div :class="inputClasses">
    <div v-if="label !== ''" class="ui-input__label">
      {{ label }}
    </div>
    <div tabindex="-1" class="ui-input__wrapper" @click="focusInput">
      <input
        ref="input"
        v-model="modelValue"
        class="ui-input__input"
        @focus="isFocused = true"
        @blur="isFocused = false"
        :disabled="disabled"
        :type="typeValue"
        :placeholder="placeholder"
        :autocomplete="typeValue === 'password' ? 'current-password' : 'off'"
      />
      <transition name="slide-fade">
        <div v-if="showButtons" class="ui-input__btn">
          <ui-icon
            v-if="type === 'password'"
            :icon="
              typeValue === 'password'
                ? 'mdi-eye-outline'
                : 'mdi-eye-off-outline'
            "
            class="pointer"
            @click="showPassword"
            @mousedown.prevent
          />
        </div>
      </transition>
    </div>
    <!-- <div
      v-if="hint !== '' || haveErrors"
      class="ui-input__hint"
      :class="{ 'ui-input__hint--error': haveErrors }"
    >
      {{ haveErrors ? errorMessages?.[0] : hint }}
    </div> -->
  </div>
</template>

<style lang="scss">
.ui-input {
  width: 100%;

  &__wrapper {
    position: relative;
    display: flex;
    width: 100%;
    color: $colors-black;
    line-height: 24px;
    background-color: $colors-white;
    border-radius: 4px;
    outline: none;
    overflow: hidden;
    padding: 22.5px 28px;

    &:focus-within {
      border: 2px solid #000;
    }

    .ui-input--password & {
      padding-right: 36px;
    }

    .ui-input--error & {
      border: 1.5px solid #ff0000;
    }
  }

  &__input {
    &::placeholder {
      color: $colors-gray;
    }
  }

  &__label {
    color: $colors-gray;
    margin-bottom: 8px;

    @include text-sm;
  }

  &__hint {
    color: gray;
    font-size: 0.875rem;
    margin-top: 8px;

    @include text-sm;

    &--error {
      color: #a00;
    }
  }

  &__prefix-icon {
    margin-right: 10px;
    width: 22px;
    height: 22px;

    svg {
      fill: currentColor;
    }
  }

  &__btn {
    color: green;
    position: absolute;
    right: 10px;
    display: inline-flex;

    &-close {
      margin-left: 6px;
      cursor: pointer;
    }
  }

  input {
    outline: none;
    width: 100%;
    border: none;

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
    }

    &::-ms-reveal {
      display: none;
    }
  }
}
</style>
