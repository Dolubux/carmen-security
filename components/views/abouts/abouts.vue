<script setup></script>
<template>
  <div class="h-64 lg:h-96 relative" :class="$route.path == '/' ? 'mt-12' : ''">
    <div class="bg-gray-700 opacity-70 absolute top-0 w-full h-full"></div>
    <NuxtImg
      placeholder
      class="object-cover w-full h-full"
      :src="$route.path == '/' ? '/images/sy-abouts.jpg' : '/images/sy-about-2.jpg'"
      alt=""
    />

    <div class="absolute inset-0 flex flex-col justify-center text-center">
      <p
        class="font-black text-3xl md:text-4xl lg:text-7xl text-gray-50 dark:text-orange-400"
      >
        {{ $route.path == "/" ? "Tranquillité et Sérénité" : "A Propos" }}
      </p>

      <h1 class="mt-2 text-xl font-bold text-orange-500 lg:text-4xl dark:text-white">
        {{ $route.path == "/" ? "Notre priorité absolue." : "De Carmen Security" }}
      </h1>
    </div>
  </div>

  <div class="w-11/12 flex flex-col lg:flex-row gap-4 lg:gap-16 m-auto mt-14 lg:mt-20">
    <div class="flex flex-col font-mains md:w-9/12 gap-1">
      <div class="text-4xl lg:text-5xl font-bold">
        A Propos de <span class="text-orange-500 font-extrabold">Carmen Security</span>,
        l'allié de confiance de votre
        <span class="text-orange-500 font-extrabold">sécurité</span>.
      </div>
      <span class="text-sm md:text-lg flex"
        >Fondée en 2023 par Mme Carmen genis Maguelonne, Carmen Security est une
        entreprise spécialisée dans les solutions de sécurité pour les particuliers et les
        professionnels. Installée en cote d'voire, notre équipe intervient dans toute la
        région pour installer, maintenir et monitorer vos systèmes de sécurité et pour
        surveiller leurs locaux, biens et personnes. Notre mission est de vous apporter
        tranquillité et sérénité en protégeant vos locaux, vos biens et vos proches grâce
        à une surveillance humaine et des dispositifs de sécurité adaptés à vos
        besoins.</span
      >
    </div>

    <div class="h-[280px] w-full lg:w-auto flex justify-center">
      <NuxtImg
        placeholder
        class="h-full rounded-lg"
        src="/images/person/cs_owner.png"
        alt=""
      />
    </div>

    <div class=""></div>
  </div>
</template>
