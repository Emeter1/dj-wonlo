<template>
  <section class="py-24 bg-white font-sans" ref="sectionRef">
    <div class="container-custom">
      <!-- Header -->
      <div
        class="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8 header-animate opacity-0 translate-y-8"
      >
        <div class="max-w-2xl">
          <h2
            class="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight"
          >
            Featured Writing
          </h2>
          <p class="text-gray-600 text-lg leading-relaxed">
            Selected essays and op-eds on the intersection of policy, security,
            and technology in emerging markets.
          </p>
        </div>
        <NuxtLink
          to="/thought-leadership#all-writing"
          class="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-xl hover:bg-[#007A33] transition-colors font-bold group shadow-lg"
        >
          View All Writing
          <ArrowRight
            class="w-5 h-5 group-hover:translate-x-1 transition-transform"
          />
        </NuxtLink>
      </div>

      <!-- Featured Publication Card -->
      <div
        class="featured-card bg-gray-50 rounded-[2rem] overflow-hidden flex flex-col lg:flex-row shadow-sm hover:shadow-xl transition-all duration-700 opacity-0 translate-y-12 border border-gray-100 mb-16"
      >
        <div class="lg:w-2/5 relative h-80 lg:h-auto overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1200"
            alt="Catalytic Statecraft"
            class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105"
          />
          <div
            class="absolute inset-0 bg-green-900/10 mix-blend-multiply"
          ></div>
          <div
            class="absolute top-8 left-8 bg-white px-4 py-2 rounded-lg shadow-lg"
          >
            <span
              class="text-[#007A33] font-bold text-xs uppercase tracking-widest"
              >Featured Publication</span
            >
          </div>
        </div>
        <div class="p-10 lg:p-16 flex flex-col justify-center flex-grow">
          <div
            class="flex items-center gap-4 text-gray-400 text-xs font-bold uppercase tracking-widest mb-6"
          >
            <span>Policy Memo</span>
            <span class="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
            <span>Nov 2025</span>
          </div>
          <h3
            class="text-3xl md:text-4xl font-black text-gray-900 mb-6 leading-tight"
          >
            Why Nigeria Needs <br class="hidden md:block" />
            Catalytic Statecraft
          </h3>
          <p class="text-gray-600 text-lg leading-relaxed mb-8 max-w-xl">
            "Reform assumes the existing structure is sound. Nigeria's structure
            is not sound. We need reinvention, not repair." A deep dive into the
            structural prerequisites for sustainable development.
          </p>
          <div>
            <button
              class="text-[#007A33] font-bold inline-flex items-center gap-2 group border-b-2 border-[#007A33]/20 hover:border-[#007A33] transition-all pb-1"
            >
              Read Full Essay
              <ArrowRight
                class="w-4 h-4 group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>
        </div>
      </div>

      <!-- List of other writings could go here -->
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-vue-next";

gsap.registerPlugin(ScrollTrigger);

const sectionRef = ref(null);

onMounted(() => {
  const el = sectionRef.value;
  const header = el.querySelector(".header-animate");
  const card = el.querySelector(".featured-card");

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
    card,
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power4.out",
    },
    "-=0.4"
  );
});
</script>

<style scoped>
.container-custom {
  @apply container mx-auto px-6;
}
</style>
