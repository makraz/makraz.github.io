<template>
  <div
    class="safe-top safe-left safe-right safe-bottom sm:px-6 text-gray-400 bg-gray-900 body-font"
  >
    <Header v-if="$nuxt.$route.path !== '/maintenance'" />
    <Nuxt />
    <Footer v-if="$nuxt.$route.path !== '/maintenance'" />
  </div>
</template>

<script></script>

<style></style>
