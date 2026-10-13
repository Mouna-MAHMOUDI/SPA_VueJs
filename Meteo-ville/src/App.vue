<script>
export default {
  name: 'App'
}
</script>

<template>

  <div>
    <h1>Application météo 🌤️</h1>

    <nav>
      <router-link to="/villes">Liste des villes</router-link>
    </nav>

    <router-view />

  </div>


</template>

