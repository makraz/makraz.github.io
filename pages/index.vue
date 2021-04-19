<template>
  <div class="">
    <header
      class="max-w-screen-xl mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
    >
      <a
        href="/"
        class="flex title-font font-medium items-center text-white mb-4 md:mb-0"
      >
        <img
          src="logo.png"
          alt="MAKRAZ"
          width="176"
          height="65"
          class="text-white bg-transparent p-2 rounded-full"
        />
        <!-- <span class="ml-3 text-xl">MAKRAZ</span> -->
      </a>
      <nav
        class="md:ml-auto flex flex-wrap items-center text-base justify-center"
      >
        <a class="mr-5 hover:text-white">Home</a>
        <a class="mr-5 hover:text-white">About</a>
        <a class="mr-5 hover:text-white">Blog</a>
        <a class="mr-5 hover:text-white">Talks</a>
        <a class="mr-5 hover:text-white">Contact</a>
      </nav>
    </header>

    <div class="max-w-screen-xl mx-auto pt-24">
      <section
        class="mb-32 mx-auto flex px-5 md:flex-row flex-col items-center"
      >
        <div
          class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
        >
          <h1
            class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white"
          >
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
            <button
              class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Set up a meeting
            </button>
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
        <h1
          class="sm:text-3xl text-2xl font-medium title-font text-center text-white mb-20"
        >
          Services
        </h1>
        <div
          class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6"
        >
          <div class="p-4 md:w-1/3 flex">
            <div
              class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-400 mb-4 flex-shrink-0"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <div class="flex-grow pl-6">
              <h2 class="text-white text-lg title-font font-medium mb-2">
                Shooting Stars
              </h2>
              <p class="leading-relaxed text-base">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine, ramps microdosing
                banh mi pug VHS try-hard ugh iceland kickstarter tumblr
                live-edge tilde.
              </p>
              <a class="mt-3 text-indigo-400 inline-flex items-center"
                >Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="p-4 md:w-1/3 flex">
            <div
              class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-400 mb-4 flex-shrink-0"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <circle cx="6" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path
                  d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"
                ></path>
              </svg>
            </div>
            <div class="flex-grow pl-6">
              <h2 class="text-white text-lg title-font font-medium mb-2">
                The Catalyzer
              </h2>
              <p class="leading-relaxed text-base">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine, ramps microdosing
                banh mi pug VHS try-hard ugh iceland kickstarter tumblr
                live-edge tilde.
              </p>
              <a class="mt-3 text-indigo-400 inline-flex items-center"
                >Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="p-4 md:w-1/3 flex">
            <div
              class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-400 mb-4 flex-shrink-0"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div class="flex-grow pl-6">
              <h2 class="text-white text-lg title-font font-medium mb-2">
                Neptune
              </h2>
              <p class="leading-relaxed text-base">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine, ramps microdosing
                banh mi pug VHS try-hard ugh iceland kickstarter tumblr
                live-edge tilde.
              </p>
              <a class="mt-3 text-indigo-400 inline-flex items-center"
                >Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section class="mb-32 px-5 mx-auto">
        <div class="flex flex-wrap -m-4">
          <div class="p-4 md:w-1/2">
            <img
              class="h-full w-full object-cover object-center"
              src="https://dummyimage.com/720x720"
              alt="blog"
            />
          </div>
          <div class="p-4 md:w-1/2">
            <img
              class="h-full w-full object-cover object-center"
              src="https://dummyimage.com/720x720"
              alt="blog"
            />
          </div>
          <div class="p-4 md:w-1/2">
            <img
              class="h-full w-full object-cover object-center"
              src="https://dummyimage.com/720x720"
              alt="blog"
            />
          </div>
          <div class="p-4 md:w-1/2">
            <img
              class="h-full w-full object-cover object-center"
              src="https://dummyimage.com/720x720"
              alt="blog"
            />
          </div>
        </div>
      </section>

      <section class="mb-32 px-5 mx-auto">
        <div
          class="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
        >
          <div
            class="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full"
          >
            <div
              class="overflow-hidden transition-shadow duration-300 bg-white rounded"
            >
              <a href="/" aria-label="Article"
                ><img
                  src="https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                  class="object-cover w-full h-64 rounded"
                  alt=""
              /></a>
              <div class="p-5">
                <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
                  13 Jul 2020
                </p>
                <a
                  href="/"
                  aria-label="Article"
                  class="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                  ><p class="text-2xl font-bold leading-5">
                    Diving to the deep
                  </p></a
                >
                <p class="mb-4 text-gray-700">
                  Sed ut perspiciatis unde omnis iste natus error sit sed quia
                  consequuntur magni voluptatem doloremque.
                </p>
                <div class="flex space-x-4">
                  <a
                    href="/"
                    aria-label="Likes"
                    class="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                  >
                    <div class="mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                      >
                        <polyline
                          points="6 23 1 23 1 12 6 12"
                          fill="none"
                          stroke-miterlimit="10"
                        ></polyline>
                        <path
                          d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                          fill="none"
                          stroke="currentColor"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                    <p class="font-semibold">7.4K</p>
                  </a>
                  <a
                    href="/"
                    aria-label="Comments"
                    class="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                  >
                    <div class="mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        stroke="currentColor"
                        class="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                      >
                        <polyline
                          points="23 5 23 18 19 18 19 22 13 18 12 18"
                          fill="none"
                          stroke-miterlimit="10"
                        ></polyline>
                        <polygon
                          points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
                          fill="none"
                          stroke="currentColor"
                          stroke-miterlimit="10"
                        ></polygon>
                      </svg>
                    </div>
                    <p class="font-semibold">81</p>
                  </a>
                </div>
              </div>
            </div>
            <div
              class="overflow-hidden transition-shadow duration-300 bg-white rounded"
            >
              <a href="/" aria-label="Article"
                ><img
                  src="https://images.pexels.com/photos/1576937/pexels-photo-1576937.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                  class="object-cover w-full h-64 rounded"
                  alt=""
              /></a>
              <div class="p-5">
                <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
                  4 Nov 2020
                </p>
                <a
                  href="/"
                  aria-label="Article"
                  class="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                  ><p class="text-2xl font-bold leading-5">
                    Conquer the World
                  </p></a
                >
                <p class="mb-4 text-gray-700">
                  Sed ut perspiciatis unde omnis iste natus error sit sed quia
                  consequuntur magni voluptatem doloremque.
                </p>
                <div class="flex space-x-4">
                  <a
                    href="/"
                    aria-label="Likes"
                    class="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                  >
                    <div class="mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                      >
                        <polyline
                          points="6 23 1 23 1 12 6 12"
                          fill="none"
                          stroke-miterlimit="10"
                        ></polyline>
                        <path
                          d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                          fill="none"
                          stroke="currentColor"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                    <p class="font-semibold">7.4K</p>
                  </a>
                  <a
                    href="/"
                    aria-label="Comments"
                    class="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                  >
                    <div class="mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        stroke="currentColor"
                        class="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                      >
                        <polyline
                          points="23 5 23 18 19 18 19 22 13 18 12 18"
                          fill="none"
                          stroke-miterlimit="10"
                        ></polyline>
                        <polygon
                          points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
                          fill="none"
                          stroke="currentColor"
                          stroke-miterlimit="10"
                        ></polygon>
                      </svg>
                    </div>
                    <p class="font-semibold">81</p>
                  </a>
                </div>
              </div>
            </div>
            <div
              class="overflow-hidden transition-shadow duration-300 bg-white rounded"
            >
              <a href="/" aria-label="Article"
                ><img
                  src="https://images.pexels.com/photos/2123755/pexels-photo-2123755.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                  class="object-cover w-full h-64 rounded"
                  alt=""
              /></a>
              <div class="p-5">
                <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
                  28 Dec 2020
                </p>
                <a
                  href="/"
                  aria-label="Article"
                  class="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                  ><p class="text-2xl font-bold leading-5">
                    Explore the beautiful
                  </p></a
                >
                <p class="mb-4 text-gray-700">
                  Sed ut perspiciatis unde omnis iste natus error sit sed quia
                  consequuntur magni voluptatem doloremque.
                </p>
                <div class="flex space-x-4">
                  <a
                    href="/"
                    aria-label="Likes"
                    class="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                  >
                    <div class="mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                      >
                        <polyline
                          points="6 23 1 23 1 12 6 12"
                          fill="none"
                          stroke-miterlimit="10"
                        ></polyline>
                        <path
                          d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                          fill="none"
                          stroke="currentColor"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                    </div>
                    <p class="font-semibold">7.4K</p>
                  </a>
                  <a
                    href="/"
                    aria-label="Comments"
                    class="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                  >
                    <div class="mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        stroke="currentColor"
                        class="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                      >
                        <polyline
                          points="23 5 23 18 19 18 19 22 13 18 12 18"
                          fill="none"
                          stroke-miterlimit="10"
                        ></polyline>
                        <polygon
                          points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
                          fill="none"
                          stroke="currentColor"
                          stroke-miterlimit="10"
                        ></polygon>
                      </svg>
                    </div>
                    <p class="font-semibold">81</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="mb-32">
        <div
          class="relative px-4 py-6 overflow-hidden sm:px-6 sm:py-8 lg:p-12 xl:p-16"
        >
          <h2
            class="text-2xl font-semibold font-display text-white sm:text-3xl"
          >
            We&#x27;ve got more coming...
          </h2>
          <p class="mt-2 max-w-xl text-base text-gray-400">
            Want to hear from us when we add new components? Sign up for our
            newsletter and we&#x27;ll email you every time we release a new
            batch of components.
          </p>
          <form>
            <div class="sm:flex jusitfy-start mt-6">
              <form class="flex w-full max-w-sm space-x-3">
                <div class="relative">
                  <input
                    type="text"
                    id='"form-subscribe-Subscribe'
                    class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Email"
                  />
                </div>
                <button
                  class="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
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
              <source
                srcSet="/undraw_Newsletter_re_wrob.svg"
                type="image/svg"
              />
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

      <section class="mb-32">
        <div class="px-5 flex sm:flex-nowrap flex-wrap">
          <div class="lg:w-1/3 md:w-1/2 bg-gray-900 sm:mr-10">
            <div class="bg-gray-900 py-6">
              <div class="px-6">
                <h2
                  class="title-font font-semibold text-white tracking-widest text-xs"
                >
                  ADDRESS
                </h2>
                <p class="mt-1">
                  Photo booth tattooed prism, portland taiyaki hoodie neutra
                  typewriter
                </p>
              </div>
              <div class="px-6 mt-4 lg:mt-0">
                <h2
                  class="title-font font-semibold text-white tracking-widest text-xs"
                >
                  EMAIL
                </h2>
                <a class="text-indigo-400 leading-relaxed">example@email.com</a>
                <h2
                  class="title-font font-semibold text-white tracking-widest text-xs mt-4"
                >
                  PHONE
                </h2>
                <p class="leading-relaxed">123-456-7890</p>
              </div>
            </div>
          </div>
          <div
            class="lg:w-2/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
          >
            <h2 class="text-white text-lg mb-1 font-medium title-font">
              Feedback
            </h2>
            <p class="leading-relaxed mb-5">
              Post-ironic portland shabby chic echo park, banjo fashion axe
            </p>
            <div class="relative mb-4">
              <label for="name" class="leading-7 text-sm text-gray-400"
                >Name</label
              >
              <input
                type="text"
                id="name"
                name="name"
                class="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-400"
                >Email</label
              >
              <input
                type="email"
                id="email"
                name="email"
                class="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="message" class="leading-7 text-sm text-gray-400"
                >Message</label
              >
              <textarea
                id="message"
                name="message"
                class="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button
              class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Button
            </button>
            <p class="text-xs text-gray-400 text-opacity-90 mt-3">
              Chicharrones blog helvetica normcore iceland tousled brook viral
              artisan.
            </p>
          </div>
        </div>
      </section>
    </div>

    <footer class="mx-auto">
      <div
        class="max-w-screen-xl mx-auto px-5 pb-12 flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col"
      >
        <div
          class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10"
        >
          <a
            class="flex title-font font-medium items-center md:justify-start justify-center text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
              ></path>
            </svg>
            <span class="ml-3 text-xl">Tailblocks</span>
          </a>
          <p class="mt-2 text-sm text-gray-500">
            Air plant banjo lyft occupy retro adaptogen indego
          </p>
        </div>
        <div
          class="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first"
        >
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2
              class="title-font font-medium text-white tracking-widest text-sm mb-3"
            >
              CATEGORIES
            </h2>
            <nav class="list-none mb-10">
              <li>
                <a class="text-gray-400 hover:text-white">First Link</a>
              </li>
              <li>
                <a class="text-gray-400 hover:text-white">Second Link</a>
              </li>
              <li>
                <a class="text-gray-400 hover:text-white">Third Link</a>
              </li>
              <li>
                <a class="text-gray-400 hover:text-white">Fourth Link</a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2
              class="title-font font-medium text-white tracking-widest text-sm mb-3"
            >
              CATEGORIES
            </h2>
            <nav class="list-none mb-10">
              <li>
                <a class="text-gray-400 hover:text-white">First Link</a>
              </li>
              <li>
                <a class="text-gray-400 hover:text-white">Second Link</a>
              </li>
              <li>
                <a class="text-gray-400 hover:text-white">Third Link</a>
              </li>
              <li>
                <a class="text-gray-400 hover:text-white">Fourth Link</a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2
              class="title-font font-medium text-white tracking-widest text-sm mb-3"
            >
              CATEGORIES
            </h2>
            <nav class="list-none mb-10">
              <li>
                <a class="text-gray-400 hover:text-white">First Link</a>
              </li>
              <li>
                <a class="text-gray-400 hover:text-white">Second Link</a>
              </li>
              <li>
                <a class="text-gray-400 hover:text-white">Third Link</a>
              </li>
              <li>
                <a class="text-gray-400 hover:text-white">Fourth Link</a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2
              class="title-font font-medium text-white tracking-widest text-sm mb-3"
            >
              CATEGORIES
            </h2>
            <nav class="list-none mb-10">
              <li>
                <a class="text-gray-400 hover:text-white">First Link</a>
              </li>
              <li>
                <a class="text-gray-400 hover:text-white">Second Link</a>
              </li>
              <li>
                <a class="text-gray-400 hover:text-white">Third Link</a>
              </li>
              <li>
                <a class="text-gray-400 hover:text-white">Fourth Link</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div class="bg-gray-800 bg-opacity-75">
        <div
          class="max-w-screen-xl mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row"
        >
          <p class="text-gray-400 text-sm text-center sm:text-left">
            © 2020 Tailblocks —
            <a
              href="https://twitter.com/knyttneve"
              class="text-gray-500 ml-1"
              rel="noopener noreferrer"
              target="_blank"
              >@knyttneve</a
            >
          </p>
          <span
            class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start"
          >
            <a class="text-gray-400">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                ></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-400">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                ></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-400">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path
                  d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
                ></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-400">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
<style></style>
