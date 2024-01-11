<template>
  <div class="sidebar">
    <div
      class="sidebar__logo d-flex justify-content-start align-items-center border-bottom"
    >
      <NuxtLink to="/" class="text-light text-decoration-none h5 m-0">
        Dashboard
      </NuxtLink>
    </div>

    <div class="sidebar__menu">
      <NuxtLink
        v-for="(link, index) in links"
        :key="index"
        :to="link.to"
        class="sidebar__menu__link"
      >
        <i
          :class="link.icon"
          style="font-size: 1.2rem; color: rgb(205, 203, 203)"
        ></i>
        {{ link.title }}
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
const links = [
  {
    title: 'Home',
    to: '/',
    icon: 'bi bi-house-door-fill',
  },
  {
    title: 'Schools ',
    to: '/schools',
    icon: 'bi bi-box-fill',
  },
  {
    title: 'Posts',
    to: '/posts',
    icon: 'bi bi-envelope-open-fill',
  },
  {
    title: 'Users',
    to: '/users',
    icon: 'bi bi-people-fill',
  },
  {
    title: 'Todos',
    to: '/todos',
    icon: 'bi bi-book-fill',
  },
];
</script>

<style lang="scss">
.sidebar {
  color: white;
  text-decoration: none;
  display: grid;
  grid-template-rows: 60px auto;

  &__logo {
    padding-left: 12px;
  }

  &__menu {
    display: flex;
    flex-direction: column;
    padding-top: 12px;
    overflow-y: auto;
    &__link {
      display: flex;
      gap: 12px;
      color: rgb(205, 203, 203);
      text-decoration: none;
      padding: 12px;
      transition: all 0.3s;
      &:hover {
        color: white;
        i {
          transition: all 0.3s;
          color: white;
          &::before {
            color: white;
          }
        }
      }

      &.router-link-exact-active {
        color: white;
        i {
          color: white;
          &::before {
            color: white;
          }
        }
      }
    }
  }
}
</style>
