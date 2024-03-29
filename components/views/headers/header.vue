<script setup>
import LinkHeaders from "@/components/views/headers/link.headers.vue";
import { PhoneIcon, EnvelopeIcon, Bars3Icon, XMarkIcon } from "@heroicons/vue/24/solid";
import { ref } from "vue";

const CloseMenu = ref(true);
</script>
<template>
  <section
    class="h-12 lg:h-16 w-full bg-white border-b-[1px] z-50 sticky top-0"
    :class="!CloseMenu ? 'fixed top-0 w-full' : ''"
  >
    <div class="flex justify-between items-center h-full w-11/12 m-auto">
      <!-- Logo -->

      <NuxtLink to="/" class="lg:h-10 h-7 flex gap-6">
        <NuxtImg
          src="/logo/logo_carmen_security.png"
          class="h-full w-full bg-gray-800 object-contain"
          alt=""
        />
      </NuxtLink>

      <!-- Link Menu -->
      <LinkHeaders class="hidden lg:flex" />

      <!-- Number Contact Compagny -->
      <div class="items-center gap-8">
        <div class="flex text-base items-center gap-2">
          <NuxtImg src="/icons/icon_disponibilite_full.png" class="h-6" alt="" />
          <div class="flex flex-col">
            <span class="text-[10px] lg:text-base font-extralight"
              >Appelez (Service Clients)</span
            >
            <div
              class="flex text-[10px] lg:text-base font-bold gap-1 relative bottom-[6px]"
            >
              <span class="flex"> +(225) 07 067 438 31</span>
              /
              <span class=""> 07 981 652 17</span>
            </div>
          </div>
        </div>
      </div>

      <Bars3Icon
        class="h-6 lg:hidden"
        v-if="CloseMenu"
        @click="CloseMenu = false"
      ></Bars3Icon>
      <XMarkIcon v-else class="h-6 lg:hidden" @click="CloseMenu = true"></XMarkIcon>
    </div>
  </section>

  <!-- Menu Mobile -->
  <Transition name="slide-fade">
    <div class="bg-white fixed top-12 w-full z-40 p-8" v-show="!CloseMenu">
      <LinkHeaders />
    </div>
  </Transition>
</template>

<style>
/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-200px);
  opacity: 0;
}
</style>
