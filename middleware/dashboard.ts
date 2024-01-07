import { TOKEN } from '@/src/utils/constant';

export default defineNuxtRouteMiddleware(() => {
  if (typeof localStorage !== 'undefined') {
    const token = localStorage.getItem(TOKEN);
    if (!token) {
      return navigateTo('/login');
    }
  }
});
