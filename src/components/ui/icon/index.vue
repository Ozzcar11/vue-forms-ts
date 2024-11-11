<script lang="ts" setup>
import { computed } from "vue";
import * as mdiIcons from "@mdi/js";
import { camelCase } from "lodash-es";
import { type IconProps } from "./types";

const props = withDefaults(defineProps<IconProps>(), {
  icon: "",
});

const isMdi = computed(() => props.icon.includes("mdi-"));
const projectIcon = computed(() => {
  if (!isMdi.value) return;

  const iconName = camelCase(props.icon);

  return mdiIcons[iconName as keyof typeof mdiIcons];
});
</script>

<template>
  <div class="ui-icon">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <g>
        <path :d="projectIcon" />
      </g>
    </svg>
  </div>
</template>

<style lang="scss">
.ui-icon {
  display: inline-block;
  width: 32px;
  height: 32px;
}
</style>
