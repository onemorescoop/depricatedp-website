<script></script>

<template>
  <main>
    <div class="rectangle">
      <img src="../../images/logo-scoop.png" alt="logo" height="150px" />
    </div>

    <div class="rectangle">
      <h3>BELTON</h3>
      <p>803 E North Ave</p>
      <p>Belton, MO 64012</p>
      <p>Sun - Thur 1 - 9:30pm</p>
      <p>Fri - Sat 1 - 10pm</p>
    </div>
    
    <div class="rectangle">
      <h3>NORTH KANSAS CITY</h3>
      <p>3522 NE Vivion Rd</p>
      <p>Kansas City, MO 64119</p>
      <p>Sun - Thur 1 - 9:30pm</p>
      <p>Fri - Sat 1 - 10pm</p>
    </div>
  </main>
</template>

<style scoped>
main {
  display: grid;
  grid-template-columns: repeat(12, 8vw);
  margin: 0.5em;
}

.rectangle {
  grid-column: span 2;
}
</style>