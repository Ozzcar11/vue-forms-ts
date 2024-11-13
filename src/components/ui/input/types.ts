import { type MaybeRef } from "vue";

export type InputProps = {
  label?: string;
  type?: "text" | "password" | "number";
  disabled?: boolean;
  placeholder?: string;
  errorMessages?: MaybeRef<string>[];
};

export const InputPropsDefaults = {
  label: "",
  type: "text",
  placeholder: "",
  disabled: false,
} as const;
