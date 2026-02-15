<template>
  <section id="events" class="py-24 bg-dj-dark relative">
    <div class="container mx-auto px-6 max-w-5xl">
      <div class="flex items-end justify-between mb-12">
        <h2 class="text-4xl md:text-5xl text-white font-display tracking-widest title-glow">TOUR DATES</h2>
        <a href="#" class="hidden md:inline-block text-dj-primary hover:text-white transition-colors uppercase tracking-wider text-sm font-bold">View Full Calendar -></a>
      </div>

      <div class="space-y-4">
        <div v-for="(event, i) in events" :key="i" class="group relative overflow-hidden bg-dj-paper border border-white/5 rounded-xl hover:border-dj-primary/40 transition-all duration-300">
          <div class="absolute inset-0 bg-gradient-to-r from-dj-primary/0 via-dj-primary/0 to-dj-primary/5 group-hover:via-dj-primary/5 transition-all duration-500"></div>
          
          <div class="relative z-10 p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <!-- Date -->
            <div class="flex-shrink-0 text-center md:text-left min-w-[100px]">
              <div class="text-dj-primary font-bold uppercase tracking-widest text-sm mb-1">{{ event.month }}</div>
              <div class="text-4xl font-display text-white opacity-90">{{ event.day }}</div>
            </div>
            
            <!-- Venue Info -->
            <div class="flex-grow text-center md:text-left">
              <h3 class="text-2xl font-display text-white mb-2 group-hover:text-dj-primary transition-colors">{{ event.venue }}</h3>
              <p class="text-gray-400 flex items-center justify-center md:justify-start gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                {{ event.location }}
              </p>
            </div>
            
            <!-- Action -->
            <div class="flex-shrink-0">
               <button class="px-8 py-3 bg-transparent border border-white/20 text-white font-display text-sm tracking-widest uppercase hover:bg-dj-primary hover:border-dj-primary hover:text-white transition-all duration-300 rounded-sm">
                 Tickets
               </button>
            </div>
          </div>
        </div>
      </div>
      
      <div class="mt-8 text-center md:hidden">
        <a href="#" class="inline-block text-dj-primary hover:text-white transition-colors uppercase tracking-wider text-sm font-bold">View Full Calendar -></a>
      </div>
    </div>
  </section>
</template>

<script setup>
const events = [
  { month: 'MAR', day: '15', venue: 'Neon Underground', location: 'London, UK' },
  { month: 'MAR', day: '22', venue: 'The Warehouse Project', location: 'Manchester, UK' },
  { month: 'APR', day: '05', venue: 'Berghain', location: 'Berlin, DE' },
  { month: 'APR', day: '12', venue: 'Fabric', location: 'London, UK' },
  { month: 'MAY', day: '01', venue: 'Printworks', location: 'London, UK' }
]
</script>

<style scoped>
.title-glow {
  text-shadow: 0 0 30px rgba(0, 119, 221, 0.4);
}
</style>
