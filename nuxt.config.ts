// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['@/src/styles/main.css', 'primevue/resources/themes/lara-light-green/theme.css'],
  modules: ['@pinia/nuxt', 'nuxt-primevue'],
  primevue: {
    cssLayerOrder: 'reset,primevue'
  },
  app: {
    head: {
      title: 'Takmil Studio',
      link: [
        {
          rel: 'stylesheet',
          href: '/css/bootstrap.min.css',
        },
        {
          rel: 'stylesheet',
          href: '/css/bootstrap-icons.min.css',
        },
      ],
      script: [
        {
          src: '/js/bootstrap.bundle.min.js',
          tagPosition: 'bodyClose',
        },
      ],
    },
  },
});
