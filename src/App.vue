<template>
  <div id="app">
    <Task1 />
    <Task2 />
    <Task3 />
  </div>
</template>

<script>
import Task1 from "./components/Task1.vue";
import Task2 from "./components/Task2.vue";
import Task3 from "./components/Task3.vue";

export default {
  name: "App",
  components: {
    Task1,
    Task2,
    Task3
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  height: auto;
  background-color: lavender;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
</style>
