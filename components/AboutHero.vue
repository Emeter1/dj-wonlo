<template>
    <section class="relative h-[720px] w-full overflow-hidden">
        <!-- Background Image -->
        <div class="absolute inset-0 z-0">
            <!-- Using the same hero bg as placeholder effectively, but user will swap. 
             Ideally we'd have a specific image for the about page. 
             The design shows Dr. Fayemi looking to the right. 
             If we don't have that specific image, I will use the hero-bg.jpg for now 
             but I'll note it needs replacing. -->
            <img src="~/assets/img/hero-bg.jpg" alt="Dr. John Kayode Fayemi"
                class="w-full h-full object-cover object-top" />

            <!-- Gradient Overlay: Enhanced for better text contrast/visibility -->
            <div class="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
        </div>

        <!-- Content -->
        <div class="container-custom h-full relative z-10 flex flex-col justify-center pt-20">
            <div class="max-w-2xl text-white">
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                    About Dr. John <br />
                    Kayode Fayemi
                </h1>
                <p class="text-lg md:text-xl text-gray-200 mb-10 max-w-xl leading-relaxed font-light">
                    Discover the journey of a scholar, statesman, and advocate whose life has been
                    devoted to democracy, good governance, and Africa's progress.
                </p>

                <button
                    class="bg-primary hover:bg-primary-dark text-white w-14 h-14 flex items-center justify-center rounded-sm transition-colors duration-300">
                    <ArrowDown class="w-6 h-6" />
                </button>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ArrowDown } from 'lucide-vue-next';
</script>

<style scoped>
/* Ensure container-custom matches the one in Navbar if it exists, 
   otherwise we might need to define it or use container mx-auto px-6 */
.container-custom {
    @apply container mx-auto px-6;
}
</style>
