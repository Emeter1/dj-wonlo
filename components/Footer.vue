<template>
  <footer class="bg-gray-900 text-white py-16">
    <div class="container-custom">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
        <!-- Brand Info -->
        <div class="col-span-1 md:col-span-1">
          <h2 class="text-2xl font-extrabold text-white mb-6">JFK</h2>
          <p class="text-gray-400 leading-relaxed mb-6">
            Governor • Minister • Scholar • Global Advisor. Committed to
            reclaiming our land and restoring our values.
          </p>
          <div class="flex gap-4">
            <a
              href="#"
              class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors"
            >
              <Twitter class="w-5 h-5" />
            </a>
            <a
              href="#"
              class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors"
            >
              <Linkedin class="w-5 h-5" />
            </a>
            <a
              href="#"
              class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors"
            >
              <Facebook class="w-5 h-5" />
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-lg font-bold mb-6">Quick Links</h3>
          <ul class="flex flex-col gap-4">
            <li v-for="link in navLinks" :key="link.path">
              <NuxtLink
                :to="link.path"
                class="text-gray-400 hover:text-white transition-colors"
              >
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Resources -->
        <div>
          <h3 class="text-lg font-bold mb-6">Resources</h3>
          <ul class="flex flex-col gap-4">
            <li>
              <a
                href="#"
                class="text-gray-400 hover:text-white transition-colors"
                >Publications</a
              >
            </li>
            <li>
              <a
                href="#"
                class="text-gray-400 hover:text-white transition-colors"
                >Speeches</a
              >
            </li>
            <li>
              <a
                href="#"
                class="text-gray-400 hover:text-white transition-colors"
                >Videos</a
              >
            </li>
            <li>
              <a
                href="#"
                class="text-gray-400 hover:text-white transition-colors"
                >Achievements</a
              >
            </li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div>
          <h3 class="text-lg font-bold mb-6">Newsletter</h3>
          <p class="text-gray-400 mb-6">
            Get latest updates from Dr. Fayemi directly to your inbox.
          </p>
          <form class="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Your email address"
              class="bg-gray-800 border-none rounded-md px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-all"
            />
            <button class="btn-primary w-full">Subscribe</button>
          </form>
        </div>
      </div>

      <div
        class="mt-16 pt-8 border-t border-gray-800 flex flex-col md:row justify-between items-center gap-4 text-gray-500 text-sm"
      >
        <p>
          &copy; {{ new Date().getFullYear() }} Dr. John Kayode Fayemi. All
          rights reserved.
        </p>
        <div class="flex gap-8">
          <a href="#" class="hover:text-white">Privacy Policy</a>
          <a href="#" class="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Twitter, Linkedin, Facebook } from "lucide-vue-next";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Thought Leadership", path: "/thought-leadership" },
  { name: "News", path: "/news" },
  { name: "Gallery", path: "/gallery" },
];
</script>
