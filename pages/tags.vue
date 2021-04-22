<template>
  <div class="max-w-screen-xl mt-12 mx-auto">
    <section class="px-5 mx-auto">
      <h1 class="text-3xl font-bold text-white mb-8">Tags</h1>
      <div class="flex flex-col w-full">
        <div v-for="tag in tags" :key="tag" class="mx-auto uppercase">
          {{ tag }}
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('blog')
      .only(['tags'])
      .sortBy('createdAt', 'asc')
      .fetch()

    const tags = [
      ...new Set(
        [].concat.apply(
          [],
          articles.map((article) => article.tags)
        )
      ),
    ]

    return { tags }
  },
}
</script>

<style></style>
