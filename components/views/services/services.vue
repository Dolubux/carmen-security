<script setup>
import CardServices from "./card.services.vue";
import { reactive } from "vue";

const SERVICES = reactive([
  {
    title: "Maisons",
    description: `La sécurité de votre maison et de vos biens est primordiale. Chez Carmen Security, nous mettons en place des dispositifs sur-mesure pour protéger votre domicile en votre absence et préserver votre tranquillité.`,
    color: "bg-orange-200/50",
    picture: "/images/sy-home.jpg",
  },
  {
    title: "Entreprise",
    description:
      "Protéger vos locaux, vos équipements et vos données est essentiel pour garantir la pérennité de votre entreprise. Des rondes sont effectuées par nos agents pour dissuader toute tentative. Bénéficiez d’une sécurité pour votre entreprise. ",
    color: "bg-orange-100/50",
    picture: "/images/sy-company.jpg",
  },
  {
    title: "Biens et personnes",
    description:
      "La sécurité de vos proches est garantie grâce à nos agents de protection rapprochée qui les accompagnent et les surveillent au quotidien. Nous effectuons également des rondes de surveillance autour de votre domicile.",
    color: "bg-orange-50/50",
    picture: "/images/sy-person.jpg",
  },
]);
</script>
<template>
  <div class="grid grid-cols-1 md:grid-cols-3 mt-14 lg:mt-20">
    <div v-for="service in SERVICES">
      <CardServices
        :title="service.title"
        :description="service.description"
        :color="service.color"
        :picture="service.picture"
      />
    </div>
  </div>
</template>
