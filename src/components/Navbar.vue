<template>
  <header class="">
    <nav
      class="
        flex flex-row
        items-center
        justify-between
        px-3
        h-[96px]
        md:py-16 md:px-[7.25rem]
        xl:px-[15rem]
        text-lg
      "
    >
      <div class="flex gap-2">
        <span v-for="(icon, i) in brandIcons" :key="i">
          <a :href="icon.link" class="
          relative
                uppercase
                transition-colors
                duration-300
                ease-in-out
                hover:text-blue-800
                hover:scale-x-100
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
                before:duration-300">
            <fa-icon class="text-lg" :icon="icon.icon" />
          </a>
        </span>
      </div>
      <div class="uppercase hidden md:flex">
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
    </nav>
  </header>
</template>

<script>
export default {
  data: () => ({
    brandIcons: [
      {
        icon: "fa-brands fa-instagram",
        link: 'https://www.instagram.com/accounts/login/'
      },
      {
        icon: "fa-brands fa-github",
      },
      {
        icon: "fa-brands fa-linkedin",
      },
    ],
  }),
  methods: {
    scroll(refName) {
      const element = document.getElementById(refName);
      element.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style>
</style>