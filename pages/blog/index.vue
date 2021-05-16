<template>
  <section class="w-full my-12 px-10">
    <h1 class="text-3xl font-bold text-white mb-8">Articles</h1>
    <div class="flex flex-wrap justify-around mb-12">
      <Article
        v-for="article in articles"
        :key="article.slug"
        :article="article"
      />
    </div>
  </section>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('blog')
      .only([
        'title',
        'description',
        'img',
        'slug',
        'path',
        'tags',
        'author',
        'createdAt',
      ])
      .where({ draft: false })
      .sortBy('createdAt', 'asc')
      .fetch()

    return { articles }
  },
}
</script>

<style></style>
