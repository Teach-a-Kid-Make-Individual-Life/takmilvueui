<template>
  <div
    class="position-fixed w-100 h-100 d-flex justify-content-center align-items-center"
  >
    <div class="mw-100 m-auto p-4 border overflow-hidden" style="width: 500px">
      <img src="/logo-1.png" class="mx-auto d-block mb-5" width="100"/>
      <p class="text-center mb-5">Login to continue</p>
      <form autocomplete="off" @submit.prevent="submit">
        <div class="mb-4">
          <label class="form-label">User Name</label>
          <input
            type="text"
            class="form-control"
            placeholder="Username"
            autocomplete="off"
            id="username"
            name="username"
            v-model="username"
            required
          />
        </div>
        <div class="mb-4">
          <label class="form-label">Password</label>
          <input
            type="password"
            class="form-control"
            autocomplete="off"
            id="password"
            name="password"
            v-model="password"
            required
          />
        </div>
        <p v-if="error" class="text-danger" style="font-size: 14px">
          {{ error }}
        </p>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { authLogin } from '@/src/api/auth';
import { TOKEN, USER } from '@/src/utils/constant';
import { useAuthStore } from '@/src/stores/auth';

const username = ref('admin');
const password = ref('changeme');
const authStore = useAuthStore();
const router = useRouter();
const error = ref('');

const submit = async () => {
  try {
    const response = await authLogin({
      password: password.value,
      username: username.value,
    });
    console.log("auth response", response);
    if (response?.accessToken) {
      // can not remove token and user from localstorage
      // because we need it to know whether user already login or not when refresh page
      // or when user access application next time, don't need to login anymore
      localStorage.setItem(TOKEN, response?.accessToken || '');
      localStorage.setItem(USER, JSON.stringify(response.user));
      authStore.user = response.user;
      router.push('/');
    }
  } catch (err: any) {
    error.value = err?.message;
  }
};

watch(
  () => password.value,
  () => (error.value = ''),
);
</script>

<style></style>
