<script setup lang="ts">
import MainLayouts from "~/layouts/main.layouts.vue";

useSeoMeta({
  title: "A Propos - Carmen Security",
  ogTitle: "A Propos - Carmen Security",
  description: `Fondée en 2023 par Mme Carmen genis Maguelonne, Carmen Security est une
        entreprise spécialisée dans les solutions de sécurité pour les particuliers et les
        professionnels. Installée en cote d'voire, notre équipe intervient dans toute la
        région pour installer, maintenir et monitorer vos systèmes de sécurité et pour
        surveiller leurs locaux, biens et personnes. Notre mission est de vous apporter
        tranquillité et sérénité en protégeant vos locaux, vos biens et vos proches grâce
        à une surveillance humaine et des dispositifs de sécurité adaptés à vos
        besoins.`,
  ogDescription: `Fondée en 2023 par Mme Carmen genis Maguelonne, Carmen Security est une
        entreprise spécialisée dans les solutions de sécurité pour les particuliers et les
        professionnels. Installée en cote d'voire, notre équipe intervient dans toute la
        région pour installer, maintenir et monitorer vos systèmes de sécurité et pour
        surveiller leurs locaux, biens et personnes. Notre mission est de vous apporter
        tranquillité et sérénité en protégeant vos locaux, vos biens et vos proches grâce
        à une surveillance humaine et des dispositifs de sécurité adaptés à vos
        besoins.`,
  ogImage: "/logo/logo_carmen_security.png",
  twitterCard: "summary_large_image",
});
</script>
<template>
  <MainLayouts>
    <template v-slot:content>
      <div class="mb-14 flex flex-col">
        <ViewsAbouts />

        <!--  -->
        <ViewsTeams />
      </div>
    </template>
  </MainLayouts>
</template>
