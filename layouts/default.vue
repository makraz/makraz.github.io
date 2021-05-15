<template>
  <div
    class="safe-top safe-left safe-right safe-bottom flex flex-col h-screen justify-between"
  >
    <Header v-if="$nuxt.$route.path !== '/maintenance'" class="sm:px-6" />
    <Nuxt class="max-w-screen-xl mx-auto mb-10 sm:mb-auto sm:px-6" />
    <Footer v-if="$nuxt.$route.path !== '/maintenance'" class="" />
  </div>
</template>

<script></script>

<style>
body {
  @apply text-gray-400 bg-black;
}
</style>
