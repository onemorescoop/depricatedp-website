<template>
  <div class="wrapper">
    <button @click="toHome" class="logo-btn">
      <img src="../../images/horizontal-logo.png" alt="logo" height="80"/>
    </button>
    <nav>
      <router-link to="/wholesale">Wholesale</router-link>
      <router-link to="/food-trucks">Food Trucks</router-link>
      <router-link to="/about">About</router-link>
    </nav>
</div>
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
  width: 50%RouterView;
}

a, a:visited, a:active {
  text-decoration: none;
  color: inherit;
}

a:hover {
  color: rgb(52, 185, 185);
  cursor: pointer;
  text-decoration:none; 
}

.logo-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.wrapper {
  text-align: center;
}
</style>