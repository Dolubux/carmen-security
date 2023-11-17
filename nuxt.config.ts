// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   devtools: { enabled: true },
   css: ['~/assets/styles/main.css'],
   app: {
      head: {
         link: [
          { rel: 'icon', type:'image/png', href: 'favicon.png' },
            {
               rel: 'stylesheet',
               href: 'https://fonts.googleapis.com/css2?family=Figtree:wght@100;200;300;400;500;600;700;800;900&display=swap',
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
