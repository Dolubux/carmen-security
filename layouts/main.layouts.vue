<script setup lang="ts">
import Header from "@/components/views/headers/header.vue";
import Footer from "@/components/views/footers/footer.vue";

useHead({
  link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
});
</script>
<template>
  <main class="flex flex-col text-gray-800">
    <!-- Header -->
    <Header />

    <!-- Content -->
    <section>
      <slot name="content" />
    </section>

    <!-- Footer -->
    <Footer />
  </main>
</template>
