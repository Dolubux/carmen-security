<script setup>
defineProps(["title", "description", "picture", "color"]);
</script>
<template>
  <div class="" :class="color">
    <!-- Conetnt -->
    <div class="font-mains w-11/12 m-auto py-6">
      <div class="flex flex-col gap-4">
        <span class="text-xl md:text-2xl"> {{ title }} </span>
        <span class="text-sm md:text-xs lg:text-base lg:h-36 h-28">
          {{ description }}
        </span>
      </div>

      <BottonsContactBtn />
    </div>

    <!-- Display Image -->
    <div class="w-full h-[280px]">
      <NuxtImg placeholder class="w-full h-full object-cover" :src="picture" alt="" />
    </div>
  </div>
</template>
