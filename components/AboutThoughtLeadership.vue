<template>
  <section class="py-20 bg-white" ref="sectionRef">
    <div class="container-custom">
      <div class="relative flex flex-col lg:flex-row items-center">
        <!-- Content Card (Overlapping) -->
        <div class="w-full lg:w-1/2 z-10 lg:pr-12 mb-8 lg:mb-0">
          <div
            class="bg-[#1a1a1a] text-white p-10 md:p-14 lg:-mr-20 relative shadow-2xl skew-card opacity-0 -translate-x-12"
          >
            <!-- Decorative border line on left similar to image -->
            <div
              class="absolute left-0 top-10 bottom-10 w-1 bg-white opacity-20 hidden lg:block"
            ></div>

            <h2 class="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Thought <br />
              Leadership
            </h2>
            <p class="text-gray-400 mb-8 leading-relaxed">
              Shaping conversations on democracy, governance, and Africa's
              future through scholarship, service, and global engagement.
            </p>

            <ul class="space-y-4 mb-10 text-gray-300">
              <li class="flex items-start tl-item opacity-0 translate-y-4">
                <span
                  class="mr-2 mt-1.5 w-1 h-1 bg-gray-400 rounded-full flex-shrink-0"
                ></span>
                <span>
                  <strong class="text-white">Publications</strong> – Books,
                  articles, and policy papers.
                </span>
              </li>
              <li class="flex items-start tl-item opacity-0 translate-y-4">
                <span
                  class="mr-2 mt-1.5 w-1 h-1 bg-gray-400 rounded-full flex-shrink-0"
                ></span>
                <span>
                  <strong class="text-white">Speeches & Lectures</strong> –
                  Inspiring talks delivered in Nigeria and worldwide.
                </span>
              </li>
              <li class="flex items-start tl-item opacity-0 translate-y-4">
                <span
                  class="mr-2 mt-1.5 w-1 h-1 bg-gray-400 rounded-full flex-shrink-0"
                ></span>
                <span>
                  <strong class="text-white">Media Features</strong> –
                  Interviews, documentaries, and thought pieces on leadership.
                </span>
              </li>
            </ul>

            <button
              class="bg-green-700 hover:bg-green-800 text-white py-3 px-8 text-sm font-semibold transition-colors tl-btn opacity-0 translate-y-4"
            >
              Explore Insights
            </button>
          </div>
        </div>

        <!-- Image Section -->
        <div
          class="w-full lg:w-2/3 h-[400px] md:h-[500px] lg:h-[600px] relative lg:ml-auto overflow-hidden"
        >
          <img
            src="~/assets/img/fayose-2.jpg"
            alt="Dr. Fayemi speaking at podium"
            class="w-full h-full object-cover object-top parallax-img scale-110"
          />
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
  const card = el.querySelector(".skew-card");
  const items = el.querySelectorAll(".tl-item");
  const btn = el.querySelector(".tl-btn");
  const img = el.querySelector(".parallax-img");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: el,
      start: "top 70%",
      toggleActions: "play none none reverse",
    },
  });

  // Image reveals first (subtle parallax already set by scale)
  tl.to(
    img,
    {
      scale: 1,
      duration: 2,
      ease: "power2.out",
    },
    0
  )
    // Card slides in
    .to(
      card,
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      },
      0.2
    )
    // List items stagger in
    .to(
      items,
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.2,
        ease: "power3.out",
      },
      0.8
    )
    // Button fades in
    .to(
      btn,
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
      },
      1.2
    );
});
</script>

<style scoped>
.container-custom {
  @apply container mx-auto px-6;
}
</style>
