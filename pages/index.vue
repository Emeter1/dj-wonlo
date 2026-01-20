<template>
  <div class="overflow-hidden">
    <!-- Hero Section -->
    <section class="relative h-screen flex items-center pt-20">
      <div class="absolute inset-0 bg-gray-900 overflow-hidden">
        <div
          class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10"
        ></div>
        <div
          class="absolute inset-0 bg-cover bg-center"
          style="
            background-image: url('https://images.unsplash.com/photo-1570126618983-2280f946227b?auto=format&fit=crop&q=80');
          "
        ></div>
      </div>

      <div class="container-custom relative z-20">
        <div class="max-w-3xl text-white">
          <h1 class="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Reclaiming Our Land, <br />
            <span class="text-primary">Restoring Our Values</span>
          </h1>
          <p
            class="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-2xl"
          >
            Governor • Minister • Scholar • Global Advisor. <br />
            Dr. John Kayode Fayemi's commitment to public service, academic
            excellence, and visionary leadership.
          </p>
          <div class="flex flex-wrap gap-4">
            <NuxtLink to="/about" class="btn-primary"> Learn More </NuxtLink>
            <NuxtLink
              to="/thought-leadership"
              class="px-6 py-3 border border-white/30 rounded-md font-semibold hover:bg-white/10 transition-all"
            >
              Thought Leadership
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div
          class="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
        >
          <div class="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="bg-primary py-12 text-white">
      <div class="container-custom">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="text-4xl font-bold mb-2">2x</div>
            <div class="text-primary-light/80 text-sm uppercase tracking-wider">
              Governor of Ekiti
            </div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold mb-2">100+</div>
            <div class="text-primary-light/80 text-sm uppercase tracking-wider">
              Policy Papers
            </div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold mb-2">Global</div>
            <div class="text-primary-light/80 text-sm uppercase tracking-wider">
              Advisory Roles
            </div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold mb-2">PhD</div>
            <div class="text-primary-light/80 text-sm uppercase tracking-wider">
              War Studies
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- News Highlights -->
    <section class="py-24 bg-ash">
      <div class="container-custom">
        <div class="flex justify-between items-end mb-12">
          <div>
            <span
              class="text-primary font-bold tracking-widest uppercase text-sm mb-4 block"
              >Recent Updates</span
            >
            <h2 class="text-4xl font-extrabold text-gray-900">
              Latest from Dr. Fayemi
            </h2>
          </div>
          <NuxtLink
            to="/news"
            class="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all"
          >
            See All News <span class="text-xl">→</span>
          </NuxtLink>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="i in 3"
            :key="i"
            class="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group"
          >
            <div class="h-64 bg-gray-200 overflow-hidden relative">
              <div
                class="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full z-10"
              >
                NEWS
              </div>
              <div
                class="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                style="
                  background-image: url('https://images.unsplash.com/photo-1541872703-74c5e443d1f5?auto=format&fit=crop&q=80');
                "
              ></div>
            </div>
            <div class="p-8">
              <span class="text-gray-400 text-sm mb-3 block"
                >October 12, 2024</span
              >
              <h3
                class="text-xl font-bold mb-4 group-hover:text-primary transition-colors"
              >
                Strengthening Regional Integration in West Africa
              </h3>
              <p class="text-gray-600 line-clamp-2 mb-6">
                Explore the latest insights on how regional integration can
                drive economic growth and stability across the continent.
              </p>
              <NuxtLink
                to="/news/sample"
                class="font-bold text-gray-900 flex items-center gap-2 group-hover:translate-x-2 transition-transform"
              >
                Read More
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
