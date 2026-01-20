<template>
    <div class="bg-white min-h-screen">
        <!-- Header Section -->
        <section class="py-24 md:py-20">
            <div class="container-custom max-w-4xl text-center">
                <h1 class="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    Mercenaries: An African Security Dilemma
                </h1>
                <p class="text-sm md:text-base text-gray-600 leading-relaxed mb-4 max-w-3xl mx-auto">
                    This groundbreaking book explores the rise of mercenaries in Africa and their impact on security,
                    governance, and
                    sovereignty. Dr. Fayemi and Abdel-Fatau Musah provide a detailed analysis of how mercenary groups
                    operate, their historical
                    roots, and the challenges they pose to emerging democracies across the continent.
                </p>
                <p class="text-xs md:text-sm font-medium text-gray-400">
                    Co-authored with Abdel-Fatau Musah (1999)
                </p>
            </div>
        </section>

        <!-- Image Section -->
        <section class="pb-16">
            <div class="container-custom max-w-5xl">
                <div class="rounded-none md:rounded-sm overflow-hidden shadow-none md:shadow-none">
                    <!-- Using the provided banner image directly -->
                    <img src="~/assets/img/mercenaries-banner.png" alt="Mercenaries Banner"
                        class="w-full h-auto object-contain" />
                </div>
            </div>
        </section>

        <!-- Content Sections -->
        <section class="py-14 ">
            <div class="container-custom max-w-4xl space-y-12">

                <!-- Overview -->
                <div>
                    <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-4">Overview</h2>
                    <div class="space-y-4 text-gray-800 leading-relaxed text-sm md:text-base">
                        <p>
                            Published in 1999, this seminal work provides one of the earliest comprehensive studies of
                            mercenary activities in Africa. Dr. John Kayode Fayemi and Abdel-Fatau Musah examine how
                            mercenarism has shaped the continent's political and security environment, from
                            post-independence conflicts to modern-day wars.
                        </p>
                        <p>
                            The book dissects how mercenary groups — often backed by foreign governments or corporations
                            — infiltrated African conflicts, destabilized fragile states, and exploited natural
                            resources for profit. At the same time, it explores how their activities highlight
                            weaknesses in governance and regional security structures.
                        </p>
                    </div>
                </div>

                <!-- Key Themes -->
                <div>
                    <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-4">Key Themes & Insights</h2>
                    <ul class="space-y-4 text-sm md:text-base">
                        <li v-for="theme in themes" :key="theme.title" class="flex flex-col gap-1">
                            <div class="flex items-baseline gap-2">
                                <span class="w-1.5 h-1.5 bg-black rounded-full shrink-0"></span>
                                <span class="font-medium text-gray-900">{{ theme.title }}</span>
                            </div>
                            <p class="text-gray-800 leading-relaxed pl-4">
                                {{ theme.description }}
                            </p>
                        </li>
                    </ul>
                </div>

                <!-- Why This Book Matters -->
                <div>
                    <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-4">Why This Book Matters</h2>
                    <ul class="space-y-4 text-sm md:text-base text-gray-800 leading-relaxed">
                        <li class="flex gap-2 items-start">
                            <span class="w-1.5 h-1.5 bg-black rounded-full mt-2 shrink-0"></span>
                            <span>Mercenaries: An African Security Dilemma remains highly relevant decades after its
                                release. In an era where private military companies and foreign actors still influence
                                conflicts, the book provides timeless insights into the intersection of power, security,
                                and sovereignty in Africa.</span>
                        </li>
                        <li class="flex gap-2 items-start">
                            <span class="w-1.5 h-1.5 bg-black rounded-full mt-2 shrink-0"></span>
                            <span>For students, academics, and policymakers, it serves as a guide to understanding the
                                hidden drivers of conflict and the urgent need for African-led solutions. For citizens
                                and activists, it offers a lens through which to view the struggle for peace, justice,
                                and self-determination on the continent.</span>
                        </li>
                    </ul>
                </div>

                <!-- About the Authors -->
                <div>
                    <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-4">About the Authors</h2>
                    <ul class="space-y-4 text-sm md:text-base text-gray-800 leading-relaxed">
                        <li class="flex gap-2 items-start">
                            <span class="w-1.5 h-1.5 bg-black rounded-full mt-2 shrink-0"></span>
                            <span>Dr. John Kayode Fayemi – Political scientist, academic, and statesman, with expertise
                                in civil-military relations, governance, and democracy.</span>
                        </li>
                        <li class="flex gap-2 items-start">
                            <span class="w-1.5 h-1.5 bg-black rounded-full mt-2 shrink-0"></span>
                            <span>Abdel-Fatau Musah – Security analyst and expert on African conflict dynamics, with
                                contributions to peacebuilding and international relations.</span>
                        </li>
                    </ul>
                </div>

                <!-- Explore More -->
                <div>
                    <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-6">Explore More</h2>
                    <ul class="space-y-4 mb-8">
                        <li class="flex items-center gap-3 text-gray-800">
                            <BookOpen class="w-5 h-5 text-gray-600 shrink-0" />
                            <a href="#" class="hover:underline text-sm md:text-base font-medium">Read Excerpts / Access
                                Library Resources</a>
                        </li>
                        <li class="flex items-center gap-3 text-gray-800">
                            <Video class="w-5 h-5 text-gray-600 shrink-0" />
                            <a href="#" class="hover:underline text-sm md:text-base font-medium">Watch Dr. Fayemi’s
                                talks on African Security</a>
                        </li>
                        <li class="flex items-center gap-3 text-gray-800">
                            <LinkIcon class="w-5 h-5 text-gray-600 shrink-0" />
                            <a href="#" class="hover:underline text-sm md:text-base font-medium">See Related Research:
                                Security Sector Reform in Africa</a>
                        </li>
                    </ul>
                    <button
                        class="bg-[#007A33] hover:bg-[#00662B] text-white font-medium py-3 px-6 rounded-sm inline-flex items-center gap-2 transition-colors text-sm md:text-base shadow-sm">
                        Discover Full Publication
                        <ArrowRight class="w-4 h-4" />
                    </button>
                </div>

            </div>
        </section>

        <!-- Related Content Section -->
        <section class="py-20 bg-gray-50 border-t border-gray-100">
            <div class="container-custom max-w-7xl">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    <div v-for="(card, index) in relatedContent" :key="index" class="flex flex-col h-full group">
                        <div class="h-64 mb-6 overflow-hidden rounded-sm bg-gray-100">
                            <!-- Placeholder image logic or use actual assets -->
                            <img src="~/assets/img/flowers.jpg" :alt="card.title"
                                class="w-full h-full object-cover  opacity-90 group-hover: group-hover:scale-105 transition-all duration-500" />
                        </div>
                        <div class="flex flex-col flex-grow">
                            <h3 class="text-xl font-bold text-gray-900 mb-4 leading-tight">
                                {{ card.title }}
                            </h3>
                            <ul class="space-y-3 mb-8 flex-grow">
                                <li v-for="(item, idx) in card.items" :key="idx"
                                    class="flex gap-2 items-start text-sm text-gray-600 leading-relaxed">
                                    <span class="w-1 h-1 bg-gray-300 rounded-full mt-2 shrink-0"></span>
                                    <span>{{ item }}</span>
                                </li>
                            </ul>
                            <a :href="card.linkUrl"
                                class="inline-flex items-center gap-2 text-[#007A33] font-semibold text-sm hover:underline mt-auto self-start group-hover:translate-x-1 transition-transform">
                                {{ card.linkText }}
                                <ArrowRight class="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Back Navigation -->
        <section class="py-12 md:py-20">
            <div class="container-custom max-w-4xl text-center">
                <NuxtLink to="/thought-leadership"
                    class="inline-flex items-center gap-2 text-green-700 font-semibold hover:text-green-800 transition-colors">
                    <ArrowLeft class="w-5 h-5" />
                    Back to Thought Leadership
                </NuxtLink>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ArrowLeft, BookOpen, Video, Link as LinkIcon, ArrowRight } from 'lucide-vue-next';

const themes = [
    {
        title: 'Historical Context',
        description: 'Tracing the evolution of mercenary involvement in Africa from the Congo crisis of the 1960s to conflicts in Sierra Leone, Angola, and beyond.'
    },
    {
        title: 'Political Impact',
        description: 'How mercenary interventions shaped regime changes, weakened democratic institutions, and influenced foreign policy across the continent.'
    },
    {
        title: 'Economic Dimensions',
        description: 'The relationship between mercenary activities and the exploitation of Africa\'s natural resources — from diamonds and oil to rare minerals.'
    },
    {
        title: 'Security Sector Reform',
        description: 'A critical look at how weak military institutions, corruption, and lack of accountability created opportunities for mercenaries to thrive.'
    },
    {
        title: 'Global Implications',
        description: 'Positioning Africa\'s mercenary dilemma within the broader debate on privatization of security and international law.'
    },
    {
        title: 'Policy Recommendations',
        description: 'Practical steps to address the challenge: stronger regional cooperation, better security governance, international accountability frameworks, and civil society engagement.'
    }
];

const relatedContent = [
    {
        title: 'Explore his written works that challenge conventional thinking and provide actionable ideas for Africa and beyond',
        items: [
            'Mercenaries: An African Security Dilemma (1999)',
            'Reforming Civil-Military Relations in Nigeria (2003)',
            'Contributions to works on democracy, media, and constitutionalism',
            'Policy papers and op-eds on governance and resource management'
        ],
        linkText: 'Read Publications',
        linkUrl: '#'
    },
    {
        title: 'Inspiring words from classrooms, global conferences, and national platforms',
        items: [
            'Keynote speeches on democracy and governance across Africa',
            'Lectures at King’s College London and international universities',
            'Public addresses as Governor of Ekiti State and Chairman of the Nigeria Governors’ Forum',
            'Talks on Africa’s integration and leadership at global forums'
        ],
        linkText: 'Watch Speeches',
        linkUrl: '#'
    },
    {
        title: 'Conversations that amplify his voice in shaping public debate',
        items: [
            'Interviews with Nigerian and international media outlets',
            'Panel discussions on democracy, security, and development',
            'Documentaries and features on governance and public service'
        ],
        linkText: 'Explore Media',
        linkUrl: '#'
    }
];

useHead({
    title: 'Mercenaries: An African Security Dilemma - Dr. John Kayode Fayemi',
    meta: [
        { name: 'description', content: 'Detailed overview of the book Mercenaries: An African Security Dilemma co-authored by Dr. John Kayode Fayemi.' }
    ]
})
</script>
