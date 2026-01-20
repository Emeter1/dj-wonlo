<template>
    <section class="relative h-screen flex items-center">
        <!-- Background Image with Overlay -->
        <div class="absolute inset-0 z-0">
            <img src="~/assets/img/hero-bg.jpg" alt="Dr. John Kayode Fayemi"
                class="w-full h-full object-cover object-top" />
            <div class="absolute inset-0 bg-black/60"></div>
        </div>

        <!-- Content -->
        <div class="container mx-auto px-6 relative z-10 text-white pt-20">
            <div class="max-w-3xl">
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                    Reclaiming Our Land, <br />
                    Restoring Our Values
                </h1>
                <p class="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed">
                    A Nigerian leader, scholar, and democrat who has served as Governor of
                    Ekiti State, Minister of the Federal Republic, and international
                    advisor. His journey reflects a life of service, scholarship, and a
                    deep commitment to democracy and development.
                </p>
                <div>
                    <NuxtLink to="/about"
                        class="inline-flex items-center gap-2 bg-[#008751] hover:bg-[#006e42] text-white px-8 py-4 rounded font-semibold transition-colors duration-300">
                        Read Biography
                        <span class="text-xl">→</span>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// Hero Component
</script>
