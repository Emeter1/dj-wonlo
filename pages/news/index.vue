<template>
  <div class="bg-gray-50 min-h-screen pt-20" ref="pageRef">
    <!-- Hero Section -->
    <section
      class="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden"
    >
      <div class="absolute inset-0 z-0">
        <img
          ref="heroBg"
          src="~/assets/img/hero-bg.jpg"
          alt="Dr. Fayemi"
          class="w-full h-full object-cover scale-110"
        />
        <div
          class="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"
        ></div>
      </div>
      <div class="w-full max-w-7xl mx-auto px-6 relative z-10 text-white">
        <div class="max-w-3xl">
          <h1 class="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <div class="overflow-hidden">
              <span class="block title-line translate-y-full opacity-0"
                >Stay Informed</span
              >
            </div>
            <div class="overflow-hidden">
              <span class="block title-line translate-y-full opacity-0"
                >with the Latest</span
              >
            </div>
          </h1>
          <p
            class="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed hero-text opacity-0 translate-y-8"
          >
            Catch up on recent activities, speeches, projects, and public
            statements reflecting Dr. Fayemi's ongoing contributions to
            governance, democracy, and development.
          </p>
          <button
            class="w-14 h-14 flex items-center justify-center bg-[#007A33] hover:bg-[#00662B] text-white rounded-full transition-all duration-300 hero-btn opacity-0 scale-90 shadow-lg hover:scale-105"
          >
            <ArrowDown class="w-6 h-6 animate-bounce" />
          </button>
        </div>
      </div>
    </section>

    <!-- News Grid Section -->
    <section class="py-24">
      <div class="container-custom">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <article
            v-for="(news, index) in newsItems"
            :key="index"
            class="bg-white group flex flex-col h-full hover:shadow-2xl transition-all duration-500 rounded-xl overflow-hidden news-card opacity-0 translate-y-12"
          >
            <div class="h-64 overflow-hidden relative">
              <img
                :src="news.image"
                :alt="news.title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div
                class="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500"
              ></div>

              <!-- Date Tag -->
              <div
                class="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#007A33] shadow-sm"
              >
                {{ news.date }}
              </div>
            </div>

            <div class="p-8 flex flex-col flex-grow">
              <h2
                class="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-[#007A33] transition-colors"
              >
                {{ news.title }}
              </h2>
              <p
                class="text-gray-600 text-sm leading-relaxed mb-6 flex-grow line-clamp-3"
              >
                {{ news.excerpt }}
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
    </section>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { ArrowDown } from "lucide-vue-next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import flowersImg from "~/assets/img/flowers.jpg";

gsap.registerPlugin(ScrollTrigger);

const pageRef = ref(null);
const heroBg = ref(null);
const newsItems = [
  {
    title: "We Will Restore Ekiti to the Right Path",
    date: "Jan 2019",
    excerpt:
      "Dr. Fayemi reaffirms his administration's commitment to rebuilding Ekiti State, emphasizing unity, good governance, and sustainable development.",
    image: flowersImg,
  },
  {
    title: "Flags Off Ero Dam Rehabilitation Project",
    date: "Jun 2019",
    excerpt:
      "Dr. Fayemi reaffirms his administration's commitment to rebuilding Ekiti State, emphasizing unity, good governance, and sustainable development.",
    image: flowersImg,
  },
  {
    title: "Advocates for Revenue Allocation Reform",
    date: "Jan 2019",
    excerpt:
      "Dr. Fayemi calls for a review of Nigeria's revenue allocation formula to support fair wages and address socio-economic challenges.",
    image: flowersImg,
  },
  {
    title: "Promotes Regional Integration through FORAF",
    date: "Jan 2019",
    excerpt:
      "As the pioneer President of the Forum of African Regions, he champions collaboration between sub-national governments to strengthen Africa's role in global governance.",
    image: flowersImg,
  },
  {
    title: "Voices Concern Over Ikogosi Warm Springs Management",
    date: "Jun 2019",
    excerpt:
      "Highlighting the need for better resource management, Dr. Fayemi calls attention to the underutilization of Ekiti's unique tourism assets.",
    image: flowersImg,
  },
  {
    title: "Building Bridges for National Unity",
    date: "Aug 2019",
    excerpt:
      "In a keynote address, Dr. Fayemi stressed the importance of inter-ethnic dialogue and cooperation as the bedrock for a peaceful and prosperous Nigeria.",
    image: flowersImg,
  },
];

onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  // Hero Animation
  gsap.set(".title-line", { y: "100%", opacity: 0 });
  gsap.set(".hero-text", { y: 30, opacity: 0 });
  gsap.set(".hero-btn", { scale: 0.8, opacity: 0 });
  gsap.set(heroBg.value, { scale: 1.2 });

  tl.to(
    heroBg.value,
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
    )
    .to(
      ".hero-btn",
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
      },
      1.1
    );

  // ScrollTrigger for Grid
  gsap.to(".news-card", {
    y: 0,
    opacity: 1,
    duration: 0.8,
    stagger: 0.1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".news-card",
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
  });
});

useHead({
  title: "News & Updates - Dr. John Kayode Fayemi",
  meta: [
    {
      name: "description",
      content:
        "Latest news, updates, speeches, and activities from Dr. John Kayode Fayemi.",
    },
  ],
});
</script>

<style scoped>
.container-custom {
  @apply container mx-auto px-6;
}
</style>
