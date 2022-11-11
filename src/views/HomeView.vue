<template>
  <section class="py-7">
    <h2 class="text-2xl font-bold mb-6 md:mt-9">Hello, I am</h2>
    <h2 class="text-5xl font-bold text-[#2978b5] mb-10 md:text-[4rem]">
      Whilmer Realigue
    </h2>

    <p class="max-w-[600px] text-slate-700 mb-10">
      I am from Agoo La union, 23 years old. looking for a position to kickstart
      my career in the field of Frontend Development. Have a Degree of Bachelor
      of Science in Computer Science from Don Mariano Marcos State University.
    </p>
    <p class="max-w-[600px] text-slate-700 mb-10">
      My main focus these days is to explore the field, and to find
      opportunities that will help me grow and enhance my skills, especially on
      building profitable responsive websites and web applications.
    </p>
    <div class="mb-[10rem] flex gap-5">
      <button
        class="
          px-5
          py-2
          border-blue-500 border-solid border-2
          
          relative
          bg-transparent
          font-medium
          uppercase
          text-gray-800
          transition-colors
          before:absolute
          before:left-0
          before:top-0
          before:-z-10
          before:h-full
          before:w-full
          before:origin-top-left
          before:scale-x-0
          before:bg-blue-500
          before:transition-transform
          before:duration-300
          before:content-['']
          hover:text-white
          before:hover:scale-x-100
        "
        @click="scroll('contact')"
      >
        Get In Touch
      </button>
      <button class=" px-5
          py-2
          border-blue-500 border-solid border-2
          
          relative
          bg-transparent
          font-medium
          uppercase
          text-gray-800
          transition-colors
          before:absolute
          before:left-0
          before:top-0
          before:-z-10
          before:h-full
          before:w-full
          before:origin-top-left
          before:scale-x-0
          before:bg-blue-500
          before:transition-transform
          before:duration-300
          before:content-['']
          hover:text-white
          before:hover:scale-x-100"
          
          >
          
        
          <a 
          href="\WhilmerRealigueResume.pdf" target="blank"
   download>
            Resume
          </a>
        
      </button>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
   methods:
   {
    scroll(refName) {
      const element = document.getElementById(refName);
      element.scrollIntoView({ behavior: "smooth" });
    },
  //   readFile() {
  //    window.open('./assets/WhilmerRealigueResume.pdf', '_blank') //to open in new tab
  //    console.log(`open`);
  //  }
   },
   

};
</script>
