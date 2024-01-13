<template>
  <Card class="card text-center center" style="width: 25em">
    <template #header>
      <img src="/logo-1.png" width="100"/>
    </template>
    <template #title>Login to continue</template>
    <template #content>
      <form autocomplete="off" @submit.prevent="submit">
        <InputGroup class="mb-5">
          <InputGroupAddon>
            <i class="pi pi-user"></i>
          </InputGroupAddon>
          <InputText id="username" placeholder="Username"  v-model="username"/>
        </InputGroup>
        <InputGroup class="mb-5">
          <InputGroupAddon>
            <i class="pi pi-lock"></i>
          </InputGroupAddon>
          <Password id="password" v-model="password" />
        </InputGroup>
        <p v-if="error" class="text-danger" style="font-size: 14px">
          {{ error }}
        </p>
        <Button type="submit" label="Submit" />
      </form>
    </template>
  </Card>
</template>

<script lang="ts" setup>
import { authLogin } from '@/src/api/auth';
import { TOKEN, USER } from '@/src/utils/constant';
import { useAuthStore } from '@/stores/auth';

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
definePageMeta({
  layout: 'nobars',
  middleware: 'dashboard',
});
</script>

<style>
  .center {
    border: 1px solid;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10px;
  }
</style>
