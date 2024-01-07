import { defineStore } from 'pinia';
import type { AuthType } from '@/src/api/auth';

export const useAuthStore = defineStore('auth-store', () => {
  const user = ref<AuthType>({});
  return {
    user,
  };
});
