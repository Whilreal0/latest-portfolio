<template>
  <div class="w-full flex justify-end bottom-0 pb-3 pr-5 lg:pr-16 transition " >
    <button class="text-2xl " @click="scrollToTop" >
    <fa-icon icon="fa-solid fa-arrow-up" />
  </button>
  </div>
</template>

<script>
export default {
  data:()=>({
    scrolled: false
  }),

  methods: {
    scrollToTop() {
      let currentScroll = document.documentElement.scrollTop,
        int = setInterval(frame, 6);

      function frame() {
        if (0 > currentScroll) {
          clearInterval(int);
        } else {
          currentScroll = currentScroll - 12;
          document.documentElement.scrollTop = currentScroll;
        }
      }
    },
  },
 };
</script>

<style>
</style>