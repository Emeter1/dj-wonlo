<template>
  <div class="pt-32 pb-24">
    <div class="container-custom">
      <div class="mb-16">
        <span
          class="text-primary font-bold tracking-widest uppercase text-sm mb-4 block"
          >Academic & Policy</span
        >
        <h1 class="text-5xl font-extrabold text-gray-900 mb-6">
          Thought Leadership
        </h1>
        <p class="text-xl text-gray-600 max-w-2xl">
          Exploring solutions to security, governance, and development
          challenges in Nigeria and Africa through rigorous analysis and policy
          papers.
        </p>
      </div>

      <!-- Featured Article -->
      <div
        class="mb-20 bg-gray-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row group"
      >
        <div class="lg:w-1/2 h-80 lg:h-auto overflow-hidden">
          <div
            class="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-1000"
            style="
              background-image: url('https://images.unsplash.com/photo-1524178232363-1fb28f74b0cd?auto=format&fit=crop&q=80');
            "
          ></div>
        </div>
        <div class="lg:w-1/2 p-12 lg:p-16 flex flex-col justify-center">
          <span
            class="text-primary font-bold uppercase text-xs tracking-widest mb-6 block"
            >Featured Publication</span
          >
          <h2
            class="text-3xl md:text-4xl font-extrabold text-white mb-6 group-hover:text-primary transition-colors"
          >
            Mercenaries: An African Security Dilemma
          </h2>
          <p class="text-gray-400 text-lg mb-8 leading-relaxed">
            In this policy brief, Dr. Fayemi explores the complex history and
            contemporary impact of private military companies on African
            security architecture.
          </p>
          <NuxtLink
            to="/thought-leadership/mercenaries"
            class="btn-primary self-start"
          >
            Read Publication
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
