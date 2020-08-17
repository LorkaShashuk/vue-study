import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

import { Todo } from "./Todo";

Vue.use(Vuex);

const DATA_URL = "https://jsonplaceholder.typicode.com/todos";

export const store = new Vuex.Store({
  state: {
    todos: [
      new Todo("Some 1", 1),
      new Todo("Some 2", 2),
      new Todo("Some 3", 3),
    ],
  },
  mutations: {
    deleteTodo(state, deletedId) {
      console.log("w" + deletedId);
      state.todos = [...state.todos.filter(({ id }) => id !== deletedId)];
    },
    addTodo(state, todo) {
      state.todos = [...state.todos, todo];
    },
    fetchData(state, data) {
      state.todos = [...data];
    },
  },
  actions: {
    fetchData({ commit }) {
      axios.get(DATA_URL).then((res) => {
        commit("fetchData", res.data);
      });
    },
  },
});
