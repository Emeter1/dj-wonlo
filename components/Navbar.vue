<template>
  <nav
    :class="[
      'fixed w-full z-50 transition-all duration-300',
      isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6',
    ]"
  >
    <div class="container-custom flex justify-between items-center">
      <NuxtLink to="/" class="flex items-center gap-2">
        <span
          :class="[
            'text-2xl font-extrabold tracking-tight',
            isScrolled ? 'text-primary' : 'text-white',
          ]"
          >JFK</span
        >
      </NuxtLink>

      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center gap-8">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          :class="[
            'font-medium hover:text-primary transition-colors',
            isScrolled ? 'text-gray-700' : 'text-white',
          ]"
        >
          {{ link.name }}
        </NuxtLink>
        <NuxtLink to="/contact" class="btn-primary py-2 px-5 text-sm">
          Contact Us
        </NuxtLink>
      </div>

      <!-- Mobile Menu Button -->
      <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="md:hidden">
        <Menu
          v-if="!isMobileMenuOpen"
          :class="isScrolled ? 'text-gray-800' : 'text-white'"
        />
        <X v-else :class="isScrolled ? 'text-gray-800' : 'text-white'" />
      </button>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden bg-white absolute top-full left-0 w-full shadow-xl border-t"
      >
        <div class="container-custom py-6 flex flex-col gap-4">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            @click="isMobileMenuOpen = false"
            class="text-gray-700 font-medium hover:text-primary py-2"
          >
            {{ link.name }}
          </NuxtLink>
          <NuxtLink
            to="/contact"
            @click="isMobileMenuOpen = false"
            class="btn-primary text-center mt-2"
          >
            Contact Us
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { Menu, X } from "lucide-vue-next";
import { ref, onMounted, onUnmounted } from "vue";

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Thought Leadership", path: "/thought-leadership" },
  { name: "News", path: "/news" },
  { name: "Gallery", path: "/gallery" },
];

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
