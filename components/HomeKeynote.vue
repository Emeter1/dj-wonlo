<template>
    <section class="py-24 bg-white font-sans">
        <div class="container mx-auto px-6">

            <!-- Header -->
            <div class="max-w-3xl mx-auto text-center mb-12">
                <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    Leadership, Democracy, and Development in Africa
                </h2>
                <p class="text-gray-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
                    A powerful keynote by Dr. John Kayode Fayemi, sharing insights on building strong institutions,
                    deepening democracy, and advancing sustainable development across Africa.
                </p>
            </div>

            <!-- Video Placeholder -->
            <div class="max-w-5xl mx-auto">
                <div class="relative aspect-video rounded-sm overflow-hidden bg-gray-100 group cursor-pointer">
                    <!-- Background Image -->
                    <img :src="videoThumb" alt="Keynote Speech"
                        class="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" />

                    <!-- Overlay -->
                    <div class="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300">
                    </div>

                    <!-- Play Button -->
                    <div class="absolute inset-0 flex items-center justify-center">
                        <div
                            class="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                            <svg class="w-6 h-6 md:w-8 md:h-8 text-primary ml-1" fill="currentColor"
                                viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script setup>
import videoThumb from '~/assets/img/fayose-2.jpg';
// HomeKeynote Component
</script>
