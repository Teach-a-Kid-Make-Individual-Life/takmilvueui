<template>
  <div
    class="position-sticky top-0 navbbar d-flex justify-content-between justify-content-lg-end align-items-center p-2 gap-2 border-bottom"
  >
    <i
      class="bi bi-list d-lg-none"
      style="font-size: 1.5rem; color: gray"
      @click="emits('clickToggler')"
    ></i>

    <div class="d-flex justify-content-end align-items-center gap-2">
      <img :src="user.imageUrl" alt="" height="25" />
      <button type="button" class="btn btn-outline-primary btn-sm">
        Hi, {{ user.firstName }} {{ user.lastName }}
      </button>
      <button
        type="button"
        class="btn btn-outline-secondary btn-sm"
        @click="logout"
      >
        Log out
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useAuthStore } from '@/src/stores/auth';
import { TOKEN, USER } from '@/src/utils/constant';
import { storeToRefs } from 'pinia';

const authStore = useAuthStore();
const { user } = storeToRefs(authStore);
const emits = defineEmits(['clickToggler']);

const logout = () => {
  authStore.user = {};
  localStorage.removeItem(TOKEN);
  localStorage.removeItem(USER);
  window.location.href = '/login';
};
</script>

<style lang="scss"></style>
