<template>
  <div class="max-w-screen-xl mt-16 mx-auto">
    <section class="px-5 mx-auto">
      <h1 class="text-3xl font-bold text-white mb-8">
        Talks
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="far"
          data-icon="laptop"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
          class="w-6 inline-block"
        >
          <path
            fill="currentColor"
            d="M624 352h-48V64c0-35.2-28.8-64-64-64H128C92.8 0 64 28.8 64 64v288H16c-8.8 0-16 7.2-16 16v48c0 52.8 43.2 96 96 96h448c52.8 0 96-43.2 96-96v-48c0-8.8-7.2-16-16-16zM112 64c0-8.67 7.33-16 16-16h384c8.67 0 16 7.33 16 16v288H112V64zm480 352c0 26.47-21.53 48-48 48H96c-26.47 0-48-21.53-48-48v-16h180.9c5.57 9.39 15.38 16 27.1 16h128c11.72 0 21.52-6.61 27.1-16H592v16z"
          ></path>
        </svg>
      </h1>
      <div class="flex flex-wrap -m-4">
        <div
          class="overflow-hidden shadow-lg h-90 md:w-1/3 my-6 px-6 lg:px-12 cursor-pointer m-auto"
          v-for="i in [1, 2, 3, 4, 5]"
          :key="i"
        >
          <router-link to="/" class="w-full block h-full">
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
          </router-link>
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
