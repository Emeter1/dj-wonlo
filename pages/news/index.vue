<template>
  <div class="pt-32 pb-24">
    <div class="container-custom">
      <div class="mb-16">
        <span
          class="text-primary font-bold tracking-widest uppercase text-sm mb-4 block"
          >Updates</span
        >
        <h1 class="text-5xl font-extrabold text-gray-900 mb-6">
          News & Updates
        </h1>
        <p class="text-xl text-gray-600 max-w-2xl">
          Stay informed with the latest activities, press releases, and media
          updates from Dr. John Kayode Fayemi.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div v-for="i in 2" :key="i" class="flex flex-col group">
          <div class="h-80 bg-gray-100 rounded-3xl mb-8 overflow-hidden">
            <div
              class="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
              style="
                background-image: url('https://images.unsplash.com/photo-1541872703-74c5e443d1f5?auto=format&fit=crop&q=80');
              "
            ></div>
          </div>
          <h3
            class="text-2xl font-extrabold text-gray-900 mb-4 group-hover:text-primary transition-colors cursor-pointer"
          >
            Dr. Fayemi Highlights the Role of Youth in Governance
          </h3>
          <NuxtLink
            to="/news/sample"
            class="text-gray-900 font-bold flex items-center gap-2 group-hover:gap-3 transition-all"
          >
            Read Full Story <span>→</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
