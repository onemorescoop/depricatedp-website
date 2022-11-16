<template>
  <nav>
    <button @click="toHome" class="logo-btn">
      <img src="../../images/horizontal-logo.png" alt="logo" height="80"/>
    </button>
    
    <RouterLink to="/wholesale">Wholesale</RouterLink>
    <RouterLink to="/food-trucks">Food Trucks</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  methods: {
    toHome() {
      this.$router.push({ name: 'home' })
    }
  }
}
</script>

<style scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  padding: 10px 30px 10px 30px;
  z-index: 1;
}

.logo-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}
</style>