<script setup lang="ts">
import MainLayouts from "~/layouts/main.layouts.vue";
</script>
<template>
  <MainLayouts>
    <template v-slot:content>
      <div class="mb-14">
        <ViewsAbouts />
      </div>
    </template>
  </MainLayouts>
</template>
