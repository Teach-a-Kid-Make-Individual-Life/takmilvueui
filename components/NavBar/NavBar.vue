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
      <img :src="user.image" alt="" height="25" />
      <button type="button" class="btn btn-outline-primary btn-sm">
        Hi, {{ user.firstName }}
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
import type { AuthType } from '@/src/api/auth';
import { TOKEN, USER } from '@/src/utils/constant';

const emits = defineEmits(['clickToggler']);
const user = computed<AuthType>(() => {
  if (typeof localStorage === 'undefined') {
    return {};
  }
  const data = localStorage.getItem(USER);
  if (data) {
    return JSON.parse(data);
  } else {
    return {};
  }
});

const logout = () => {
  localStorage.removeItem(USER);
  localStorage.removeItem(TOKEN);
  window.location.href = '/login';
};
</script>

<style lang="scss"></style>
