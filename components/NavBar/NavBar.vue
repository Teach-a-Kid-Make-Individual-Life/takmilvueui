<template>
  <div
    class="position-sticky top-0 navbbar d-flex justify-content-between justify-content-lg-end align-items-center p-2 gap-2 border-bottom"
  >
    <i
      class="bi bi-list d-lg-none"
      style="font-size: 1.5rem; color: gray"
      @click="emits('clickToggler')"
    ></i>

    <div class="d-flex justify-content-end align-items-center gap-2">
      <button type="button" class="btn btn-outline-primary btn-sm">
        Some texts
      </button>
      <button type="button" class="btn btn-outline-primary btn-sm">
        Log in
      </button>
      <button type="button" class="btn btn-outline-secondary btn-sm">
        Log out
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const emits = defineEmits(['clickToggler']);
</script>

<style lang="scss"></style>
