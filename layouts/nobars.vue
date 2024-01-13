<template>
  <div>
    <Link rel="stylesheet" :href="themeStore.link" />
    <div class="layout-wrapper">
      <div class="layout-main-container">
        <div class="layout-main">
          <slot />
        </div>
        <app-footer />
      </div>
    </div>
  </div>
</template>


<script lang="ts" setup>
const themeStore = useThemeStore();

</script>

<style></style>