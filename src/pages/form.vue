<script setup lang="ts">
import { ref } from "vue";
import { UiInput, UiButton } from "@/components/ui";
import { v4 as uuid } from "uuid";
import { useFormStore } from "@/store/form";

const formStore = useFormStore();

const personalData = ref({
  name: "",
  age: null,
  childrens: [],
});

const child = {
  name: "",
  age: null,
};

function addChild() {
  personalData.value.childrens.push({ ...child, id: uuid() });
}

function removeChild(index: number) {
  personalData.value.childrens.splice(index, 1);
}
</script>

<template>
  <div class="form">
    <div class="form__section">
      <h3 class="form__title">Персональные данные</h3>
      <ui-input v-model="personalData.name" class="form__input" label="Имя" />
      <ui-input
        v-model="personalData.age"
        class="form__input"
        label="Возраст"
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
      <div
        v-for="(child, index) in personalData.childrens"
        :key="child.id"
        class="form__children"
      >
        <ui-input v-model="child.name" label="Имя" />
        <ui-input v-model="child.age" label="Возраст" />
        <ui-button variant="flat" @click="removeChild(index)">
          Удалить
        </ui-button>
      </div>
      <ui-button
        class="form__button"
        variant="primary"
        @click="formStore.updatePersonalData(personalData)"
        >Сохранить</ui-button
      >
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

  &__children {
    display: flex;
    gap: 18px;
    margin-bottom: 10px;
  }

  &__input {
    & + & {
      margin-top: 10px;
    }
  }
}
</style>
