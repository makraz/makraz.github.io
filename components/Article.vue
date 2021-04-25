<template>
  <article
    class="overflow-hidden shadow-lg h-90 md:w-1/3 my-6 px-6 lg:px-12 cursor-pointer m-auto"
  >
    <router-link :to="article.path" class="w-full block h-full">
      <img
        :src="article.img"
        :alt="article.alt"
        class="max-h-40 w-full object-stretch rounded-t-lg"
      />
      <div class="bg-white dark:bg-gray-800 w-full p-4 rounded-b-lg">
        <!-- <p class="text-indigo-500 text-md font-medium">Article</p> -->
        <p class="text-gray-800 dark:text-white text-xl font-medium mb-2">
          {{ article.title }}
        </p>
        <p class="text-gray-400 dark:text-gray-300 font-light text-md">
          {{ article.description }}
        </p>
        <div class="flex flex-wrap justify-starts items-center mt-4">
          <div
            v-for="tag in article.tags"
            :key="tag"
            class="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl"
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
