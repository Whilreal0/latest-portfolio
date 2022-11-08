<template>
  <nav>
    <!-- Desktop menu -->
    <div class="px-3 md:py-16 md:px-[7.25rem] xl:px-[15rem] text-lg">
      <div class="max-w-7xl mx-auto">
        <div class="flex justify-between text-lg font-bold">
          <!-- Menu -->
          <div class="flex gap-2 my-auto">
            <!-- logo -->
            <span v-for="(icon, i) in brandIcons" :key="i">
              <a
                :href="icon.link"
                class="
                  relative
                  uppercase
                  transition-colors
                  duration-300
                  ease-in-out
                  hover:text-blue-800 hover:scale-x-100
                  before:content-['']
                  before:absolute
                  before:block
                  before:w-full
                  before:h-[2px]
                  before:bottom-0
                  before:left-0
                  before:bg-blue-800
                  before:hover:scale-x-100
                  before:scale-x-0
                  before:origin-top-left
                  before:transition
                  before:ease-in-out
                  before:duration-300
                "
              >
                <fa-icon class="text-lg" :icon="icon.icon" />
              </a>
            </span>
          </div>
          <!-- menu -->
          <div class="md:flex w-full justify-end py-5 px-2 hidden">
            <ul class="flex gap-1 uppercase font-medium">
              <li class="px-1">
                <button
                  class="
                    relative
                    uppercase
                    transition-colors
                    duration-300
                    ease-in-out
                    hover:text-blue-800 hover:scale-x-100
                    before:content-['']
                    before:absolute
                    before:block
                    before:w-full
                    before:h-[2px]
                    before:bottom-0
                    before:left-0
                    before:bg-blue-800
                    before:hover:scale-x-100
                    before:scale-x-0
                    before:origin-top-left
                    before:transition
                    before:ease-in-out
                    before:duration-300
                  "
                  @click="scroll('home')"
                >
                  Home
                </button>
              </li>
              <li class="px-1">
                <button
                  class="
                    relative
                    uppercase
                    transition-colors
                    duration-300
                    ease-in-out
                    hover:text-blue-800 hover:scale-x-100
                    before:content-['']
                    before:absolute
                    before:block
                    before:w-full
                    before:h-[2px]
                    before:bottom-0
                    before:left-0
                    before:bg-blue-800
                    before:hover:scale-x-100
                    before:scale-x-0
                    before:origin-top-left
                    before:transition
                    before:ease-in-out
                    before:duration-300
                  "
                  @click="scroll('skills')"
                >
                  skills
                </button>
              </li>
              <li class="px-1">
                <button
                  class="
                    relative
                    uppercase
                    transition-colors
                    duration-300
                    ease-in-out
                    hover:text-blue-800 hover:scale-x-100
                    before:content-['']
                    before:absolute
                    before:block
                    before:w-full
                    before:h-[2px]
                    before:bottom-0
                    before:left-0
                    before:bg-blue-800
                    before:hover:scale-x-100
                    before:scale-x-0
                    before:origin-top-left
                    before:transition
                    before:ease-in-out
                    before:duration-300
                  "
                  @click="scroll('projects')"
                >
                  projects
                </button>
              </li>
            </ul>
          </div>

          <div class="md:hidden flex items-center">
            <button class="py-5 px-2" @click="showNav">
              <fa-icon icon="fa fa-bars" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- mobile nav -->
    <div
      class="
        md:hidden
        absolute
        bg-white
        left-2
        right-0
        my-2
        transition
        duration-100
        ease-in
      "
      v-show="isOpen"
    >
      <button
        class="
          block
          py-2
          px-4
          relative
          uppercase
          transition-colors
          duration-300
          ease-in-out
          text-lg
          font-semibold
          hover:text-blue-800 hover:scale-x-100
          before:content-['']
          before:absolute
          before:block
          before:w-full
          before:h-[2px]
          before:bottom-0
          before:left-0
          before:bg-blue-800
          before:hover:scale-x-100
          before:scale-x-0
          before:origin-top-left
          before:transition
          before:ease-in-out
          before:duration-300
        "
        @click="scroll('home')"
      >
        Home
      </button>
      <button
        class="
          block
          py-2
          px-4
          relative
          uppercase
          transition-colors
          duration-300
          ease-in-out
          text-lg
          font-semibold
          hover:text-blue-800 hover:scale-x-100
          before:content-['']
          before:absolute
          before:block
          before:w-full
          before:h-[2px]
          before:bottom-0
          before:left-0
          before:bg-blue-800
          before:hover:scale-x-100
          before:scale-x-0
          before:origin-top-left
          before:transition
          before:ease-in-out
          before:duration-300
        "
        @click="scroll('skills')"
      >
        Skills
      </button>
      <button
        class="
          block
          py-2
          px-4
          relative
          uppercase
          transition-colors
          duration-300
          ease-in-out
          text-lg
          font-semibold
          hover:text-blue-800 hover:scale-x-100
          before:content-['']
          before:absolute
          before:block
          before:w-full
          before:h-[2px]
          before:bottom-0
          before:left-0
          before:bg-blue-800
          before:hover:scale-x-100
          before:scale-x-0
          before:origin-top-left
          before:transition
          before:ease-in-out
          before:duration-300
        "
        @click="scroll('projects')"
      >
        Projects
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  data: () => ({
    brandIcons: [
      {
        icon: "fa-brands fa-instagram",
        link: "https://www.instagram.com/accounts/login/",
      },
      {
        icon: "fa-brands fa-github",
      },
      {
        icon: "fa-brands fa-linkedin",
      },
    ],
    isOpen: false,
  }),
  methods: {
    scroll(refName) {
      const element = document.getElementById(refName);
      element.scrollIntoView({ behavior: "smooth" });
    },
    showNav() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style>
</style>