<template>
  <div class="max-w-screen-xl md:mb-64 mt-16 mx-auto">
    <section
      class="mx-auto flex px-5 md:flex-row flex-col-reverse flex-col items-center"
    >
      <div
        class="md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:flex-grow md:items-start md:text-left mt-12 md:mt-0 items-center text-center"
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
            class="inline-flex text-white bg-green-600 border-0 py-2 px-6 hover:bg-green-700 rounded text-lg"
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
        />
      </div>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
<style></style>
