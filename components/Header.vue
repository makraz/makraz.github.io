<template>
  <header
    class="
      flex flex-wrap flex-col
      md:flex-row
      justify-around
      items-center
      text-white
      font-bold
    "
  >
    <router-link to="/" class="flex title-font font-medium items-center">
      <img
        src="~/assets/images/makraz.png"
        alt="Hamza MAKRAZ"
        width="128"
        height="47"
        class="bg-transparent"
        style="width: 128px; height: 47px"
      />
    </router-link>
    <nav class="items-center">
      <div class="hidden md:flex flex-col sm:flex-row">
        <ul
          class="
            top-navigation
            items-center
            flex-wrap
            space-x-4
            sm:space-x-6
            sm:mt-0
            w-full
            items-center
            justify-end
          "
        >
          <li class="hidden sm:inline-block">
            <router-link
              to="/"
              class="
                blog
                border-b-2
                font-bold
                border-transparent border-b-transparent
                text-white
                hover:text-yellow-dark
                text-base
                transition-all transition-duration-300 transition
                duration-500
                ease-in-out
              "
            >
              Home
            </router-link>
          </li>
          <!--          <li class="hidden sm:inline-block">-->
          <!--            <router-link-->
          <!--              to="/blog"-->
          <!--              class="blog border-b-2 font-bold border-transparent border-b-transparent text-white hover:text-yellow-dark text-base transition-all transition-duration-300 transition duration-500 ease-in-out"-->
          <!--            >-->
          <!--              Blog-->
          <!--            </router-link>-->
          <!--          </li>-->
          <li class="hidden sm:inline-block">
            <router-link
              to="/about"
              class="
                border-b-2
                font-bold
                border-transparent border-b-transparent
                text-white
                hover:text-yellow-dark
                text-base
                transition-all transition-duration-300 transition
                duration-500
                ease-in-out
              "
            >
              About
            </router-link>
          </li>
          <!--
          <li class="hidden sm:inline-block">
            <router-link
              to="/talks"
              class="border-b-2 font-bold border-transparent border-b-transparent text-white hover:text-yellow-dark text-base transition-all transition-duration-300 transition duration-500 ease-in-out"
            >
              Talks
            </router-link>
          </li>
          -->
          <li class="hidden sm:inline-block">
            <router-link
              to="/get-in-touch"
              class="
                bg-transparent
                text-yellow
                font-semibold
                py-2
                px-4
                border-2 border-yellow
                transition transition-all
                duration-300
                rounded-lg
                hover:border-transparent
                hover:bg-yellow
                hover:text-black
                get-in-touch
                text-base
                sm:text-base
              "
              >Get in touch</router-link
            >
          </li>
        </ul>
      </div>
      <ul
        class="
          bottom-navigation
          fixed
          bottom-0
          left-0
          z-20
          bg-dark-elevatedSurface
          w-full
          flex
          items-center
          justify-evenly
          sm:hidden
          h-20
        "
        style="background-color: rgb(17, 24, 39)"
      >
        <li class="nav-bar-bottom-item text-white font-bold">
          <router-link
            to="/"
            aria-current="page"
            class="
              nuxt-link-exact-active nuxt-link-active
              flex flex-col
              items-center
              justify-center
              flex-nowrap
              transition transition-all
              duration-500
              ease-in-out
            "
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="home"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              class="w-5"
            >
              <path
                fill="currentColor"
                d="M570.24 247.41L512 199.52V104a8 8 0 0 0-8-8h-32a8 8 0 0 0-7.95 7.88v56.22L323.87 45a56.06 56.06 0 0 0-71.74 0L5.76 247.41a16 16 0 0 0-2 22.54L14 282.25a16 16 0 0 0 22.53 2L64 261.69V448a32.09 32.09 0 0 0 32 32h128a32.09 32.09 0 0 0 32-32V344h64v104a32.09 32.09 0 0 0 32 32h128a32.07 32.07 0 0 0 32-31.76V261.67l27.53 22.62a16 16 0 0 0 22.53-2L572.29 270a16 16 0 0 0-2.05-22.59zM463.85 432H368V328a32.09 32.09 0 0 0-32-32h-96a32.09 32.09 0 0 0-32 32v104h-96V222.27L288 77.65l176 144.56z"
                class=""
              ></path>
            </svg>
            <div>Home</div>
          </router-link>
        </li>
        <!--        <li class="nav-bar-bottom-item text-white font-bold">-->
        <!--          <router-link-->
        <!--            to="/blog"-->
        <!--            class="-->
        <!--              blog-->
        <!--              flex flex-col-->
        <!--              items-center-->
        <!--              justify-center-->
        <!--              flex-nowrap-->
        <!--              transition transition-all-->
        <!--              duration-500-->
        <!--              ease-in-out-->
        <!--            "-->
        <!--          >-->
        <!--            <svg-->
        <!--              aria-hidden="true"-->
        <!--              focusable="false"-->
        <!--              data-prefix="far"-->
        <!--              data-icon="feather"-->
        <!--              role="img"-->
        <!--              xmlns="http://www.w3.org/2000/svg"-->
        <!--              viewBox="0 0 512 512"-->
        <!--              class="w-5"-->
        <!--            >-->
        <!--              <path-->
        <!--                fill="currentColor"-->
        <!--                d="M467.1 44.9C438.24 16.04 401.59 0 361.59 0c-46.7 0-97.98 21.85-146.78 70.66l-85.75 85.76C54 231.47 56.69 352.92 72.69 405.37L7.03 471.03c-9.37 9.37-9.37 24.57 0 33.94 9.37 9.37 24.57 9.37 33.94 0l65.6-65.6c17.44 5.3 42.43 9.15 70.88 9.15 57.19 0 128.04-15.48 178.13-65.57l85.76-85.75c90.61-90.62 88.32-189.75 25.76-252.3zM147.37 398.57L193.94 352h124.12c-44.62 41.83-106.87 48.46-140.61 48.46-11.41.01-21.29-.81-30.08-1.89zM350.58 320H225.94l64-64h123.81c-2.23 2.4-4.01 4.83-6.39 7.21L350.58 320zm88.31-96H321.94l22.51-22.51c9.37-9.37 9.37-24.57 0-33.94-9.37-9.37-24.57-9.37-33.94 0l-197 197c-5.27-45.97-.29-124.34 49.52-174.15 0 0 18.71-18.71 85.75-85.76 37.02-37.02 76.03-56.58 112.8-56.58 26.63 0 51.37 10.66 71.53 30.82 39.17 39.16 40.02 92.25 5.78 145.12z"-->
        <!--                class=""-->
        <!--              ></path>-->
        <!--            </svg>-->
        <!--            <div>Blog</div>-->
        <!--          </router-link>-->
        <!--        </li>-->
        <li class="nav-bar-bottom-item text-white font-bold">
          <router-link
            to="/about"
            class="
              flex flex-col
              items-center
              justify-center
              flex-nowrap
              transition transition-all
              duration-500
              ease-in-out
            "
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="info-circle"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="w-5"
            >
              <path
                fill="currentColor"
                d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm0-338c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"
                class=""
              ></path>
            </svg>
            <div>About</div>
          </router-link>
        </li>
        <!--
        <li class="nav-bar-bottom-item text-white font-bold">
          <router-link
            to="/talks"
            class="flex flex-col items-center justify-center flex-nowrap transition transition-all duration-500 ease-in-out"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="laptop"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              class="w-5"
            >
              <path
                fill="currentColor"
                d="M624 352h-48V64c0-35.2-28.8-64-64-64H128C92.8 0 64 28.8 64 64v288H16c-8.8 0-16 7.2-16 16v48c0 52.8 43.2 96 96 96h448c52.8 0 96-43.2 96-96v-48c0-8.8-7.2-16-16-16zM112 64c0-8.67 7.33-16 16-16h384c8.67 0 16 7.33 16 16v288H112V64zm480 352c0 26.47-21.53 48-48 48H96c-26.47 0-48-21.53-48-48v-16h180.9c5.57 9.39 15.38 16 27.1 16h128c11.72 0 21.52-6.61 27.1-16H592v16z"
                class=""
              ></path>
            </svg>
            <div>Talks</div>
          </router-link>
        </li>
        -->
        <li class="nav-bar-bottom-item text-white font-bold">
          <router-link
            to="/get-in-touch"
            class="
              flex flex-col
              items-center
              justify-center
              flex-nowrap
              transition transition-all
              duration-500
              ease-in-out
            "
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="envelope-open-text"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="w-5"
            >
              <path
                fill="currentColor"
                d="M494.59 164.52c-1.52-1.26-13.86-11.2-30.59-24.66V96c0-26.51-21.49-48-48-48h-66.13C327.24 28.85 293.77 0 256 0c-37.65 0-70.9 28.63-93.85 48H96c-26.51 0-48 21.49-48 48v43.85c-16.81 13.52-29.15 23.46-30.48 24.56A48.002 48.002 0 0 0 0 201.48V464c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V201.51c0-14.31-6.38-27.88-17.41-36.99zM96 96h320v156.66c-36.26 29.32-78.69 63.67-86.59 69.95C311.25 337.12 279.6 368 256 368c-23.69 0-55.86-31.37-73.41-45.39-7.9-6.28-50.33-40.64-86.59-69.97V96zm368 362c0 3.31-2.69 6-6 6H54c-3.31 0-6-2.69-6-6V275.56c38.96 31.48 95.95 77.65 104.66 84.58C174.71 377.76 212.55 416 256 416c43.21 0 80.64-37.72 103.34-55.86 9-7.15 65.84-53.19 104.66-84.56V458zM176 192h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16zm176 64v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16z"
                class=""
              ></path>
            </svg>
            <div>Contact</div>
          </router-link>
        </li>
      </ul>
    </nav>
    <!--
    <nav class="md:ml-auto flex flex-wrap">
      <router-link to="/" class="mr-5 hover:text-gray-400">Home</router-link>
      <router-link to="/about" class="mr-5 hover:text-gray-400">About</router-link>
      <router-link to="/blog" class="mr-5 hover:text-gray-400">Blog</router-link>
      <router-link to="/talks" class="mr-5 hover:text-gray-400">Talks</router-link>
      <router-link to="/get-in-touch" class="mr-5 hover:text-yellow-dark">Get in touch</router-link>
    </nav>
-->
  </header>
</template>

<style></style>
