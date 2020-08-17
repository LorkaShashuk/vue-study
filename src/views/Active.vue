<template>
  <div>
    <h3>Todo</h3>
    <ul>
      <template v-for="(todoItem, index) in data">
        <li v-if="!todoItem.completed" :key="index">
          <TodoComponent v-bind:todo="todoItem" v-on:delete="onDelete" />
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
import TodoComponent from "../components/Todo";

import { Todo } from "../Todo";

export default {
  components: {
    TodoComponent,
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
