<template>
  <div
    class="flex flex-col w-11/12 md:w-8/12 m-auto text-center justify-center mt-14 lg:mt-20 font-mains items-center"
  >
    <span class="text-2xl md:text-3xl lg:text-4xl font-extralight"
      >Notre équipe d'experts</span
    >

    <span class="text-base md:text-base lg:text-base flex lg:w-8/12 w-11/12">
      Nous sommes prêts à vous aider dans votre démarche de protection de votre personne,
      entreprise ou autre.</span
    >
  </div>

  <swiper
    :navigation="true"
    :modules="modules"
    class="w-11/12 auto my-16"
    :slides-per-view="6"
    :space-between="50"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: true,
    }"
    :breakpoints="{
      320: { slidesPerView: 1, spaceBetween: 10 },
      480: { slidesPerView: 2, spaceBetween: 10 },
      768: { slidesPerView: 4, spaceBetween: 10 },
      1024: { slidesPerView: 5, spaceBetween: 10 },
    }"
  >
    <swiper-slide v-for="team in Teams">
      <div
        class="flex flex-col gap-4 font-mains border-[1px] border-gray-100 md:h-[410px] h-full p-2 rounded-lg"
      >
        <div class="h-[350px] md:h-[250px]">
          <NuxtImg
            placeholder
            :src="team.image"
            class="h-full w-full object-cover rounded-lg"
            :alt="team.name"
          />
        </div>

        <div class="flex flex-col gap-2">
          <span class="text-[17px] font-extrabold leading-5 mt-2">{{ team.name }}</span>
          <div class="flex flex-col gap-1">
            <span class="leading-5 text-base font-medium">{{ team.role }}</span>
            <a
              :title="team.email"
              :href="'mailto:' + team.email"
              class="leading-5 text-base text-blue-400 truncate max-w-min"
              >{{ team.email }}</a
            >
            <a
              :title="team.tel"
              :href="'tel:' + team.tel"
              class="leading-5 text-base text-blue-400 flex flex-wrap"
              >{{ team.tel }}</a
            >
          </div>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const Teams = reactive([
      {
        image: "/images/teams/cs_7.jpeg",
        name: "Mr Fofana",
        role: "Directeur Général",
        email: "falikoufofana51@gmail.com",
        tel: "+2250787765676",
      },
      {
        image: "/images/teams/cs_2.jpeg",
        name: "Mr Malan Calixte",
        role: "Directeur commercial",
        email: "carmenjacky@gmail.com",
        tel: "+2250779787170",
      },
      {
        image: "/images/teams/cs_1.jpeg",
        name: "Mr Kissi Wognin Francus",
        role: "Directeur commercial adjoint",
        email: "kissiwognin@gmail.com",
        tel: "0759775988 / 0798165217 / 0787525893",
      },
      {
        image: "/images/teams/cs_3.jpeg",
        name: "Mr N Guessan jean Michel",
        role: "Directeur commercial adjoint",
        email: "carmenjacky@gmail.com",
        tel: "+2250758480485",
      },
      {
        image: "/images/teams/cs_5.jpeg",
        name: "KADJO Niamke Jackie",
        role: "Secrétaire, expert comptable",
        email: "carmenjacky@gmail.com",
        tel: "+2250707989269",
      },
      {
        image: "/images/teams/cs_6.jpeg",
        name: "Kissi Joséphine",
        role: "Secrétaire, expert comptable adjoint",
        email: "carmenjacky@gmail.com",
        tel: "+2250706743831",
      },
      {
        image: "/images/teams/cs_4.jpeg",
        name: "Mr Peyronner Patrice",
        role: "Assistant Clientèle",
        email: "carmenjacky@gmail.com",
        tel: "+2250706743831",
      },
      {
        image: "/images/teams/cs_16.jpeg",
        name: "Mr Abdourahame Diallo",
        role: "Responsable juridique et Marketing",
        email: "abdourahamanediallo58@gmail.com",
        tel: "",
      },
      {
        image: "/images/teams/cs_10.jpeg",
        name: "Mr Diakité Daouda",
        role: "Chargés des opérations",
        email: "carmenjacky@gmail.com",
        tel: "+2250707189842",
      },
      {
        image: "/images/teams/cs_8.jpeg",
        name: "N Guessan Narcisse",
        role: "Professeur d'anglais, Formateur",
        email: "carmenjacky@gmail.com",
        tel: "+2250798699877",
      },
    ]);

    return {
      Teams,
      modules: [Navigation, Autoplay],
    };
  },
};
</script>
