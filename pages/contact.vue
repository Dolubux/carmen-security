<script setup>
import MainLayouts from "~/layouts/main.layouts.vue";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/vue/24/solid";

useSeoMeta({
  title: "Contact - Carmen Security",
  ogTitle: "Contact - Carmen Security",
  description: `Besoins de sécurité ? Nous sommes à votre écoute. Parlez à nos experts de la sécurité.`,
  ogDescription: `Besoins de sécurité ? Nous sommes à votre écoute. Parlez à nos experts de la sécurité.`,
  ogImage: "/logo/logo_carmen_security.png",
  twitterCard: "summary_large_image",
});
</script>
<template>
  <MainLayouts>
    <template v-slot:content>
      <section class="bg-white dark:bg-gray-900 font-mains">
        <div class="h-64 lg:h-96 relative">
          <div class="bg-gray-700 opacity-50 absolute top-0 w-full h-full"></div>
          <NuxtImg
            placeholder
            class="object-cover w-full h-full"
            src="images/sy-contact.jpg"
            alt=""
          />

          <div class="absolute inset-0 flex flex-col justify-center text-center">
            <p
              class="font-black text-3xl md:text-4xl lg:text-7xl text-gray-50 dark:text-orange-400"
            >
              Contactez-nous
            </p>

            <h1
              class="mt-2 text-xl font-semibold text-gray-800 lg:text-2xl dark:text-white"
            >
              Besoins de sécurité ? Nous sommes à votre écoute.
            </h1>
          </div>
        </div>

        <div class="z-50">
          <div class="container px-6 pb-24 mx-auto">
            <div class="grid grid-cols-1 gap-8 mt-10 lg:grid-cols-3 sm:grid-cols-2">
              <div class="p-4 rounded-lg bg-orange-50 md:p-6 dark:bg-gray-800">
                <span
                  class="inline-block p-3 text-orange-500 rounded-lg bg-orange-100/80 dark:bg-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </span>

                <h2
                  class="mt-4 text-lg md:text-xl font-bold text-gray-800 dark:text-white"
                >
                  Discutez avec nos experts
                </h2>
                <p class="mt-2 text-base text-gray-500 dark:text-gray-400">
                  Une équipe à l'écoute de vos besoins de sécurité
                </p>
                <div class="text-base">
                  <a
                    href="mailto:infos@carmen-security.com"
                    class="mt-2 text-orange-500 dark:text-orange-400"
                  >
                    infos@carmen-security.com
                  </a>
                  <a
                    href="mailto:falikoufofana51@gmail.com"
                    class="text-orange-500 dark:text-orange-400"
                  >
                    falikoufofana51@gmail.com
                  </a>
                </div>
              </div>

              <div class="p-4 rounded-lg bg-orange-50 md:p-6 dark:bg-gray-800">
                <span
                  class="inline-block p-3 text-orange-500 rounded-lg bg-orange-100/80 dark:bg-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </span>

                <h2
                  class="mt-4 text-lg md:text-xl font-bold text-gray-800 dark:text-white"
                >
                  Rendez nous visite
                </h2>
                <p class="mt-2 text-base text-gray-500 dark:text-gray-400">
                  Visitez notre siège social.
                </p>
                <p class="mt-2 text-base text-orange-500 dark:text-orange-400">
                  Côte d'Ivoire Bonoua (département de Grand Bassam)
                </p>
              </div>

              <div class="p-4 rounded-lg bg-orange-50 md:p-6 dark:bg-gray-800">
                <span
                  class="inline-block p-3 text-orange-500 rounded-lg bg-orange-100/80 dark:bg-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </span>

                <h2
                  class="mt-4 text-lg md:text-xl font-bold text-gray-800 dark:text-white"
                >
                  Appelez-nous
                </h2>
                <p class="mt-2 text-base text-gray-500 dark:text-gray-400">
                  Du lundi au vendredi de 8h à 17h.
                </p>
                <p class="mt-2 text-base text-orange-500 dark:text-orange-400">
                  <a href="tel:+2250706743831" class=""> +(225) 07 06 74 38 31 </a> |
                  <a href="tel:+2250798165217" class=""> 07 98 16 52 17 </a> |
                  <a href="tel:+2250759775988" class=""> 07 59 77 59 88 </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </template>
  </MainLayouts>
</template>
