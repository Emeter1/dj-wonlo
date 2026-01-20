<template>
    <div class="bg-gray-50 min-h-screen pt-20 pb-20">

        <!-- Hero Image -->
        <div class="w-full h-[400px] md:h-[500px] overflow-hidden mb-12 relative">
            <img src="~/assets/img/hero-bg.jpg" alt="Ero Dam Rehabilitation"
                class="w-full h-full object-cover object-top" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        </div>

        <div class="container-custom">

            <!-- Content Section -->
            <div class="space-y-8">
                <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Overview</h1>

                <div class="space-y-6 text-gray-700 leading-relaxed text-base md:text-lg">
                    <p class="font-medium">
                        Dr. John Kayode Fayemi, then Governor of Ekiti State, officially launched the rehabilitation
                        of
                        the Ero Dam, a $55 million project supported by the World Bank. The project is designed to
                        restore and upgrade the dam in order to provide a sustainable water supply to thousands of
                        households and communities across Ekiti State.
                    </p>
                    <p>
                        The Ero Dam, constructed in the late 1980s, had served the people for years but had fallen
                        into
                        a state of disrepair due to lack of maintenance and growing demand. As a result, many
                        communities faced acute water shortages, forcing residents to rely on unsafe water sources.
                        Recognizing this challenge, Dr. Fayemi placed the dam's rehabilitation at the top of his
                        development agenda, seeing it as critical to the health, welfare, and prosperity of the
                        people.
                    </p>
                    <p>
                        At the commissioning ceremony, Dr. Fayemi emphasized that water is not just a basic need but
                        a
                        foundation for sustainable growth. He explained that the rehabilitation project was part of
                        a
                        broader effort to invest in infrastructure that directly improves lives. He also highlighted
                        how
                        the project aligns with Ekiti State's long-term development plan, which aims to create an
                        enabling environment for economic growth, agriculture, and improved public health.
                    </p>
                    <p>
                        The project is expected to benefit more than 500,000 residents by ensuring regular access to
                        potable water, reducing the spread of waterborne diseases, and providing support for
                        irrigation
                        and farming activities. It will also create hundreds of direct and indirect jobs during
                        construction and after completion, boosting local economies.
                    </p>
                    <p>
                        Community leaders, traditional rulers, and residents expressed gratitude for the project,
                        describing it as a lifeline that would ease the daily struggles of women and children who
                        often
                        walked long distances to fetch water. They commended Dr. Fayemi for prioritizing essential
                        services and affirmed their support for his vision of sustainable development in Ekiti
                        State.
                    </p>
                    <p>
                        By rehabilitating the Ero Dam, Dr. Fayemi not only addressed an urgent infrastructural need
                        but
                        also demonstrated his belief in the power of partnerships. The collaboration with the World
                        Bank
                        underscored his administration's commitment to leveraging both local and international
                        support
                        for projects that have lasting impact.
                    </p>
                    <p>
                        The Ero Dam project stands today as one of the landmark initiatives of his administration,
                        reflecting a governance style rooted in foresight, accountability, and service to the
                        people. It
                        remains a testament to how leadership can transform challenges into opportunities for
                        progress
                        and improve the quality of life for generations.
                    </p>
                </div>

                <!-- Back Link -->
                <div class="pt-8">
                    <NuxtLink to="/news"
                        class="inline-flex items-center gap-2 text-[#007A33] font-semibold hover:underline">
                        <ArrowLeft class="w-4 h-4" />
                        Back to News & Updates
                    </NuxtLink>
                </div>
            </div>

            <!-- Related News Section -->
            <div class="mt-24 border-t pt-16">
                <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-10">Related news</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <article v-for="(news, index) in relatedNews" :key="index"
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

        </div>
    </div>
</template>

<script setup>
import { ArrowLeft } from 'lucide-vue-next';
import flowersImg from '~/assets/img/flowers.jpg';

// Hardcoded related news for display purposes to match the screenshot style
// In a real app, this would likely fetch from the same source filtering out current item
const relatedNews = [
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
    }
];

useHead({
    title: 'Ero Dam Rehabilitation - Dr. John Kayode Fayemi',
    meta: [
        { name: 'description', content: 'Details about the Ero Dam rehabilitation project launched by Dr. John Kayode Fayemi.' }
    ]
})
</script>
