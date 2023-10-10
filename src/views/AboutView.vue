<template>
  <div class="row">
    <div class="col-12">
      <div class="card" style="width: 100%">
        <div class="card-header text-start row">

          <div
              v-for="(item, index) in todoList.items"
              :key="`todo_${index}`"
              class="col-12 my-1">
            <input :id="`checkboxId${index}`" type="checkbox"/>
            <label :for="`checkboxId${index}`">{{item.judul}}</label>

            <button class="btn btn-secondary ml-2" style="margin-left: 15px">Delete</button>
            <button class="btn btn-secondary ml-2" style="margin-left: 15px">archive</button>
          </div>

          <!--<pre>
            {{todoList}}
          </pre>-->
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

import {mapActions, mapState} from "vuex";

export default {
  name: "AboutView",
  computed: {
    ...mapState({
      todoList: state => state.stateTodoList.data,
    })
  },
  methods: {
    ...mapActions("stateTodoList", ["ADD_TODO"]),
    actionAddTodo() {
      this.ADD_TODO();
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
