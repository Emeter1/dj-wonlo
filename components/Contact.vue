<template>
  <section id="contact" class="py-24 bg-dj-dark relative">
    <div class="container mx-auto px-6 max-w-4xl">
      <h2 class="text-4xl md:text-5xl text-center text-dj-primary font-display mb-12 tracking-widest">GET IN TOUCH</h2>
      
      <div class="bg-dj-paper p-8 md:p-12 rounded-lg border border-white/5 shadow-2xl">
        <form class="space-y-6" @submit.prevent>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-dj-muted text-xs uppercase tracking-wider mb-2">Name</label>
              <input type="text" class="w-full bg-dj-black border border-white/10 p-3 text-white focus:border-dj-primary focus:outline-none transition-colors" placeholder="Your Name">
            </div>
            <div>
              <label class="block text-dj-muted text-xs uppercase tracking-wider mb-2">Email</label>
              <input type="email" class="w-full bg-dj-black border border-white/10 p-3 text-white focus:border-dj-primary focus:outline-none transition-colors" placeholder="your@email.com">
            </div>
          </div>
          <div>
            <label class="block text-dj-muted text-xs uppercase tracking-wider mb-2">Message</label>
            <textarea rows="4" class="w-full bg-dj-black border border-white/10 p-3 text-white focus:border-dj-primary focus:outline-none transition-colors" placeholder="Tell me about your event..."></textarea>
          </div>
          <div class="text-center pt-4">
            <button class="px-10 py-4 bg-dj-primary text-dj-black font-display font-bold uppercase tracking-widest hover:bg-white transition-colors">
              Send Message
            </button>
          </div>
        </form>
      </div>
      
      <div class="text-center mt-12 space-y-8">
        <div>
          <p class="text-dj-muted uppercase tracking-wider text-sm mb-2">Booking Agent</p>
          <a href="mailto:booking@djwonlo.com" class="text-white text-lg font-display hover:text-dj-primary transition-colors">booking@djwonlo.com</a>
        </div>

        <div>
          <p class="text-dj-muted uppercase tracking-wider text-sm mb-4">Follow Wonlo</p>
          <div class="flex justify-center space-x-8">
            <a href="https://www.instagram.com/djwonlo/" target="_blank" class="text-gray-400 hover:text-dj-primary transition-colors uppercase tracking-widest text-sm">Instagram</a>
            <a href="https://www.youtube.com/@DJWonlo" target="_blank" class="text-gray-400 hover:text-dj-primary transition-colors uppercase tracking-widest text-sm">YouTube</a>
            <a href="https://www.tiktok.com/@deejaywonlo" target="_blank" class="text-gray-400 hover:text-dj-primary transition-colors uppercase tracking-widest text-sm">TikTok</a>
            <a href="https://soundcloud.com/dj-wonlo" target="_blank" class="text-gray-400 hover:text-dj-primary transition-colors uppercase tracking-widest text-sm">SoundCloud</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
