<template>
  <section
    class="relative h-[80vh] min-h-[600px] w-full overflow-hidden flex items-center bg-black font-sans"
    ref="heroSection"
  >
    <!-- Background Content -->
    <div class="absolute inset-0 z-0">
      <img
        ref="bgImage"
        :src="heroImage"
        alt="Dr. Fayemi Intellectual Capital"
        class="w-full h-full object-cover object-center opacity-40 scale-105"
      />
      <!-- Premium Overlays -->
      <div
        class="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black"
      ></div>
      <div
        class="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"
      ></div>
    </div>

    <!-- Content -->
    <div class="container-custom relative z-10 w-full">
      <div class="max-w-4xl">
        <!-- Subheading -->
        <div class="overflow-hidden mb-4">
          <span
            class="block text-[#007A33] font-bold tracking-[0.2em] uppercase text-sm md:text-base animate-subhead"
          >
            Ideas & Influence
          </span>
        </div>

        <h1
          class="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] mb-8 tracking-tighter"
        >
          <div class="overflow-hidden pb-2">
            <span class="block title-line">Thought</span>
          </div>
          <div class="overflow-hidden">
            <span class="block title-line">Leadership</span>
          </div>
        </h1>

        <div class="max-w-2xl">
          <p
            class="text-xl md:text-2xl text-gray-300 leading-relaxed font-light hero-text mb-10"
          >
            Shaping the discourse on governance, innovation, and the future of
            Africa through compelling narratives and strategic foresight.
          </p>

          <!-- Interaction Elements or Scroll Indicator could go here -->
        </div>
      </div>
    </div>

    <!-- Decorative Elements -->
    <div class="absolute bottom-0 right-0 p-12 hidden lg:block">
      <div class="w-32 h-[1px] bg-white/20 mb-4"></div>
      <p class="text-white/40 text-xs tracking-widest uppercase vertical-text">
        JKF Intellectual Capital
      </p>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import gsap from "gsap";
import heroImage from "~/assets/img/fayemi-reading.jpg";

const heroSection = ref(null);
const bgImage = ref(null);

onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

  // Initial Set
  gsap.set(".title-line", { y: "110%", rotate: 2 });
  gsap.set(".animate-subhead", { x: -20, opacity: 0 });
  gsap.set(".hero-text", { y: 40, opacity: 0 });
  gsap.set(bgImage.value, { scale: 1.15, filter: "blur(10px)" });

  // Animation Sequence
  tl.to(
    bgImage.value,
    {
      scale: 1.05,
      filter: "blur(0px)",
      duration: 2.5,
      ease: "power2.out",
    },
    0
  )
    .to(
      ".animate-subhead",
      {
        x: 0,
        opacity: 1,
        duration: 1,
      },
      0.5
    )
    .to(
      ".title-line",
      {
        y: "0%",
        rotate: 0,
        duration: 1.5,
        stagger: 0.1,
        ease: "expo.out",
      },
      0.6
    )
    .to(
      ".hero-text",
      {
        y: 0,
        opacity: 1,
        duration: 1,
      },
      1
    );
});
</script>

<style scoped>
.container-custom {
  @apply container mx-auto px-6;
}

.vertical-text {
  writing-mode: vertical-rl;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
