<template>
  <div class="pt-32 pb-24">
    <div class="container-custom">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <span
            class="text-primary font-bold tracking-widest uppercase text-sm mb-4 block"
            >Get in Touch</span
          >
          <h1 class="text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
            Connect with <span class="text-primary">Dr. Fayemi</span>
          </h1>
        </div>
        <div
          class="bg-white p-10 md:p-12 rounded-3xl shadow-2xl border border-stroke"
        >
          <form class="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              class="w-full bg-ash border-none rounded-xl px-5 py-4 outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              class="w-full bg-ash border-none rounded-xl px-5 py-4 outline-none"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              class="w-full bg-ash border-none rounded-xl px-5 py-4 outline-none resize-none"
            ></textarea>
            <button class="btn-primary w-full py-4 text-lg">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
