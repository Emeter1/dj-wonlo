<template>
  <footer class="bg-[#1a1a1a] text-white py-16 font-sans">
    <div class="container-custom">
      <!-- Top Section -->
      <div
        class="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-700 pb-12"
      >
        <!-- Brand Info -->
        <div>
          <div class="mb-4">
            <!-- Placeholder for Logo if image is not available, using styled text based on image -->
            <h2 class="text-3xl font-extrabold flex items-center gap-1">
              <span class="text-white">JKF</span>
            </h2>
          </div>
          <h3 class="text-xl font-medium text-white mb-2">
            John Kayode Fayemi, PhD.
          </h3>
          <p class="text-gray-400 text-xs leading-relaxed max-w-sm">
            Governor of Ekiti State, Nigeria (2010–2014; 2018–2022) | Minister
            of Mines & Steel Development (2015-2018) | Chairman, Nigeria
            Governors’ Forum (2019 - 2022) | Pioneer President, Forum of Regions
            of Africa (2022– ).
          </p>
        </div>

        <!-- Quick Links -->
        <div class="md:pl-12">
          <h3 class="text-base font-bold text-white mb-6">Quick Links</h3>
          <ul class="flex flex-col gap-3">
            <li v-for="link in navLinks" :key="link.path">
              <NuxtLink
                :to="link.path"
                class="text-gray-400 hover:text-white transition-colors text-sm"
              >
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Subscribe -->
        <div>
          <h3 class="text-base font-bold text-white mb-6">Subscribe</h3>
          <form class="flex w-full">
            <input
              type="email"
              placeholder="Stay updated on new publications"
              class="bg-white text-gray-800 placeholder-gray-400 px-4 py-3 w-full border-none outline-none text-sm"
            />
            <button
              class="bg-green-700 hover:bg-green-800 text-white px-5 flex items-center justify-center transition-colors"
            >
              <ArrowRight class="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>

      <!-- Bottom Section -->
      <div
        class="pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
      >
        <!-- Social Icons -->
        <div class="flex gap-4">
          <a
            href="#"
            class="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors"
          >
            <Linkedin class="w-4 h-4" />
          </a>
          <a
            href="#"
            class="w-8 h-8 rounded-full border-gray-600 border flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors"
          >
            <Facebook class="w-4 h-4" />
          </a>
          <a
            href="#"
            class="w-8 h-8 rounded-full border-gray-600 border flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors"
          >
            <Twitter class="w-4 h-4" />
          </a>
        </div>

        <!-- Copyright -->
        <p class="text-gray-400 text-xs">
          &copy; {{ new Date().getFullYear() }} Dr. John Kayode Fayemi. All
          Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Twitter, Linkedin, Facebook, ArrowRight } from "lucide-vue-next";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Thought Leadership", path: "/thought-leadership" },
  { name: "News & Updates", path: "/news" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact Us", path: "action:contact" },
];
</script>
