<template>
  <section class="py-20 bg-white overflow-hidden" ref="sectionRef">
    <div class="container-custom space-y-32">
      <!-- Section 1: Who He Is -->
      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bio-section"
      >
        <!-- Text Content -->
        <div class="order-2 lg:order-1 bio-text opacity-0 -translate-x-12">
          <div class="mb-6">
            <div
              class="w-full h-2 bg-red-500 mb-3 origin-left transform scale-x-0 bio-line"
            ></div>
            <h2 class="text-3xl font-bold text-gray-900">Who He Is</h2>
          </div>
          <p class="text-gray-600 leading-relaxed text-lg mb-6">
            Dr. John Kayode Fayemi is a renowned scholar, public servant, and
            advocate of democracy whose life story reflects resilience,
            commitment, and vision. Born on February 9, 1965, in Ibadan, Oyo
            State, and raised in Ekiti, he grew up in a family that valued
            discipline, education, and service. Over the years, these values
            shaped his outlook on life and leadership. With a strong academic
            foundation — from the University of Lagos to Obafemi Awolowo
            University and later earning a PhD in War Studies at King's College
            London — he has built a reputation as a thought leader and
            strategist on civil-military relations, governance, and security
            sector reform. His journey has made him not just a Nigerian leader,
            but a respected voice in Africa and across the world.
          </p>
        </div>
        <!-- Image -->
        <div class="order-1 lg:order-2 bio-image opacity-0 translate-x-12">
          <div
            class="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-duration-500"
          >
            <img
              src="~/assets/img/f95939f380fe9126b93407fcbaa8cd1e4bc6a365.jpg"
              alt="Dr. John Kayode Fayemi in academic regalia"
              class="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      <!-- Section 2: What He Has Done -->
      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bio-section"
      >
        <!-- Image -->
        <div class="order-1 bio-image opacity-0 -translate-x-12">
          <div
            class="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-duration-500"
          >
            <img
              src="~/assets/img/a67b76754ec4929237dbf9836eec94c97542c543 (1).jpg"
              alt="Dr. Fayemi inspecting a project"
              class="w-full h-auto object-cover"
            />
          </div>
        </div>
        <!-- Text Content -->
        <div class="order-2 bio-text opacity-0 translate-x-12">
          <div class="mb-6">
            <div
              class="w-full h-2 bg-blue-500 mb-3 origin-left transform scale-x-0 bio-line"
            ></div>
            <h2 class="text-3xl font-bold text-gray-900">What He Has Done</h2>
          </div>
          <p class="text-gray-600 leading-relaxed text-lg mb-6">
            Dr. Fayemi's career is a tapestry of scholarship, advocacy, and
            leadership. As co-founder and Director of the Centre for Democracy
            and Development (CDD), he spearheaded research, policy engagement,
            and civic initiatives that strengthened democratic practice across
            Africa. In public service, he has held pivotal roles — serving as
            Nigeria's Minister of Mines and Steel Development, where he pushed
            for reforms in the extractive sector, and as Governor of Ekiti State
            for two terms. His administration introduced transformative policies
            under the 8-Point Agenda, covering areas such as education,
            healthcare, infrastructure renewal, women and youth empowerment,
            agricultural development, and good governance. Beyond government, he
            has worked with ECOWAS, the United Nations, and various global
            institutions, contributing to peace-building and human rights. These
            milestones reflect his ability to merge theory with action, and
            vision with delivery.
          </p>
        </div>
      </div>

      <!-- Section 3: His Vision -->
      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bio-section"
      >
        <!-- Text Content -->
        <div class="order-2 lg:order-1 bio-text opacity-0 -translate-x-12">
          <div class="mb-6">
            <div
              class="w-full h-2 bg-purple-500 mb-3 origin-left transform scale-x-0 bio-line"
            ></div>
            <h2 class="text-3xl font-bold text-gray-900">His Vision</h2>
          </div>
          <p class="text-gray-600 leading-relaxed text-lg mb-6">
            At the heart of Dr. Fayemi's journey is a vision for a Nigeria — and
            an Africa — built on justice, opportunity, and inclusive growth. His
            leadership philosophy emphasizes strong institutions,
            people-centered development, and regional cooperation. As Chairman
            of the Nigeria Governors' Forum, he advanced intergovernmental
            collaboration, while his role as the pioneer President of the Forum
            of African Regions (FORAF) positioned him as a continental
            statesman. His vision goes beyond politics; it is about empowering
            citizens, promoting knowledge economies, and ensuring Africa takes
            its rightful place in the global community. For Dr. Fayemi,
            leadership is not about titles but about impact, and his life's work
            continues to inspire younger generations to embrace integrity,
            service, and innovation in building the future.
          </p>
        </div>
        <!-- Image -->
        <div class="order-1 lg:order-2 bio-image opacity-0 translate-x-12">
          <div
            class="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-duration-500"
          >
            <img
              src="~/assets/img/89f7fc9b598261b3244075399cd9a9a97bb5fab3.png"
              alt="Dr. Fayemi speaking"
              class="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sectionRef = ref(null);

onMounted(() => {
  const sections = sectionRef.value.querySelectorAll(".bio-section");

  sections.forEach((section) => {
    const text = section.querySelector(".bio-text");
    const image = section.querySelector(".bio-image");
    const line = section.querySelector(".bio-line");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    });

    tl.to(image, {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power3.out",
    })
      .to(
        text,
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.6"
      )
      .to(
        line,
        {
          scaleX: 1,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.8"
      );
  });
});
</script>

<style scoped>
.container-custom {
  @apply container mx-auto px-6;
}
</style>
