<template>
  <div class="bg-gray-50 min-h-screen pt-32 pb-20" ref="pageRef">
    <div class="container-custom">
      <!-- Top Section: Split Layout -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
        <!-- Left Column: Header + Grid -->
        <!-- Spans 7 cols on large screens -->
        <div class="lg:col-span-7 flex flex-col">
          <!-- Header Text Area -->
          <div class="mb-12">
            <div class="overflow-hidden mb-3">
              <span
                class="text-[#007A33] font-bold text-sm uppercase tracking-wider block translate-y-full opacity-0 gallery-subtitle"
              >
                The Gallery
              </span>
            </div>
            <h1
              class="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight max-w-2xl gallery-title opacity-0 translate-y-8"
            >
              Explore highlights from key events, engagements, and initiatives
              captured in pictures.
            </h1>
          </div>

          <!-- Top Left Grid: 2 rows of 3 columns = 6 images -->
          <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div
              v-for="(img, index) in topGridImages"
              :key="`top-${index}`"
              class="aspect-square overflow-hidden rounded-lg shadow-sm top-gallery-item opacity-0 scale-90"
            >
              <img
                :src="img"
                class="w-full h-full object-cover hover:scale-110 transition-transform duration-700 cursor-pointer"
                alt="Gallery Image"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <!-- Right Column: Single Feature Image -->
        <!-- Spans 5 cols on large screens -->
        <div class="lg:col-span-5 hidden lg:block">
          <div
            class="h-full w-full overflow-hidden rounded-xl shadow-lg feature-image opacity-0 translate-x-12"
          >
            <img
              v-if="featureImage"
              :src="featureImage"
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-700 cursor-pointer"
              alt="Feature Gallery Image"
            />
            <!-- Fallback if no images -->
            <div
              v-else
              class="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400"
            >
              No Image
            </div>
          </div>
        </div>
        <!-- Mobile view of feature image -->
        <div
          class="lg:hidden h-80 overflow-hidden mb-6 rounded-lg top-gallery-item opacity-0"
        >
          <img
            v-if="featureImage"
            :src="featureImage"
            class="w-full h-full object-cover"
            alt="Feature Gallery Image"
          />
        </div>
      </div>

      <!-- Bottom Section: Remaining Grid -->
      <!-- 4 Columns on desktop -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div
          v-for="(img, index) in bottomGridImages"
          :key="`bottom-${index}`"
          class="aspect-[4/3] overflow-hidden rounded-lg shadow-sm bottom-gallery-item opacity-0 translate-y-12"
        >
          <img
            :src="img"
            class="w-full h-full object-cover hover:scale-110 transition-transform duration-700 cursor-pointer"
            alt="Gallery Image"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const pageRef = ref(null);

// Load all images from the gallery directory
const globImages = import.meta.glob(
  "~/assets/img/gallaryimage/*.{png,jpg,jpeg,svg}",
  { eager: true }
);
const allImages = Object.values(globImages).map((mod) => mod.default);

// Layout logic:
const topGridImages = allImages.slice(0, 6);
const featureImage = allImages[6] || allImages[0];
const bottomGridImages = allImages.slice(7);

onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  // Header & Top Section Animation
  tl.to(".gallery-subtitle", {
    y: "0%",
    opacity: 1,
    duration: 0.8,
  })
    .to(
      ".gallery-title",
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
      },
      "-=0.4"
    )
    .to(
      ".top-gallery-item",
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
      },
      "-=0.4"
    )
    .to(
      ".feature-image",
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      },
      "-=0.8"
    );

  // Bottom Grid ScrollTrigger
  gsap.to(".bottom-gallery-item", {
    y: 0,
    opacity: 1,
    duration: 0.8,
    stagger: 0.05,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".bottom-gallery-item",
      start: "top 90%",
      toggleActions: "play none none reverse",
    },
  });
});

useHead({
  title: "Gallery - Dr. John Kayode Fayemi",
  meta: [
    {
      name: "description",
      content: "Photo gallery of key events, engagements, and initiatives.",
    },
  ],
});
</script>

<style scoped>
.container-custom {
  @apply container mx-auto px-6;
}
</style>
