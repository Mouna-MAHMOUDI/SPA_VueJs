

<script setup>
import CitiesList from './views/CitiesList.vue'

function onListClick() {
  alert("User clicked")
}
</script>

<template>
  <CitiesList />
  <button @click="onListClick"> liste des villes </button>

</template>

