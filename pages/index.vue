<template>
  <div class="mt-16">
    <section
      class="
        flex
        px-5
        sm:px-0
        md:flex-row
        flex-col-reverse flex-col
        items-center
      "
    >
      <div
        class="
          md:w-1/2
          lg:pr-24
          md:pr-16
          flex flex-col
          md:flex-grow
          md:items-start
          md:text-left
          mt-12
          md:mt-0
          sm:mb-16
          md:mb-0
          items-center
          text-center
        "
      >
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
          I'm Hamza Makraz
        </h1>
        <p class="mb-8 leading-relaxed">
          Software Engineer // Consultant, mostly focused on PHP stack and
          mainly
          <a
            href="https://symfony.com/what-is-symfony"
            class="text-gray-300 hover:text-yellow-dark"
          >
            Symfony ecosystem.</a
          >
          In my spare time, I amuse myself with PHP, Javascript and Golang
          building apps & tools to make the internet a better place.
          <br />
          Get in touch to discuss how we can collaborate.
        </p>
        <div class="flex justify-center">
          <router-link
            to="/get-in-touch"
            class="
              inline-flex
              text-black
              bg-yellow
              border-0
              py-2
              px-6
              hover:bg-yellow-dark
              rounded
              text-lg
            "
          >
            Set up a meeting
          </router-link>
        </div>
      </div>
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img
          class="object-cover object-center rounded"
          alt="hero"
          src="/undraw_Code_review_re_woeb.svg"
          width="512"
          height="512"
        />
      </div>
    </section>

    <!--    <section class="md:mt-24 px-5 mx-auto">-->
    <!--      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">-->
    <!--        <div>-->
    <!--          <h1 class="mt-4 text-xl font-semibold text-white">-->
    <!--            <img-->
    <!--              class="-->
    <!--                object-cover object-center-->
    <!--                rounded-->
    <!--                w-8-->
    <!--                h-8-->
    <!--                inline-block-->
    <!--                mr-3-->
    <!--              "-->
    <!--              alt="hero"-->
    <!--              src="/code.svg"-->
    <!--              width="48"-->
    <!--              height="48"-->
    <!--            />-->
    <!--            Default Taiwindcss Config-->
    <!--          </h1>-->

    <!--          <p class="mt-2 text-gray-400">-->
    <!--            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim-->
    <!--            fusce tortor, ac sed malesuada blandit. Et mi gravida sem feugiat.-->
    <!--          </p>-->
    <!--        </div>-->

    <!--        <div>-->
    <!--          <h1 class="mt-4 text-xl font-semibold text-white">-->
    <!--            <img-->
    <!--              class="-->
    <!--                object-cover object-center-->
    <!--                rounded-->
    <!--                w-8-->
    <!--                h-8-->
    <!--                inline-block-->
    <!--                mr-3-->
    <!--              "-->
    <!--              alt="hero"-->
    <!--              src="/desktop.svg"-->
    <!--              width="48"-->
    <!--              height="48"-->
    <!--            />-->
    <!--            Fully Responsive Components-->
    <!--          </h1>-->

    <!--          <p class="mt-2 text-gray-400">-->
    <!--            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim-->
    <!--            fusce tortor, ac sed malesuada blandit. Et mi gravida sem feugiat.-->
    <!--          </p>-->
    <!--        </div>-->

    <!--        <div>-->
    <!--          <h1 class="mt-4 text-xl font-semibold text-white">-->
    <!--            <img-->
    <!--              class="-->
    <!--                object-cover object-center-->
    <!--                rounded-->
    <!--                w-8-->
    <!--                h-8-->
    <!--                inline-block-->
    <!--                mr-3-->
    <!--              "-->
    <!--              alt="hero"-->
    <!--              src="/gear.svg"-->
    <!--              width="48"-->
    <!--              height="48"-->
    <!--            />-->
    <!--            RTL Languages Support-->
    <!--          </h1>-->

    <!--          <p class="mt-2 text-gray-400">-->
    <!--            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim-->
    <!--            fusce tortor, ac sed malesuada blandit. Et mi gravida sem feugiat.-->
    <!--          </p>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </section>-->

    <!--    <section class="mt-24 px-5 mx-auto">-->
    <!--      <h1 class="text-3xl font-bold text-white mb-8">Latest Articles</h1>-->
    <!--      <div class="flex flex-wrap justify-around">-->
    <!--        <Article-->
    <!--          v-for="article in articles"-->
    <!--          :key="article.slug"-->
    <!--          :article="article"-->
    <!--        />-->
    <!--      </div>-->
    <!--    </section>-->

    <!--    <section class="md:mt-24 mt-12">-->
    <!--      <div-->
    <!--        class="-->
    <!--          relative-->
    <!--          px-4-->
    <!--          py-6-->
    <!--          overflow-hidden-->
    <!--          sm:px-6-->
    <!--          sm:py-8-->
    <!--          lg:p-12-->
    <!--          xl:p-16-->
    <!--        "-->
    <!--      >-->
    <!--        <h2 class="text-2xl font-semibold font-display text-white sm:text-3xl">-->
    <!--          We&#x27;ve got more coming...-->
    <!--        </h2>-->
    <!--        <p class="mt-2 max-w-xl text-base text-gray-400">-->
    <!--          Want to hear from us when we add new post? <br />-->
    <!--          Sign up for our newsletter.-->
    <!--        </p>-->
    <!--        <form>-->
    <!--          <div class="sm:flex justify-start mt-6">-->
    <!--            <form class="flex w-full max-w-sm space-x-3">-->
    <!--              <div class="relative">-->
    <!--                <input-->
    <!--                  id='"form-subscribe-Subscribe'-->
    <!--                  type="text"-->
    <!--                  class="-->
    <!--                    rounded-lg-->
    <!--                    border-transparent-->
    <!--                    flex-1-->
    <!--                    appearance-none-->
    <!--                    border border-gray-300-->
    <!--                    w-full-->
    <!--                    py-2-->
    <!--                    px-4-->
    <!--                    bg-white-->
    <!--                    text-gray-700-->
    <!--                    placeholder-gray-400-->
    <!--                    shadow-sm-->
    <!--                    text-base-->
    <!--                    focus:outline-none-->
    <!--                    focus:ring-2 focus:ring-green-600-->
    <!--                    focus:border-transparent-->
    <!--                  "-->
    <!--                  placeholder="Email"-->
    <!--                />-->
    <!--              </div>-->
    <!--              <button-->
    <!--                class="-->
    <!--                  flex-shrink-0-->
    <!--                  px-4-->
    <!--                  py-2-->
    <!--                  text-black-->
    <!--                  bg-yellow-->
    <!--                  border-0-->
    <!--                  py-2-->
    <!--                  px-6-->
    <!--                  focus:outline-none-->
    <!--                  hover:bg-yellow-dark-->
    <!--                  rounded-->
    <!--                  text-lg-->
    <!--                "-->
    <!--                type="submit"-->
    <!--              >-->
    <!--                Subscribe-->
    <!--              </button>-->
    <!--            </form>-->
    <!--          </div>-->
    <!--        </form>-->
    <!--        <div-->
    <!--          class="-->
    <!--            hidden-->
    <!--            lg:block-->
    <!--            absolute-->
    <!--            inset-y-0-->
    <!--            lg:left-2/3-->
    <!--            xl:left-1/2-->
    <!--            right-0-->
    <!--          "-->
    <!--        >-->
    <!--          <picture>-->
    <!--            <source srcSet="/undraw_Newsletter_re_wrob.svg" type="image/svg" />-->
    <!--            <source srcSet="/undraw_Newsletter_re_wrob.svg" />-->
    <!--            <img-->
    <!--              class="w-1/2 object-cover maw-w-44 mx-auto"-->
    <!--              src="/undraw_Newsletter_re_wrob.svg"-->
    <!--              alt="newsletter"-->
    <!--            />-->
    <!--          </picture>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </section>-->
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
      .where({ draft: false })
      .sortBy('createdAt', 'desc')
      .limit(3)
      .fetch()
    console.log(articles)
    return { articles }
  },
}
</script>

<style></style>
