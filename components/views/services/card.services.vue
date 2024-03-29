<script setup>
defineProps(["title", "description", "picture", "color"]);
</script>
<template>
  <div class="" :class="color">
    <!-- Conetnt -->
    <div class="font-mains w-11/12 m-auto py-6 gap-4">
      <div class="flex flex-col gap-4 h-auto mb-4">
        <span class="text-xl md:text-2xl"> {{ title }} </span>
        <span class="text-base md:text-base lg:text-base lg:h-auto h-auto">
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
