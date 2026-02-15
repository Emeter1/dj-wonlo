<template>
  <div class="bg-dj-black min-h-screen text-white font-sans selection:bg-dj-gold selection:text-dj-black">
    <Navbar />
    <main class="pt-24 pb-12">
      <section class="container mx-auto px-6">
        <h1 class="text-4xl md:text-6xl text-center text-dj-primary font-display mb-12 tracking-widest title-glow fade-in-up">ALL MIXTAPES</h1>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(mix, i) in allMixes" :key="i" class="bg-dj-paper p-6 rounded-lg border border-white/5 hover:border-dj-primary/50 transition-all duration-300 group cursor-pointer shadow-lg hover:shadow-dj-primary/10 hover:-translate-y-2 fade-in-up" :style="{ animationDelay: `${i * 100}ms` }">
            <!-- Mix Image -->
            <div class="aspect-square bg-dj-dark mb-4 relative overflow-hidden flex items-center justify-center rounded-md">
              <img :src="mix.image" class="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" :alt="mix.title">
              <div class="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors"></div>
              
              <!-- Play Button Overlay -->
              <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                 <div class="w-16 h-16 rounded-full border-2 border-dj-primary flex items-center justify-center bg-black/60 backdrop-blur-sm hover:scale-110 transition-transform">
                    <svg class="w-8 h-8 text-dj-primary ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                 </div>
              </div>
            </div>
            
            <h3 class="text-white font-display text-xl mb-1 truncate group-hover:text-dj-primary transition-colors">{{ mix.title }}</h3>
            <p class="text-dj-muted text-sm uppercase tracking-wider">{{ mix.genre }} • {{ mix.duration }}</p>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import miniDjImg from '~/assets/css/img/mini_dj.jpg'

// Titles as requested: Dj Mixtape 1 to 8
const allMixes = [
  { 
    title: 'Dj Mixtape 1', 
    genre: 'Deep House', 
    duration: '58:20',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800&auto=format&fit=crop'
  },
  { 
    title: 'Dj Mixtape 2', 
    genre: 'Techno', 
    duration: '1:12:45', 
    image: miniDjImg
  },
  { 
    title: 'Dj Mixtape 3', 
    genre: 'Progressive', 
    duration: '45:10', 
    image: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=800&auto=format&fit=crop'
  },
  { 
    title: 'Dj Mixtape 4', 
    genre: 'Minimal', 
    duration: '1:02:15', 
    image: miniDjImg
  },
  { 
    title: 'Dj Mixtape 5', 
    genre: 'Tech House', 
    duration: '55:30', 
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop' 
  },
  { 
    title: 'Dj Mixtape 6', 
    genre: 'Trance', 
    duration: '1:20:00', 
    image: miniDjImg
  },
  { 
    title: 'Dj Mixtape 7', 
    genre: 'Ambient', 
    duration: '48:45', 
    image: miniDjImg
  },
  { 
    title: 'Dj Mixtape 8', 
    genre: 'Experimental', 
    duration: '1:15:20', 
    image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=800&auto=format&fit=crop'
  }
]
</script>

<style scoped>
.title-glow {
  text-shadow: 0 0 20px rgba(0, 119, 221, 0.3);
}
.fade-in-up {
  opacity: 0;
  animation: fadeInUp 0.8s ease-out forwards;
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
