<template>
  <section id="hero" class="relative h-screen flex items-center justify-center overflow-hidden bg-dj-black">
    <!-- Background Video/Image -->
    <div class="absolute inset-0">
      <img src="https://images.unsplash.com/photo-1571266028243-3716f02d2d2e?q=80&w=2000&auto=format&fit=crop" class="w-full h-full object-cover opacity-30 mix-blend-overlay" alt="DJ Background" />
      <div class="absolute inset-0 bg-gradient-to-t from-dj-black via-dj-black/50 to-dj-black/80"></div>
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-dj-primary/10 via-transparent to-transparent"></div>
    </div>
    
    <!-- Content -->
    <div class="relative z-10 text-center px-6 flex flex-col items-center">
      <!-- Logo Animation -->
      <div class="mb-8 relative group opacity-0 animate-fade-in-down">
        <div class="absolute -inset-4 bg-dj-primary/20 rounded-full blur-xl group-hover:bg-dj-primary/30 transition-all duration-700"></div>
        <img src="~/assets/css/img/dj_wonlo_no_text-removebg-preview.png" alt="DJ Wonlo Logo" class="h-32 md:h-48 w-auto relative z-10 drop-shadow-[0_0_15px_rgba(0,119,221,0.5)] transform group-hover:scale-105 transition-transform duration-500" />
      </div>

      <!-- Text Content -->
      <h1 class="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-dj-primary to-white mb-4 drop-shadow-2xl opacity-0 animate-fade-in-up animation-delay-300 tracking-wider glitch-text" data-text="DJ WONLO">
        DJ WONLO
      </h1>
      
      <div class="w-32 h-1 bg-gradient-to-r from-transparent via-dj-primary to-transparent mb-8 opacity-0 animate-scale-x animation-delay-500"></div>

      <p class="text-xl md:text-2xl text-gray-300 font-light tracking-[0.5em] uppercase mb-12 opacity-0 animate-fade-in-up animation-delay-600">
        Sonic Architect
      </p>

      <!-- Buttons -->
      <div class="flex flex-col md:flex-row gap-6 opacity-0 animate-fade-in-up animation-delay-900">
        <a href="https://soundcloud.com/dj-wonlo" target="_blank" rel="noopener noreferrer" class="group relative px-8 py-3 bg-dj-primary text-white font-display font-bold tracking-widest uppercase overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(0,119,221,0.6)] inline-block">
          <span class="relative z-10">Listen Now</span>
          <div class="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-dj-primary/80"></div>
        </a>
        
        <NuxtLink to="/contact" class="px-8 py-3 border border-white/30 text-white hover:border-dj-primary hover:text-dj-primary transition-all duration-300 font-display tracking-widest uppercase bg-transparent hover:bg-white/5 inline-block text-center">
          Bookings
        </NuxtLink>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer" @click="scrollTo('bio')">
      <div class="flex flex-col items-center gap-2">
        <span class="text-[10px] uppercase tracking-widest text-dj-muted">Scroll</span>
        <svg class="w-6 h-6 text-dj-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
      </div>
    </div>
  </section>
</template>

<script setup>
const scrollTo = (targetId) => {
  document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
.animate-fade-in-up {
  animation: fadeInUp 1s ease-out forwards;
}
.animate-fade-in-down {
  animation: fadeInDown 1s ease-out forwards;
}
.animate-scale-x {
  animation: scaleX 1s ease-out forwards;
}

.animation-delay-300 { animation-delay: 0.3s; }
.animation-delay-500 { animation-delay: 0.5s; }
.animation-delay-600 { animation-delay: 0.6s; }
.animation-delay-900 { animation-delay: 0.9s; }

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes scaleX {
  from { opacity: 0; transform: scaleX(0); }
  to { opacity: 1; transform: scaleX(1); }
}

/* Glitch Effect */
.glitch-text {
  position: relative;
}
.glitch-text::before,
.glitch-text::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #0a0a0a; /* Matches bg-dj-black */
}
.glitch-text::before {
  left: 2px;
  text-shadow: -1px 0 #0077DD;
  clip: rect(44px, 450px, 56px, 0);
  animation: glitch-anim 5s infinite linear alternate-reverse;
}
.glitch-text::after {
  left: -2px;
  text-shadow: -1px 0 #00ffff;
  clip: rect(44px, 450px, 56px, 0);
  animation: glitch-anim2 5s infinite linear alternate-reverse;
}

@keyframes glitch-anim {
  0% { clip: rect(31px, 9999px, 91px, 0); }
  20% { clip: rect(6px, 9999px, 83px, 0); }
  40% { clip: rect(66px, 9999px, 14px, 0); }
  60% { clip: rect(10px, 9999px, 78px, 0); }
  80% { clip: rect(42px, 9999px, 5px, 0); }
  100% { clip: rect(98px, 9999px, 20px, 0); }
}
@keyframes glitch-anim2 {
  0% { clip: rect(96px, 9999px, 86px, 0); }
  20% { clip: rect(15px, 9999px, 22px, 0); }
  40% { clip: rect(92px, 9999px, 7px, 0); }
  60% { clip: rect(2px, 9999px, 60px, 0); }
  80% { clip: rect(49px, 9999px, 44px, 0); }
  100% { clip: rect(38px, 9999px, 71px, 0); }
}
</style>
