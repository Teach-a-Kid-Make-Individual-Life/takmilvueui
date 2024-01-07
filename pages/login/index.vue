<template>
  <div
    class="position-fixed w-100 h-100 d-flex justify-content-center align-items-center"
  >
    <div class="mw-100 m-auto p-4 border overflow-hidden" style="width: 500px">
      <h1 class="text-center h3 mt-3">Welcome to our app</h1>
      <p class="text-center mb-5">Login to continue</p>
      <form autocomplete="off" @submit.prevent="submit">
        <div class="mb-4">
          <label class="form-label">Username</label>
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
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
const username = ref('kminchelle');
const password = ref('0lelplR');
import { authLogin } from '@/src/api/auth';
import { TOKEN, USER } from '@/src/utils/constant';
const router = useRouter();
const submit = async () => {
  try {
    const response = await authLogin({
      password: password.value,
      username: username.value,
    });
    if (response?.id) {
      localStorage.setItem(TOKEN, response?.token || '');
      localStorage.setItem(USER, JSON.stringify(response));

      router.push('/');
    }
  } catch (error) {}
};
</script>

<style></style>
