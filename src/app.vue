<script setup>
import {  RouterView } from "vue-router";
import TopNavBar from "@/components/top-nav-bar.vue";

</script>

<template>
  <header>
    <top-nav-bar />
  </header>

   <RouterView />
</template>

<style scoped>

</style>
