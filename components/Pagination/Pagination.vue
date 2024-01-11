<template>
  <vue-awesome-paginate
    :total-items="total"
    :items-per-page="perPage"
    v-model="selected"
    @click="onClickHandler"
  />
</template>

<script setup lang="ts">
const props = defineProps({
  total: {
    type: Number,
    default: 0,
  },
  perPage: {
    type: Number,
    default: 10,
  },
});
const emits = defineEmits(['pageChange']);
const selected = ref(1);
const onClickHandler = (page: number) => {
  emits('pageChange', page/props.perPage);
};
</script>

<style>
.pagination-container {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
}
.paginate-buttons {
  height: 40px;
  width: 40px;
  border-radius: 20px;
  cursor: pointer;
  background-color: rgb(242, 242, 242);
  border: 1px solid rgb(217, 217, 217);
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
}
.paginate-buttons:hover {
  background-color: #d8d8d8;
}
.active-page {
  background-color: #3498db;
  border: 1px solid #3498db;
  color: white;
}
.active-page:hover {
  background-color: #2988c8;
}
</style>
