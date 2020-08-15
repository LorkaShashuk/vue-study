<template>
  <form @submit.prevent="onSubmit">
    <label for="new-task">Add Item</label>
    <input id="new-task" type="text" v-model="text" />
    <button type="submit" id="addBtn">Add</button>
  </form>
</template>


<script>
import { Todo } from "../Todo";

export default {
  data() {
    return {
      text: ""
    };
  },
  methods: {
    onSubmit() {
      const newTodo = new Todo(this.text);
      this.text = "";
      this.$emit("create", newTodo);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>