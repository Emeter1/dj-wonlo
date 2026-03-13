<template>
  <section
    id="featured-event"
    class="py-24 bg-dj-black relative overflow-hidden"
  >
    <!-- Background Decor -->
    <div
      class="absolute top-0 right-0 w-1/3 h-1/3 bg-dj-primary/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"
    ></div>
    <div
      class="absolute bottom-0 left-0 w-1/4 h-1/2 bg-dj-primary/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2"
    ></div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="max-w-6xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-16">
          <h2
            class="text-dj-primary font-display uppercase tracking-[0.3em] text-sm mb-4"
          >
            Upcoming Feature
          </h2>
          <h1
            class="text-5xl md:text-7xl font-display text-white mb-6 uppercase tracking-tight"
          >
            The Silk Fades
          </h1>
          <p class="text-xl text-gray-400 font-light italic">
            An R&B Experience curated by DJ WONLO
          </p>
        </div>

        <div class="flex flex-col lg:flex-row gap-12 items-stretch">
          <!-- Poster Image -->
          <div class="w-full lg:w-1/2 flex">
            <div class="relative group w-full flex">
              <div
                class="absolute -inset-1 bg-gradient-to-r from-dj-primary to-white opacity-25 blur-lg group-hover:opacity-40 transition duration-1000 group-hover:duration-200"
              ></div>
              <div
                class="relative w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-dj-paper flex"
              >
                <img
                  src="~/assets/css/img/silk-fades-poster.jpg"
                  alt="The Silk Fades Event Poster"
                  class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-dj-black/60 via-transparent to-transparent"
                ></div>
              </div>
            </div>
          </div>

          <!-- Event Details -->
          <div class="w-full lg:w-1/2 flex flex-col justify-between py-2">
            <div class="space-y-8">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Date Card -->
                <div
                  class="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
                >
                  <p
                    class="text-dj-primary text-xs uppercase tracking-widest mb-2 font-bold"
                  >
                    Date
                  </p>
                  <p class="text-2xl text-white font-display uppercase">
                    March 21, 2026
                  </p>
                </div>
                <!-- Time Card -->
                <div
                  class="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
                >
                  <p
                    class="text-dj-primary text-xs uppercase tracking-widest mb-2 font-bold"
                  >
                    Time
                  </p>
                  <p class="text-2xl text-white font-display uppercase">
                    6:00 PM
                  </p>
                </div>
              </div>

              <div
                class="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                <p
                  class="text-dj-primary text-xs uppercase tracking-widest mb-2 font-bold"
                >
                  Location
                </p>
                <div class="flex items-start gap-4">
                  <div class="mt-1 text-dj-primary">
                    <svg
                      class="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      ></path>
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <p class="text-xl text-white font-display">
                      June Street Barbershop
                    </p>
                    <p class="text-gray-400">Addison, TX</p>
                  </div>
                </div>
              </div>

              <!-- Highlights -->
              <div class="space-y-4">
                <h3
                  class="text-white text-lg font-display uppercase tracking-widest flex items-center gap-3"
                >
                  <span class="w-8 h-[1px] bg-dj-primary"></span>
                  The Experience
                </h3>
                <ul class="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <li
                    v-for="item in highlights"
                    :key="item"
                    class="flex items-center gap-3 text-gray-300"
                  >
                    <div class="w-1.5 h-1.5 rounded-full bg-dj-primary"></div>
                    {{ item }}
                  </li>
                </ul>
              </div>

              <!-- Activities -->
              <div class="space-y-4">
                <h3
                  class="text-white text-lg font-display uppercase tracking-widest flex items-center gap-3"
                >
                  <span class="w-8 h-[1px] bg-dj-primary"></span>
                  Activities & Games
                </h3>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="game in games"
                    :key="game"
                    class="px-4 py-1.5 rounded-full bg-white/5 border border-white/5 text-xs text-gray-400 uppercase tracking-widest hover:border-dj-primary transition-colors cursor-default"
                  >
                    {{ game }}
                  </span>
                </div>
              </div>
            </div>

            <!-- CTA -->
            <div class="pt-8 flex flex-col md:flex-row gap-4">
              <button
                class="group relative w-full md:w-auto px-12 py-4 bg-dj-primary text-white font-display uppercase tracking-[0.2em] font-bold overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,119,221,0.5)]"
              >
                <span class="relative z-10">RSVP & Get Tickets</span>
                <div
                  class="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 opacity-10"
                ></div>
              </button>

              <NuxtLink
                to="/events/the-silk-fades"
                class="group w-full md:w-auto px-12 py-4 border border-white/20 text-white font-display uppercase tracking-[0.2em] font-bold hover:border-dj-primary hover:text-dj-primary transition-all duration-300 flex items-center justify-center gap-2"
              >
                Learn More
                <svg
                  class="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const highlights = [
  "Free Haircuts",
  "Free Drinks",
  "Real R&B Vibes",
  "Vibe Curated by DJ Wonlo",
];

const games = ["FC26", "Pool", "Pac-Man", "Jenga", "Spades", "Uno", "Dominos"];
</script>

<style scoped>
.font-display {
  font-family: "Outfit", sans-serif;
}
</style>
