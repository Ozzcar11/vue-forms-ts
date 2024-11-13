<script setup lang="ts">
import { computed, useSlots } from "vue";
import { useRouter } from "vue-router";
import {
  type ButtonEmits,
  type ButtonProps,
  ButtonPropsDefaults,
} from "./types";
import { useBEMNamespace } from "@/composables/useBEMNamespace";

import { UiIcon } from "@/components/ui/icon";

const props = withDefaults(defineProps<ButtonProps>(), ButtonPropsDefaults);

const emit = defineEmits<ButtonEmits>();

const ns = useBEMNamespace("ui-button");
const slots = useSlots();
const router = useRouter();

const buttonClasses = computed(() => [
  ns.block(),
  ns.modifier(props.variant),
  ns.is("disabled", props.disabled),
]);

const hasSlot = computed(() => {
  return !!slots.default;
});

function buttonClickHandler(event: Event) {
  emit("click", event);

  if (props.to !== "") void router.push(props.to);
}
</script>

<template>
  <button
    type="button"
    :class="buttonClasses"
    :disabled="disabled"
    @click="buttonClickHandler"
  >
    <ui-icon
      v-if="prefixIcon !== ''"
      :icon="prefixIcon"
      :class="{ 'ui-button__prefix-icon': !hasSlot }"
    />
    <slot />
    <ui-icon
      v-if="postfixIcon !== ''"
      :icon="postfixIcon"
      :class="{ 'ui-button__postfix-icon': !hasSlot }"
    />
  </button>
</template>

<style lang="scss">
.ui-button {
  width: auto;
  max-width: 100%;
  border-radius: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  gap: 4px;
  cursor: pointer;

  @include text-base;

  &--primary {
    @include p2-regular;
    background-color: $colors-primary;
    color: #fff;
    padding: 10px 20px;
    border-radius: 32px;
  }

  &--secondary {
    @include p2-regular;
    background-color: #fff;
    border: 2px solid $colors-primary;
    color: $colors-primary;
    padding: 10px 20px;

    &:hover {
      background-color: $colors-purple-xs;
    }

    &:active {
      background-color: $colors-purple-l;
    }

    &:focus {
      border: 2px solid $colors-gray;
    }
  }

  &--flat {
    @include p2-regular;
    color: $colors-primary;

    &:focus {
      box-shadow: 0 0 0 2px solid $colors-gray;
      border-radius: 4px;
    }

    &:hover {
      position: relative;
      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 1px;
        background-color: $colors-primary;
      }
    }
  }

  &__postfix-icon {
    width: 24px;
    height: 24px;
  }

  &__prefix-icon {
    width: 24px;
    height: 24px;
  }

  &:disabled,
  &[disabled] {
    background-color: $colors-primary-disabled;
  }

  &.is-disabled {
    pointer-events: none;
  }
}
</style>
