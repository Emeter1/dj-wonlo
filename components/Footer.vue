<template>
  <footer class="bg-dj-black border-t border-white/5 py-12 relative overflow-hidden">
    <!-- Decorative Glow -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 bg-dj-primary/50 blur-[50px] rounded-full"></div>

    <div class="container mx-auto px-6 text-center">
      <div class="mb-6 flex justify-center items-center gap-4">
        <img src="~/assets/css/img/dj_wonlo_no_text-removebg-preview.png" alt="DJ Wonlo" class="h-16 w-auto" />
        <span class="text-dj-primary font-display text-3xl tracking-[0.2em]">DJ-WONLO</span>
      </div>
      
      <div class="flex justify-center flex-wrap gap-8 mb-8">
        <a href="https://www.instagram.com/djwonlo/" target="_blank" class="text-gray-400 hover:text-dj-primary transition-colors uppercase tracking-widest text-sm">Instagram</a>
        <a href="https://www.youtube.com/@DJWonlo" target="_blank" class="text-gray-400 hover:text-dj-primary transition-colors uppercase tracking-widest text-sm">YouTube</a>
        <a href="https://www.tiktok.com/@deejaywonlo" target="_blank" class="text-gray-400 hover:text-dj-primary transition-colors uppercase tracking-widest text-sm">TikTok</a>
        <a href="https://soundcloud.com/dj-wonlo" target="_blank" class="text-gray-400 hover:text-dj-primary transition-colors uppercase tracking-widest text-sm">SoundCloud</a>
      </div>

      <div class="text-dj-muted text-xs uppercase tracking-widest opacity-60">
        &copy; {{ new Date().getFullYear() }} Wonlo Entertainment. All Rights Reserved.
      </div>
    </div>
  </footer>
</template>
