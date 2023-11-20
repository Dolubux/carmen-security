<script setup lang="ts">
defineProps(["icon", "title", "description"]);
</script>
<template>
  <div
    class="flex flex-col hover:bg-orange-50 cursor-pointer duration-75 font-mains shadow-sm border-[1px] border-orange-500/5 items-center py-4 px-3 rounded-lg"
  >
    <div>
      <NuxtImg placeholder :src="`/icons/${icon}.png`" class="h-12" alt="" />
    </div>

    <div class="flex flex-col items-center mt-2">
      <span class="text-sm md:text-xl font-bold text-orange-500">{{ title }}</span>
      <span class="text-[11px] leading-4 md:text-base text-center h-20 lg:h-28">{{
        description
      }}</span>
    </div>
  </div>
</template>
