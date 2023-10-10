<template>
  <div class="card" style="width: 25%">
    <div class="card-header">
      <input type="checkbox" id="checkboxId" />
      <label for="checkboxId">Checkbox Label</label>

      <button class="btn btn-secondary ml-2" style="margin-left: 15px">Delete</button>
      <button class="btn btn-secondary ml-2" style="margin-left: 15px">archive</button>
    </div>
    <div class="card-body">
      <div class="form-group">
        <input type="text" class="form-control" id="inputField" placeholder="Enter text" />
      </div>
    </div>
    <div class="card-footer">
      <button class="btn btn-primary">Button 1</button>
    </div>
  </div>
</template>

<style>
/* Ganti warna latar belakang dan gaya card sesuai kebutuhan Anda */
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
