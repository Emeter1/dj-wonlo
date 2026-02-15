<template>
  <div class="bg-dj-black min-h-screen text-white font-sans selection:bg-dj-primary selection:text-dj-black pt-24">
    <Navbar />
    
    <section class="container mx-auto px-6 py-12 max-w-4xl relative">
      <!-- Decorative Background Elements -->
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-3xl bg-dj-primary/5 rounded-full blur-[120px] -z-10"></div>

      <h1 class="text-5xl md:text-6xl text-center text-dj-primary font-display mb-4 tracking-widest opacity-0 animate-fade-in-up">GET IN TOUCH</h1>
      <p class="text-center text-gray-400 mb-12 max-w-2xl mx-auto opacity-0 animate-fade-in-up animation-delay-300">
        Ready to elevate your event? Fill out the form below or connect with proper channels for bookings and inquiries.
      </p>
      
      <div class="bg-dj-paper p-8 md:p-12 rounded-lg border border-white/5 shadow-2xl opacity-0 animate-fade-in-up animation-delay-500">
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
      
      <div class="text-center mt-12 space-y-12 opacity-0 animate-fade-in-up animation-delay-700">
        <!-- Direct Email -->
        <div>
          <p class="text-dj-muted uppercase tracking-wider text-sm mb-2">Booking Agent</p>
          <a href="mailto:booking@djwonlo.com" class="text-white text-lg font-display hover:text-dj-primary transition-colors">booking@djwonlo.com</a>
        </div>

        <!-- Social Icons -->
        <div>
          <p class="text-dj-muted uppercase tracking-wider text-sm mb-6">Connect With Wonlo</p>
          <div class="flex justify-center flex-wrap gap-8">
            <!-- Instagram -->
            <a href="https://www.instagram.com/djwonlo/" target="_blank" class="group flex flex-col items-center gap-2">
              <div class="p-4 bg-dj-paper rounded-full border border-white/10 group-hover:border-dj-primary group-hover:bg-dj-primary/10 transition-all duration-300">
                <svg class="w-6 h-6 text-white group-hover:text-dj-primary transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.468 3.2c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
                </svg>
              </div>
              <span class="text-xs uppercase tracking-wider text-dj-muted group-hover:text-dj-primary transition-colors">Instagram</span>
            </a>

            <!-- YouTube -->
            <a href="https://www.youtube.com/@DJWonlo" target="_blank" class="group flex flex-col items-center gap-2">
              <div class="p-4 bg-dj-paper rounded-full border border-white/10 group-hover:border-dj-primary group-hover:bg-dj-primary/10 transition-all duration-300">
                <svg class="w-6 h-6 text-white group-hover:text-dj-primary transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 01-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 01-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 011.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418zM15.194 12 10 15V9l5.194 3z" clip-rule="evenodd" />
                </svg>
              </div>
              <span class="text-xs uppercase tracking-wider text-dj-muted group-hover:text-dj-primary transition-colors">YouTube</span>
            </a>
            
            <!-- TikTok -->
            <a href="https://www.tiktok.com/@deejaywonlo" target="_blank" class="group flex flex-col items-center gap-2">
              <div class="p-4 bg-dj-paper rounded-full border border-white/10 group-hover:border-dj-primary group-hover:bg-dj-primary/10 transition-all duration-300">
                <svg class="w-6 h-6 text-white group-hover:text-dj-primary transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15.07-.12 1.33.02 1.14.74 2.15 1.7 2.73 1.13.65 2.6.5 3.73-.26.93-.63 1.4-1.7 1.4-2.82.02-2.31.02-4.63.02-6.95z" />
                </svg>
              </div>
              <span class="text-xs uppercase tracking-wider text-dj-muted group-hover:text-dj-primary transition-colors">TikTok</span>
            </a>

            <!-- SoundCloud -->
            <a href="https://soundcloud.com/dj-wonlo" target="_blank" class="group flex flex-col items-center gap-2">
              <div class="p-4 bg-dj-paper rounded-full border border-white/10 group-hover:border-dj-primary group-hover:bg-dj-primary/10 transition-all duration-300">
                <svg class="w-6 h-6 text-white group-hover:text-dj-primary transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                   <path fill-rule="evenodd" d="M12.92 7.086c.038.384.057.854.057 1.716v9.6c0 1.2-.693 1.838-1.47 1.58-.29-.096-.44-.45-.44-.92V9.32c0-.528.23-.746.452-.808.68-.184 1.346.96 1.4.96v-2.388c-.035 0-.036.002.001.002zM15.4 7.63c.243-.13.565.04.565.736v9.068c0 .874-.456 1.405-1.028 1.405-.29 0-.44-.122-.44-.56V8.97c0-.288.16-.48.455-.48.064 0 .34.053.45.053v-1.92c-.006-.002-.008-.002.002.028v-.966c-.01 0-.012 0 0 0zM17.882 17.584V9.66c0-.97-.245-1.077-.966-1.077-.282 0-.35 0-1.01.298v8.42c0 .48.243.682.52.682.26 0 .524-.135 1.456-.4zM11.028 17.65c-.71.127-1.12.355-1.12.87 0 .48.163.68.497.68.204 0 .408-.06.623-.19.015-.01.03-.02.043-.028V17.65h-.043zM2.895 18H.8c-.35 0-.6-.182-.6-.566 0-.304.162-.515.524-.582.4-.074.743-.05 1.05.022.378.09.682.02.9-.22.25-.274.385-.683.385-1.18 0-.96-.41-1.632-1.196-1.933-.242-.093-.526-.14-.852-.14-.585 0-1.01.21-1.01.637 0 .503.5.767 1.36.91 1.418.232 2.373.91 2.373 1.956 0 1.256-1.096 2.096-2.875 2.096h.04zM6.9 7.086c0 .736.21 1.284.45 1.284.225 0 .445-.48.445-1.043 0-.17-.008-.415-.012-.676-.003-.153.008-.382.012-.605 0-.54-.22-1.015-.445-1.015-.24 0-.45.508-.45 1.246V7.086zM8.88 5.76C8.88 4.606 9.17 4 9.5 4c.292 0 .55.45.55 1.632v12.336c0 .54-.233.832-.514.832-.308 0-.573-.393-.573-1.065V5.76h-.083zM4.93 9.043c0 .878.206 1.472.43 1.472.263 0 .49-.522.49-1.294 0-.13-.004-.326-.007-.565-.003-.23.006-.525.006-.65 0-.742-.23-1.226-.49-1.226-.226 0-.43.593-.43 1.472v.79zM20.254 9.613c-1.353 0-2.316-.273-2.902-.607v8.9c0 .77.58 1.442 1.39 1.685.22.067.437.098.65.098 1.135 0 2.115-.815 2.227-1.99.02-.192.028-.386.028-.58V8.62c0-.528-.42-.992-1.393-.992v1.985z" clip-rule="evenodd" />
                </svg>
              </div>
              <span class="text-xs uppercase tracking-wider text-dj-muted group-hover:text-dj-primary transition-colors">SoundCloud</span>
            </a>
          </div>
        </div>
      </div>
    </section>
    
    <Footer />
  </div>
</template>

<script setup>
</script>

<style scoped>
.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}
.animation-delay-300 { animation-delay: 0.3s; }
.animation-delay-500 { animation-delay: 0.5s; }
.animation-delay-700 { animation-delay: 0.7s; }

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
