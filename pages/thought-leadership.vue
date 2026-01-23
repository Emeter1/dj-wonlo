<template>
  <div class="bg-white min-h-screen">
    <ThoughtLeadershipHero />
    <ThoughtLeadershipMediaMarquee />
    <ThoughtLeadershipThemes id="themes" />
    <ThoughtLeadershipFeaturedWriting id="featured-writing" />
    <ThoughtLeadershipMediaInterviews id="media-interviews" />
    <ThoughtLeadershipSpeaking id="speaking" />
    <ThoughtLeadershipDispatch id="dispatch" />
  </div>
</template>

<script setup>
import ThoughtLeadershipHero from "~/components/ThoughtLeadershipHero.vue";
import ThoughtLeadershipMediaMarquee from "~/components/ThoughtLeadershipMediaMarquee.vue";
import ThoughtLeadershipThemes from "~/components/ThoughtLeadershipThemes.vue";
import ThoughtLeadershipFeaturedWriting from "~/components/ThoughtLeadershipFeaturedWriting.vue";
import ThoughtLeadershipMediaInterviews from "~/components/ThoughtLeadershipMediaInterviews.vue";
import ThoughtLeadershipSpeaking from "~/components/ThoughtLeadershipSpeaking.vue";
import ThoughtLeadershipDispatch from "~/components/ThoughtLeadershipDispatch.vue";

useHead({
  title: "Ideas & Influence | Thought Leadership - Dr. John Kayode Fayemi",
  meta: [
    {
      name: "description",
      content:
        "Shaping the discourse on governance, innovation, and the future of Africa through compelling narratives and strategic foresight.",
    },
  ],
});
</script>
