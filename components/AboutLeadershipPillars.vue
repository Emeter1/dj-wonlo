<template>
  <section class="py-32 bg-white relative overflow-hidden" ref="sectionRef">
    <!-- Decorative Accents -->
    <div
      class="absolute top-0 right-0 w-1/2 h-full bg-gray-50 -z-10 origin-right transition-transform duration-1000"
    ></div>

    <div class="container-custom">
      <!-- Section Header -->
      <div class="max-w-3xl mb-24 header-anim opacity-0 translate-y-8">
        <div class="flex items-center gap-4 mb-6">
          <div class="w-12 h-[2px] bg-[#007A33]"></div>
          <span
            class="text-xs font-bold uppercase tracking-widest text-[#007A33]"
            >Philosophy</span
          >
        </div>
        <h2
          class="text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-8 tracking-tighter"
        >
          CONSTRUCTIVE <br />
          PILLARS of LEADERSHIP.
        </h2>
        <p class="text-xl text-gray-600 font-light leading-relaxed">
          Rooted in the belief that strong institutions and human-centered
          policies are the bedrock of a thriving society.
        </p>
      </div>

      <!-- Pillars Grid -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20 lg:gap-y-32"
      >
        <!-- Pillar 1: Scholarship -->
        <div class="pillar-card group opacity-0 translate-y-12">
          <div class="relative mb-8">
            <div
              class="absolute -top-10 -left-10 text-[120px] font-black text-gray-100 -z-10 select-none"
            >
              01
            </div>
            <div
              class="aspect-[4/5] overflow-hidden rounded-2xl shadow-xl transform group-hover:-translate-y-4 transition-transform duration-700"
            >
              <img
                src="~/assets/img/fayemi-reading.jpg"
                alt="Scholarship"
                class="w-full h-full object-cover"
              />
              <div
                class="absolute inset-0 bg-[#007A33]/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              ></div>
            </div>
          </div>
          <h3
            class="text-3xl font-bold text-gray-900 mb-4 group-hover:text-[#007A33] transition-colors uppercase tracking-tight"
          >
            Scholarship in Action
          </h3>
          <p class="text-gray-600 leading-relaxed font-light">
            Merging academic rigor with policy implementation. Every decision is
            backed by researched evidence and historical context.
          </p>
        </div>

        <!-- Pillar 2: Democracy (Offset down) -->
        <div class="pillar-card group md:mt-40 opacity-0 translate-y-12">
          <div class="relative mb-8">
            <div
              class="absolute -top-10 -left-10 text-[120px] font-black text-gray-100 -z-10 select-none"
            >
              02
            </div>
            <div
              class="aspect-[4/5] overflow-hidden rounded-2xl shadow-xl transform group-hover:-translate-y-4 transition-transform duration-700"
            >
              <img
                src="~/assets/img/89f7fc9b598261b3244075399cd9a9a97bb5fab3.png"
                alt="Democracy"
                class="w-full h-full object-cover"
              />
              <div
                class="absolute inset-0 bg-[#007A33]/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              ></div>
            </div>
          </div>
          <h3
            class="text-3xl font-bold text-gray-900 mb-4 group-hover:text-[#007A33] transition-colors uppercase tracking-tight"
          >
            Democratic Values
          </h3>
          <p class="text-gray-600 leading-relaxed font-light">
            Empowering citizens and strengthening democratic institutions as the
            non-negotiable path to sustainable development.
          </p>
        </div>

        <!-- Pillar 3: Infrastructure (Offset up) -->
        <div class="pillar-card group md:-mt-20 opacity-0 translate-y-12">
          <div class="relative mb-8">
            <div
              class="absolute -top-10 -left-10 text-[120px] font-black text-gray-100 -z-10 select-none"
            >
              03
            </div>
            <div
              class="aspect-[4/5] overflow-hidden rounded-2xl shadow-xl transform group-hover:-translate-y-4 transition-transform duration-700"
            >
              <img
                src="~/assets/img/a67b76754ec4929237dbf9836eec94c97542c543 (1).jpg"
                alt="Infrastructure"
                class="w-full h-full object-cover"
              />
              <div
                class="absolute inset-0 bg-[#007A33]/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              ></div>
            </div>
          </div>
          <h3
            class="text-3xl font-bold text-gray-900 mb-4 group-hover:text-[#007A33] transition-colors uppercase tracking-tight"
          >
            Human Infrastructure
          </h3>
          <p class="text-gray-600 leading-relaxed font-light">
            Building the physical and institutional systems that allow
            individuals to fulfill their maximum potential.
          </p>
        </div>

        <!-- Pillar 4: Global Role (Offset down) -->
        <div class="pillar-card group lg:mt-20 opacity-0 translate-y-12">
          <div class="relative mb-8">
            <div
              class="absolute -top-10 -left-10 text-[120px] font-black text-gray-100 -z-10 select-none"
            >
              04
            </div>
            <div
              class="aspect-[4/5] overflow-hidden rounded-2xl shadow-xl transform group-hover:-translate-y-4 transition-transform duration-700"
            >
              <img
                src="~/assets/img/f95939f380fe9126b93407fcbaa8cd1e4bc6a365.jpg"
                alt="Global Impact"
                class="w-full h-full object-cover"
              />
              <div
                class="absolute inset-0 bg-[#007A33]/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              ></div>
            </div>
          </div>
          <h3
            class="text-3xl font-bold text-gray-900 mb-4 group-hover:text-[#007A33] transition-colors uppercase tracking-tight"
          >
            Global Statesmanship
          </h3>
          <p class="text-gray-600 leading-relaxed font-light">
            Positioning Nigeria and Africa at the center of international
            security and economic dialogue.
          </p>
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

  // Animate Header
  gsap.to(el.querySelector(".header-anim"), {
    y: 0,
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: el,
      start: "top 80%",
    },
  });

  // Animate Pillar Cards with Stagger and Parallax
  const cards = el.querySelectorAll(".pillar-card");
  cards.forEach((card, i) => {
    gsap.to(card, {
      y: 0,
      opacity: 1,
      duration: 1.2,
      delay: i * 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: card,
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
    });
  });
});
</script>

<style scoped>
.container-custom {
  @apply container mx-auto px-6;
}
</style>
