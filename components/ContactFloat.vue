<template>
  <div class="fixed bottom-8 right-8 z-50">
    <!-- Floating Button -->
    <Transition
      enter-active-class="transition duration-500 ease-out"
      enter-from-class="scale-0 rotate-[-90deg] opacity-0"
      enter-to-class="scale-100 rotate-0 opacity-100"
      leave-active-class="transition duration-300 ease-in"
      leave-from-class="scale-100 rotate-0 opacity-100"
      leave-to-class="scale-0 rotate-90 opacity-0"
    >
      <button
        v-if="!isOpen"
        @click="toggleModal(true)"
        class="w-16 h-16 bg-[#007A33] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-transform duration-300 group"
        ref="fabRef"
      >
        <MessageSquare class="w-7 h-7" />

        <!-- Tooltip -->
        <span
          class="absolute right-20 bg-white text-gray-900 px-4 py-2 rounded-lg text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-gray-100"
        >
          Enquire about JKF
        </span>
      </button>
    </Transition>

    <!-- Contact Modal -->
    <div
      v-if="isOpen"
      class="absolute bottom-20 right-0 w-[350px] md:w-[400px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden contact-modal"
      ref="modalRef"
    >
      <!-- Header -->
      <div class="bg-[#007A33] p-6 text-white flex justify-between items-start">
        <div>
          <h3 class="text-xl font-bold">Direct Inquiry</h3>
          <p class="text-green-100 text-xs mt-1">
            Send a message directly to Dr. Fayemi's office.
          </p>
        </div>
        <button
          @click="toggleModal(true)"
          class="p-1 hover:bg-white/10 rounded-lg transition-colors"
        >
          <X class="w-6 h-6" />
        </button>
      </div>

      <!-- Form -->
      <div class="p-6">
        <form v-if="!isSent" @submit.prevent="handleSubmit" class="space-y-4">
          <div>
            <label class="block text-xs font-bold text-gray-500 uppercase mb-1"
              >Full Name</label
            >
            <input
              v-model="form.name"
              type="text"
              required
              class="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-lg text-sm focus:ring-2 focus:ring-[#007A33] focus:border-transparent outline-none transition-all"
              placeholder="Your name"
            />
          </div>
          <div>
            <label class="block text-xs font-bold text-gray-500 uppercase mb-1"
              >Email Address</label
            >
            <input
              v-model="form.email"
              type="email"
              required
              class="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-lg text-sm focus:ring-2 focus:ring-[#007A33] focus:border-transparent outline-none transition-all"
              placeholder="Your email"
            />
          </div>
          <div>
            <label class="block text-xs font-bold text-gray-500 uppercase mb-1"
              >Subject</label
            >
            <select
              v-model="form.subject"
              class="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-lg text-sm focus:ring-2 focus:ring-[#007A33] focus:border-transparent outline-none transition-all"
            >
              <option value="General Inquiry">General Inquiry</option>
              <option value="Speaking Engagement">Speaking Engagement</option>
              <option value="Publication Request">Publication Request</option>
              <option value="Policy Dialogue">Policy Dialogue</option>
            </select>
          </div>
          <div>
            <label class="block text-xs font-bold text-gray-500 uppercase mb-1"
              >Message</label
            >
            <textarea
              v-model="form.message"
              required
              rows="4"
              class="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-lg text-sm focus:ring-2 focus:ring-[#007A33] focus:border-transparent outline-none transition-all resize-none"
              placeholder="How can we help you?"
            ></textarea>
          </div>
          <button
            type="submit"
            :disabled="isSubmitting"
            class="w-full bg-[#007A33] hover:bg-[#00662B] text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2 group"
          >
            <span>{{ isSubmitting ? "Sending..." : "Send Message" }}</span>
            <Send
              class="w-4 h-4 group-hover:translate-x-1 transition-transform"
            />
          </button>
        </form>

        <!-- Success Message -->
        <div v-else class="py-12 text-center">
          <div
            class="w-16 h-16 bg-green-100 text-[#007A33] rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <Check class="w-8 h-8" />
          </div>
          <h4 class="text-xl font-bold text-gray-900 mb-2">Message Sent!</h4>
          <p class="text-gray-600 text-sm mb-6">
            Thank you for your inquiry. We will get back to you shortly.
          </p>
          <button
            @click="isSent = false"
            class="text-[#007A33] font-bold text-sm hover:underline"
          >
            Send another message
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { MessageSquare, X, Send, Check } from "lucide-vue-next";
import gsap from "gsap";

const {
  isContactModalOpen: isOpen,
  toggleContactModal,
  openContactModal,
  closeContactModal,
  hasBeenOpened,
  startAutoPopupTimer,
} = useContact();
const isSent = ref(false);
const isSubmitting = ref(false);
const fabRef = ref(null);
const modalRef = ref(null);

const form = ref({
  name: "",
  email: "",
  subject: "General Inquiry",
  message: "",
});

const toggleModal = (manual = false) => {
  if (manual) {
    sessionStorage.setItem("jfk_contact_interacted", "true");
  }

  if (!isOpen.value) {
    openContactModal();
    setTimeout(() => {
      gsap.from(".contact-modal", {
        y: 20,
        opacity: 0,
        scale: 0.95,
        duration: 0.4,
        ease: "back.out(1.7)",
      });
    }, 10);
  } else {
    gsap.to(".contact-modal", {
      y: 20,
      opacity: 0,
      scale: 0.95,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        closeContactModal();
      },
    });
  }
};

const handleSubmit = async () => {
  isSubmitting.value = true;
  const targetEmail = "jfk@fayemi.com";
  console.log(`Sending message to ${targetEmail}`, form.value);

  // Reset form
  form.value = {
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  };

  isSubmitting.value = false;
  isSent.value = true;
};

onMounted(() => {
  // Call the centralized timer from our composable
  startAutoPopupTimer(() => {
    toggleModal(false);
  });
});
</script>

<style scoped>
.contact-modal {
  transform-origin: bottom right;
}
</style>
