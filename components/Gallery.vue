<template>
  <section id="gallery" class="py-24 bg-dj-black relative">
    <div class="container mx-auto px-6">
      <h2 class="text-4xl md:text-5xl text-center text-white font-display mb-16 tracking-widest title-glow">GALLERY</h2>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
        
        <!-- Large Item -->
        <div class="col-span-2 row-span-2 group relative overflow-hidden rounded-lg cursor-pointer">
           <img src="https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?q=80&w=1200&auto=format&fit=crop" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Concert Crowd" />
           <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
             <span class="text-white font-display tracking-widest uppercase border border-white px-4 py-2">View</span>
           </div>
        </div>

        <!-- Standard Items -->
        <div class="group relative overflow-hidden rounded-lg cursor-pointer">
           <img src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="DJ Decks" />
           <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <div class="group relative overflow-hidden rounded-lg cursor-pointer">
           <img src="https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=800&auto=format&fit=crop" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Party Lights" />
           <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <!-- Tall Item -->
        <div class="row-span-2 group relative overflow-hidden rounded-lg cursor-pointer">
           <img src="https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=800&auto=format&fit=crop" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Club Atmosphere" />
           <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <!-- Wide Item -->
        <div class="col-span-2 group relative overflow-hidden rounded-lg cursor-pointer">
           <img src="https://images.unsplash.com/photo-1514525253440-b393452e8d26?q=80&w=800&auto=format&fit=crop" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Neon Signs" />
           <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <!-- Standard Item -->
        <div class="group relative overflow-hidden rounded-lg cursor-pointer">
           <img src="https://images.unsplash.com/photo-1598387993441-a364f854c3e1?q=80&w=800&auto=format&fit=crop" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="DJ Controller" />
           <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

      </div>

      <div class="text-center mt-12">
        <a href="https://www.instagram.com/djwonlo/" target="_blank" class="inline-flex items-center gap-2 text-dj-muted hover:text-dj-primary transition-colors uppercase tracking-widest text-sm font-bold">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          Follow @djwonlo
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.title-glow {
  text-shadow: 0 0 30px rgba(0, 119, 221, 0.4);
}
</style>
