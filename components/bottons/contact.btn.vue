<script setup>
import { ArrowSmallRightIcon } from "@heroicons/vue/24/solid";
</script>
<template>
  <div class="font-semibold flex">
    <NuxtLink
      to="/contact"
      class="border-[1px] px-4 py-3 rounded-full text-sm lg:text-lg flex gap-2 items-center"
    >
      <span>Contactez-nous</span>
      <ArrowSmallRightIcon class="h-4" />
    </NuxtLink>
  </div>
</template>
