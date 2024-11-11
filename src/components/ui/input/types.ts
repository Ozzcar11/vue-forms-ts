export type InputProps = {
  label?: string;
  type?: "text" | "password";
  disabled?: boolean;
  placeholder?: string;
};

export const InputPropsDefaults = {
  label: "",
  type: "text",
  placeholder: "",
  disabled: false,
} as const;