<template>
  <div class="mt-16">
    <section
      class="flex px-5 sm:px-0 md:flex-row flex-col-reverse flex-col items-center"
    >
      <div
        class="md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:flex-grow md:items-start md:text-left mt-12 md:mt-0 mb-16 md:mb-0 items-center text-center"
      >
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
          I'm Hamza Makraz
        </h1>
        <p class="mb-8 leading-relaxed">
          Software Engineer // Consultant, mostly focused on PHP stack and
          mainly <strong class="text-gray-300">Symfony ecosystem</strong>.
          <br />
          In my spare time, I amuse myself with Javascript and Golang building
          apps & tools to make the internet a better place.
          <br />
          Get in touch to discuss how we can collaborate.
        </p>
        <div class="flex justify-center">
          <router-link
            to="/get-in-touch"
            class="inline-flex text-white bg-green-700 border-0 py-2 px-6 hover:bg-green-800 rounded text-lg"
          >
            Set up a meeting
          </router-link>
        </div>
      </div>
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img
          class="object-cover object-center rounded"
          alt="hero"
          src="undraw_Code_review_re_woeb.svg"
          width="512"
          height="512"
        />
      </div>
    </section>

    <section class="md:mt-24 px-5 mx-auto">
      <h1 class="text-3xl font-bold text-white mb-8">
        Latest Articles
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="far"
          data-icon="feather"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          class="w-6 inline-block"
        >
          <path
            fill="currentColor"
            d="M467.1 44.9C438.24 16.04 401.59 0 361.59 0c-46.7 0-97.98 21.85-146.78 70.66l-85.75 85.76C54 231.47 56.69 352.92 72.69 405.37L7.03 471.03c-9.37 9.37-9.37 24.57 0 33.94 9.37 9.37 24.57 9.37 33.94 0l65.6-65.6c17.44 5.3 42.43 9.15 70.88 9.15 57.19 0 128.04-15.48 178.13-65.57l85.76-85.75c90.61-90.62 88.32-189.75 25.76-252.3zM147.37 398.57L193.94 352h124.12c-44.62 41.83-106.87 48.46-140.61 48.46-11.41.01-21.29-.81-30.08-1.89zM350.58 320H225.94l64-64h123.81c-2.23 2.4-4.01 4.83-6.39 7.21L350.58 320zm88.31-96H321.94l22.51-22.51c9.37-9.37 9.37-24.57 0-33.94-9.37-9.37-24.57-9.37-33.94 0l-197 197c-5.27-45.97-.29-124.34 49.52-174.15 0 0 18.71-18.71 85.75-85.76 37.02-37.02 76.03-56.58 112.8-56.58 26.63 0 51.37 10.66 71.53 30.82 39.17 39.16 40.02 92.25 5.78 145.12z"
          ></path>
        </svg>
      </h1>
      <div class="flex flex-wrap justify-around">
        <Article
          v-for="article in articles"
          :key="article.slug"
          :article="article"
        />
      </div>
    </section>

    <section class="md:mt-24 mt-12">
      <div
        class="relative px-4 py-6 overflow-hidden sm:px-6 sm:py-8 lg:p-12 xl:p-16"
      >
        <h2 class="text-2xl font-semibold font-display text-white sm:text-3xl">
          We&#x27;ve got more coming...
        </h2>
        <p class="mt-2 max-w-xl text-base text-gray-400">
          Want to hear from us when we add new components? Sign up for our
          newsletter and we&#x27;ll email you every time we release a new batch
          of components.
        </p>
        <form>
          <div class="sm:flex jusitfy-start mt-6">
            <form class="flex w-full max-w-sm space-x-3">
              <div class="relative">
                <input
                  id='"form-subscribe-Subscribe'
                  type="text"
                  class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  placeholder="Email"
                />
              </div>
              <button
                class="flex-shrink-0 px-4 py-2 text-white bg-green-700 border-0 py-2 px-6 focus:outline-none hover:bg-green-800 rounded text-lg"
                type="submit"
              >
                Subscribe
              </button>
            </form>
          </div>
        </form>
        <div
          class="hidden lg:block absolute inset-y-0 lg:left-2/3 xl:left-1/2 right-0"
        >
          <picture>
            <source srcSet="/undraw_Newsletter_re_wrob.svg" type="image/svg" />
            <source srcSet="/undraw_Newsletter_re_wrob.svg" />
            <img
              class="w-1/2 object-cover maw-w-44 mx-auto"
              src="/undraw_Newsletter_re_wrob.svg"
              alt="newsletter"
            />
          </picture>
        </div>
      </div>
    </section>
  </div>
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
      .sortBy('createdAt', 'asc')
      .limit(3)
      .fetch()

    return { articles }
  },
}
</script>

<style></style>
