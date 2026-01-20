<template>
    <div class="bg-white min-h-screen pt-32 pb-20">
        <div class="container-custom">

            <!-- Top Section: Split Layout -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">

                <!-- Left Column: Header + Grid -->
                <!-- Spans 7 cols on large screens -->
                <div class="lg:col-span-7 flex flex-col">
                    <!-- Header Text Area -->
                    <div class="mb-10">
                        <span
                            class="text-[#007A33] font-bold text-sm uppercase tracking-wider mb-3 block">Gallery</span>
                        <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight max-w-2xl">
                            Explore highlights from key events, engagements, and initiatives captured in pictures.
                        </h1>
                    </div>

                    <!-- Top Left Grid: 2 rows of 3 columns = 6 images -->
                    <!-- Flex-grow ensures it takes available space if needed, but grid usually defines height -->
                    <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <div v-for="(img, index) in topGridImages" :key="`top-${index}`"
                            class="aspect-square overflow-hidden">
                            <img :src="img"
                                class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                alt="Gallery Image" />
                        </div>
                    </div>
                </div>

                <!-- Right Column: Single Feature Image -->
                <!-- Spans 5 cols on large screens -->
                <div class="lg:col-span-5 hidden lg:block">
                    <div class="h-full w-full overflow-hidden">
                        <img v-if="featureImage" :src="featureImage"
                            class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            alt="Feature Gallery Image" />
                        <!-- Fallback if no images -->
                        <div v-else class="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">
                            No Image
                        </div>
                    </div>
                </div>
                <!-- Mobile view of feature image (optional, or just hide/stack it) -->
                <div class="lg:hidden h-64 overflow-hidden mb-6">
                    <img v-if="featureImage" :src="featureImage" class="w-full h-full object-cover"
                        alt="Feature Gallery Image" />
                </div>
            </div>

            <!-- Bottom Section: Remaining Grid -->
            <!-- 4 Columns on desktop -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div v-for="(img, index) in bottomGridImages" :key="`bottom-${index}`"
                    class="aspect-[4/3] overflow-hidden">
                    <img :src="img" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        alt="Gallery Image" />
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
// Load all images from the gallery directory
// Note the spelling 'gallaryimage' as per user assets
const globImages = import.meta.glob('~/assets/img/gallaryimage/*.{png,jpg,jpeg,svg}', { eager: true });
const allImages = Object.values(globImages).map(mod => mod.default);

// Layout logic:
// Top Grid: 6 images (Index 0-5)
const topGridImages = allImages.slice(0, 6);

// Feature Image: 1 image (Index 6) - The big vertical one
const featureImage = allImages[6] || allImages[0]; // Fallback if not enough images

// Bottom Grid: Rest of the images (Index 7+)
const bottomGridImages = allImages.slice(7);

useHead({
    title: 'Gallery - Dr. John Kayode Fayemi',
    meta: [
        { name: 'description', content: 'Photo gallery of key events, engagements, and initiatives.' }
    ]
})
</script>
