<template>
  <div id="app">
    <Task1 />
  </div>
</template>

<script>
import Task1 from "./components/Task1.vue";

export default {
  name: "App",
  components: {
    Task1,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: lavender;
  width: 100vw;
  height: 1200px;
}
</style>
