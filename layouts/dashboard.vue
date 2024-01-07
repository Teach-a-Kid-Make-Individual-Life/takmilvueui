<template>
  <ClientOnly>
    <div v-if="validating">
      <h1 class="h4 mt-5 text-center">Validating...</h1>
    </div>
    <div v-else class="position-fixed w-100 h-100 dashboard">
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
  </ClientOnly>
</template>

<script lang="ts" setup>
import type { AuthType } from '@/src/api/auth';
import { useAuthStore } from '@/src/stores/auth';
import { TOKEN, USER } from '@/src/utils/constant';
const authStore = useAuthStore();
const showSideBar = ref(false);
const validating = ref(true);
const router = useRouter();

onBeforeMount(() => {
  const token = localStorage.getItem(TOKEN);
  const user = localStorage.getItem(USER);

  if (!token || !user) {
    router.push('/login');
    validating.value = false;
    return;
  }
  authStore.user = JSON.parse(user) as AuthType;
  validating.value = false;
});
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
