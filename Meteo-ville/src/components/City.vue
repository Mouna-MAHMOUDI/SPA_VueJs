<script setup>

 defineProps({
   name : String,
   weather : String,
   temperature : Number,
   updatedAt : Date
 })


</script>
<template>
  <div>
    <h2>Météo de {{name}}</h2>

    <p>🌤️ Temps : {{weather}}</p>

    <p>🌡️ Température : {{temperature}} °C</p>

    <p>📅 Dernière mise à jour : {{updatedAt.toLocaleString()}}</p>
  </div>
</template>
