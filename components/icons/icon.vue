<script setup>
defineProps(["name", "custom"]);
</script>
<template>
  <section>
    <NuxtImg :src="'/assets/' + name" :class="custom" alt="" />
  </section>
</template>
