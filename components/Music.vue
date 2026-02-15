<template>
  <section id="music" class="py-24 bg-dj-black relative overflow-hidden">
    <!-- Background Texture -->
    <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
    
    <!-- Ambient Glow -->
    <div class="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-dj-primary/20 rounded-full blur-[100px] pointer-events-none"></div>

    <div class="container mx-auto px-6 relative z-10">
      <h2 class="text-4xl md:text-5xl text-center text-white font-display mb-16 tracking-widest title-glow">LATEST SOUNDS</h2>
      
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        <!-- Featured Mix (Left - Larger) -->
        <div class="lg:col-span-7 group relative">
          <div class="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-dj-paper">
            <!-- Featured Image -->
            <div class="aspect-video relative overflow-hidden">
              <img :src="featuredMix.image" class="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" :alt="featuredMix.title">
              <div class="absolute inset-0 bg-gradient-to-t from-dj-black via-transparent to-transparent"></div>
              
              <!-- Play Button (Centered & Glowing) -->
              <a :href="featuredMix.link" target="_blank" class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div class="w-20 h-20 rounded-full bg-dj-primary/90 text-white flex items-center justify-center shadow-[0_0_30px_rgba(0,119,221,0.6)] hover:scale-110 transition-transform duration-300 backdrop-blur-md border border-white/20">
                  <svg class="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                </div>
              </a>
            </div>

            <!-- Featured Info (Bottom Overlay) -->
            <div class="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-dj-black to-transparent">
              <div class="flex items-end justify-between">
                <div>
                  <span class="inline-block px-3 py-1 mb-3 text-xs font-bold tracking-widest text-white uppercase bg-dj-primary rounded-full">New Release</span>
                  <h3 class="text-3xl md:text-4xl font-display text-white mb-2">{{ featuredMix.title }}</h3>
                  <p class="text-dj-muted uppercase tracking-wider text-sm">{{ featuredMix.genre }} • {{ featuredMix.duration }}</p>
                </div>
              </div>
            </div>
            
             <!-- Audio Visualizer Animation (Bottom Border) -->
            <div class="absolute bottom-0 left-0 w-full h-1 flex items-end gap-[2px] opacity-50 group-hover:opacity-100 transition-opacity">
              <div v-for="n in 40" :key="n" class="w-full bg-dj-primary animate-music-bar" :style="{ animationDuration: `${0.5 + Math.random()}s` }"></div>
            </div>
          </div>
        </div>

        <!-- Recent Mixes List (Right - Smaller) -->
        <div class="lg:col-span-5 space-y-6">
          <h3 class="text-xl font-display text-dj-muted uppercase tracking-widest mb-6 border-b border-white/10 pb-2">More Mixes</h3>
          
          <div v-for="(mix, i) in recentMixes" :key="i" class="group/item flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-dj-primary/30 transition-all duration-300 cursor-pointer">
             <div class="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 relative">
               <img :src="mix.image" class="w-full h-full object-cover opacity-70 group-hover/item:opacity-100 transition-opacity" :alt="mix.title">
               <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover/item:opacity-100 transition-opacity bg-black/40">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
               </div>
             </div>
             
             <div class="flex flex-col justify-center">
               <h4 class="text-lg font-display text-white group-hover/item:text-dj-primary transition-colors">{{ mix.title }}</h4>
               <p class="text-dj-muted text-xs uppercase tracking-wider mb-2">{{ mix.genre }}</p>
               <span class="text-xs text-gray-500 flex items-center gap-1">
                 <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                 {{ mix.duration }}
               </span>
             </div>
          </div>

          <div class="pt-4 text-center lg:text-left">
             <NuxtLink to="/music" class="text-sm font-bold uppercase tracking-widest text-dj-primary hover:text-white transition-colors flex items-center gap-2 group/link">
               View All Tracks 
               <svg class="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
             </NuxtLink>
          </div>
        </div>
        
      </div>
    </div>
  </section>
</template>

<script setup>
// Explicit import for local assets
import miniDjImg from '~/assets/css/img/mini_dj.jpg'

const featuredMix = {
  title: 'Midnight Resonance',
  genre: 'Deep Techno',
  duration: '1:12:45',
  image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200&auto=format&fit=crop',
  link: 'https://soundcloud.com/dj-wonlo'
}

const recentMixes = [
  { 
    title: 'Warehouse Vibes Vol. 4', 
    genre: 'Techno', 
    duration: '58:20',
    image: miniDjImg 
  },
  { 
    title: 'Sunset Sessions', 
    genre: 'Progressive House', 
    duration: '45:10', 
    image: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=800&auto=format&fit=crop'
  },
  { 
    title: 'Afterhours Edit', 
    genre: 'Deep House', 
    duration: '1:05:30', 
    image: 'https://images.unsplash.com/photo-1514525253440-b393452e8d26?q=80&w=800&auto=format&fit=crop'
  }
]
</script>

<style scoped>
.title-glow {
  text-shadow: 0 0 30px rgba(0, 119, 221, 0.4);
}

@keyframes music-bar {
  0%, 100% { height: 10%; }
  50% { height: 100%; }
}
.animate-music-bar {
  animation-name: music-bar;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}
</style>
