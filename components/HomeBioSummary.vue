<template>
  <section class="py-24 bg-gray-50" ref="sectionRef">
    <div class="container mx-auto px-6">
      <!-- Header -->
      <div class="text-center mb-16 opacity-0 translate-y-8 header-animate">
        <h2
          class="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight"
        >
          <span class="text-[#007A33]">Governor</span> • Minister •
          <span class="text-[#007A33]">Scholar</span> • Global Advisor
        </h2>
        <div class="h-1 w-24 bg-[#007A33] mx-auto rounded-full mb-6"></div>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Over 30 years of dedicated service shaping governance, strengthening
          democracy, and driving sustainable development across Africa and the
          globe.
        </p>
      </div>

      <!-- Columns -->
      <div class="grid md:grid-cols-3 gap-8">
        <!-- Column 1: Early Life -->
        <div
          class="bio-card group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 opacity-0 translate-y-12"
        >
          <div
            class="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </div>
          <h3
            class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors"
          >
            Early Life & Roots
          </h3>
          <p class="text-gray-600 mb-6 leading-relaxed">
            Born in Isan-Ekiti on February 9, 1965. His foundations were laid in
            the rich cultural heritage of Ekiti State, instilling the core
            values of integrity and service that would guide his future.
          </p>
          <NuxtLink
            to="/about"
            class="inline-flex items-center text-red-600 font-semibold text-sm hover:text-red-700"
          >
            Read full story
            <span
              class="ml-2 transform group-hover:translate-x-1 transition-transform"
              >→</span
            >
          </NuxtLink>
        </div>

        <!-- Column 2: Career -->
        <div
          class="bio-card group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 opacity-0 translate-y-12"
        >
          <div
            class="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
          </div>
          <h3
            class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors"
          >
            Public Service
          </h3>
          <p class="text-gray-600 mb-6 leading-relaxed">
            A distinguished trajectory including two terms as Governor of Ekiti
            State and Minister of Solid Minerals. Known for institutional
            reforms and policy innovations.
          </p>
          <NuxtLink
            to="/about"
            class="inline-flex items-center text-blue-600 font-semibold text-sm hover:text-blue-700"
          >
            Explore career
            <span
              class="ml-2 transform group-hover:translate-x-1 transition-transform"
              >→</span
            >
          </NuxtLink>
        </div>

        <!-- Column 3: Global Work -->
        <div
          class="bio-card group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 opacity-0 translate-y-12"
        >
          <div
            class="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-purple-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3
            class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors"
          >
            Global Impact
          </h3>
          <p class="text-gray-600 mb-6 leading-relaxed">
            A respected voice in the international community, advising on
            peace-building, security, and economic development strategies across
            major global institutions.
          </p>
          <NuxtLink
            to="/about"
            class="inline-flex items-center text-purple-600 font-semibold text-sm hover:text-purple-700"
          >
            View impact
            <span
              class="ml-2 transform group-hover:translate-x-1 transition-transform"
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
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sectionRef = ref(null);

onMounted(() => {
  const el = sectionRef.value;
  const header = el.querySelector(".header-animate");
  const cards = el.querySelectorAll(".bio-card");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: el,
      start: "top 80%", // Start animation when top of section is 80% down viewport
      toggleActions: "play none none reverse",
    },
  });

  tl.to(header, {
    y: 0,
    opacity: 1,
    duration: 0.8,
    ease: "power3.out",
  }).to(
    cards,
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
    },
    "-=0.4"
  ); // Start slightly before header finishes
});
</script>
