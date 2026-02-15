<template>
  <section id="bio" class="py-24 bg-dj-dark relative">
    <div class="container mx-auto px-6">
      <div class="flex flex-col md:flex-row items-center gap-12">
        <!-- Image Placeholder -->
        <div class="w-full md:w-2/4 aspect-[3/4] relative rounded-lg border border-white/5 overflow-hidden group shadow-2xl">
          <img src="~/assets/css/img/DJ-WONLO.jpeg" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out" alt="DJ Profile" />
          <div class="absolute inset-0 bg-gradient-to-t from-dj-black/80 via-transparent to-transparent"></div>
        </div>

        <!-- Content -->
        <div class="w-full md:w-2/3">
          <h2 class="text-4xl md:text-5xl text-dj-primary mb-6">About The Sound</h2>
          <div class="w-24 h-1 bg-dj-primary mb-8"></div>
          
          <p class="text-gray-400 leading-relaxed mb-6">
            Wonlo isn't just a DJ; he is an experience. Blending deep house rhythms with techno precision, he creates soundscapes that transport audiences to another dimension.
          </p>
          <p class="text-gray-400 leading-relaxed mb-8">
            With over a decade of dominating the underground scene, Wonlo brings a unique energy that resonates with the soul.
          </p>
          
          <div class="grid grid-cols-2 gap-6">
            <div>
              <div class="text-3xl font-display text-white mb-1">10+</div>
              <div class="text-dj-primary text-xs uppercase tracking-wider">Years Exp</div>
            </div>
            <div>
              <div class="text-3xl font-display text-white mb-1">500+</div>
              <div class="text-dj-primary text-xs uppercase tracking-wider">Events</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
