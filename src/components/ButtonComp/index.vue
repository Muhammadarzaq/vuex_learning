<template>
  <div>
    <div class="d-flex">
      <!-- Tombol 1 -->
      <router-link to="/" class="btn btn-primary mr-2">Home</router-link>

      <!-- Tombol 2 -->
      <router-link to="/archive" class="btn btn-primary mr-2">archive</router-link>

      <!-- Tombol 3 -->
      <router-link to="/about" class="btn btn-primary">about</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ButtonComp",
};
</script>

<style scoped>
/* Anda dapat menambahkan gaya tambahan sesuai kebutuhan di sini */
.btn {
  margin-left: 10px;
}
</style>
