<template>
  <section
    class="py-24 bg-gray-900 text-white font-sans overflow-hidden"
    ref="sectionRef"
  >
    <div class="container-custom">
      <div class="max-w-3xl mb-16 header-animate opacity-0 translate-y-8">
        <h2 class="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
          Media & Interviews
        </h2>
        <p class="text-gray-400 text-lg leading-relaxed">
          Conversations on policy, technology, and the future of governance
          across global broadcast platforms.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-12">
        <!-- Video Feature -->
        <div class="media-card group opacity-0 translate-x-[-20px]">
          <div
            class="relative aspect-video rounded-3xl overflow-hidden mb-8 border border-white/10 shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1200"
              alt="Digital Economy Summit"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
            />
            <div
              class="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"
            ></div>
            <div class="absolute inset-0 flex items-center justify-center">
              <button
                class="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-[#007A33] transition-all duration-500 group-hover:scale-110"
              >
                <Play class="w-8 h-8 text-white fill-current" />
              </button>
            </div>
            <div class="absolute top-6 left-6 flex gap-2">
              <span
                class="bg-red-600 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full"
                >Video</span
              >
              <span
                class="bg-white/10 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-white/10"
                >CNBC Africa</span
              >
            </div>
          </div>
          <h3
            class="text-2xl font-bold mb-3 group-hover:text-[#007A33] transition-colors"
          >
            The Digital Economy Summit
          </h3>
          <p class="text-gray-500 leading-relaxed mb-6">
            Keynote address on the role of government in fostering innovation
            and digital infrastructure.
          </p>
          <button
            class="flex items-center gap-2 text-sm font-black uppercase tracking-[0.2em] text-[#007A33] group/btn"
          >
            Watch Now
            <ArrowRight
              class="w-4 h-4 group-hover/btn:translate-x-2 transition-transform"
            />
          </button>
        </div>

        <!-- Audio Feature -->
        <div class="media-card group opacity-0 translate-x-[20px]">
          <div
            class="relative aspect-video rounded-3xl overflow-hidden mb-8 border border-white/10 shadow-2xl bg-black/50 flex items-center justify-center p-12"
          >
            <!-- Animated Soundwaves Placeholder -->
            <div class="flex items-center gap-2 h-16">
              <div
                v-for="i in 12"
                :key="i"
                class="w-1.5 bg-[#007A33]/50 rounded-full animate-pulse"
                :style="{
                  height: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.1}s`,
                }"
              ></div>
            </div>
            <div
              class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"
            ></div>
            <div class="absolute inset-0 flex items-center justify-center">
              <button
                class="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-[#007A33] transition-all duration-500 group-hover:scale-110"
              >
                <Mic class="w-8 h-8 text-white" />
              </button>
            </div>
            <div class="absolute top-6 left-6 flex gap-2">
              <span
                class="bg-blue-600 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full"
                >Audio</span
              >
              <span
                class="bg-white/10 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-white/10"
                >Stears Business</span
              >
            </div>
          </div>
          <h3
            class="text-2xl font-bold mb-3 group-hover:text-[#007A33] transition-colors"
          >
            Tech Policy Podcast
          </h3>
          <p class="text-gray-500 leading-relaxed mb-6">
            Discussing the challenges of regulatory frameworks in emerging
            markets and "Sovereign Tech".
          </p>
          <button
            class="flex items-center gap-2 text-sm font-black uppercase tracking-[0.2em] text-[#007A33] group/btn"
          >
            Listen Now
            <ArrowRight
              class="w-4 h-4 group-hover/btn:translate-x-2 transition-transform"
            />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Play, Mic, ArrowRight } from "lucide-vue-next";

gsap.registerPlugin(ScrollTrigger);

const sectionRef = ref(null);

onMounted(() => {
  const el = sectionRef.value;
  const header = el.querySelector(".header-animate");
  const cards = el.querySelectorAll(".media-card");

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
    cards,
    {
      x: 0,
      opacity: 1,
      duration: 1.2,
      stagger: 0.3,
      ease: "expo.out",
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
