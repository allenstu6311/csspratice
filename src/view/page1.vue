<template>
  <!-- https://ld-wt73.template-help.com/intense/landing-corporate/index.html -->

  <div class="min-h-full">
    <div class="banner">
      <img :src="require('../assets/pic/page1/banner.png')" alt="" />
    </div>
    <!-- opacity-30  -->
    <!-- header -->
    <nav class="bg-gray-800 text-white text-base z-10 relative">
      <div class="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-14 items-center justify-between">
          <div class="flex items-center">
            <div class="flex-shrink-0"></div>
            <div class="hidden md:block">
              <div class="ml-7 flex items-baseline space-x-6">
                <a
                  href="#"
                  class="rounded-md py-2 text-sm font-medium"
                  aria-current="page"
                >
                  <font-awesome-icon icon="fa-brands fa-facebook" />
                </a>
                <a
                  href="#"
                  class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md py-2 text-sm font-medium"
                >
                  <font-awesome-icon icon="fa-brands fa-twitter" />
                </a>
                <a
                  href="#"
                  class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md py-2 text-sm font-medium"
                >
                  <font-awesome-icon icon="fa-brands fa-google-plus-g" />
                </a>
                <a
                  href="#"
                  class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md py-2 text-sm font-medium"
                  ><font-awesome-icon icon="fa-brands fa-line" />
                </a>
                <span>|</span>
                <span class="tracking-wider"
                  >6036 Richmond hwy., Alexandria, VA, 2230</span
                >
              </div>
            </div>
          </div>
          <div class="hidden md:block">
            <div class="mr-5 flex items-center md:ml-6 mb-3">
              <font-awesome-icon icon="fa-solid fa-phone" class="text-white" />
              <div class="relative ml-3">
                <div>
                  <p class="tracking-wider mr-5 text-lg">+1 (409) 987–5874</p>
                </div>
              </div>
            </div>
          </div>
          <div class="mr-2 flex md:hidden">
            <!-- Mobile menu button -->
            <button
              type="button"
              class="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <!-- Menu open: "hidden", Menu closed: "block" -->
              <svg
                class="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <!-- Menu open: "block", Menu closed: "hidden" -->
              <svg
                class="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile menu, show/hide based on menu state. -->
      <div class="md:hidden" id="mobile-menu">
        <div class="space-y-1 px-2 pb-3 pt-2 sm:px-3">
          <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
          <a
            href="#"
            class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
            aria-current="page"
            >Dashboard</a
          >
          <a
            href="#"
            class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >Team</a
          >
          <a
            href="#"
            class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >Projects</a
          >
          <a
            href="#"
            class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >Calendar</a
          >
          <a
            href="#"
            class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >Reports</a
          >
        </div>
        <div class="border-t border-gray-700 pb-3 pt-4">
          <div class="flex items-center px-5">
            <div class="flex-shrink-0">
              <img
                class="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div class="ml-3">
              <div class="text-base font-medium leading-none text-white">
                Tom Cook
              </div>
              <div class="text-sm font-medium leading-none text-gray-400">
                tom@example.com
              </div>
            </div>
            <button
              type="button"
              class="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span class="sr-only">View notifications</span>
              <svg
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
    <!-- banner -->
    <main>
      <div class="mx-auto">
        <div class="w-screen relative bottom-32 -z-0">
          <img
            src="https://ld-wt73.template-help.com/intense/landing-corporate/images/slide-2.jpg"
            alt=""
          />
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fab, fas); // 导入fab（品牌）图标
</script>
<style scoped>
.banner {
  opacity: 0.5;
  position: fixed;
  top: 0;
  z-index: -1;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  margin: auto;
}
.banner img{
    width: 100%;
}
</style>