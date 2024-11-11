import { type RouteLocationRaw } from "vue-router";

export type ButtonProps = {
  disabled?: boolean;
  prefixIcon?: string;
  postfixIcon?: string;
  to?: RouteLocationRaw;
};

export type ButtonEmits = {
  (e: "click", value: Event): void;
};

export const ButtonPropsDefaults = {
  disabled: false,
  prefixIcon: "",
  postfixIcon: "",
  to: "",
} as const;