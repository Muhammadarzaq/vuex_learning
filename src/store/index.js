import Vuex from "vuex";
import TodoList from "./todoList";
import TodoListKerja from "./todoList/kerja";

import Pengguna from "./pengguna";
export default new Vuex.Store({
  modules: {
    stateTodoList: TodoList,
    stateTodoListKerja: TodoListKerja,
    statePengguna: Pengguna,
  },
  state() {
    return {
      todos: [
        {
          id: "first-element",
          name: "Item To Do Pertama Saya",
          completed: false,
          location: "home",
        },
      ],
    };
  },
  getters: {
    todos(state) {
      return state.todos;
    },
  },
  mutations: {
    // Mutasi untuk menambahkan item to-do baru
    tambahTodo(state, newTodo) {
      state.todos.push(newTodo);
    },
    // Mutasi untuk menandai item to-do sebagai selesai
    selesaikanTodo(state, todoId) {
      const todo = state.todos.find((t) => t.id === todoId);
      if (todo) {
        todo.completed = true;
      }
    },
    // Mutasi untuk menghapus item to-do
    hapusTodo(state, todoId) {
      state.todos = state.todos.filter((t) => t.id !== todoId);
    },
    loadStore() {
      if (localStorage.getItem("store")) {
        try {
          // const storedState = JSON.parse(localStorage.getItem("store"));
          // this.$store.replaceState({ ...this.$store.state, ...storedState });
        } catch (e) {
          console.log("Could not initialize store", e);
        }
      }
    },
  },
});
