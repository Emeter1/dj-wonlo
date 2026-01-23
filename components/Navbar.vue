<template>
  <nav
    :class="[
      'fixed w-full z-50 transition-all duration-300',
      isScrolled ? 'bg-black shadow-md py-4' : 'bg-black py-6',
    ]"
  >
    <div class="px-6 flex justify-between items-center">
      <NuxtLink to="/" class="flex items-center gap-2">
        <img src="~/assets/img/lgo.png" alt="JFK Logo" class="h-10 w-auto" />
      </NuxtLink>

      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center gap-8">
        <div v-for="link in navLinks" :key="link.path">
          <button
            v-if="link.path.startsWith('action:')"
            @click="handleNavClick(link)"
            class="relative group font-medium text-white transition-colors pb-1"
          >
            {{ link.name }}
            <span
              class="absolute left-0 bottom-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"
            ></span>
          </button>
          <NuxtLink
            v-else
            :to="link.path"
            class="relative group font-medium text-white transition-colors pb-1"
          >
            {{ link.name }}
            <span
              class="absolute left-0 bottom-0 w-full h-[2px] bg-white transition-transform duration-300 ease-in-out origin-left"
              :class="
                isClient && isActive(link.path)
                  ? 'scale-x-100'
                  : 'scale-x-0 group-hover:scale-x-100'
              "
            ></span>
          </NuxtLink>
        </div>
      </div>

      <!-- Mobile Menu Button -->
      <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="md:hidden">
        <Menu v-if="!isMobileMenuOpen" class="text-white" />
        <X v-else class="text-white" />
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
          <div v-for="link in navLinks" :key="link.path">
            <button
              v-if="link.path.startsWith('action:')"
              @click="handleNavClick(link)"
              class="w-full text-left text-gray-700 font-medium hover:text-[#007A33] py-2"
            >
              {{ link.name }}
            </button>
            <NuxtLink
              v-else
              :to="link.path"
              @click="isMobileMenuOpen = false"
              class="block text-gray-700 font-medium hover:text-[#007A33] py-2"
            >
              {{ link.name }}
            </NuxtLink>
          </div>
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
const isClient = ref(false);

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Thought Leadership", path: "/thought-leadership" },
  { name: "News & Updates", path: "/news" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact Us", path: "action:contact" },
];

const handleNavClick = (link) => {
  isMobileMenuOpen.value = false;
  if (link.path === "action:contact") {
    if (window.Tawk_API && window.Tawk_API.toggle) {
      window.Tawk_API.toggle();
    }
  }
};

const isActive = (path) => {
  // Return false on server to avoid hydration mismatches
  if (import.meta.server) return false;
  if (path === "/") return route.path === "/";
  if (path.startsWith("action:")) return false;
  return route.path === path || route.path.startsWith(path + "/");
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  isClient.value = true;
  handleScroll();
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.container-custom {
  @apply container mx-auto px-6;
}
</style>
