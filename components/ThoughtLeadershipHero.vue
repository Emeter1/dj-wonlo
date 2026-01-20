<template>
    <section class="hero-container relative w-full overflow-hidden">
        <!-- Background Image -->
        <div class="absolute inset-0 z-0">
            <img :src="heroImage" alt="Dr. Fayemi Reading" class="w-full h-full object-cover object-center" />
            <!-- Linear Gradient Overlay -->
            <div class="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent"></div>
        </div>

    </section>
</template>

<script setup>
import heroImage from '~/assets/img/fayemi-reading.jpg';
</script>

<style scoped>
.hero-container {
    height: 70vh;
    min-height: 590px;
}
</style>
