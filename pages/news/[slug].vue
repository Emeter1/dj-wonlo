<template>
  <div class="bg-gray-50 min-h-screen pt-20 pb-20" ref="pageRef">
    <!-- Hero Image -->
    <div class="w-full h-[50vh] min-h-[400px] overflow-hidden mb-12 relative">
      <img
        ref="heroImage"
        src="~/assets/img/hero-bg.jpg"
        alt="Ero Dam Rehabilitation"
        class="w-full h-full object-cover object-top scale-110"
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"
      ></div>

      <div class="absolute bottom-0 left-0 w-full p-6 md:p-12 z-10">
        <div class="container mx-auto">
          <span
            class="inline-block bg-[#007A33] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 opacity-0 translate-y-4 header-tag"
          >
            Infrastructure
          </span>
          <h1
            class="text-3xl md:text-5xl font-bold text-white mb-2 leading-tight max-w-4xl opacity-0 translate-y-4 header-title"
          >
            Rehabilitation of Ero Dam Project
          </h1>
        </div>
      </div>
    </div>

    <div class="container-custom">
      <!-- Content Section -->
      <div
        class="max-w-4xl mx-auto space-y-8 content-animate opacity-0 translate-y-8"
      >
        <div
          class="flex items-center gap-4 text-sm text-gray-500 mb-8 border-b pb-4"
        >
          <span class="font-semibold text-gray-900">June 15, 2019</span>
          <span class="w-1 h-1 bg-gray-400 rounded-full"></span>
          <span>Ekiti State, Nigeria</span>
        </div>

        <div
          class="space-y-6 text-gray-700 leading-loose text-lg md:text-xl font-light"
        >
          <p class="font-medium text-gray-900 text-2xl mb-8 leading-snug">
            Dr. John Kayode Fayemi, then Governor of Ekiti State, officially
            launched the rehabilitation of the Ero Dam, a $55 million project
            supported by the World Bank.
          </p>
          <p>
            The project is designed to restore and upgrade the dam in order to
            provide a sustainable water supply to thousands of households and
            communities across Ekiti State. The Ero Dam, constructed in the late
            1980s, had served the people for years but had fallen intro a state
            of disrepair due to lack of maintenance and growing demand.
          </p>
          <p>
            As a result, many communities faced acute water shortages, forcing
            residents to rely on unsafe water sources. Recognizing this
            challenge, Dr. Fayemi placed the dam's rehabilitation at the top of
            his development agenda, seeing it as critical to the health,
            welfare, and prosperity of the people.
          </p>
          <div
            class="aspect-video w-full rounded-2xl overflow-hidden bg-gray-200 my-10 shadow-lg"
          >
            <!-- Placeholder for inline image/video -->
            <img
              src="~/assets/img/fayose-2.jpg"
              class="w-full h-full object-cover"
            />
          </div>
          <p>
            At the commissioning ceremony, Dr. Fayemi emphasized that water is
            not just a basic need but a foundation for sustainable growth. He
            explained that the rehabilitation project was part of a broader
            effort to invest in infrastructure that directly improves lives.
          </p>
          <p>
            The project is expected to benefit more than 500,000 residents by
            ensuring regular access to potable water, reducing the spread of
            waterborne diseases, and providing support for irrigation and
            farming activities.
          </p>
        </div>

        <!-- Back Link -->
        <div class="pt-12">
          <NuxtLink
            to="/news"
            class="inline-flex items-center gap-2 text-[#007A33] font-bold hover:underline group"
          >
            <ArrowLeft
              class="w-4 h-4 group-hover:-translate-x-1 transition-transform"
            />
            Back to News & Updates
          </NuxtLink>
        </div>
      </div>

      <!-- Related News Section -->
      <div class="mt-32 border-t pt-16">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-10">
          Related news
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article
            v-for="(news, index) in relatedNews"
            :key="index"
            class="bg-white group flex flex-col h-full hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden related-card opacity-0 translate-y-12"
          >
            <div class="h-56 overflow-hidden relative">
              <img
                :src="news.image"
                :alt="news.title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div class="p-6 flex flex-col flex-grow">
              <h2
                class="text-lg font-bold text-gray-900 mb-2 leading-tight group-hover:text-[#007A33] transition-colors"
              >
                {{ news.title }}
              </h2>
              <p
                class="text-xs text-gray-400 font-medium mb-3 uppercase tracking-wider"
              >
                {{ news.date }}
              </p>
              <NuxtLink
                to="/news/ero-dam-rehabilitation"
                class="text-[#007A33] font-semibold text-sm hover:underline mt-auto inline-flex items-center gap-2 group/link"
              >
                Read more
                <span
                  class="group-hover/link:translate-x-1 transition-transform"
                  >→</span
                >
              </NuxtLink>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { ArrowLeft } from "lucide-vue-next";
import flowersImg from "~/assets/img/flowers.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const pageRef = ref(null);
const heroImage = ref(null);

onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  // Hero Entrance
  tl.to(
    heroImage.value,
    {
      scale: 1,
      duration: 2,
      ease: "power2.out",
    },
    0
  )
    .to(
      [".header-tag", ".header-title"],
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
      },
      0.5
    )
    .to(
      ".content-animate",
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
      },
      0.8
    );

  // Related News ScrollTrigger
  gsap.to(".related-card", {
    y: 0,
    opacity: 1,
    duration: 0.8,
    stagger: 0.15,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".related-card",
      start: "top 85%",
    },
  });

  // Parallax Effect for Hero on Scroll
  gsap.to(heroImage.value, {
    yPercent: 30,
    ease: "none",
    scrollTrigger: {
      trigger: pageRef.value,
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });
});

const relatedNews = [
  {
    title: "We Will Restore Ekiti to the Right Path",
    date: "Jan 2019",
    image: flowersImg,
  },
  {
    title: "Advocates for Revenue Allocation Reform",
    date: "Jan 2019",
    image: flowersImg,
  },
  {
    title: "Promotes Regional Integration through FORAF",
    date: "Feb 2019",
    image: flowersImg,
  },
];

useHead({
  title: "Ero Dam Rehabilitation - Dr. John Kayode Fayemi",
  meta: [
    {
      name: "description",
      content:
        "Details about the Ero Dam rehabilitation project launched by Dr. John Kayode Fayemi.",
    },
  ],
});
</script>

<style scoped>
.container-custom {
  @apply container mx-auto px-6;
}
</style>
