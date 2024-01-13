import { TOKEN } from '@/src/utils/constant';

export default defineNuxtRouteMiddleware(() => {
  if (typeof localStorage !== 'undefined') {
    const token = localStorage.getItem(TOKEN);
    console.log("current window", window.location.href)
    if (!token && !window.location.href.endsWith('/login') ) {
      return navigateTo('/login');
    }
  }
});
