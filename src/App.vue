<template>
  <div id="app">
    <header></header>
    <section id="app-sections">
      <section id="app-section-left"></section>
      <section id="app-section-center"></section>
      <section id="app-section-right"></section>
    </section>
    <footer></footer>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
#app {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
#app-sections {
  display: flex;
  flex: auto;
}
#app-section-center {
  flex: auto;
}
header, footer, section {
  background: white;
}
header, footer, #app-section-left, #app-section-right {
  flex-basis: 100px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}
header {
  z-index: 2;
}
#app-section-left {
  z-index: 1;
}
footer {
  z-index: 3;
}
</style>
