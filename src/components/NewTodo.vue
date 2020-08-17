<template>
  <form @submit.prevent="onSubmit">
    <label for="new-task">Add Item</label>
    <input id="new-task" type="text" v-model.trim="text" />
    <button type="submit" id="addBtn">Add</button>
  </form>
</template>

<script>
import { Todo } from "../Todo";

export default {
  data() {
    return {
      text: "",
    };
  },
  methods: {
    onSubmit() {
      if (this.text.length) {
        const newTodo = new Todo(this.text);
        this.text = "";
        this.$store.commit("addTodo", newTodo);
        this.$router.push({ path: "/" });
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
