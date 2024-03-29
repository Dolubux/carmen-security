<script setup>
import { reactive } from "vue";
import { PhoneIcon, EnvelopeIcon, MapPinIcon, XMarkIcon } from "@heroicons/vue/24/solid";
const Links = reactive([
  {
    name: "Accueil",
    route: "/",
  },
  {
    name: "A Propos",
    route: "a-propos",
  },
  {
    name: "Contatez-nous",
    route: "conatact s",
  },
]);
</script>
<template>
  <div class="text-gray-50 font-mains py-8 relative h-full">
    <ViewsBannersCustomBanners />

    <!-- Content -->
    <div class="flex flex-col gap-8 md:gap-14 lg:gap-4 w-11/12 m-auto mb-8">
      <div class="flex flex-col items-center gap-2">
        <!-- Logo -->
        <div class="">
          <NuxtImg
            src="/logo/logo_carmen_security.png"
            class="h-16 md:h-10 lg:h-14"
            alt=""
          />
        </div>

        <div
          class="text-base md:text-base opacity-90 font-extralight md:w-7/12 lg:w-5/12 m-auto text-center"
        >
          Chez Carmen Security, nous mettons votre sécurité au premier plan. Votre
          tranquillité est notre priorité absolue.
        </div>
      </div>

      <!-- Links -->
      <div class="flex justify-center gap-2 lg:gap-8">
        <div v-for="link in Links">
          <NuxtLink
            :to="link.route"
            class="text-base md:text-lg lg:text-base font-extralight"
          >
            {{ link.name }}
          </NuxtLink>
        </div>
      </div>

      <div
        class="flex flex-col items-center justify-center font-semibold text-base md:text-base gap-2 lg:gap-2"
      >
        <!-- Phones -->
        <div class="flex gap-2 items-center justify-center w-full">
          <!-- <PhoneIcon class="h-4 lg:h-6" /> -->
          <div class="flex flex-wrap gap-1 w-11/12 text-center justify-center">
            <a href="tel:+2250706743831" class=""> +(225) 07 06 74 38 31 </a> |
            <a href="tel:+2250798165217" class=""> 07 98 16 52 17 </a> |
            <a href="tel:+2250759775988" class=""> 07 59 77 59 88 </a>
          </div>
        </div>

        <!-- Location -->
        <div class="flex items-center justify-center gap-2 w-full">
          <!-- <MapPinIcon class="h-4 lg:h-6" /> -->
          <div class="w-11/12 text-center">
            Côte d'Ivoire Bonoua (département de Grand Bassam)
          </div>
        </div>

        <!-- Mail -->
        <div class="flex gap-1 items-center justify-center">
          <!-- <EnvelopeIcon class="h-4 lg:h-6" /> -->
          <a href="mailto:infos@carmen-security.com">infos@carmen-security.com</a>
        </div>
      </div>
    </div>

    <!-- Divided -->
    <div
      class="z-50 w-11/12 m-auto mt-4 h-[1px] bg-gradient-to-r from-gray-50/5 from-10% via-gray-50 via-50% to-gray-50/20 to-10%"
    ></div>

    <div class="w-11/12 m-auto pt-4">
      <div
        class="text-base md:text-[10px] lg:text-base font-semibold justify-center w-full text-center"
      >
        Copyright © 2024
        <span class="text-orange-500 font-extrabold text-center"
          >Carmen Security (SARL)</span
        >, Tous droits reservés. Développé par <a href="https://dolubux.com">Dolubux</a>.
      </div>
    </div>
  </div>
</template>
