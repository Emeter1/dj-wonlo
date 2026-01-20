<template>
  <div class="pt-32 pb-24">
    <div class="container-custom">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
        <div>
          <span
            class="text-primary font-bold tracking-widest uppercase text-sm mb-4 block"
            >Biography</span
          >
          <h1 class="text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
            About Dr. John <br />
            <span class="text-primary">Kayode Fayemi</span>
          </h1>
          <div class="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              Dr. John Kayode Fayemi is a distinguished public servant,
              academic, and policy expert who served as the Governor of Ekiti
              State, Nigeria, for two terms. His leadership is marked by a
              commitment to transparency, rural development, and social welfare.
            </p>
            <p>
              With a PhD in War Studies from King's College London, Dr. Fayemi
              has spent decades at the intersection of security, development,
              and governance. He has been a pivotal figure in regional politics
              and international advisory.
            </p>
          </div>
          <div class="mt-10 grid grid-cols-2 gap-6">
            <div class="p-6 bg-ash rounded-xl border border-stroke">
              <h4 class="font-bold text-gray-900 mb-2">Education</h4>
              <p class="text-gray-600 text-sm">
                PhD in War Studies, King's College London
              </p>
            </div>
            <div class="p-6 bg-ash rounded-xl border border-stroke">
              <h4 class="font-bold text-gray-900 mb-2">Service</h4>
              <p class="text-gray-600 text-sm">
                2-term Governor, former Minister of Mines
              </p>
            </div>
          </div>
        </div>
        <div class="relative">
          <div
            class="aspect-[4/5] bg-gray-200 rounded-2xl overflow-hidden shadow-2xl"
          >
            <div
              class="w-full h-full bg-cover bg-center"
              style="
                background-image: url('https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80');
              "
            ></div>
          </div>
          <div
            class="absolute -bottom-8 -left-8 bg-primary text-white p-8 rounded-2xl shadow-xl hidden md:block max-w-xs"
          >
            <p class="text-lg italic font-medium">
              "My vision is to build a land of honor where excellence is
              rewarded and justice prevails."
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
