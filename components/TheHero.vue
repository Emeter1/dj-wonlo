<template>
  <section
    ref="heroSection"
    class="relative h-screen flex items-center overflow-hidden"
    @mousemove="handleMouseMove"
  >
    <!-- Background Image with Overlay -->
    <div class="absolute inset-0 z-0">
      <img
        ref="bgImage"
        src="~/assets/img/hero-bg.jpg"
        alt="Dr. John Kayode Fayemi"
        class="w-full h-full object-cover object-top scale-110"
      />
      <div class="absolute inset-0 bg-black/60"></div>
    </div>

    <!-- Content -->
    <div class="container mx-auto px-6 relative z-10 text-white pt-20">
      <div class="max-w-3xl" ref="contentContainer">
        <h1
          class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
        >
          <div class="overflow-hidden">
            <span class="block title-line translate-y-full opacity-0"
              >Reclaiming Our Land,</span
            >
          </div>
          <div class="overflow-hidden">
            <span class="block title-line translate-y-full opacity-0"
              >Restoring Our Values</span
            >
          </div>
        </h1>

        <p
          class="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed opacity-0 translate-y-8 hero-text"
        >
          A Nigerian leader, scholar, and democrat who has served as Governor of
          Ekiti State, Minister of the Federal Republic, and international
          advisor. His journey reflects a life of service, scholarship, and a
          deep commitment to democracy and development.
        </p>

        <div class="opacity-0 translate-y-8 hero-btn-wrapper">
          <NuxtLink
            to="/about"
            class="group inline-flex items-center gap-2 bg-[#008751] hover:bg-[#006e42] text-white px-8 py-4 rounded font-semibold transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg"
          >
            Read Biography
            <span
              class="text-xl transition-transform duration-300 group-hover:translate-x-1"
              >→</span
            >
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import gsap from "gsap";

const heroSection = ref(null);
const bgImage = ref(null);
const contentContainer = ref(null);

onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  // Initial State Set (optional, as classes handle some, but GSAP ensures consistency)
  gsap.set(".title-line", { y: "100%", opacity: 0 });
  gsap.set(".hero-text", { y: 30, opacity: 0 });
  gsap.set(".hero-btn-wrapper", { y: 30, opacity: 0 });
  gsap.set(bgImage.value, { scale: 1.2 });

  // Animation Sequence
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
        stagger: 0.2,
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
      1.2
    )
    .to(
      ".hero-btn-wrapper",
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
      },
      1.4
    );
});

const handleMouseMove = (e) => {
  const { clientX, clientY } = e;
  const { innerWidth, innerHeight } = window;

  // Calculate cursor position as a range between -0.5 and 0.5
  const xPos = clientX / innerWidth - 0.5;
  const yPos = clientY / innerHeight - 0.5;

  // Parallax Effect: Content and Background move in opposite directions
  // Background moves subtly (less distance)
  gsap.to(bgImage.value, {
    x: xPos * -20,
    y: yPos * -20,
    duration: 1,
    ease: "power2.out",
  });

  // Content moves slightly more to create depth
  gsap.to(contentContainer.value, {
    x: xPos * 10,
    y: yPos * 10,
    duration: 1,
    ease: "power2.out",
  });
};
</script>

<style scoped>
/* Scoped styles are minimal as GSAP handles the heavy lifting */
</style>
