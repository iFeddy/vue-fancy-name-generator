<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="flex flex-col min-h-screen">
    <Disclosure as="nav" class="bg-gray-50 shadow-md fixed w-full" v-slot="{ open }">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <span class="text-gray-900 font-bold"><span class="text-indigo-300">BGMI</span> <span
                  class="text-indigo-500">Name</span> <span class="text-indigo-700">Generator</span></span>
            </div>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <template v-for="(item, itemIdx) in navigation" :key="item">
                  <template v-if="(itemIdx === 0)">
                    <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                    <a :href="routes[itemIdx]"
                      class="bg-indigo-600 text-white px-3 py-2 rounded-md text-sm font-medium">{{ item }}</a>
                  </template>
                  <a v-else href="#"
                    class="text-gray-400 hover:bg-indigo-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">{{ item }}</a>
                </template>
              </div>
            </div>
          </div>
          <div class="-mr-2 flex md:hidden">
            <!-- Mobile menu button -->
            <DisclosureButton
              class="bg-indigo-600 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-indigo-700 focus:outline-none focus:ring-white">
              <span class="sr-only">Open main menu</span>
              <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <template v-for="(item, itemIdx) in navigation" :key="item">
            <template v-if="(itemIdx === 0)">
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
              <a :href="routes[itemIdx]"
                class="bg-indigo-600 text-white block px-3 py-2 rounded-md text-base font-medium">{{ item }}</a>
            </template>
            <a v-else href="#"
              class="text-gray-400 hover:bg-indigo-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">{{ item }}</a>
          </template>
        </div>
      </DisclosurePanel>
    </Disclosure>

    <header class="bg-indigo-500 pt-16 text-white">
      <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold">
          BGMI Name Generator
        </h1>
      </div>
    </header>

    <main class="flex flex-col w-full overflow-hidden items-center justify-start flex-1">
      <div class="relative w-full max-w-lg mt-20">
        <div class="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full
         mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div class="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full
         mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        <div class="absolute top-20 left-20 w-72 h-72 bg-pink-400 rounded-full
         mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-5000"></div>
        <div class="shadow-xl mx-6  p-5 rounded-xl border relative bg-white">
          <h2 class="text-indigo-500 font-bold text-md flex">
            <BeakerIcon class="block h-6 w-6 mr-3" aria-hidden="true" /> BGMI Name Generator</h2>
          <div class="px-4 py-6">
            <transition name="fade" mode="out-in">
              <div class="bg-gray-100 px-2 pt-6 pb-4 rounded-xl text-indigo-500 text-xl text-center relative"
                v-if="result != ''">
                <span>{{result}}</span>
                <div class="absolute top-2 right-4 bg-indigo-500 p-2 rounded-full text-white cursor-pointer
                    hover:bg-indigo-600 hover:text-white transition-colors ease-in duration-200"
                  v-on:click="copyClipboard()" v-tooltip="'Copy to Clipboard'">
                  <ClipboardIcon class="h-5 w-5" />
                </div>
              </div>
            </transition>
            <div class="relative">
              <div class="absolute right-3 top-2">
                <span
                  class="inline-flex items-center justify-center px-3 py-2 text-xs font-bold leading-none text-indigo-100 bg-indigo-600 rounded-full">{{charactersLeft}}</span>
              </div>
              <label for="fancy" class="hidden">BGMI</label>
              <input autocomplete="" type="text" maxlength="50" pattern="[a-zA-Z0-9-]"
                class="mt-6 shadow block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                id="fancy" name="fancy" placeholder="Enter your Name here..." v-model="name"
                v-on:keypress="isAllowed($event)">
            </div>
          </div>
          <div class="sm:flex sm:justify-center lg:justify-end">
            <div class="sm:mr-3">
              <a href="#" v-on:click="clear()"
                class="w-full flex items-center justify-center px-8 py-2 border border-transparent text-base rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-2 md:px-10">
                Clear
              </a>
            </div>
            <div class="mt-3 sm:mt-0 rounded-md shadow">
              <a href="#" v-on:click="generateName()"
                class="w-full flex items-center justify-center px-8 py-2 border border-transparent text-base rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-2 md:px-10">
                Generate
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer class="shadow-xl w-full border">
      <div class="mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div class="w-full text-center flex flex-row items-center align-middle justify-center space-x-4">
          <p class="text-base text-indigo-600">
            <span class="text-gray-900 font-bold"><span class="text-indigo-300">Fancy</span> <span
                class="text-indigo-500">Name</span> <span class="text-indigo-700">Generator</span></span>
          </p>
          <p class="text-base text-indigo-600">
            <span class="text-base text-indigo-600">Made with <span class="text-base text-red-400">&hearts;</span> <a
                href="https://www.latirus.com/" target="_blank" class="text-base underline">
                <span class="text-base text-indigo-600">Latirus</span>
              </a></span>
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
  import {
    ref
  } from "vue";
  import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
  } from "@headlessui/vue";

  import {
    BellIcon,
    MenuIcon,
    BadgeCheckIcon,
    XIcon,
    ClipboardIcon
  } from "@heroicons/vue/outline";
  import {
    BeakerIcon
  } from "@heroicons/vue/solid";

  import {
    Randomizee
  } from './../modules/randomizee.js';

  const navigation = ["Dashboard"];
  const routes = ["/"];
  const maxCharacters = 50;

  export default {
    components: {
      Disclosure,
      DisclosureButton,
      DisclosurePanel,
      Menu,
      MenuButton,
      MenuItem,
      MenuItems,
      BellIcon,
      MenuIcon,
      XIcon,
      BeakerIcon,
      BadgeCheckIcon,
      ClipboardIcon
    },
    computed: {
      charactersLeft() {
        var char = this.name.length,
          limit = this.maxCharacters;

        return char + " / " + limit;
      }
    },
    setup() {
      const open = ref(false);
      const name = ref("");
      const result = ref("");

      return {
        navigation,
        routes,
        maxCharacters,
        open,
        name,
        result,
      };
    },
    methods: {
      //clear variables 
      clear() {
        this.name = "";
        this.result = "";
      },
      copyClipboard() {
        var letThis = this;
        var text = this.result;
        navigator.clipboard.writeText(text).then(function () {
          letThis.$toast.show(
            '<div class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">' +
            '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>' +
            '<div class="ml-2 whitespace-nowrap">Copied to clipboard</div></div>', {
              position: "top-right"
            });
        }, function (err) {
          letThis.$toast.error(
            '<div class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">' +
            '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>' +
            '<div class="ml-2 whitespace-nowrap">' + err + '</div></div>', {
              position: "top-right"
            });
        });
      },
      isAllowed(e) {
        let char = String.fromCharCode(e.keyCode);
        if (/^[^-\s]+$/.test(char)) {
          return true;
        } else {
          e.preventDefault();
        }
      },
      generateName() {
        this.result = Randomizee(this.name);
      }
    },
  };
</script>