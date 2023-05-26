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
                <a href="#" class="rounded-md py-2 text-sm font-medium" aria-current="page">
                  <font-awesome-icon icon="fa-brands fa-facebook" />
                </a>
                <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md py-2 text-sm font-medium">
                  <font-awesome-icon icon="fa-brands fa-twitter" />
                </a>
                <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md py-2 text-sm font-medium">
                  <font-awesome-icon icon="fa-brands fa-google-plus-g" />
                </a>
                <a href="#"
                  class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md py-2 text-sm font-medium"><font-awesome-icon
                    icon="fa-brands fa-line" />
                </a>
                <span>|</span>
                <span class="tracking-wider">6036 Richmond hwy., Alexandria, VA, 2230</span>
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
            <button type="button"
              class="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              aria-controls="mobile-menu" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <!-- Menu open: "hidden", Menu closed: "block" -->
              <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              <!-- Menu open: "block", Menu closed: "hidden" -->
              <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile menu, show/hide based on menu state. -->
      <div class="md:hidden" id="mobile-menu">
        <div class="space-y-1 px-2 pb-3 pt-2 sm:px-3">
          <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
          <a href="#" class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
            aria-current="page">Dashboard</a>
          <a href="#"
            class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>
          <a href="#"
            class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
          <a href="#"
            class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
          <a href="#"
            class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Reports</a>
        </div>
        <div class="border-t border-gray-700 pb-3 pt-4">
          <div class="flex items-center px-5">
            <div class="flex-shrink-0">
              <img class="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="" />
            </div>
            <div class="ml-3">
              <div class="text-base font-medium leading-none text-white">
                Tom Cook
              </div>
              <div class="text-sm font-medium leading-none text-gray-400">
                tom@example.com
              </div>
            </div>
            <button type="button"
              class="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <span class="sr-only">View notifications</span>
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
    <!-- banner -->
    <!-- opacity-50 -->
    <main>
      <div class="mx-auto opacity-50">
        <div class="w-screen">
          <!-- header -->
          <header class="z-10 relative max-w-screen-xl mx-auto top-8 text-white">
            <nav class="mx-auto flex justify-between absolute w-full" aria-label="Global">


              <div class="bg-white w-1/6 flex p-8">
                <a href="#" class="flex w-full items-center justify-center">
                  <img class="w-4/4" src="https://ld-wt73.template-help.com/intense/landing-corporate/images/logo-default-191x55.png" alt="">
                </a>
              </div>

              <!-- <div class="flex lg:hidden ">
                <button type="button"
                  class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                  <span class="sr-only">Open main menu</span>
                  <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                    aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                </button>
              </div> -->


              <div class="hidden lg:flex lg:gap-x-12 bg-slate-800 opacity-80 w-4/5 items-center">
                <a href="#" class="text-sm font-semibold leading-6 p-8">Product</a>
                <a href="#" class="text-sm font-semibold leading-6 p-8">Features</a>
                <a href="#" class="text-sm font-semibold leading-6 p-8">Marketplace</a>
                <a href="#" class="text-sm font-semibold leading-6 p-8">Company</a>
              </div>
            
            </nav>
            <!-- Mobile menu, show/hide based on menu open state. -->
            <div class="lg:hidden" role="dialog" aria-modal="true">
              <!-- Background backdrop, show/hide based on slide-over state. -->
              <div class="fixed inset-0 z-10"></div>
              <div
                class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div class="flex items-center justify-between">
                  <a href="#" class="-m-1.5 p-1.5">
                    <span class="sr-only">Your Company</span>
                    <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="">
                  </a>
                  <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700">
                    <span class="sr-only">Close menu</span>
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                      aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div class="mt-6 flow-root">
                  <div class="-my-6 divide-y divide-gray-500/10">
                    <div class="space-y-2 py-6">
                      <div class="-mx-3">
                        <button type="button"
                          class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          aria-controls="disclosure-1" aria-expanded="false">
                          Product
                          <!--
                  Expand/collapse icon, toggle classes based on menu open state.

                  Open: "rotate-180", Closed: ""
                -->
                          <svg class="h-5 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd"
                              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                              clip-rule="evenodd" />
                          </svg>
                        </button>
                        <!-- 'Product' sub-menu, show/hide based on menu state. -->
                        <div class="mt-2 space-y-2" id="disclosure-1">
                          <a href="#"
                            class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">Analytics</a>
                          <a href="#"
                            class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">Engagement</a>
                          <a href="#"
                            class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">Security</a>
                          <a href="#"
                            class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">Integrations</a>
                          <a href="#"
                            class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">Automations</a>
                          <a href="#"
                            class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">Watch
                            demo</a>
                          <a href="#"
                            class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">Contact
                            sales</a>
                        </div>
                      </div>
                      <a href="#"
                        class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Features</a>
                      <a href="#"
                        class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Marketplace</a>
                      <a href="#"
                        class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Company</a>
                    </div>
                    <div class="py-6">
                      <a href="#"
                        class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log
                        in</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div class=" relative bottom-24">
            <img src="https://ld-wt73.template-help.com/intense/landing-corporate/images/slide-2.jpg" alt="" />
          </div>
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

.banner img {
  width: 100%;
}
/* header */
header.max-w-screen-xl{
  max-width: 1390px !important;
}

</style>