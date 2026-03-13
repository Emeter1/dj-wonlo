<template>
  <div
    class="bg-[#050505] min-h-screen text-white font-sans selection:bg-dj-primary selection:text-dj-black overflow-x-hidden"
  >
    <Navbar />

    <!-- Immersive Background Elements -->
    <div class="fixed inset-0 z-0 pointer-events-none">
      <div
        class="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-dj-primary/10 blur-[150px] rounded-full animate-pulse-slow"
      ></div>
      <div
        class="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-dj-primary/5 blur-[120px] rounded-full"
      ></div>
      <div
        class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"
      ></div>
    </div>

    <main class="relative z-10">
      <!-- Mega Hero Section -->
      <section class="relative min-h-screen flex items-center pt-20">
        <div class="container mx-auto px-6">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <!-- Hero Text Content -->
            <div class="order-2 lg:order-1 space-y-8">
              <div
                class="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl"
              >
                <span
                  class="w-2 h-2 rounded-full bg-dj-primary animate-ping"
                ></span>
                <span
                  class="text-xs font-display uppercase tracking-[0.3em] text-dj-primary font-bold"
                  >Exclusive Experience</span
                >
              </div>

              <h1
                class="text-7xl md:text-[8rem] font-display font-black leading-[0.8] tracking-tighter uppercase relative"
              >
                <span class="block text-white opacity-90">The Silk</span>
                <span class="block text-transparent stroke-text">Fades</span>
                <span
                  class="absolute -bottom-4 right-0 md:right-32 text-xl font-light italic text-dj-primary normal-case tracking-normal"
                  >Curated by DJ Wonlo</span
                >
              </h1>

              <p
                class="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-xl border-l-2 border-dj-primary/30 pl-8"
              >
                A collision of velvet soundscapes and sharp aesthetics. A night
                where R&B isn't just heard—it's felt.
              </p>

              <div class="flex flex-wrap gap-4 pt-4">
                <button
                  @click="scrollToTickets"
                  class="px-10 py-5 bg-dj-primary text-white font-display text-sm uppercase tracking-[0.3em] font-black hover:shadow-[0_0_50px_rgba(0,119,221,0.5)] transition-all duration-500 group relative overflow-hidden"
                >
                  <span class="relative z-10 tracking-widest"
                    >Access Tickets</span
                  >
                  <div
                    class="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 opacity-10"
                  ></div>
                </button>
                <button
                  @click="scrollToVibe"
                  class="px-10 py-5 border border-white/10 text-white font-display text-sm uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-500"
                >
                  The Vibe
                </button>
              </div>
            </div>

            <!-- Hero Poster/Visual -->
            <div class="order-1 lg:order-2 relative">
              <div class="relative z-10 group">
                <!-- Floating Glass Card -->
                <div
                  class="absolute -top-10 -right-10 z-20 hidden md:block animate-float"
                >
                  <div
                    class="p-6 bg-white/5 border border-white/10 backdrop-blur-2xl rounded-2xl shadow-2xl"
                  >
                    <Music2 class="w-8 h-8 text-dj-primary mb-3" />
                    <div class="text-2xl font-display font-bold">100% R&B</div>
                    <div
                      class="text-[10px] uppercase tracking-widest text-gray-500"
                    >
                      Authentic Sound
                    </div>
                  </div>
                </div>

                <div
                  class="absolute -bottom-10 -left-10 z-20 hidden md:block animate-float"
                  style="animation-delay: -2s"
                >
                  <div
                    class="p-6 bg-dj-primary/10 border border-dj-primary/20 backdrop-blur-2xl rounded-2xl shadow-2xl"
                  >
                    <div class="text-4xl font-display font-black text-white">
                      MAR 21
                    </div>
                    <div
                      class="text-[10px] uppercase tracking-[0.5em] text-dj-primary"
                    >
                      SAVE THE DATE
                    </div>
                  </div>
                </div>

                <!-- Main Poster Frame -->
                <div
                  class="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.5)] rotate-3 group-hover:rotate-0 transition-transform duration-1000 bg-dj-paper"
                >
                  <img
                    src="~/assets/css/img/silk-fades-poster.jpg"
                    class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                    alt="Official Poster"
                  />
                  <div
                    class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"
                  ></div>
                </div>
              </div>

              <!-- Background Glow -->
              <div
                class="absolute inset-0 bg-dj-primary/20 blur-[120px] rounded-full scale-75 -z-10 animate-pulse-slow"
              ></div>
            </div>
          </div>
        </div>

        <!-- Scroll Indicator -->
        <div
          class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 py-8 pointer-events-none opacity-50"
        >
          <div
            class="w-[1px] h-20 bg-gradient-to-b from-dj-primary to-transparent"
          ></div>
          <span
            class="text-[10px] uppercase tracking-[1em] rotate-90 translate-y-16"
            >SCROLL</span
          >
        </div>
      </section>

      <!-- Event Details Grid -->
      <section class="py-32 relative">
        <div class="container mx-auto px-6">
          <div
            class="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-white/5 border border-white/5 rounded-[2.5rem] overflow-hidden backdrop-blur-sm"
          >
            <div
              class="p-12 md:p-16 space-y-6 bg-[#080808] hover:bg-white/5 transition-colors group"
            >
              <div
                class="w-12 h-12 rounded-xl bg-dj-primary/10 border border-dj-primary/20 flex items-center justify-center text-dj-primary mb-8 group-hover:scale-110 transition-transform"
              >
                <Calendar />
              </div>
              <h3
                class="text-2xl font-display font-bold uppercase tracking-widest text-white"
              >
                When
              </h3>
              <p class="text-gray-400 font-light leading-relaxed">
                Saturday Night, March 21, 2026. Door opens at
                <span class="text-white">6:00 PM</span> sharp until late vibes
                conclude.
              </p>
            </div>

            <div
              class="p-12 md:p-16 space-y-6 bg-[#080808] hover:bg-white/5 transition-colors group"
            >
              <div
                class="w-12 h-12 rounded-xl bg-dj-primary/10 border border-dj-primary/20 flex items-center justify-center text-dj-primary mb-8 group-hover:scale-110 transition-transform"
              >
                <MapPin />
              </div>
              <h3
                class="text-2xl font-display font-bold uppercase tracking-widest text-white"
              >
                Where
              </h3>
              <p class="text-gray-400 font-light leading-relaxed">
                The iconic
                <span class="text-white">June Street Barbershop</span> in
                Addison, TX. A premium space for the elite.
              </p>
            </div>

            <div
              class="p-12 md:p-16 space-y-6 bg-[#080808] hover:bg-white/5 transition-colors group"
            >
              <div
                class="w-12 h-12 rounded-xl bg-dj-primary/10 border border-dj-primary/20 flex items-center justify-center text-dj-primary mb-8 group-hover:scale-110 transition-transform"
              >
                <Users />
              </div>
              <h3
                class="text-2xl font-display font-bold uppercase tracking-widest text-white"
              >
                Crowd
              </h3>
              <p class="text-gray-400 font-light leading-relaxed">
                Strictly for the lovers of authentic R&B. Intimate, soulful, and
                highly exclusive.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- The Experience Section -->
      <section
        id="vibe-section"
        class="py-32 bg-[#080808]/50 overflow-hidden relative"
      >
        <!-- Floating shapes -->
        <div
          class="absolute -top-24 -right-24 w-96 h-96 bg-dj-primary/5 rounded-full blur-[100px]"
        ></div>

        <div class="container mx-auto px-6">
          <div class="flex flex-col lg:flex-row gap-24 items-center">
            <div class="w-full lg:w-1/2 relative">
              <div
                class="absolute -inset-4 border border-dj-primary/20 rounded-[2rem] -rotate-3"
              ></div>
              <div
                class="relative z-10 rounded-[2rem] overflow-hidden border border-white/10 aspect-square group bg-dj-paper"
              >
                <img
                  src="~/assets/css/img/mini_dj.jpg"
                  class="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 opacity-60"
                  alt="Atmosphere"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"
                ></div>
                <div class="absolute bottom-12 left-12 right-12">
                  <div
                    class="text-4xl font-display font-black text-white uppercase tracking-tighter mb-2"
                  >
                    Sonic Curation
                  </div>
                  <p class="text-gray-400 leading-relaxed font-light">
                    Every track selected with intention to create a seamless
                    emotional arc through the night.
                  </p>
                </div>
              </div>
            </div>

            <div class="w-full lg:w-1/2 space-y-12">
              <div class="space-y-4">
                <h2
                  class="text-dj-primary font-display uppercase tracking-[0.4em] text-sm"
                >
                  The Perks
                </h2>
                <h3
                  class="text-5xl md:text-7xl font-display font-black text-white uppercase tracking-tight leading-none"
                >
                  Elevated <br />
                  Elements
                </h3>
              </div>

              <div class="space-y-8">
                <div
                  v-for="(perk, i) in perks"
                  :key="i"
                  class="flex gap-8 group"
                >
                  <div
                    class="flex-shrink-0 w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 group-hover:text-dj-primary group-hover:border-dj-primary/30 group-hover:bg-dj-primary/10 transition-all duration-500"
                  >
                    <component :is="perk.icon" class="w-6 h-6" />
                  </div>
                  <div class="space-y-2">
                    <h4
                      class="text-xl font-display font-bold text-white uppercase tracking-widest"
                    >
                      {{ perk.title }}
                    </h4>
                    <p
                      class="text-gray-400 font-light leading-relaxed max-w-md"
                    >
                      {{ perk.description }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Games Arena Section -->
      <section class="py-32 relative border-t border-white/5">
        <div class="container mx-auto px-6">
          <div
            class="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 px-4"
          >
            <div class="space-y-4">
              <h2
                class="text-dj-primary font-display uppercase tracking-[0.4em] text-xs"
              >
                Entertainment
              </h2>
              <h3
                class="text-5xl font-display font-black text-white uppercase tracking-tighter"
              >
                Games Area
              </h3>
            </div>
            <p
              class="text-gray-500 uppercase tracking-[0.2em] text-xs font-bold font-display max-w-xs text-right"
            >
              Beyond the music, engage in classic competition.
            </p>
          </div>

          <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div
              v-for="game in games"
              :key="game"
              class="group p-1 bg-gradient-to-br from-white/10 to-transparent rounded-2xl transition-all duration-500 hover:from-dj-primary/40 hover:to-transparent"
            >
              <div
                class="h-full px-8 py-10 bg-[#080808] rounded-[calc(1rem+1px)] flex flex-col items-center justify-center gap-6 text-center group-hover:bg-black transition-colors"
              >
                <Gamepad2
                  class="w-8 h-8 text-gray-600 group-hover:text-dj-primary group-hover:scale-125 transition-all duration-500"
                />
                <span
                  class="text-xs uppercase tracking-[0.3em] font-display font-bold text-gray-400 group-hover:text-white"
                  >{{ game }}</span
                >
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Final Call to Action -->
      <section id="ticket-section" class="py-48 relative overflow-hidden">
        <div class="absolute inset-0 bg-dj-primary/5 pointer-events-none"></div>
        <div
          class="container mx-auto px-6 text-center space-y-12 relative z-10"
        >
          <div class="space-y-4">
            <h2
              class="text-6xl md:text-8xl font-display font-black text-white uppercase tracking-tighter leading-none"
            >
              Don't Miss <br />
              The Vibe
            </h2>
            <p
              class="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed italic border-x border-dj-primary/20 px-8 py-4"
            >
              "A night curated for those who understand that R&B is more than
              just a genre—it's a lifestyle."
            </p>
          </div>

          <div class="flex flex-col items-center gap-8">
            <div
              class="flex items-center gap-8 text-2xl font-display text-white border-y border-white/10 py-6 uppercase tracking-[0.5em] font-black"
            >
              <span>Limited</span>
              <span class="text-dj-primary">—</span>
              <span>Available</span>
            </div>

            <button
              class="px-16 py-8 bg-white text-black font-display text-lg uppercase tracking-[0.3em] font-black hover:bg-dj-primary hover:text-white transition-all duration-500 hover:shadow-[0_0_80px_rgba(0,119,221,0.6)] group"
            >
              Get Your Tickets Now
              <ArrowRight
                class="inline-block ml-4 group-hover:translate-x-4 transition-transform"
              />
            </button>
          </div>
        </div>

        <!-- Decorative Record -->
        <div
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full -z-10 animate-spin-slow"
        ></div>
        <div
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full -z-10 animate-spin-slow"
          style="animation-direction: reverse"
        ></div>
      </section>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import {
  Calendar,
  MapPin,
  Users,
  Music2,
  Scissors,
  GlassWater,
  Gamepad2,
  ArrowRight,
  Clock,
} from "lucide-vue-next";

const perks = [
  {
    icon: Scissors,
    title: "The Sharpest Cuts",
    description:
      "Complimentary precision haircuts by elite barbers. Arrive early to secure your spot in the chair.",
  },
  {
    icon: GlassWater,
    title: "Liquid Luxury",
    description:
      "Complimentary premium spirits and bespoke cocktails curated specifically for the evening mood.",
  },
  {
    icon: Music2,
    title: "Sonic Mastery",
    description:
      "A continuous 6-hour set of the world's finest R&B, from underground gems to platinum essentials.",
  },
];

const games = [
  "FC26 Arena",
  "Pool Tables",
  "Classic Pac-Man",
  "Giant Jenga",
  "Spades Tournament",
  "Uno & More",
  "Dominos",
  "Photo Booth",
];

const scrollToTickets = () => {
  const el = document.getElementById("ticket-section");
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const scrollToVibe = () => {
  const el = document.getElementById("vibe-section");
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

useHead({
  title: "THE SILK FADES | DJ WONLO EXPERIENCE",
  meta: [
    {
      name: "description",
      content: "An ultra-premium R&B experience curated by DJ Wonlo.",
    },
  ],
});
</script>

<style scoped>
.font-display {
  font-family: "Outfit", sans-serif;
}

.stroke-text {
  /* Using transparent with stroke for that premium look */
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
}

.title-glow {
  text-shadow: 0 0 80px rgba(0, 119, 221, 0.4);
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0) rotate(0);
  }
  50% {
    transform: translateY(-20px) rotate(2deg);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

@keyframes spin-slow {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 20s linear infinite;
}

@keyframes pulse-slow {
  0%,
  100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.1);
  }
}

.animate-pulse-slow {
  animation: pulse-slow 10s ease-in-out infinite;
}

/* Custom scrollbar for premium feel */
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: #050505;
}
::-webkit-scrollbar-thumb {
  background: #0077dd;
  border-radius: 10px;
}
</style>
