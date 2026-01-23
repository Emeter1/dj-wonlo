<template>
  <section
    class="py-12 bg-white border-y border-gray-100 overflow-hidden"
    ref="marqueeSection"
  >
    <div class="container-custom mb-8">
      <p
        class="text-center text-gray-400 text-xs font-bold uppercase tracking-[0.3em] mb-4"
      >
        Featured In
      </p>
    </div>

    <div class="relative flex overflow-hidden">
      <!-- First Marquee Group -->
      <div
        class="flex items-center gap-16 animate-marquee whitespace-nowrap px-8"
      >
        <span
          v-for="(media, index) in mediaOutlets"
          :key="'m1-' + index"
          class="text-2xl md:text-3xl font-black text-gray-200 hover:text-[#007A33] transition-colors cursor-default select-none"
        >
          {{ media }}
        </span>
      </div>
      <!-- Second Marquee Group (Duplicate for seamless loop) -->
      <div
        class="flex items-center gap-16 animate-marquee whitespace-nowrap px-8"
        aria-hidden="true"
      >
        <span
          v-for="(media, index) in mediaOutlets"
          :key="'m2-' + index"
          class="text-2xl md:text-3xl font-black text-gray-200 hover:text-[#007A33] transition-colors cursor-default select-none"
        >
          {{ media }}
        </span>
      </div>
    </div>
  </section>
</template>

<script setup>
const mediaOutlets = [
  "CNBC Africa",
  "TechCabal",
  "Business Day",
  "Channels TV",
  "Arise News",
  "Stears Business",
  "The Guardian",
  "Vanguard",
];
</script>

<style scoped>
.container-custom {
  @apply container mx-auto px-6;
}

.animate-marquee {
  animation: marquee 30s linear infinite;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

/* Pause on hover */
.relative:hover .animate-marquee {
  animation-play-state: paused;
}
</style>
