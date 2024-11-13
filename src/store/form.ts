import { ref } from "vue";
import { defineStore } from "pinia";

import type { PersonalDataType } from "@/types/personal-data";

export const useFormStore = defineStore('form', () => {
  const personalData = ref<PersonalDataType>({
    name: "",
    age: null,
    childrens: [],
  });

  function updatePersonalData(data: PersonalDataType) {
    personalData.value = data;
  }

  return {
    personalData,
    updatePersonalData,
  };
});
