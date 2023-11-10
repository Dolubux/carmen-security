<script setup>
import Banner from "@/components/views/banners/banner.vue";
import Abouts from "@/components/views/abouts/abouts.vue";
import MyServices from "@/components/views/services/services.vue";
import ContactUs from "@/components/views/contacts/conctactUs.vue";

import Process from "~/components/views/process/process.vue";
import MainLayouts from "~/layouts/main.layouts.vue";
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

        <!-- Contact us -->
        <ContactUs />
      </section>
    </template>
  </MainLayouts>
</template>
