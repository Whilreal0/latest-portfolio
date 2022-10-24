<template>
  <main class="px-2 md:px-[7.25rem] xl:px-[15rem]">
    <HomeView/>
    <SkillsView/>
    <ContactView/>
    <ProjectsView/>
    <ScrollToUp/>
    
  </main>
</template>

<script>
import HomeView from '@/views/HomeView'
import SkillsView from '@/views/SkillsView'

import ProjectsView from '@/views/ProjectsView'
import ContactView from '@/views/ContactView'
import ScrollToUp from '@/components/ScrollToUp'




export default {
    components:{
        HomeView,SkillsView,ProjectsView,ContactView,ScrollToUp
        
    }
}
</script>

<style>

</style>