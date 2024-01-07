// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['@/src/styles/main.css'],
  modules: ['@pinia/nuxt'],
  app: {
    head: {
      title: 'Zakir Magdum',
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
