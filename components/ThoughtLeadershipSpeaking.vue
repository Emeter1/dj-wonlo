<template>
  <section class="py-24 bg-white font-sans" ref="sectionRef">
    <div class="container-custom">
      <div class="max-w-3xl mb-16 header-animate opacity-0 translate-y-8">
        <h2
          class="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight"
        >
          Speaking Engagements
        </h2>
        <p class="text-gray-600 text-lg leading-relaxed">
          Sharing expertise on governance, industrialization, and regional
          security at premier global forums.
        </p>
      </div>

      <!-- Events List -->
      <div class="space-y-4">
        <div
          v-for="(event, index) in speakingEvents"
          :key="index"
          class="event-row group bg-gray-50 rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 hover:bg-black hover:text-white transition-all duration-500 opacity-0 translate-y-12 border border-gray-100"
        >
          <div
            class="flex flex-col md:flex-row items-center gap-8 text-center md:text-left"
          >
            <!-- Date/Year -->
            <div class="flex flex-col">
              <span class="text-3xl font-black">{{ event.year }}</span>
              <span
                class="text-[#007A33] text-xs font-bold uppercase tracking-widest group-hover:text-green-400"
                >{{ event.role }}</span
              >
            </div>

            <div
              class="h-12 w-[1px] bg-gray-200 hidden md:block group-hover:bg-white/20"
            ></div>

            <!-- Title & Organization -->
            <div>
              <h3 class="text-xl md:text-2xl font-bold">{{ event.title }}</h3>
              <p class="text-gray-500 group-hover:text-gray-400">
                {{ event.org }}
              </p>
            </div>
          </div>

          <!-- Location & CTA -->
          <div
            class="flex items-center gap-8 w-full md:w-auto justify-between md:justify-end"
          >
            <div
              class="flex items-center gap-2 text-gray-400 group-hover:text-gray-400"
            >
              <MapPin class="w-4 h-4" />
              <span class="text-sm font-medium">{{ event.location }}</span>
            </div>
            <button
              class="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-[#007A33] group-hover:bg-[#007A33] transition-all duration-500"
            >
              <ArrowUpRight
                class="w-5 h-5 group-hover:rotate-45 transition-transform"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, ArrowUpRight } from "lucide-vue-next";

gsap.registerPlugin(ScrollTrigger);

const sectionRef = ref(null);

const speakingEvents = [
  {
    year: "2024",
    title: "The Future of African Cities",
    org: "TEDx Lagos",
    role: "Keynote Speaker",
    location: "Lagos, Nigeria",
  },
  {
    year: "2023",
    title: "Digital Transformation in Government",
    org: "GovTech Summit",
    role: "Panelist",
    location: "London, UK",
  },
  {
    year: "2023",
    title: "Building Resilient Ecosystems",
    org: "African Innovation Week",
    role: "Speaker",
    location: "Nairobi, Kenya",
  },
  {
    year: "2022",
    title: "Urban Mobility & Data",
    org: "Smart Cities Conference",
    role: "Moderator",
    location: "Kigali, Rwanda",
  },
];

onMounted(() => {
  const el = sectionRef.value;
  const header = el.querySelector(".header-animate");
  const rows = el.querySelectorAll(".event-row");

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
    rows,
    {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.2,
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
