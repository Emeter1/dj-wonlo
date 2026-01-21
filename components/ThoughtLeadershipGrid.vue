<template>
  <section class="py-24 bg-gray-50 font-sans" ref="sectionRef">
    <div class="container-custom">
      <!-- Intro Text -->
      <div
        class="max-w-3xl mx-auto text-center mb-16 header-animate opacity-0 translate-y-8"
      >
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Insights & Perspectives
        </h2>
        <div class="h-1 w-20 bg-[#007A33] mx-auto rounded-full mb-6"></div>
        <p class="text-gray-600 leading-relaxed">
          Explore a curation of speeches, publications, and media features that
          reflect a lifelong commitment to democratic ideals and sustainable
          development.
        </p>
      </div>

      <!-- Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article
          v-for="(card, index) in cards"
          :key="index"
          class="tl-card bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group opacity-0 translate-y-12"
        >
          <!-- Image Area -->
          <div class="h-56 overflow-hidden relative">
            <img
              :src="card.image"
              :alt="card.shortTitle"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div
              class="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"
            ></div>

            <!-- Category Tag -->
            <div
              class="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#007A33]"
            >
              {{ card.shortTitle }}
            </div>
          </div>

          <!-- Content Area -->
          <div class="p-8 flex flex-col flex-grow">
            <h3
              class="text-xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-[#007A33] transition-colors"
            >
              {{ card.title }}
            </h3>

            <ul class="space-y-3 mb-8 text-sm text-gray-600 flex-grow">
              <li
                v-for="(item, idx) in card.items"
                :key="idx"
                class="flex items-start"
              >
                <span
                  class="mr-2 mt-1.5 w-1.5 h-1.5 bg-gray-300 rounded-full flex-shrink-0 group-hover:bg-[#007A33] transition-colors"
                ></span>
                <span>{{ item }}</span>
              </li>
            </ul>

            <div
              class="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between text-[#007A33] font-semibold text-sm"
            >
              <span>{{ card.linkText }}</span>
              <ArrowRight
                class="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
              />
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref, resolveComponent } from "vue";
import { ArrowRight } from "lucide-vue-next";
import flowersImg from "~/assets/img/flowers.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sectionRef = ref(null);

onMounted(() => {
  const el = sectionRef.value;
  const header = el.querySelector(".header-animate");
  const cards = el.querySelectorAll(".tl-card");

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
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
    },
    "-=0.4"
  );
});

const baseCards = [
  {
    title:
      "Written works specifically challenging conventional thinking and providing actionable ideas.",
    shortTitle: "Publications",
    items: [
      "Mercenaries: An African Security Dilemma (1999)",
      "Reforming Civil-Military Relations in Nigeria",
      "Policy papers on governance & resource management",
    ],
    linkText: "Read Publications",
    linkType: "nuxt-link",
    linkTo: "/publications/mercenaries",
    image: flowersImg,
  },
  {
    title: "Inspiring words delivered from classrooms to global conferences.",
    shortTitle: "Speeches",
    items: [
      "Keynote addresses on democracy across Africa",
      "Lectures at King's College London",
      "Forums on regional integration",
    ],
    linkText: "Watch Speeches",
    linkType: "a",
    linkHref: "#",
    image: flowersImg,
  },
  {
    title: "Conversations that amplify the voice in shaping public debate.",
    shortTitle: "Media",
    items: [
      "Interviews with international media outlets",
      "Panel discussions on security",
      "Documentaries on public service",
    ],
    linkText: "Explore Media",
    linkType: "a",
    linkHref: "#",
    image: flowersImg,
  },
];

// Duplicate to get more items for the grid visualization
const cards = [...baseCards, ...baseCards, ...baseCards];
</script>

<style scoped>
.container-custom {
  @apply container mx-auto px-6;
}
</style>
