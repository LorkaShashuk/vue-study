<template>
  <div>
    <h3>Completed</h3>
    <ul>
      <template v-for="(todoItem, index) in data">
        <li v-if="todoItem.completed" :key="index">
          <Todo v-bind:todo="todoItem" v-on:delete="onDelete" />
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
import Todo from "../components/Todo";
export default {
  components: {
    Todo,
  },
  computed: {
    data() {
      return this.$store.state.todos;
    },
  },
  methods: {
    onDelete() {},
  },
};
</script>

<style lang="scss" scoped></style>
