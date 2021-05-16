<template>
  <article
    class="
      w-full
      max-w-xs
      px-4
      sm:w-1/2
      sm:px-2
      md:w-1/3
      md:px-0
      cursor-pointer
      my-6
      sm:my-0
    "
  >
    <router-link :to="article.path" class="w-full block h-full">
      <img
        :src="article.img.path"
        :alt="article.img.alt ? article.img.alt : article.title"
        class="w-full object-contain rounded-t-lg"
        style="max-height: 10rem"
        width="275"
        height="175"
      />
      <div class="bg-white dark:bg-gray-800 w-full p-4 rounded-b-lg">
        <p
          class="text-gray-800 text-white text-xl font-medium mb-2"
          style="min-height: 4rem"
        >
          {{ article.title }}
        </p>
        <p class="text-gray-700 font-light text-md" style="min-height: 6rem">
          {{ article.description }}
        </p>
        <div
          class="flex flex-wrap justify-starts items-center mt-4"
          style="min-height: 4rem"
        >
          <div
            v-for="tag in article.tags"
            :key="tag"
            class="m-1 p-2 text-xs text-gray-600 bg-blue-100 rounded-2xl"
          >
            # {{ tag }}
          </div>
        </div>
      </div>
    </router-link>
  </article>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style></style>
