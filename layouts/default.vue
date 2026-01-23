<template>
  <div class="min-h-screen flex flex-col font-sans">
    <Navbar />
    <main class="flex-grow">
      <slot />
    </main>
    <ContactFloat />
    <Footer />
  </div>
</template>

<script setup>
import Navbar from "~/components/Navbar.vue";
import Footer from "~/components/Footer.vue";
import ContactFloat from "~/components/ContactFloat.vue";
</script>
