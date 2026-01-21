<template>
  <section class="py-24 bg-white font-sans" ref="sectionRef">
    <div class="container mx-auto px-6">
      <!-- Header -->
      <div
        class="max-w-3xl mx-auto text-center mb-12 header-animate opacity-0 translate-y-8"
      >
        <h2
          class="text-2xl md:text-3xl font-bold text-gray-900 mb-4 tracking-tight"
        >
          Leadership, Democracy, and Development in Africa
        </h2>
        <div class="h-1 w-20 bg-[#007A33] mx-auto rounded-full mb-6"></div>
        <p
          class="text-gray-600 text-sm md:text-lg leading-relaxed max-w-2xl mx-auto"
        >
          A powerful keynote by Dr. John Kayode Fayemi, sharing insights on
          building strong institutions, deepening democracy, and advancing
          sustainable development across Africa.
        </p>
      </div>

      <!-- Video Placeholder -->
      <div class="max-w-5xl mx-auto video-animate opacity-0 p-4">
        <div
          class="relative aspect-video rounded-2xl overflow-hidden bg-gray-100 group cursor-pointer shadow-2xl"
        >
          <!-- Background Image -->
          <img
            :src="videoThumb"
            alt="Keynote Speech"
            class="w-full h-full object-cover opacity-95 group-hover:scale-105 transition-transform duration-700"
          />

          <!-- Overlay -->
          <div
            class="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"
          ></div>

          <!-- Play Button -->
          <div class="absolute inset-0 flex items-center justify-center">
            <div
              class="w-20 h-20 md:w-24 md:h-24 bg-white/20 backdrop-blur-sm border border-white/40 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300"
            >
              <div
                class="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-inner"
              >
                <svg
                  class="w-6 h-6 md:w-8 md:h-8 text-[#007A33] ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import videoThumb from "~/assets/img/fayose-2.jpg";

gsap.registerPlugin(ScrollTrigger);

const sectionRef = ref(null);

onMounted(() => {
  const el = sectionRef.value;
  const header = el.querySelector(".header-animate");
  const video = el.querySelector(".video-animate");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: el,
      start: "top 70%",
      toggleActions: "play none none reverse",
    },
  });

  tl.to(header, {
    y: 0,
    opacity: 1,
    duration: 0.8,
    ease: "power3.out",
  }).to(
    video,
    {
      opacity: 1,
      duration: 1,
      ease: "power2.out",
    },
    "-=0.4"
  );

  // Subtle parallax or scale effect on the video container itself on entry can be added here
  gsap.fromTo(
    video.querySelector(".aspect-video"),
    { scale: 0.95 },
    {
      scale: 1,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 70%",
      },
    }
  );
});
</script>
