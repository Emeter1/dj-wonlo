<template>
    <section class="py-20 bg-white">
        <div class="container-custom">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div v-for="(card, index) in cards" :key="index" class="flex flex-col">
                    <div class="h-48 rounded-xl overflow-hidden mb-5 shadow-sm">
                        <div class="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                            <img :src="card.image" class="w-full h-full object-cover" :alt="card.shortTitle" />
                        </div>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-2 leading-tight">
                        {{ card.title }}
                    </h3>
                    <ul class="space-y-3 mb-8 text-sm text-gray-600 flex-grow">
                        <li v-for="(item, idx) in card.items" :key="idx">{{ item }}</li>
                    </ul>
                    <component :is="card.linkType === 'nuxt-link' ? NuxtLink : 'a'" :to="card.linkTo"
                        :href="card.linkHref"
                        class="text-green-700 font-semibold hover:text-green-800 flex items-center gap-2 text-sm mt-auto">
                        {{ card.linkText }}
                        <ArrowRight class="w-4 h-4" />
                    </component>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ArrowRight } from 'lucide-vue-next';
import flowersImg from '~/assets/img/flowers.jpg';

// Resolve NuxtLink for dynamic component usage if needed, though simple v-if/else might be cleaner.
// For simplicity in this `write_to_file`, I'll use a simpler approach in the template for links:
// using v-if on NuxtLink vs <a> tag inside the loop, or just normalizing everything to use NuxtLink or a,
// but since one is an internal link and others might be external/hashes, I'll structure the data to handle it.

const NuxtLink = resolveComponent('NuxtLink');

const baseCards = [
    {
        title: 'Explore his written works that challenge conventional thinking and provide actionable ideas for Africa and beyond',
        shortTitle: 'Written Works',
        items: [
            '• Mercenaries: An African Security Dilemma (1999)',
            '• Reforming Civil-Military Relations in Nigeria (2003)',
            '• Contributions to works on democracy, media, and constitutionalism',
            '• Policy papers and op-eds on governance and resource management'
        ],
        linkText: 'Read Publications',
        linkType: 'nuxt-link',
        linkTo: '/publications/mercenaries',
        image: flowersImg
    },
    {
        title: 'Inspiring words from classrooms, global conferences, and national platforms',
        shortTitle: 'Speeches',
        items: [
            '• Keynote speeches on democracy and governance across Africa',
            '• Lectures at King\'s College London and international universities',
            '• Public addresses as Governor of Ekiti State and Chairman of the Nigeria Governors\' Forum',
            '• Talks on Africa\'s integration and leadership at global forums'
        ],
        linkText: 'Watch Speeches',
        linkType: 'a',
        linkHref: '#',
        image: flowersImg
    },
    {
        title: 'Conversations that amplify his voice in shaping public debate',
        shortTitle: 'Media',
        items: [
            '• Interviews with Nigerian and international media outlets',
            '• Panel discussions on democracy, security, and development',
            '• Documentaries and features on governance and public service'
        ],
        linkText: 'Explore Media',
        linkType: 'a',
        linkHref: '#',
        image: flowersImg
    }
];

// Duplicate to get 9 items
const cards = [...baseCards, ...baseCards, ...baseCards];
</script>
