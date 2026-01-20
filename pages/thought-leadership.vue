<template>
    <div>
        <ThoughtLeadershipHero />
        <ThoughtLeadershipGrid />
    </div>
</template>

<script setup>
import ThoughtLeadershipHero from '~/components/ThoughtLeadershipHero.vue';
import ThoughtLeadershipGrid from '~/components/ThoughtLeadershipGrid.vue';

useHead({
    title: 'Thought Leadership - Dr. John Kayode Fayemi',
    meta: [
        { name: 'description', content: 'Explore Dr. Fayemi\'s insights, publications, and speeches on governance and development.' }
    ]
})
</script>
