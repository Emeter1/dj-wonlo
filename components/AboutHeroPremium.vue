<template>
  <section
    class="relative min-h-[90vh] lg:min-h-screen w-full overflow-hidden bg-[#fafafa] flex items-center pt-24 lg:pt-0"
    ref="heroRef"
  >
    <!-- Decorative Grid Background -->
    <div
      class="absolute inset-0 opacity-[0.03] pointer-events-none"
      style="
        background-image: radial-gradient(#007a33 1px, transparent 1px);
        background-size: 40px 40px;
      "
    ></div>

    <!-- Main Content Container -->
    <div class="w-full h-full flex flex-col lg:flex-row items-stretch">
      <!-- Left Content Column -->
      <div
        class="w-full lg:w-1/2 flex items-center px-6 md:px-12 lg:px-20 py-12 lg:py-20 relative z-10"
      >
        <div class="max-w-xl">
          <!-- Floating Coordinates Label -->
          <div class="flex items-center gap-4 mb-12 overflow-hidden">
            <div
              class="w-12 h-[1px] bg-[#007A33] origin-left hero-line scale-x-0"
            ></div>
            <span
              class="text-[10px] font-mono tracking-widest text-gray-400 uppercase opacity-0 hero-label translate-y-4"
            >
              Est. 1965 // Ekiti Service // Global Impact
            </span>
          </div>

          <h1
            class="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 leading-none mb-8 tracking-tighter"
          >
            <div class="overflow-hidden mb-2">
              <span class="block title-part opacity-0 translate-y-full"
                >BEYOND</span
              >
            </div>
            <div class="overflow-hidden">
              <span
                class="block title-part opacity-0 translate-y-full text-[#007A33]"
                >SERVICE.</span
              >
            </div>
          </h1>

          <p
            class="text-lg md:text-xl text-gray-600 font-light leading-relaxed mb-12 opacity-0 translate-y-8 hero-p max-w-lg"
          >
            A journey defined by a radical commitment to democracy, rigorous
            scholarship, and the constructive rebuilding of values.
          </p>

          <div class="flex flex-wrap items-center gap-8">
            <!-- Interaction Prompt -->
            <div
              class="flex items-center gap-4 opacity-0 translate-y-4 hero-scroll"
            >
              <div class="animate-bounce">
                <ArrowDown class="w-4 h-4 text-[#007A33]" />
              </div>
              <span
                class="text-xs font-bold uppercase tracking-widest text-[#007A33]"
                >Scroll Journey</span
              >
            </div>

            <!-- Read Bio Button -->
            <button
              @click="scrollToJourney"
              class="opacity-0 translate-y-4 hero-btn px-8 py-4 bg-[#007A33] text-white text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-[#00662B] transition-colors shadow-xl"
            >
              Read Full Bio
            </button>
          </div>
        </div>
      </div>

      <!-- Right Image Column -->
      <div
        class="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-screen overflow-hidden"
      >
        <!-- Image Container for Wipe -->
        <div class="absolute inset-0 z-10 bg-white hero-wipe"></div>

        <img
          src="~/assets/img/f95939f380fe9126b93407fcbaa8cd1e4bc6a365.jpg"
          alt="Dr. Fayemi"
          class="w-full h-full object-cover object-top scale-110 hero-img"
        />

        <!-- Advanced Overlays -->
        <div class="absolute inset-0 z-20 pointer-events-none">
          <!-- Cross-hair Overlay -->
          <div
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-white/20 rounded-full scale-0 hero-circle"
          ></div>
          <div
            class="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 scale-x-0 hero-cross"
          ></div>
          <div
            class="absolute left-1/2 top-0 w-[1px] h-full bg-white/10 scale-y-0 hero-cross"
          ></div>

          <!-- Corner Accents -->
          <div
            class="absolute top-12 right-12 text-white/40 font-mono text-[10px] vertical-text opacity-0 hero-detail"
          >
            SECTION_01 // HERO_LEADERSHIP
          </div>
        </div>
      </div>
    </div>

    <!-- Sidebar Info (Desktop Only) -->
    <div
      class="hidden xl:flex absolute left-8 top-1/2 -translate-y-1/2 flex-col items-center gap-20 z-30 opacity-0 hero-detail"
    >
      <div
        class="text-[10px] font-mono rotate-90 whitespace-nowrap tracking-widest text-gray-400"
      >
        4° 55' 52" N / 3° 23' 21" E
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { ArrowDown } from "lucide-vue-next";
import gsap from "gsap";

const heroRef = ref(null);

const scrollToJourney = () => {
  window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth",
  });
};

onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.2 } });

  tl.to(".hero-wipe", {
    xPercent: 100,
    duration: 1.5,
    ease: "expo.inOut",
  })
    .to(
      ".hero-img",
      {
        scale: 1,
        duration: 2.5,
        ease: "power2.out",
      },
      0
    )
    .to(".hero-line", { scaleX: 1 }, 0.5)
    .to(".hero-label", { y: 0, opacity: 1 }, 0.7)
    .to(
      ".title-part",
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
      },
      0.8
    )
    .to(".hero-p", { y: 0, opacity: 1 }, 1.2)
    .to([".hero-scroll", ".hero-btn"], { y: 0, opacity: 1, stagger: 0.1 }, 1.4)
    .to(".hero-circle", { scale: 1, opacity: 1, duration: 1 }, 1)
    .to(".hero-cross", { scaleX: 1, scaleY: 1, duration: 1.5 }, 0.8)
    .to(".hero-detail", { opacity: 1, duration: 1 }, 1.5);
});
</script>

<style scoped>
.vertical-text {
  writing-mode: vertical-rl;
}
</style>
