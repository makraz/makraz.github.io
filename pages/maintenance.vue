<template>
  <div class="">
    <header
      class="
        max-w-screen-xl
        mx-auto
        flex flex-wrap
        p-5
        flex-col
        md:flex-row
        items-center
      "
    >
      <a
        href="/"
        class="flex title-font font-medium items-center text-white mb-4 md:mb-0"
      >
        <img
          src="~/assets/images/makraz.png"
          alt="MAKRAZ"
          width="128"
          height="47"
          class="w-full text-white bg-transparent p-2"
          style="width: 128px; height: 47px"
        />
      </a>
    </header>
    <div
      class="
        container
        md:h-screen
        h-full
        mx-auto
        flex flex-wrap
        content-around
        px-5
      "
    >
      <section class="mx-auto my-24 flex md:flex-row flex-col items-center">
        <div
          class="
            lg:flex-grow
            md:w-1/2
            lg:pr-24
            md:pr-16
            flex flex-col
            md:items-start
            md:text-left
            mb-16
            md:mb-0
            items-center
            text-center
          "
        >
          <h1
            class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white"
          >
            Coming Soon
          </h1>
          <p class="mb-8 leading-relaxed">
            I'm currently working on this page, and I will launch it soon.
            <br />
            <router-link to="/get-in-touch" class="text-white"
              >Get in touch</router-link
            >
            to discuss how we can collaborate.
          </p>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            class="object-cover object-center rounded"
            alt="hero"
            src="/undraw_content_team_3epn.svg"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
<style></style>
