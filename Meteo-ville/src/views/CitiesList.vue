<script setup>
import City from "@/components/City.vue";

const city = {
  name: "Ma ville",
  weather : "Peu nuageux",
  temperature : 20.55,
  updatedAt : new Date()
}
</script>

<template>
  <div>
  <h1>Météo - Liste des villes</h1>

  <City
    :name="city.name"
    :weather="city.weather"
    :temperature="city.temperature"
    :updatedAt="city.updatedAt"/>
  </div>
</template>
