<template>
  <div class="mt-20">
    <h1
      class="
        sm:ml-16
        mb-4
        sm:text-4xl
        text-3xl text-white text-center
        sm:text-left
      "
    >
      Let's talk 💬
    </h1>
    <section
      class="flex mt-16 mb-8 mx-auto px-5 md:flex-row flex-col items-center"
    >
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img
          class="object-cover object-center rounded"
          alt="hero"
          src="/undraw_conversation_h12g.svg"
        />
      </div>
      <div
        class="
          md:w-1/2
          lg:pl-24
          md:pr-16
          flex flex-col
          md:flex-grow
          md:items-start
          md:text-left
          mt-12
          md:mt-0
          items-center
          text-center
        "
      >
        <p class="mb-8 leading-relaxed">
          Whether you are interested to do business with me, want to chat about
          some of my content, or just want to hang out, I am happy to talk to
          you.
        </p>
        <p class="mb-8 leading-relaxed">
          My preferred way of contact is via Twitter or email.
          <span class="block mt-8">
            <a
              href="mailto:contact@makraz.com"
              aria-label="Email"
              class="inline-block"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="envelope-open-text"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                class="w-10 h-10 text-white"
              >
                <path
                  fill="currentColor"
                  d="M494.59 164.52c-1.52-1.26-13.86-11.2-30.59-24.66V96c0-26.51-21.49-48-48-48h-66.13C327.24 28.85 293.77 0 256 0c-37.65 0-70.9 28.63-93.85 48H96c-26.51 0-48 21.49-48 48v43.85c-16.81 13.52-29.15 23.46-30.48 24.56A48.002 48.002 0 0 0 0 201.48V464c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V201.51c0-14.31-6.38-27.88-17.41-36.99zM96 96h320v156.66c-36.26 29.32-78.69 63.67-86.59 69.95C311.25 337.12 279.6 368 256 368c-23.69 0-55.86-31.37-73.41-45.39-7.9-6.28-50.33-40.64-86.59-69.97V96zm368 362c0 3.31-2.69 6-6 6H54c-3.31 0-6-2.69-6-6V275.56c38.96 31.48 95.95 77.65 104.66 84.58C174.71 377.76 212.55 416 256 416c43.21 0 80.64-37.72 103.34-55.86 9-7.15 65.84-53.19 104.66-84.56V458zM176 192h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16zm176 64v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16z"
                  class=""
                ></path>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/h.makraz/"
              aria-label="Facebook"
              target="_blank"
              rel="noopener"
              class="ml-3 inline-block"
            >
              <img
                src="/facebook.svg"
                alt="Facebook Logo"
                class="w-10 h-10 rounded-xl bg-blue-500 text-white"
              />
            </a>
            <a
              href="https://twitter.com/h_makraz"
              aria-label="Twitter"
              target="_blank"
              rel="noopener"
              class="ml-3 inline-block"
            >
              <img
                src="/twitter.svg"
                alt="Twitter Logo"
                class="w-10 h-10 rounded-xl bg-blue-300 text-white"
              />
            </a>
            <a
              href="https://www.instagram.com/h_makraz"
              aria-label="Instagram"
              target="_blank"
              rel="noopener"
              class="ml-3 inline-block"
            >
              <img
                src="/instagram.svg"
                alt="Instagram Logo"
                class="w-10 h-10 rounded-xl text-white instagram"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/hamza-makraz"
              aria-label="Linkedin"
              target="_blank"
              rel="noopener"
              class="ml-3 inline-block"
            >
              <img
                src="/linkedin.svg"
                alt="Linkedin Logo"
                class="w-10 h-10 rounded-xl bg-blue-500 text-white"
              />
            </a>
          </span>
        </p>
        <p class="mb-8 leading-relaxed">
          Feel free to check out my social media presence below to get to know
          me better.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style>
.instagram {
  background: #f09433;
  background: -moz-linear-gradient(
    45deg,
    #f09433 0%,
    #e6683c 25%,
    #dc2743 50%,
    #cc2366 75%,
    #bc1888 100%
  );
  background: -webkit-linear-gradient(
    45deg,
    #f09433 0%,
    #e6683c 25%,
    #dc2743 50%,
    #cc2366 75%,
    #bc1888 100%
  );
  background: linear-gradient(
    45deg,
    #f09433 0%,
    #e6683c 25%,
    #dc2743 50%,
    #cc2366 75%,
    #bc1888 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#f09433', endColorstr='#bc1888', GradientType=1);
}
</style>
