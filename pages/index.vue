<script setup>
import Banner from "@/components/views/banners/banner.vue";
import Abouts from "@/components/views/abouts/abouts.vue";
import MyServices from "@/components/views/services/services.vue";
import ContactUs from "@/components/views/contacts/conctactUs.vue";

import Process from "~/components/views/process/process.vue";
import MainLayouts from "~/layouts/main.layouts.vue";

useSeoMeta({
  title: "Accueil - Carmen Security",
  ogTitle: "Accueil - Carmen Security",
  description:
    "La tranquillité d'esprit grâce à une surveillance humaine et technique sans faille. Nous garantissons une protection optimale.",
  ogDescription:
    "La tranquillité d'esprit grâce à une surveillance humaine et technique sans faille. Nous garantissons une protection optimale.",
  ogImage: "/logo/logo_carmen_security.png",
  twitterCard: "summary_large_image",
});
</script>
<template>
  <MainLayouts>
    <template v-slot:content>
      <section class="flex flex-col gap-2 text-gray-800">
        <!-- Banner -->
        <Banner />

        <!--  -->
        <Process />

        <!-- Abouts -->
        <Abouts />

        <!-- My Services -->
        <MyServices />

        <ViewsServicesProcetedServices />

        <!-- Contact us -->
        <ContactUs />
      </section>
    </template>
  </MainLayouts>
</template>
