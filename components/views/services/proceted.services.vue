<script setup>
import { reactive } from "vue";
import CardProcess from "@/components/views/process/card.process.vue";


const Images = reactive([
  '/images/services/news/cs_0.jpeg',
  '/images/services/news/cs_1.jpeg',
  '/images/services/news/cs_2.jpeg',
  '/images/services/news/cs_3.jpeg',
  '/images/services/news/cs_4.jpeg',
  '/images/services/news/cs_5.jpeg',
  '/images/services/news/cs_6.jpeg',
  '/images/services/news/cs_7.jpeg',
  '/images/services/news/cs_8.jpeg',
  '/images/services/news/cs_9.jpeg',
  // '/images/services/news/cs_10.jpeg',
  '/images/services/news/cs_11.jpeg',
  '/images/services/news/cs_12.jpeg',
  '/images/services/news/cs_13.jpeg',
  '/images/services/cs_0.jpg',
  '/images/services/cs_1.jpg',
  '/images/services/cs_2.jpg',
  '/images/services/cs_3.jpg',
  '/images/services/cs_4.jpg',
  '/images/services/cs_5.jpg',
  '/images/services/cs_6.jpg',
  '/images/services/cs_7.jpg',
  '/images/services/cs_8.jpg',
  '/images/services/cs_9.jpg',
  '/images/services/cs_10.jpg',
  '/images/services/cs_11.jpg',
  '/images/services/cs_12.jpg',
  '/images/services/cs_13.jpg',
  '/images/services/cs_14.jpg',

])
</script>
<template>
  <div
    class="flex flex-col w-8/12 m-auto text-center mt-14 lg:mt-20 font-mains items-center"
  >
    <span class="text-2xl md:text-3xl lg:text-4xl font-extralight"
      >Lieux et personnes que nous protégeons</span
    >
    <span class="text-base md:text-base lg:text-base flex">
      La sécurité et la tranquillité de nos clients sont notre priorité, quel que soit
      leur profil.</span
    >
  </div>

  <div class="grid grid-cols-2 md:grid-cols-4 gap-2 w-11/12 m-auto mt-8">
    <div v-for="im in Images" >
      <a :href="im" target="_blank">
        <NuxtImg
        placeholder
        class="h-[220px] lg:h-[350px] object-cover w-full rounded-lg"
        :src="im"
        alt=""
      />
      </a>
    </div>
   
  </div>
</template>
