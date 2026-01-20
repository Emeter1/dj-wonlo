<template>
    <section class="py-24 bg-[#054a26] relative overflow-hidden font-sans">
        <!-- Topographic pattern overlay -->
        <div class="absolute inset-0 opacity-10 pointer-events-none"
            style="background-image: url('data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 20 Q 25 40 50 20 T 100 20 M0 50 Q 25 70 50 50 T 100 50 M0 80 Q 25 100 50 80 T 100 80\' fill=\'none\' stroke=\'%23ffffff\' stroke-width=\'1\'/%3E%3C/svg%3E'); mask-image: linear-gradient(to bottom, transparent, black, transparent);">
        </div>

        <div class="container mx-auto px-6 relative z-10">

            <!-- Header -->
            <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6 text-white">
                <div class="max-w-2xl">
                    <h2 class="text-3xl md:text-4xl font-bold mb-4">Highlights / Key Achievements</h2>
                    <p class="text-green-50/90 text-sm md:text-base leading-relaxed">
                        A legacy of leadership, service, and innovation — from Ekiti State to the global stage. These
                        milestones reflect Dr. John Kayode Fayemi's impact in governance, policy, and democratic
                        development.
                    </p>
                </div>
                <a href="#"
                    class="inline-flex items-center gap-2 bg-white text-[#054a26] px-6 py-3 rounded-sm hover:bg-gray-100 transition-colors font-bold text-sm">
                    View all <span>→</span>
                </a>
            </div>

            <!-- Cards Grid -->
            <div class="grid md:grid-cols-3 gap-6">

                <!-- Card 1 -->
                <div class="bg-white p-8 rounded-sm shadow-lg h-full">
                    <h3 class="text-2xl font-bold text-gray-900 mb-6">Political Leadership</h3>
                    <ul class="space-y-4 text-gray-700 text-[15px] leading-relaxed list-disc pl-5 marker:text-gray-400">
                        <li>
                            Twice elected Governor of Ekiti State (2010–2014, 2018–2022), implementing the 8-Point
                            Agenda that improved infrastructure, health, education, and security.
                        </li>
                        <li>
                            Served as Minister of Solid Minerals Development (2015–2018), introducing reforms that
                            boosted Nigeria's mining sector.
                        </li>
                        <li>
                            Chairman, Nigeria Governors' Forum (2019–2021), leading inter-state collaboration and
                            national policy advocacy.
                        </li>
                    </ul>
                </div>

                <!-- Card 2 -->
                <div class="bg-white p-5 rounded-sm shadow-lg h-[350px]">
                    <h3 class="text-2xl font-bold text-gray-900 mb-6">Global Roles</h3>
                    <ul class="space-y-4 text-gray-700 text-[15px] leading-relaxed list-disc pl-5 marker:text-gray-400">
                        <li>
                            Pioneer President of the Forum of Regions of Africa (FORAF), promoting regional integration
                            and development across the continent.
                        </li>
                        <li>
                            Visiting Professor at King’s College London, contributing to academic research in governance
                            and democracy.
                        </li>
                        <li>
                            Senior Advisor at Albright Stonebridge Group (from 2025), shaping global policy and
                            development strategies.
                        </li>
                    </ul>
                </div>

                <!-- Card 3 -->
                <div class="bg-white p-4 rounded-sm shadow-lg h-[250px]">
                    <h3 class="text-md font-semibold text-gray-900 mb-6">Thought Leadership</h3>
                    <ul class="space-y-4 text-gray-700 text-[15px] leading-relaxed list-disc pl-5 marker:text-gray-400">
                        <li>
                            Author and editor of influential works, including Mercenaries: An African Security Dilemma
                            and Reforming Civil-Military Relations in Nigeria.
                        </li>
                        <li>
                            Published research and essays on democracy, natural resource governance, and constitutional
                            reform.
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
// HomeAchievements Component
</script>
