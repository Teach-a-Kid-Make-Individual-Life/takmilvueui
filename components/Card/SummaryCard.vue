<template>
  <div class="card summary-card w-100">
    <img :src="image" class="card-img-top" :alt="title" />
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">
        {{ subTitle }}
      </p>
      <NuxtLink class="btn btn-primary" :to="props.to">
        {{ linkTitle }}
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  image: {
    type: String,
    default: 'https://picsum.photos/600',
  },
  title: [String, Number],
  subTitle: [String, Number],
  linkTitle: {
    type: String,
    default: 'Detail',
  },
  to: {
    tye: String,
    default: '',
  },
});
</script>

<style lang="scss"></style>
