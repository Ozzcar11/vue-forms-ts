<script setup lang="ts">
import { ref, computed } from "vue";
import { UiInput, UiButton } from "@/components/ui";
import { v4 as uuid } from "uuid";
import { useFormStore } from "@/store/form";
import { useVuelidate } from "@vuelidate/core";
import { maxValue, maxLength, required, onlyCirilic } from "@/utils/validators";
import { useToast } from "@/composables/useToast";
import type { PersonalDataType, ChildrenType } from "@/types/personal-data";
import formChild from "@/modules/form/form-child.vue";

const formStore = useFormStore();
const { showToast } = useToast();

const personalData = ref<PersonalDataType>({
  name: "",
  age: null,
  childrens: [],
});

const child: ChildrenType = {
  name: "",
  age: null,
};

const rules = computed(() => ({
  name: { required, maxValue: maxLength(50), onlyCirilic },
  age: { required, maxValue: maxValue(100) },
}));

const v = useVuelidate(rules, personalData);

function addChild() {
  personalData.value.childrens.push({ ...child, id: uuid() });
}

function removeChild(index: number) {
  personalData.value.childrens.splice(index, 1);
}

async function saveForm() {
  const isCorrect = await v.value.$validate();
  if (!isCorrect) return;

  formStore.updatePersonalData(personalData.value);
  showToast("Данные успешно сохранены");
}
</script>

<template>
  <div class="form">
    <div class="form__section">
      <h3 class="form__title">Персональные данные</h3>
      <ui-input
        v-model="personalData.name"
        class="form__input"
        label="Имя"
        :errorMessages="v.name.$errors.map((e) => e.$message)"
      />
      <ui-input
        v-model="personalData.age"
        type="number"
        class="form__input"
        label="Возраст"
        :errorMessages="v.age.$errors.map((e) => e.$message)"
      />
    </div>
    <div class="form__section">
      <div class="form__headline">
        <h3 class="form__title form__title--second">Дети (макс. 5)</h3>
        <ui-button
          v-if="personalData.childrens.length < 5"
          prefix-icon="mdi-plus"
          variant="secondary"
          @click="addChild"
        >
          Добавить ребёнка
        </ui-button>
      </div>
      <form-child
        v-for="(child, index) in personalData.childrens"
        :key="child.id"
        v-model:name="child.name"
        v-model:age="child.age"
        @remove="removeChild(index)"
      />
      <ui-button
        class="form__button"
        variant="primary"
        @click="saveForm"
        :disabled="!!v.$errors.length"
      >
        Сохранить
      </ui-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.form {
  &__title {
    @include p2-medium;
    margin-bottom: 20px;

    &--second {
      margin-bottom: 0;
      height: 52px;
      display: flex;
      align-items: center;
    }
  }

  &__section {
    & + & {
      margin-top: 40px;
    }
  }

  &__headline {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 4px;
  }

  &__button {
    margin-top: 30px;
  }

  &__input {
    & + & {
      margin-top: 10px;
    }
  }
}
</style>
