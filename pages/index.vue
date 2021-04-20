<template>
  <div class="max-w-screen-xl mx-auto pt-24">
    <section class="mb-32 mx-auto flex px-5 md:flex-row flex-col items-center">
      <div
        class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
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
          <a
            href="/get-in-touch"
            class="inline-flex text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 rounded text-lg"
          >
            Set up a meeting
          </a>
        </div>
      </div>
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img
          class="object-cover object-center rounded"
          alt="hero"
          src="undraw_Code_review_re_woeb.svg"
        />
      </div>
    </section>

    <section class="mb-32 px-5 mx-auto">
      <div class="flex flex-wrap -m-4">
        <div
          class="overflow-hidden shadow-lg h-90 md:w-1/3 px-12 my-12 cursor-pointer m-auto"
          v-for="i in [1, 2, 3, 4, 5]"
          :key="i"
        >
          <a href="#" class="w-full block h-full">
            <img
              alt="blog photo"
              src="https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              class="max-h-40 w-full object-cover rounded-t-lg"
            />
            <div class="bg-white dark:bg-gray-800 w-full p-4 rounded-b-lg">
              <p class="text-indigo-500 text-md font-medium">Article</p>
              <p class="text-gray-800 dark:text-white text-xl font-medium mb-2">
                Supercharged !
              </p>
              <p class="text-gray-400 dark:text-gray-300 font-light text-md">
                The new supercar is here, 543 cv and 140 000$. This is best
                racing GT about 7 years on...
              </p>
              <div class="flex flex-wrap justify-starts items-center mt-4">
                <div
                  class="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl"
                >
                  #Car
                </div>
                <div
                  class="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl"
                >
                  #Money
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>

    <section class="mb-32">
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
                  type="text"
                  id='"form-subscribe-Subscribe'
                  class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  placeholder="Email"
                />
              </div>
              <button
                class="flex-shrink-0 px-4 py-2 text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 rounded text-lg"
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
// green used is #059669
// default purple used in images is #6c63ff
export default {}
</script>

<style></style>
