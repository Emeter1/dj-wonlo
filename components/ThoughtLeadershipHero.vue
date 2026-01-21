<template>
  <section
    class="relative h-[60vh] min-h-[500px] w-full overflow-hidden flex items-center"
    ref="heroSection"
  >
    <!-- Background Image -->
    <div class="absolute inset-0 z-0">
      <img
        ref="bgImage"
        :src="heroImage"
        alt="Dr. Fayemi Reading"
        class="w-full h-full object-cover object-center scale-110"
      />
      <!-- Gradient Overlay -->
      <div
        class="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"
      ></div>
    </div>

    <!-- Content -->
    <div class="container-custom relative z-10 w-full">
      <div class="max-w-3xl text-white">
        <h1
          class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
        >
          <div class="overflow-hidden">
            <span class="block title-line translate-y-full opacity-0"
              >Intellectual Capital</span
            >
          </div>
          <div class="overflow-hidden">
            <span class="block title-line translate-y-full opacity-0"
              >& Vision</span
            >
          </div>
        </h1>
        <p
          class="text-lg md:text-xl text-gray-200 max-w-xl leading-relaxed font-light opacity-0 translate-y-8 hero-text"
        >
          Shaping the future of governance through rigorous scholarship, policy
          innovation, and strategic dialogue.
        </p>
      </div>
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
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  // Initial Set
  gsap.set(".title-line", { y: "100%", opacity: 0 });
  gsap.set(".hero-text", { y: 30, opacity: 0 });
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
      0.9
    );
});
</script>

<style scoped>
.container-custom {
  @apply container mx-auto px-6;
}
</style>
