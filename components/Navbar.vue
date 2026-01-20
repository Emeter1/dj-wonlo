<template>
  <nav :class="[
    'fixed w-full z-50 transition-all duration-300',
    isScrolled ? 'bg-black shadow-md py-4' : 'bg-black py-6',
  ]">
    <div class="container-custom flex justify-between items-center">
      <NuxtLink to="/" class="flex items-center gap-2">
        <img src="~/assets/img/lgo.png" alt="JFK Logo" class="h-10 w-auto" />
      </NuxtLink>

      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center gap-8">
        <NuxtLink v-for="link in navLinks" :key="link.path" :to="link.path"
          class="relative group font-medium text-white transition-colors pb-1">
          {{ link.name }}
          <span
            class="absolute left-0 bottom-0 w-full h-[2px] bg-white transition-transform duration-300 ease-in-out origin-left"
            :class="isActive(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'"></span>
        </NuxtLink>
      </div>

      <!-- Mobile Menu Button -->
      <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="md:hidden">
        <Menu v-if="!isMobileMenuOpen" class="text-white" />
        <X v-else class="text-white" />
      </button>
    </div>

    <!-- Mobile Menu -->
    <Transition enter-active-class="transition duration-200 ease-out" enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0" leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-4">
      <div v-if="isMobileMenuOpen" class="md:hidden bg-white absolute top-full left-0 w-full shadow-xl border-t">
        <div class="container-custom py-6 flex flex-col gap-4">
          <NuxtLink v-for="link in navLinks" :key="link.path" :to="link.path" @click="isMobileMenuOpen = false"
            class="text-gray-700 font-medium hover:text-primary py-2">
            {{ link.name }}
          </NuxtLink>

        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { Menu, X } from "lucide-vue-next";
import { ref, onMounted, onUnmounted } from "vue";

const route = useRoute();
const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Thought Leadership", path: "/thought-leadership" },
  { name: "News & Updates", path: "/news" },
  { name: "Gallery", path: "/gallery" },
];

const isActive = (path) => {
  if (path === '/') return route.path === '/';
  return route.path === path || route.path.startsWith(path + '/');
};

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
