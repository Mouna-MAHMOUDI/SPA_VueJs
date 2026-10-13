<script>
import { format, register } from 'timeago.js'
import fr from 'timeago.js/lib/lang/fr'

const localeFr = (number, index) => {
  return [
    ['à l’instant', 'dans un instant'],
    ['il y a %s secondes', 'dans %s secondes'],
    ['il y a 1 minute', 'dans 1 minute'],
    ['il y a %s minutes', 'dans %s minutes'],
    ['il y a 1 heure', 'dans 1 heure'],
    ['il y a %s heures', 'dans %s heures'],
    ['il y a 1 jour', 'dans 1 jour'],
    ['il y a %s jours', 'dans %s jours'],
    ['il y a 1 semaine', 'dans 1 semaine'],
    ['il y a %s semaines', 'dans %s semaines'],
    ['il y a 1 mois', 'dans 1 mois'],
    ['il y a %s mois', 'dans %s mois'],
    ['il y a 1 an', 'dans 1 an'],
    ['il y a %s ans', 'dans %s ans']
  ][index]
}

register('fr',localeFr)

export default {
  name : 'City',
  props:{
          name: String,
          weather: String,
          temperature: Number,
          updatedAt: Date
        },
  methods:{
    formatDate(date){
      return date ? format(date, 'fr') : ''
    }
  }
}

</script>
<template>
  <div class="city-card">
    <h2>Météo de {{name}}</h2>

    <p>🌤️ Temps : {{weather}}</p>

    <p>🌡️ Température : {{temperature}} °C</p>

    <p>📅 Dernière mise à jour : {{formatDate(updatedAt)}}</p>
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
