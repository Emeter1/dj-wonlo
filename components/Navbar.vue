<template>
  <nav 
    class="fixed top-0 w-full z-50 transition-all duration-300 border-b border-white/5"
    :class="[isScrolled ? 'bg-dj-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6']"
  >
    <div class="container mx-auto px-6 flex items-center justify-between">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-3 group no-underline">
        <img src="~/assets/css/img/dj_wonlo_no_text-removebg-preview.png" alt="DJ Wonlo Logo" class="h-10 w-auto group-hover:scale-110 transition-transform duration-300" />
        <div class="text-2xl font-display font-bold tracking-widest text-white uppercase">
          <span class="text-dj-primary group-hover:text-white transition-colors duration-300">DJ</span> 
          <span class="group-hover:text-dj-primary transition-colors duration-300"> Wonlo</span>
        </div>
      </NuxtLink>

      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center gap-8">
        <template v-for="link in links" :key="link.name">
          <!-- Scroll Link for Home Page -->
          <a 
            v-if="link.isScroll && isHome"
            :href="link.href"
            @click.prevent="scrollToSection(link.href)"
            class="text-sm font-display uppercase tracking-widest text-gray-300 hover:text-dj-primary transition-colors duration-300 relative group cursor-pointer"
          >
            {{ link.name }}
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-dj-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
          
          <!-- Regular Link for Other Pages -->
          <NuxtLink 
            v-else
            :to="link.href"
            class="text-sm font-display uppercase tracking-widest text-gray-300 hover:text-dj-primary transition-colors duration-300 relative group"
            :class="{ 'text-dj-primary': route.path === link.href && !link.isScroll }"
          >
            {{ link.name }}
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-dj-primary transition-all duration-300 group-hover:w-full"></span>
          </NuxtLink>
        </template>
        
        <NuxtLink 
          to="/contact" 
          class="px-6 py-2 border border-dj-primary text-dj-primary font-display text-sm uppercase tracking-widest hover:bg-dj-primary hover:text-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,119,221,0.4)]"
        >
          Book Now
        </NuxtLink>
      </div>

      <!-- Mobile Menu Button -->
      <button @click="isOpen = !isOpen" class="md:hidden text-white hover:text-dj-primary transition-colors focus:outline-none">
        <Menu v-if="!isOpen" class="w-8 h-8" />
        <X v-else class="w-8 h-8" />
      </button>
    </div>

    <!-- Mobile Menu Overlay -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform -translate-y-10 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-10 opacity-0"
    >
      <div v-if="isOpen" class="md:hidden absolute top-full left-0 w-full bg-dj-black/95 backdrop-blur-xl border-b border-white/10 shadow-2xl">
        <div class="flex flex-col p-6 space-y-4">
          <template v-for="link in links" :key="link.name">
              <a 
                v-if="link.isScroll && isHome"
                :href="link.href"
                @click.prevent="scrollToSection(link.href); isOpen = false"
                class="text-left text-lg font-display uppercase tracking-widest text-white hover:text-dj-primary transition-colors py-2 border-b border-white/5"
              >
                {{ link.name }}
              </a>
              <NuxtLink 
                v-else
                :to="link.href"
                @click="isOpen = false"
                class="text-lg font-display uppercase tracking-widest text-white hover:text-dj-primary transition-colors py-2 border-b border-white/5"
              >
                {{ link.name }}
              </NuxtLink>
          </template>
          <div class="pt-4">
            <NuxtLink 
              to="/contact" 
              @click="isOpen = false"
              class="block w-full px-6 py-3 border border-dj-primary text-dj-primary text-center font-display uppercase tracking-widest font-bold hover:bg-dj-primary hover:text-white transition-colors"
            >
              Book Now
            </NuxtLink>
          </div>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { Menu, X } from 'lucide-vue-next'

const route = useRoute()
const isOpen = ref(false)
const isScrolled = ref(false)

const isHome = computed(() => route.path === '/')

const links = [
  { name: 'Home', href: '/', isScroll: false },
  { name: 'Bio', href: '/#bio', isScroll: true },
  { name: 'Music', href: '/#music', isScroll: true },
  { name: 'Events', href: '/#events', isScroll: true },
  { name: 'Gallery', href: '/#gallery', isScroll: true },
]

const checkScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const scrollToSection = (href) => {
  // Extract id from href (e.g., '/#bio' -> 'bio')
  if (href === '/') {
     window.scrollTo({ top: 0, behavior: 'smooth' })
     return
  }
  
  const id = href.split('#')[1]
  if (!id) return
  
  const element = document.getElementById(id)
  if (element) {
    const offset = 80 // Height of navbar + buffer
    const bodyRect = document.body.getBoundingClientRect().top
    const elementRect = element.getBoundingClientRect().top
    const elementPosition = elementRect - bodyRect
    const offsetPosition = elementPosition - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll)
  checkScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})
</script>

<style scoped>
/* Ensure smooth transition for mobile menu */
</style>
