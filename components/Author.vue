<template>
  <div class="flex">
    <span class="my-auto font-bold">{{ author.name }}</span>
    <img :src="author.image" :alt="author.name" width="40" height="40" class="ml-2" />
  </div>
</template>

<script>
export default {
  props: {
    author: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style></style>
