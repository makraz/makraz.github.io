<template>
  <div class="max-w-screen-xl mt-16 px-5 mx-auto">
    <article>
      <h1 class="text-3xl font-extrabold text-white">
        {{ article.title }}
      </h1>

      <div class="flex my-3 mb-5">
        <p class="my-auto">{{ article.createdAt | formatDate }} by&nbsp;</p>
        <Author :author="article.author" class="" />
      </div>

      <div class="aspect-w-16 aspect-h-9 mb-12">
        <img
          :src="article.img"
          :alt="article.alt"
          width="512"
          height="512"
          class="w-full md:w-1/3 mx-auto"
        />
      </div>

      <nuxt-content :document="article" />

      <div
        v-if="article.updatedAt !== undefined && article.updatedAt.length"
        class="my-12"
      >
        Article last updated: {{ article.updatedAt | formatDate }}
      </div>

      <prev-next :prev="prev" :next="next" class="mb-12" />
    </article>
  </div>
</template>

<script>
import getSiteMeta from '../../utils/getSiteMeta'

export default {
  async asyncData({ $content, params }) {
    const article = await $content('blog', params.slug).fetch()

    const [prev, next] = await $content('blog')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()

    return { article, prev, next }
  },
  head() {
    return {
      title: this.article.title,
      meta: [
        ...this.meta,
        {
          property: 'article:published_time',
          content: this.article.createdAt,
        },
        {
          property: 'article:modified_time',
          content: this.article.updatedAt,
        },
        {
          property: 'article:tag',
          content: this.article.tags ? this.article.tags.toString() : '',
        },
        { name: 'twitter:label1', content: 'Written by' },
        { name: 'twitter:data1', content: 'Bob Ross' },
        { name: 'twitter:label2', content: 'Filed under' },
        {
          name: 'twitter:data2',
          content: this.article.tags ? this.article.tags.toString() : '',
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://www.makraz.com${this.article.path}`,
        },
      ],
    }
  },
  computed: {
    meta() {
      const metaData = {
        type: 'article',
        title: this.article.title,
        description: this.article.description,
        url: `https://www.makraz.com${this.article.path}`,
        mainImage: this.article.image,
      }
      return getSiteMeta(metaData)
    },
    methods: {},
  },
}
</script>

<style>
.nuxt-content h2 {
  @apply mt-12 mb-6 text-2xl font-bold text-white;
}

.nuxt-content > ul {
  @apply list-disc list-inside;
}

.nuxt-content > ul > li > ul {
  @apply mb-5;
}

.nuxt-content ul ul {
  @apply ml-6 list-inside;
  list-style-type: square;
}

.nuxt-content a {
  @apply font-semibold underline;
  text-decoration-color: #059669;
  text-decoration-style: wavy;
}

.nuxt-content blockquote {
  @apply bg-gray-500 text-white ml-6 border-l-8 border-gray-300 px-4;
}
</style>
