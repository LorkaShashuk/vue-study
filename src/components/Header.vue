<template>
  <header>
    <md-toolbar class="md-primary" md-elevation="1">
      <router-link to="/">
        <md-button class="md-accent">Home</md-button></router-link
      >

      <router-link to="/completed">
        <md-button class="md-accent">Completed</md-button></router-link
      >
      <router-link to="/add">
        <md-button class="md-accent">New Todo</md-button></router-link
      >
    </md-toolbar>
  </header>
</template>

<script>
import Vue from "vue";
import { MdToolbar, MdButton } from "vue-material/dist/components";

Vue.use(MdButton);
Vue.use(MdToolbar);

export default {
  name: "RegularToolbar",
};
</script>

<style lang="scss" scoped></style>
