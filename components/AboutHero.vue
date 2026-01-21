<template>
  <section
    class="relative h-[720px] w-full overflow-hidden"
    ref="heroSection"
    @mousemove="handleMouseMove"
  >
    <!-- Background Image -->
    <div class="absolute inset-0 z-0">
      <img
        ref="bgImage"
        src="~/assets/img/hero-bg.jpg"
        alt="Dr. John Kayode Fayemi"
        class="w-full h-full object-cover object-top scale-110"
      />

      <!-- Gradient Overlay -->
      <div
        class="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"
      ></div>
    </div>

    <!-- Content -->
    <div
      class="container-custom h-full relative z-10 flex flex-col justify-center pt-20"
      ref="contentContainer"
    >
      <div class="max-w-2xl text-white">
        <h1
          class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
        >
          <div class="overflow-hidden">
            <span class="block title-line translate-y-full opacity-0"
              >About Dr. John</span
            >
          </div>
          <div class="overflow-hidden">
            <span class="block title-line translate-y-full opacity-0"
              >Kayode Fayemi</span
            >
          </div>
        </h1>
        <p
          class="text-lg md:text-xl text-gray-200 mb-10 max-w-xl leading-relaxed font-light opacity-0 translate-y-8 hero-text"
        >
          Discover the journey of a scholar, statesman, and advocate whose life
          has been devoted to democracy, good governance, and Africa's progress.
        </p>

        <button
          class="bg-primary hover:bg-primary-dark text-white w-14 h-14 flex items-center justify-center rounded-sm transition-colors duration-300 opacity-0 scale-90 hero-btn"
        >
          <ArrowDown class="w-6 h-6 animate-bounce" />
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { ArrowDown } from "lucide-vue-next";
import gsap from "gsap";

const heroSection = ref(null);
const bgImage = ref(null);
const contentContainer = ref(null);

onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  // Initial Set
  gsap.set(".title-line", { y: "100%", opacity: 0 });
  gsap.set(".hero-text", { y: 30, opacity: 0 });
  gsap.set(".hero-btn", { scale: 0.8, opacity: 0 });
  gsap.set(bgImage.value, { scale: 1.2 });

  // Animation
  tl.to(
    bgImage.value,
    {
      scale: 1,
      duration: 2.5,
      ease: "power2.out",
    },
    0
  )
    .to(
      ".title-line",
      {
        y: "0%",
        opacity: 1,
        duration: 1,
        stagger: 0.15,
      },
      0.5
    )
    .to(
      ".hero-text",
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
      },
      1.0
    )
    .to(
      ".hero-btn",
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
      },
      1.2
    );
});

const handleMouseMove = (e) => {
  const { clientX, clientY } = e;
  const { innerWidth, innerHeight } = window;

  const xPos = clientX / innerWidth - 0.5;
  const yPos = clientY / innerHeight - 0.5;

  gsap.to(bgImage.value, {
    x: xPos * -15,
    y: yPos * -15,
    duration: 1,
    ease: "power2.out",
  });

  gsap.to(contentContainer.value, {
    x: xPos * 10,
    y: yPos * 10,
    duration: 1,
    ease: "power2.out",
  });
};
</script>

<style scoped>
.container-custom {
  @apply container mx-auto px-6;
}
</style>
