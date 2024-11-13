import * as validators from "@vuelidate/validators";

export const required = validators.helpers.withMessage(`Поле обязательное`, validators.required)
export const maxValue = (value: number) => validators.helpers.withMessage(`Максимальное значение поля ${value}`, validators.maxValue(value));
export const maxLength = (value: number) => validators.helpers.withMessage(`Максимальное длина поля ${value}`, validators.maxLength(value));

export const onlyCirilic = validators.helpers.withMessage("Поле может содержать только кириллицу",
  (value) => {
    if (value === "") return true;

    return /^[А-Яа-яёЁ]+$/.test(value as string);
  },
);
