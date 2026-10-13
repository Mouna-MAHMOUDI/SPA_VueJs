<script>
export default {
  name : 'City',
  props:{
          name: String,
          weather: String,
          temperature: Number,
          updatedAt: Date
        }
}

</script>
<template>
  <div class="city-card">
    <h2>Météo de {{name}}</h2>

    <p>🌤️ Temps : {{weather}}</p>

    <p>🌡️ Température : {{temperature}} °C</p>

    <p>📅 Dernière mise à jour : {{updatedAt.toLocaleString()}}</p>
  </div>
</template>
<style scoped>
.city-card {
  background-color: #f0f8ff;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  margin: 15px 0;
}

h2 {
  color: #2c3e50;
}

p {
  font-size: 16px;
}
</style>
