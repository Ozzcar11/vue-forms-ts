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
  color: #fff;
  background-color: green;
  padding: 12px 24px;
  width: auto;
  max-width: 100%;
  border-radius: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  gap: 12px;
  cursor: pointer;

  @include text-base;

  &:hover {
    background-color: green;
  }

  &:active {
    background-color: green;
  }

  &__postfix-icon {
    width: 24px;
    height: 24px;
  }

  &__prefix-icon {
    width: 24px;
    height: 24px;
  }

  &:focus {
    border-color: none;
  }

  &:disabled,
  &[disabled] {
    color: #fff;
    background-color: gray;
  }

  &.is-disabled {
    pointer-events: none;
  }
}
</style>
