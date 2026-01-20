<template>
    <div>
        <AboutHero />
        <AboutBio />
        <AboutThoughtLeadership />
    </div>
</template>

<script setup>
import AboutHero from '~/components/AboutHero.vue';
import AboutBio from '~/components/AboutBio.vue';
import AboutThoughtLeadership from '~/components/AboutThoughtLeadership.vue';

// Page meta for SEO
useHead({
    title: 'About - Dr. John Kayode Fayemi',
    meta: [
        { name: 'description', content: 'Learn about the journey of Dr. John Kayode Fayemi, a scholar, statesman, and advocate for democracy and development.' }
    ]
})
</script>
