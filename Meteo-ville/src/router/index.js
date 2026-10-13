import { createRouter, createWebHistory } from 'vue-router'
import App from "@/App.vue";
import CitiesList from "@/views/CitiesList.vue";
import City from "@/components/City.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/villes',
      name : 'villes',
      component: CitiesList
    },
    {
      path: '/ville',
      name: 'ville',
      component: City,
      props: {
          name: 'Ma ville',
          weather : 'Peu nuageux',
          temperature : 20.55,
          updatedAt: new Date() }
    }
  ],
})

export default router
