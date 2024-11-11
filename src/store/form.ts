import { ref } from "vue";
import { defineStore } from "pinia";

export const useFormStore = defineStore('form', () => {
  const personalData = ref({
    name: "",
    age: null,
    childrens: [],
  });

  function updatePersonalData(data: any) {
    personalData.value = data;
  }

  return {
    personalData,
    updatePersonalData,
  };
});
