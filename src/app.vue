<script setup>
import {  RouterView } from "vue-router";

import FooterSection from "@/components/footer.vue"
import TopBar from "@/components/topbar.vue";

</script>

<template>
  <header>
    <TopBar />
  </header>

  <main>
   <RouterView />
  </main>

   <footer>
    <footer-section />
  </footer>
</template>

<style scoped>

/* main {
  background: #f1f1f1;
} */

footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
}

#app {
  font-family: 'Avenir Next', -apple-system, Segoe UI, sans-serif;
}
</style>
