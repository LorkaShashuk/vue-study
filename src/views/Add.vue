<template>
  <div>
    <NewTodo v-on:create="onTodoCreate" />
  </div>
</template>

<script>
import NewTodo from "../components/NewTodo";
export default {
  components: {
    NewTodo,
  },
  methods: {
    onTodoCreate() {},
  },
};
</script>

<style lang="scss" scoped></style>
