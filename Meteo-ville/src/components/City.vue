<script setup>
import { ref } from 'vue'

const name = ref('Ma ville')
const weather = ref('Peu nuageux')
const temperature = ref(20.55)
const updatedAt=ref(new Date())

</script>
<template>
  <div>
    <h2>Météo de {{name}}</h2>

    <p>🌤️ Temps : {{weather}}</p>

    <p>🌡️ Température : {{temperature}}</p>

    <p>📅 Dernière mise à jour : {{updatedAt.toLocaleString()}}</p>
  </div>
</template>
