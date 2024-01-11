import { defineStore } from 'pinia';
import type { UserType } from '@/src/api/auth';

export const useAuthStore = defineStore('auth-store', () => {
  const user = ref<UserType>({});
  return {
    user,
  };
});
