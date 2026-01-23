<template>
  <section class="py-24 bg-gray-50 font-sans" ref="sectionRef">
    <div class="container-custom">
      <div class="max-w-3xl mb-16 header-animate opacity-0 translate-y-8">
        <h2
          class="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight"
        >
          Core Themes
        </h2>
        <p class="text-gray-600 text-lg leading-relaxed">
          The fundamental pillars driving my research and advocacy, bridging the
          gap between governance theory and practical implementation.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="(theme, index) in themes"
          :key="index"
          class="theme-card bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 group border border-gray-100 opacity-0 translate-y-12"
        >
          <div
            class="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#007A33] group-hover:text-white transition-colors duration-500"
          >
            <component :is="theme.icon" class="w-6 h-6" />
          </div>
          <h3
            class="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#007A33] transition-colors duration-500"
          >
            {{ theme.title }}
          </h3>
          <p class="text-gray-600 text-sm leading-relaxed">
            {{ theme.description }}
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
import { BookOpen, Users, Building, Globe } from "lucide-vue-next";

gsap.registerPlugin(ScrollTrigger);

const sectionRef = ref(null);

const themes = [
  {
    title: "Scholarship in Action",
    description:
      "Merging academic rigor with policy implementation. Every decision is backed by researched evidence.",
    icon: BookOpen,
  },
  {
    title: "Democratic Values",
    description:
      "Strengthening democratic institutions and empowering citizens as the path to development.",
    icon: Users,
  },
  {
    title: "Human Infrastructure",
    description:
      "Building physical and institutional systems that allow individuals to fulfill their potential.",
    icon: Building,
  },
  {
    title: "Global Statesmanship",
    description:
      "Positioning Nigeria and Africa at the center of international security and economic dialogue.",
    icon: Globe,
  },
];

onMounted(() => {
  const el = sectionRef.value;
  const header = el.querySelector(".header-animate");
  const cards = el.querySelectorAll(".theme-card");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: el,
      start: "top 80%",
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
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
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
