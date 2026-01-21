<template>
  <section
    class="py-24 bg-[#054a26] relative overflow-hidden font-sans"
    ref="sectionRef"
  >
    <!-- Abstract Pattern Overlay -->
    <div class="absolute inset-0 opacity-5 pointer-events-none">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="white"
              stroke-width="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <!-- Header -->
      <div
        class="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8 text-white header-animate opacity-0 translate-y-8"
      >
        <div class="max-w-2xl">
          <h2 class="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Highlights <span class="text-green-300">/</span> Key Achievements
          </h2>
          <p class="text-green-100 text-lg leading-relaxed">
            A legacy of leadership, service, and innovation — from Ekiti State
            to the global stage. These milestones reflect Dr. John Kayode
            Fayemi's impact in governance, policy, and democratic development.
          </p>
        </div>
        <!-- <a href="#"
                    class="inline-flex items-center gap-2 bg-white text-[#054a26] px-8 py-4 rounded-lg hover:bg-green-50 transition-colors font-bold text-sm md:text-base group">
                    View all <span class="group-hover:translate-x-1 transition-transform">→</span>
                </a> -->
      </div>

      <!-- Cards Grid -->
      <div class="grid md:grid-cols-3 gap-8">
        <!-- Card 1 -->
        <div
          class="achievement-card bg-white p-8 rounded-2xl shadow-xl h-full flex flex-col opacity-0 translate-y-12"
        >
          <div class="mb-6">
            <div
              class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-[#054a26]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
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
          </div>
          <h3
            class="text-2xl font-bold text-gray-900 mb-6 group-hover:text-[#054a26] transition-colors"
          >
            Political Leadership
          </h3>
          <ul class="space-y-4 text-gray-700 leading-relaxed flex-grow">
            <li class="flex items-start gap-3">
              <span
                class="mt-1.5 w-2 h-2 rounded-full bg-[#054a26] flex-shrink-0"
              ></span>
              <span
                >Twice elected Governor of Ekiti State (2010–2014, 2018–2022),
                implementing the 8-Point Agenda.</span
              >
            </li>
            <li class="flex items-start gap-3">
              <span
                class="mt-1.5 w-2 h-2 rounded-full bg-[#054a26] flex-shrink-0"
              ></span>
              <span
                >Served as Minister of Solid Minerals Development (2015–2018),
                boosting the mining sector.</span
              >
            </li>
            <li class="flex items-start gap-3">
              <span
                class="mt-1.5 w-2 h-2 rounded-full bg-[#054a26] flex-shrink-0"
              ></span>
              <span
                >Chairman, Nigeria Governors' Forum (2019–2021), leading
                national policy advocacy.</span
              >
            </li>
          </ul>
        </div>

        <!-- Card 2 -->
        <div
          class="achievement-card bg-white p-8 rounded-2xl shadow-xl h-full flex flex-col opacity-0 translate-y-12"
        >
          <div class="mb-6">
            <div
              class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
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
          </div>
          <h3 class="text-2xl font-bold text-gray-900 mb-6">Global Roles</h3>
          <ul class="space-y-4 text-gray-700 leading-relaxed flex-grow">
            <li class="flex items-start gap-3">
              <span
                class="mt-1.5 w-2 h-2 rounded-full bg-blue-800 flex-shrink-0"
              ></span>
              <span
                >Pioneer President of the Forum of Regions of Africa
                (FORAF).</span
              >
            </li>
            <li class="flex items-start gap-3">
              <span
                class="mt-1.5 w-2 h-2 rounded-full bg-blue-800 flex-shrink-0"
              ></span>
              <span
                >Visiting Professor at King’s College London, contributing to
                democracy research.</span
              >
            </li>
            <li class="flex items-start gap-3">
              <span
                class="mt-1.5 w-2 h-2 rounded-full bg-blue-800 flex-shrink-0"
              ></span>
              <span
                >Senior Advisor at Albright Stonebridge Group (from 2025).</span
              >
            </li>
          </ul>
        </div>

        <!-- Card 3 -->
        <div
          class="achievement-card bg-white p-8 rounded-2xl shadow-xl h-full flex flex-col opacity-0 translate-y-12"
        >
          <div class="mb-6">
            <div
              class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
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
          </div>
          <h3 class="text-2xl font-bold text-gray-900 mb-6">
            Thought Leadership
          </h3>
          <ul class="space-y-4 text-gray-700 leading-relaxed flex-grow">
            <li class="flex items-start gap-3">
              <span
                class="mt-1.5 w-2 h-2 rounded-full bg-purple-800 flex-shrink-0"
              ></span>
              <span>Author of Mercenaries: An African Security Dilemma.</span>
            </li>
            <li class="flex items-start gap-3">
              <span
                class="mt-1.5 w-2 h-2 rounded-full bg-purple-800 flex-shrink-0"
              ></span>
              <span
                >Published extensive research on democracy and constitutional
                reform.</span
              >
            </li>
            <li class="flex items-start gap-3">
              <span
                class="mt-1.5 w-2 h-2 rounded-full bg-purple-800 flex-shrink-0"
              ></span>
              <span
                >Founding Director of the Centre for Democracy &
                Development.</span
              >
            </li>
          </ul>
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
  const cards = el.querySelectorAll(".achievement-card");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: el,
      start: "top 75%", // Start slightly earlier than Bio section
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
      stagger: 0.2, // Stagger card entrance
      ease: "power3.out",
    },
    "-=0.4"
  );
});
</script>
