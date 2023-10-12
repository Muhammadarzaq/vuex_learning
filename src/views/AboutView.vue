<template>
  <div class="row">
    <div class="col-12">
      <div class="card" style="width: 100%">
        <div class="card-header text-start row">

          <div
              v-for="(item, index) in todoListComputed"
              :key="`todo_${index}`"
              class="col-12 my-1">
            <input v-model="item.isCompleted" :id="`checkboxId${index}`" type="checkbox"/>
            <label :for="`checkboxId${index}`">{{item.judul}}</label>

            <button class="btn btn-secondary ml-2" style="margin-left: 15px" @click="actionDeleteTodo(item.judul)">Delete</button>
            <button class="btn btn-secondary ml-2" style="margin-left: 15px" @click="actionArchiveTodo(item.judul)">archive</button>
          </div>

          <pre>
            {{todoList}}
          </pre>
        </div>
        <div class="card-body">
          <div class="form-group">
            <input v-model="todoList.formData.judul" id="inputField" class="form-control" placeholder="Enter text" type="text"/>
          </div>
        </div>
        <div class="card-footer">
          <button class="btn btn-primary" @click="actionAddTodo">Tambah</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {mapActions, mapMutations, mapState} from "vuex";

export default {
  name: "AboutView",
  computed: {
    ...mapState({
      todoList: state => state.stateTodoList.data,
    }),
    todoListComputed() {
      return this.todoList.items.filter(item => !item.isArchive);
    }
  },
  methods: {
    ...mapActions("stateTodoList", ["ADD_TODO"]),
    ...mapMutations("stateTodoList", ["changeTodo"]),
    ...mapActions(["getDataSiswa"]),
    findTodoIndex(judul) {
      return this.todoList.items.findIndex(item => item.judul.toLowerCase() === judul.toLowerCase());
    },
    actionDeleteTodo(judul) {
      const indexTodo = this.findTodoIndex(judul);
      if (indexTodo > -1) {
        this.todoList.items.splice(indexTodo, 1);
        this.changeTodo({
          items: [...this.todoList.items]
        });
      }
    },
    actionArchiveTodo(judul) {
      const updatedItems = this.todoList.items.map(item => {
        if (item.judul.toLowerCase() === judul.toLowerCase()) {
          return {
            ...item,
            isArchive: true
          };
        }
        return item;
      });
      this.changeTodo({ items: updatedItems });
    },
    actionAddTodo() {
      // cek judul harus diisi
      if (!this.todoList.formData.judul) {
        alert("Judul Masih Kosong");
        return false;
      }

      // proses menambahkan ke array sementara
      this.ADD_TODO();

      // proses menghilangkan nilai dijudul
      this.changeTodo({
        formData: {
          ...this.todoList.formData,
          judul: "",
        }
      })
    }
  }
};
</script>
<style>
/* Ganti warna latar belakang dan gaya CardCmp sesuai kebutuhan Anda */
.card {
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 10px;
}

.card-header {
  display: flex;
  align-items: center;
}

.card-header input[type="checkbox"] {
  margin-right: 10px;
}
</style>
