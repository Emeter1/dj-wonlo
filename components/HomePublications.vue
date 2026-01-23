<template>
  <section class="py-24 bg-white font-sans" ref="sectionRef">
    <div class="container mx-auto px-6">
      <!-- Header -->
      <div
        class="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6 header-animate opacity-0 translate-y-8"
      >
        <div class="max-w-3xl">
          <h2
            class="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight"
          >
            Selected Publications
          </h2>
          <p class="text-gray-600 text-lg leading-relaxed">
            Scholarly contributions to the discourse on security, governance,
            and democracy in Africa.
          </p>
        </div>
        <NuxtLink
          to="/thought-leadership"
          class="inline-flex items-center gap-2 border border-gray-200 px-6 py-3 rounded-lg hover:border-[#007A33] hover:text-[#007A33] transition-colors font-semibold text-gray-900 whitespace-nowrap group"
        >
          View all
          <span class="group-hover:translate-x-1 transition-transform">→</span>
        </NuxtLink>
      </div>

      <!-- Grid -->
      <div class="grid md:grid-cols-3 gap-10">
        <!-- Item 1 -->
        <article class="pub-card group cursor-pointer opacity-0 translate-y-12">
          <div
            class="overflow-hidden rounded-xl mb-6 aspect-[3/4] bg-gray-100 shadow-md relative"
          >
            <!-- Placeholder for Book Cover -->
            <img
              src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop"
              alt="Mercenaries: An African Security Dilemma"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div
              class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"
            ></div>
          </div>
          <div class="pr-4">
            <span
              class="text-xs font-bold tracking-wider text-[#007A33] uppercase mb-2 block"
              >Book</span
            >
            <h3
              class="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-[#007A33] transition-colors"
            >
              Mercenaries: An African Security Dilemma
            </h3>
            <p class="text-gray-600 text-sm leading-relaxed line-clamp-3">
              A groundbreaking study on the role of mercenaries in African
              conflicts and their impact on security and governance. This work
              challenges traditional narratives on private military
              interventions.
            </p>
          </div>
        </article>

        <!-- Item 2 -->
        <article class="pub-card group cursor-pointer opacity-0 translate-y-12">
          <div
            class="overflow-hidden rounded-xl mb-6 aspect-[3/4] bg-gray-100 shadow-md relative"
          >
            <img
              src="https://images.unsplash.com/photo-1589829545856-1100557d828d?q=80&w=800&auto=format&fit=crop"
              alt="Regaining the Legacy"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div
              class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"
            ></div>
          </div>
          <div class="pr-4">
            <span
              class="text-xs font-bold tracking-wider text-[#007A33] uppercase mb-2 block"
              >Monograph</span
            >
            <h3
              class="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-[#007A33] transition-colors"
            >
              Regaining the Legacy
            </h3>
            <p class="text-gray-600 text-sm leading-relaxed line-clamp-3">
              An in-depth analysis of institutional reforms in Ekiti State,
              outlining the framework for restoring values and accountability in
              public administration.
            </p>
          </div>
        </article>

        <!-- Item 3 -->
        <article class="pub-card group cursor-pointer opacity-0 translate-y-12">
          <div
            class="overflow-hidden rounded-xl mb-6 aspect-[3/4] bg-gray-100 shadow-md relative"
          >
            <img
              src="https://images.unsplash.com/photo-1541913007421-5079870be06f?q=80&w=800&auto=format&fit=crop"
              alt="Democracy in Action"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div
              class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"
            ></div>
          </div>
          <div class="pr-4">
            <span
              class="text-xs font-bold tracking-wider text-[#007A33] uppercase mb-2 block"
              >Research Paper</span
            >
            <h3
              class="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-[#007A33] transition-colors"
            >
              Democracy in Action
            </h3>
            <p class="text-gray-600 text-sm leading-relaxed line-clamp-3">
              Exploring the intersection of civil society and state governance
              in Nigeria's Fourth Republic. A critical look at the challenges
              and opportunities for democratic consolidation.
            </p>
          </div>
        </article>
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
  const cards = el.querySelectorAll(".pub-card");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: el,
      start: "top 75%",
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
  );
});
</script>
