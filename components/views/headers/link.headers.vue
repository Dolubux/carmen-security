<script setup>
import { reactive } from "vue";

const LINKS = reactive([
  {
    name: "Accueil",
    route: "/",
    actived: false,
  },
  {
    name: "A Propos",
    route: "/a-propos",
    actived: false,
  },
  {
    name: "Contactez-nous",
    route: "/contact",
    actived: false,
  },
]);
</script>
<template>
  <section>
    <div
      class="flex flex-col lg:flex-row lg:gap-16 gap-4 text-xl lg:text-base font-semibold font-mains divide-y-[1px] lg:divide-y-0"
    >
      <div v-for="link in LINKS" class="pt-6 pb-4 lg:pt-0 lg:pb-0">
        <NuxtLink
          :to="link.route"
          :class="
            $route.path == link.route ? 'text-orange-500 font-black' : ' font-extralight'
          "
        >
          {{ link.name }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
