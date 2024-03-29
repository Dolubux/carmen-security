<script setup>
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/vue/24/solid";
</script>
<template>
  <div
    class="w-full relative flex flex-col md:h-[60vh] lg:h-[90vh] h-[65vh] items-center py-5 font-mains"
  >
    <ViewsBannersCustomBanners />

    <div class="flex flex-col gap-4 lg:w-8/12 w-11/12 m-auto z-30">
      <h1
        class="font-extralight text-4xl md:text-6xl lg:text-7xl leading-[47px] text-center font-mains text-white flex flex-col"
      >
        Sérénité,
        <span
          class="text-orange-500 font-mains text-4xl md:text-7xl m-auto font-black underline-offset-2 capitalize"
        >
          votre domicile, famille ou entreprise</span
        >
        en toute Quiétude.
        <!-- Content -->
      </h1>

      <div
        class="text-base md:text-lg lg:text-xl font-mains text-center font-medium w-11/12 md:w-9/12 lg:w-8/12 m-auto text-white"
      >
        La tranquillité d'esprit grâce à une surveillance humaine et technique sans
        faille. Nous garantissons une protection optimale.
      </div>

      <div class="flex m-auto justify-center gap-2">
        <NuxtLink
          to="/a-propos"
          class="bg-orange-500 text-center py-2 px-5 rounded-full text-base md:text-xl lg:text-lg font-bold text-white font-mains"
        >
          En savoir +
        </NuxtLink>
        <NuxtLink
          to="/contact"
          class="flex items-center gap-1 border-[1px] border-orange-500 text-center text-base md:text-xl lg:text-lg py-2 px-5 rounded-full font-bold font-mains text-orange-500"
        >
          <PhoneIcon class="h-4 md:h-7 lg:h-5" />
          Nous contactez
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
