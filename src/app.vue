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

main {
  padding: 0 2rem 0 2rem;
}

footer {
  padding: 0 2rem 0 2rem;
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
