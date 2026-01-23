<template>
  <section class="py-24 bg-gray-50 font-sans" ref="sectionRef">
    <div class="container-custom">
      <div
        class="bg-black rounded-[3rem] p-10 md:p-20 relative overflow-hidden flex flex-col items-center text-center shadow-2xl dispatch-card opacity-0 translate-y-12"
      >
        <!-- Abstract Background Decor -->
        <div
          class="absolute -top-20 -right-20 w-80 h-80 bg-[#007A33]/20 blur-[120px] rounded-full"
        ></div>
        <div
          class="absolute -bottom-20 -left-20 w-80 h-80 bg-[#007A33]/10 blur-[100px] rounded-full"
        ></div>

        <div class="relative z-10 max-w-2xl">
          <div
            class="inline-flex items-center gap-2 bg-[#007A33] px-4 py-2 rounded-full text-white text-[10px] font-black uppercase tracking-[0.3em] mb-10"
          >
            <Mail class="w-3 h-3" />
            Join the Dispatch
          </div>

          <h2
            class="text-4xl md:text-6xl font-black text-white mb-8 leading-[1.1] tracking-tight"
          >
            Substance Only. <br />
            Delivered Occasionally.
          </h2>

          <p
            class="text-gray-400 text-lg md:text-xl leading-relaxed mb-12 font-light"
          >
            Occasional emails on governance, film, technology, and the work of
            building a different Nigeria. No spam. Substance only.
          </p>

          <form
            @submit.prevent="handleSubscribe"
            class="flex flex-col md:flex-row gap-4 w-full max-w-lg mx-auto mb-8"
          >
            <div class="flex-grow group">
              <input
                type="email"
                placeholder="Enter your email address"
                v-model="email"
                required
                class="w-full h-16 bg-white/5 border border-white/10 rounded-2xl px-8 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#007A33] focus:border-transparent transition-all group-hover:bg-white/10"
              />
            </div>
            <button
              type="submit"
              class="h-16 bg-[#007A33] hover:bg-[#00662B] text-white px-10 rounded-2xl font-bold transition-all flex items-center justify-center gap-2 transform active:scale-95 shadow-lg shadow-[#007A33]/20"
            >
              Subscribe
              <Send class="w-4 h-4" />
            </button>
          </form>

          <p class="text-gray-500 text-xs">
            Your email is sacred. Unsubscribe anytime.
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
import { Mail, Send } from "lucide-vue-next";

gsap.registerPlugin(ScrollTrigger);

const sectionRef = ref(null);
const email = ref("");

const handleSubscribe = () => {
  // Placeholder for subscription logic
  alert(`Thank you for subscribing with: ${email.value}!`);
  email.value = "";
};

onMounted(() => {
  const el = sectionRef.value;
  const card = el.querySelector(".dispatch-card");

  gsap.to(card, {
    scrollTrigger: {
      trigger: el,
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
    y: 0,
    opacity: 1,
    duration: 1.2,
    ease: "expo.out",
  });
});
</script>

<style scoped>
.container-custom {
  @apply container mx-auto px-6;
}
</style>
