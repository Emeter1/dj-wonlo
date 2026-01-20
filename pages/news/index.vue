<template>
    <div class="bg-gray-50 min-h-screen pt-20">
        <!-- Hero Section -->
        <section class="relative h-[500px] flex items-center">
            <div class="absolute inset-0 z-0">
                <img src="~/assets/img/hero-bg.jpg" alt="Dr. Fayemi" class="w-full h-full object-cover" />
                <div class="absolute inset-0 bg-black/50"></div>
            </div>
            <div class="w-full max-w-7xl mx-auto px-4 relative z-10 text-white">
                <div class="max-w-3xl">
                    <h1 class="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                        Stay Informed with the Latest from Dr. John Kayode Fayemi
                    </h1>
                    <p class="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
                        Catch up on recent activities, speeches, projects, and public statements that reflect Dr.
                        Fayemi's ongoing contributions to governance, democracy, and development in Nigeria and beyond.
                    </p>
                    <button
                        class="w-12 h-12 flex items-center justify-center bg-[#007A33] hover:bg-[#00662B] text-white rounded-sm transition-colors">
                        <ArrowDown class="w-6 h-6" />
                    </button>
                </div>
            </div>
        </section>

        <!-- News Grid Section -->
        <section class="py-20">
            <div class="container-custom">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <article v-for="(news, index) in newsItems" :key="index"
                        class="bg-white group flex flex-col h-full hover:shadow-lg transition-shadow duration-300 rounded-sm overflow-hidden">
                        <div class="h-64 overflow-hidden relative">
                            <img :src="news.image" :alt="news.title"
                                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div class="p-8 flex flex-col flex-grow">
                            <h2
                                class="text-xl font-bold text-gray-900 mb-2 leading-tight group-hover:text-[#007A33] transition-colors">
                                {{ news.title }}
                            </h2>
                            <p class="text-xs text-gray-400 font-medium mb-4 uppercase tracking-wider">
                                Date: {{ news.date }}
                            </p>
                            <p class="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                                {{ news.excerpt }}
                            </p>
                            <NuxtLink to="/news/ero-dam-rehabilitation"
                                class="text-[#007A33] font-semibold text-sm hover:underline mt-auto inline-flex items-center gap-2">
                                Read more
                            </NuxtLink>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ArrowDown } from 'lucide-vue-next';

// Using the flowers.jpg as a placeholder for news items based on the user's previous preference/edit
// In a real scenario, we would have distinct images for each news item.
import flowersImg from '~/assets/img/flowers.jpg';
// Assuming we might want to use the banner for some?
import bannerImg from '~/assets/img/mercenaries-banner.png';

const newsItems = [
    {
        title: 'We Will Restore Ekiti to the Right Path',
        date: 'January 2019',
        excerpt: 'Dr. Fayemi reaffirms his administration\'s commitment to rebuilding Ekiti State, emphasizing unity, good governance, and sustainable development.',
        image: flowersImg
    },
    {
        title: 'Flags Off Ero Dam Rehabilitation Project',
        date: 'June 2019',
        excerpt: 'Dr. Fayemi reaffirms his administration\'s commitment to rebuilding Ekiti State, emphasizing unity, good governance, and sustainable development.',
        image: flowersImg
    },
    {
        title: 'Advocates for Revenue Allocation Reform',
        date: 'January 2019',
        excerpt: 'Dr. Fayemi calls for a review of Nigeria\'s revenue allocation formula to support fair wages and address socio-economic challenges.',
        image: flowersImg
    },
    {
        title: 'Promotes Regional Integration through FORAF',
        date: 'January 2019',
        excerpt: 'As the pioneer President of the Forum of African Regions, he champions collaboration between sub-national governments to strengthen Africa\'s role in global governance.',
        image: flowersImg
    },
    {
        title: 'Voices Concern Over Ikogosi Warm Springs Management',
        date: 'June 2019',
        excerpt: 'Highlighting the need for better resource management, Dr. Fayemi calls attention to the underutilization of Ekiti\'s unique tourism assets.',
        image: flowersImg
    },
    // Adding a 6th item to fill the grid as shown in the screenshot (roughly)
];

useHead({
    title: 'News & Updates - Dr. John Kayode Fayemi',
    meta: [
        { name: 'description', content: 'Latest news, updates, speeches, and activities from Dr. John Kayode Fayemi.' }
    ]
})
</script>
