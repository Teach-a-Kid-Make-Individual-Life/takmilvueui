<template>
  <div class="position-fixed w-100 h-100 dashboard">
    <div
      class="dashboard__left"
      :class="{ 'dashboard__left--open': showSideBar }"
    >
      <SideBar />
    </div>
    <div
      class="dashboard__right"
      :class="{ 'dashboard__right--open': showSideBar }"
    >
      <NavBar @clickToggler="showSideBar = !showSideBar" />
      <div class="dashboard__body">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const showSideBar = ref(false);
</script>

<style lang="scss">
.dashboard {
  &__left {
    width: 250px;
    height: 100vh;
    position: fixed;
    left: -100%;
    top: 0;
    transition: all 0.3s;
    background: #4e73df;

    @media screen and (min-width: 992px) {
      left: 0;
    }

    &--open {
      left: 0;
    }
  }

  &__right {
    height: 100%;
    padding-left: 0px;
    @media screen and (min-width: 992px) {
      padding-left: 250px;
    }
    display: grid;
    grid-template-rows: 60px auto;
    transition: all 0.3s;

    &--open {
      padding-left: 250px;
    }
  }
  &__body {
    overflow-y: auto;
  }
}
</style>
