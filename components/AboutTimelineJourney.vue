<template>
  <section class="horizontal-container bg-[#111] overflow-hidden" ref="mainRef">
    <div class="horizontal-wrapper flex h-screen items-center" ref="wrapperRef">
      <!-- Intro Slide -->
      <div
        class="slide flex-shrink-0 w-screen h-full flex flex-col justify-center px-6 md:px-20 relative pt-20"
      >
        <div
          class="absolute top-20 left-20 text-[10vw] font-black text-white/5 select-none uppercase"
        >
          Origin
        </div>
        <div class="max-w-4xl z-10">
          <h2
            class="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter"
          >
            THE <br />
            JOURNEY.
          </h2>
          <p class="text-xl md:text-2xl text-gray-400 font-light max-w-xl">
            A chronological mapping of a life dedicated to the constructive
            transformation of society.
          </p>
        </div>
      </div>

      <!-- Timeline Slides -->
      <div
        v-for="(item, index) in timelineItems"
        :key="index"
        class="slide flex-shrink-0 w-[85vw] md:w-[65vw] h-full flex items-center px-10 md:px-20 relative border-l border-white/5 pt-20"
      >
        <!-- Large Year Background -->
        <div
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vw] font-black text-white/[0.03] select-none pointer-events-none"
        >
          {{ item.year }}
        </div>

        <div class="relative z-10 w-full group max-w-2xl">
          <!-- Image Container with Max Height Fix to prevent header overlap -->
          <div
            class="overflow-hidden rounded-2xl mb-8 shadow-2xl scale-95 group-hover:scale-100 transition-transform duration-700 bg-gray-900 max-h-[35vh] lg:max-h-[40vh]"
          >
            <img
              :src="item.image"
              :alt="item.title"
              class="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
            />
          </div>

          <div class="space-y-4">
            <span
              class="inline-block px-4 py-1 rounded-full border border-[#007A33] text-[#007A33] text-[10px] font-bold uppercase tracking-widest"
            >
              {{ item.category }}
            </span>
            <h3
              class="text-3xl md:text-5xl font-bold text-white tracking-tight"
            >
              {{ item.title }}
            </h3>
            <p
              class="text-gray-400 text-base md:text-lg leading-relaxed max-w-md font-light line-clamp-2 md:line-clamp-3"
            >
              {{ item.description }}
            </p>

            <!-- Read More Trigger -->
            <button
              @click="openModal(item)"
              class="mt-4 flex items-center gap-2 text-[#007A33] font-bold text-xs uppercase tracking-widest hover:gap-4 transition-all"
            >
              Read Full Story <ArrowRight class="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <!-- End Slide -->
      <div
        class="slide flex-shrink-0 w-screen h-full flex flex-col justify-center items-center px-6 text-center bg-[#007A33] pt-20"
      >
        <h2
          class="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter"
        >
          VISION <br />
          FOR TOMORROW.
        </h2>
        <p class="text-white/80 text-xl max-w-xl font-light">
          Continuing the mandate of service through global partnerships and
          intellectual leadership.
        </p>
      </div>
    </div>

    <!-- Full Story Modal -->
    <Transition name="fade">
      <div
        v-if="selectedItem"
        class="fixed inset-0 z-[100] flex items-center justify-center px-6 py-10 bg-black/90 backdrop-blur-md"
      >
        <div
          class="bg-white rounded-3xl max-w-3xl w-full max-h-[85vh] overflow-hidden flex flex-col relative shadow-2xl"
        >
          <!-- Close Button -->
          <button
            @click="selectedItem = null"
            class="absolute top-6 right-6 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors z-10"
          >
            <X class="w-5 h-5 text-gray-900" />
          </button>

          <!-- Modal Content -->
          <div class="flex-grow overflow-y-auto p-8 md:p-12">
            <div class="flex items-center gap-4 mb-6">
              <span
                class="text-sm font-bold text-[#007A33] tracking-widest uppercase"
                >{{ selectedItem.year }} // {{ selectedItem.category }}</span
              >
            </div>
            <h4
              class="text-3xl md:text-5xl font-black text-gray-900 mb-8 leading-none tracking-tighter"
            >
              {{ selectedItem.title }}
            </h4>
            <div
              class="prose prose-lg text-gray-600 font-light leading-relaxed"
            >
              <p v-for="(p, i) in selectedItem.fullStory" :key="i" class="mb-6">
                {{ p }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { ArrowRight, X } from "lucide-vue-next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Images
import academicImg from "~/assets/img/f95939f380fe9126b93407fcbaa8cd1e4bc6a365.jpg";
import projectImg from "~/assets/img/a67b76754ec4929237dbf9836eec94c97542c543 (1).jpg";
import speakingImg from "~/assets/img/89f7fc9b598261b3244075399cd9a9a97bb5fab3.png";
import readingImg from "~/assets/img/fayemi-reading.jpg";

gsap.registerPlugin(ScrollTrigger);

const mainRef = ref(null);
const wrapperRef = ref(null);
const selectedItem = ref(null);

const timelineItems = [
  {
    year: "1965",
    category: "Roots",
    title: "Beginnings in Ekiti",
    description:
      "Born into a family that valued discipline in Isan-Ekiti, establishing the foundational values of integrity and service.",
    fullStory: [
      "Dr. John Kayode Fayemi is a renowned scholar, public servant, and advocate of democracy whose life story reflects resilience, commitment, and vision.",
      "Born on February 9, 1965, in Ibadan, Oyo State, and raised in Ekiti, he grew up in a family that valued discipline, education, and service. Over the years, these values shaped his outlook on life and leadership.",
      "His early upbringing in Ekiti provided the cultural and moral grounding that would later define his approach to public service—emphasizing integrity, hard work, and the importance of community.",
    ],
    image: readingImg,
  },
  {
    year: "1990s",
    category: "Scholarship",
    title: "Academic Foundation",
    description:
      "Earning a PhD in War Studies at King’s College London, becoming a global authority on civil-military relations.",
    fullStory: [
      "With a strong academic foundation — from the University of Lagos to Obafemi Awolowo University and later earning a PhD in War Studies at King's College London — he has built a reputation as a thought leader and strategist.",
      "His research focused on civil-military relations, governance, and security sector reform, providing him with a unique perspective on the challenges of nation-building in post-colonial Africa.",
      "Currently, he is a Visiting Professor at King’s College London and holds a Senior Advisory position at Albright Stonebridge Group, Washington DC, USA.",
    ],
    image: academicImg,
  },
  {
    year: "2000s",
    category: "Advocacy",
    title: "CDD & Democracy",
    description:
      "Spearheading democratic advocacy across Africa through the Centre for Democracy and Development.",
    fullStory: [
      "As co-founder and Director of the Centre for Democracy and Development (CDD), he spearheaded research, policy engagement, and civic initiatives that strengthened democratic practice across Africa.",
      "His journey has made him not just a Nigerian leader, but a respected voice in Africa and across the world, advocating for people-centered development and regional cooperation.",
    ],
    image: speakingImg,
  },
  {
    year: "2010s",
    category: "Governance",
    title: "Executive Leadership",
    description:
      "Serving as Governor of Ekiti State and Federal Minister, implementing the transformative 8-Point Agenda.",
    fullStory: [
      "In public service, he has held pivotal roles — serving as Nigeria's Minister of Mines and Steel Development and as Governor of Ekiti State for two terms.",
      "His administration introduced transformative policies under the 8-Point Agenda, covering areas such as education, healthcare, infrastructure renewal, and agricultural development.",
      "As Chairman of the Nigeria Governors' Forum (2019-2022), he advanced intergovernmental collaboration, while his role as the pioneer President of the Forum of African Regions (2022– ) positioned him as a continental statesman.",
    ],
    image: projectImg,
  },
];

const openModal = (item) => {
  selectedItem.value = item;
};

onMounted(() => {
  const sections = gsap.utils.toArray(".slide");

  gsap.to(wrapperRef.value, {
    x: () => -(wrapperRef.value.scrollWidth - window.innerWidth),
    ease: "none",
    scrollTrigger: {
      trigger: mainRef.value,
      pin: true,
      scrub: 1,
      end: () => "+=" + wrapperRef.value.scrollWidth,
      anticipatePin: 1,
    },
  });

  sections.forEach((section) => {
    const content = section.querySelector(".relative.z-10");
    if (content) {
      gsap.from(content, {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          containerAnimation: gsap.getProperty(wrapperRef.value, "x"),
          start: "left 80%",
          toggleActions: "play none none reverse",
        },
      });
    }
  });
});
</script>

<style scoped>
.horizontal-container {
  width: 100%;
  height: 100vh;
}

.horizontal-wrapper {
  display: flex;
  width: max-content;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
