<template>
  <div class="pt-32 pb-24">
    <div class="container-custom">
      <div class="mb-16 text-center">
        <span
          class="text-primary font-bold tracking-widest uppercase text-sm mb-4 block"
          >Visual Journey</span
        >
        <h1 class="text-5xl font-extrabold text-gray-900 mb-6">Gallery</h1>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="i in 6"
          :key="i"
          class="aspect-square bg-gray-100 rounded-3xl overflow-hidden group cursor-pointer relative"
        >
          <div
            class="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
            style="
              background-image: url('https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80');
            "
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
