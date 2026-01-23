<template>
  <div>
    <AboutHeroPremium />
    <AboutTimelineJourney />
    <AboutLeadershipPillars />
  </div>
</template>

<script setup>
import AboutHeroPremium from "~/components/AboutHeroPremium.vue";
import AboutTimelineJourney from "~/components/AboutTimelineJourney.vue";
import AboutLeadershipPillars from "~/components/AboutLeadershipPillars.vue";

// Page meta for SEO
useHead({
  title: "About - Dr. John Kayode Fayemi",
  meta: [
    {
      name: "description",
      content:
        "Learn about the journey of Dr. John Kayode Fayemi, a scholar, statesman, and advocate for democracy and development.",
    },
  ],
});
</script>
