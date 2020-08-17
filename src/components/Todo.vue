<template>
  <!-- editMode -->
  <div
    class="todo"
    v-bind:class="{ editMode: isEditMode, 'completed-tasks': todo.completed }"
  >
    <input type="checkbox" v-model="todo.completed" />
    <label>{{ todo.title }}</label>
    <input
      type="text"
      value="Go Shopping"
      v-model="todo.title"
      v-on:blur="onEdit"
    />
    <button class="edit" v-on:click="onEdit">Edit</button>
    <button class="delete" v-on:click="onDelete">Delete</button>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isEditMode: false,
    };
  },
  methods: {
    onDelete() {
      this.$store.commit("deleteTodo", this.todo.id);
    },
    onEdit() {
      this.isEditMode = !this.isEditMode;
    },
  },
};
</script>

<style lang="scss" scoped></style>
