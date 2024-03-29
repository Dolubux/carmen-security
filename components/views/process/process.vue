<script setup>
import { reactive } from "vue";
import CardProcess from "@/components/views/process/card.process.vue";
const PROCESS = reactive([
  {
    icon: "icon_security_full",
    title: "Sécurité",
    description:
      "Systèmes de sécurité complets avec alarmes, caméras, rondes d'agents, pour une protection 24h/24 et 7j/7.",
  },
  {
    icon: "icon_reactivity_full",
    title: "Réactivité",
    description:
      "Equipes d'intervention mobilisables immédiatement en cas d'urgence, diagnostic et solutions sur-mesure",
  },
  {
    icon: "icon_rigueur_full",
    title: "Rigueur",
    description:
      "Protocoles stricts, contrôles réguliers, formation continue de nos agents pour un service optimal.",
  },
  {
    icon: "icon_disponibilite_full",
    title: "Disponibilité",
    description:
      "Assistance téléphonique 24h/24, maintenance préventive régulière et interventions rapides en cas d'urgence.",
  },
]);
</script>
<template>
  <div
    class="flex flex-col w-8/12 m-auto text-center mt-14 lg:mt-20 font-mains items-center"
  >
    <span class="text-2xl md:text-3xl lg:text-4xl font-extralight"
      >Nos Valeurs, Chez Carmen Security</span
    >
    <span class="text-base md:text-base lg:text-base flex">
      Nous mettons votre sécurité au premier plan. Votre tranquillité est notre
      priorité.</span
    >
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 w-11/12 m-auto mt-4">
    <div v-for="process in PROCESS">
      <CardProcess
        :icon="process.icon"
        :title="process.title"
        :description="process.description"
      />
    </div>
  </div>
</template>
