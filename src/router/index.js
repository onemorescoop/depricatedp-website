import { createRouter, createWebHistory } from "vue-router";

import about from "../views/about.vue";
import trucks from "../views/food-trucks.vue"
import home from "../views/home.vue";
import wholesale from "../views/wholesale.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: home,
    },
    {
      path: "/wholesale",
      name: "wholesale",
      component: wholesale
    },
    {
      path: "/food-trucks",
      name: "food trucks",
      component: trucks
    },
    {
      path: "/about",
      name: "about",
      component: about,
    },
  ],
});

export default router;
