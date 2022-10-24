<template>
  <section class=" relative bg-[#fefefe] py-7" id="projects">
    <h1 class="text-center font-bold text-3xl mb-10">PROJECTS</h1>
    <div
      class="
        grid grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        gap-10
        py-7
        justify-center
        lg:mb-16
      "
    >
      <div
        v-for="(info, i) in projectInfo"
        :key="i"
        class="
          card
          p-8
          shadow-custom
          rounded-md
          bg-white
          font-semibold
          hover:-translate-y-2
          transition-all
          duration-300
        "
      >
        <h2 class="font-bold text-xl">{{ info.title }}</h2>
        <p class="m-[4px]">{{ info.description }}</p>
        <ul class="inline-flex gap-2 text-center w-full justify-center py-5 text-lg">
          <li>{{ info.stack[0] }}</li>
          <li>{{ info.stack[1] }}</li>
          <li>{{ info.stack[2] }}</li>
        </ul>
        <div class="flex gap-2 text-xl">
          <span>
            <a
              href=""
              class="
                relative
                hover:text-blue-800
                transition
                duration-400
                before:content-['']
                before:absolute
                before:block
                before:w-full
                before:h-[1px]
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
              <fa-icon :icon="info.icon[0]" />
            </a>
          </span>
          <span>
            <a
              href=""
              class="
                relative
                hover:text-blue-800
                transition
                duration-400
                before:content-['']
                before:absolute
                before:block
                before:w-full
                before:h-[1px]
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
              ><fa-icon :icon="info.icon[1]"
            /></a>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    projectInfo: [
      {
        title: "Jason Creations",
        description:
          "a responsive photography portfolio for a freelance photographer in the Philippines.",
        stack: ["VueJs2", "TailwindCSS"],
        icon: ["fa-brands fa-github", "fa-solid fa-up-right-from-square"],
      },
      {
        title: "Castra Gears",
        description:
          "a responsive eCommerce site",
        stack: ["Wordpress"],
        icon: ["fa-brands fa-github", "fa-solid fa-up-right-from-square"],
      },
      {
        title: "Simple To Do list",
        description:
          "a simple responsive To Do List app",
        stack: ["VueJs2, Vuetify"],
        icon: ["fa-brands fa-github", "fa-solid fa-up-right-from-square"],
      },
      {
        title: "Weather App",
        description:
          "a simple Weather App",
        stack: ["VueJs2, OpenWeatherAPI, Vuetify"],
        icon: ["fa-brands fa-github", "fa-solid fa-up-right-from-square"],
      },
      {
        title: "Thesis Title Generator",
        description:
          "To Generate A title for you",
        stack: ["VueJs2, Vuetify"],
        icon: ["fa-brands fa-github", "fa-solid fa-up-right-from-square"],
      },
    ],
    
  }),
};
</script>

<style >
.shadow-custom {
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
</style>