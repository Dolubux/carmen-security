// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   devtools: { enabled: true },
   css: ['~/assets/styles/main.css'],

   app: {
      head: {
         link: [
            {
               rel: 'icon',
               type: 'image/png',
               sizes: '32x32',
               href: '/favicon.png',
            },
            {
               rel: 'stylesheet',
               href: 'https://use.typekit.net/vjy4axf.css',
            },
         ],
      },
   },

   postcss: {
      plugins: {
         tailwindcss: {},
         autoprefixer: {},
      },
   },

   modules: ['@nuxt/image'],
});
