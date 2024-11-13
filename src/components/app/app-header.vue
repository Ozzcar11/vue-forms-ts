<script setup lang="ts"></script>

<template>
  <header class="header">
    <div class="header__container">
      <router-link to="/" class="header__logo">
        <img src="/icons/logo.svg" alt="Alef Logo" />
      </router-link>
      <div class="header__menu">
        <router-link to="/" class="header__link">Форма</router-link>
        <router-link to="/preview" class="header__link">Превью</router-link>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: relative;
  border-bottom: 1px solid $colors-gray-s;

  &__container {
    display: flex;
    align-items: center;
    padding: 7px 92px;
  }

  &__logo {
    position: absolute;
    display: flex;
    align-items: center;
    height: 70px;
  }

  &__link {
    @include p2-regular;

    color: $colors-gray;
    position: relative;
    display: flex;
    align-items: center;
    height: 70px;
  }

  &__menu {
    display: flex;
    justify-content: center;
    gap: 24px;
    width: 100%;
  }
}
</style>
