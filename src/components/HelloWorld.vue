<template>
  <div class="HelloWorld">
    <div id="todo-list">
      <div class="list-item" v-for="n in todos" :key="n.id">
        <div class="list-item-holder" v-if="n.location == location" :data-status="n.completed">
          <input type="checkbox" :data-id="n.id" :id="n.id" @click="updateTodo" :checked="n.completed" /> <label :data-id="n.id" :for="n.id"></label>
          <div class="delete-item" @click="deleteItem" :data-id="n.id">Delete</div>
          <div class="archive-item" v-if="n.location !== 'archive'" @click="archiveItem" :data-id="n.id">Archive</div>
        </div>
      </div>
      <div id="new-todo-list-item">
        <input type="text" id="new-todo-list-item-input" @keyup="updateItemText" />
        <input type="submit" id="new-todo-list-item-submit" @click="newItem" value="Add To Do List Item" />
      </div>
    </div>

    <footer></footer>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
export default {
  name: "HelloWorld",
  data() {
    return {
      phoneNumber: "123-123-123",
    };
  },
  methods: {
    updateItemText: function (e) {
      this.newTodoItem = e.currentTarget.value;
      if (e.keyCode === 13) {
        this.newItem();
      }
      return false;
    },
    updateTodo: function (e) {
      // Get the new status of our todo list item
      let newStatus = e.currentTarget.parentElement.getAttribute("data-status") == "true" ? false : true;
      // Send this to our store, and fire the mutation on our
      // Vuex store called "updateTodo". Take the ID from the
      // todo list, and send it along with the current status
      this.$store.commit("updateTodo", {
        id: e.currentTarget.getAttribute("data-id"),
        completed: newStatus,
      });
    },
    deleteItem: function (e) {
      // This will fire our "deleteTodo" mutation, and delete
      // this todo item according to their ID
      this.$store.commit("deleteTodo", {
        id: e.currentTarget.getAttribute("data-id"),
      });
    },
    newItem: function () {
      // If this.newTodoItem has been typed into
      // We will create a new todo item using our
      // "addTodo" mutation
      if (this.newTodoItem !== "") {
        this.$store.commit("addTodo", {
          id: uuidv4(),
          name: this.newTodoItem,
          completed: false,
        });
      }
    },
    archiveItem: function (e) {
      // Finally, we can change or archive an item
      // using our "moveTodoItem" mutation
      this.$store.commit("moveTodoItem", {
        id: e.currentTarget.getAttribute("data-id"),
        location: "archive",
      });
    },
  },
};
</script>

<style scoped="">
#HelloWorld {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  padding: 2rem;
  margin: 2rem;
  border: 1px solid #ddd;
  border-radius: 10px;
}
h2 {
  margin: 0 0 1.5rem 0;
}
</style>
