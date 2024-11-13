<script lang="ts" setup>
import { useFormStore } from "@/store/form";
import { RouterLink } from "vue-router";

const formStore = useFormStore();
</script>

<template>
  <div v-if="formStore.personalData.name" class="preview">
    <h1 class="preview__title">Персональные данные</h1>
    <div class="preview__personal">
      {{ `${formStore.personalData.name}, ${formStore.personalData.age} лет` }}
    </div>
    <h1 class="preview__title">Дети</h1>
    <ul class="preview-childrens">
      <li
        v-for="child in formStore.personalData.childrens"
        :key="child.id"
        class="preview-childrens__item"
      >
        {{ `${child.name}, ${child.age} лет` }}
      </li>
    </ul>
  </div>
  <div v-else class="empty">
    Тут пусто <br />
    <router-link to="/" class="empty__link">Заполнить форму</router-link>
  </div>
</template>

<style lang="scss" scoped>
.preview {
  &__title {
    @include p2-medium;
    margin-bottom: 20px;
  }

  &__personal {
    @include p1-bold;
    margin-bottom: 60px;
  }

  &-childrens {
    @include p1-bold;

    display: inline-flex;
    flex-direction: column;

    &__item {
      padding: 10px 20px;
      background-color: $colors-gray-l;
      margin-bottom: 10px;
    }
  }
}

.empty {
  @include p2-regular;

  text-align: center;
  color: $colors-gray-sm;

  &__link {
    @include p1-bold;
    color: $colors-primary;

    &:hover {
      position: relative;
      &::after {
        content: "";
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: $colors-primary;
      }
    }
  }
}
</style>
