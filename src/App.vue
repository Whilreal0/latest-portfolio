<template>
 <div>
  <NewNavbar/>
  <router-view/>
  <Footer/>
  
 </div>
</template>
<script>
import NewNavbar from '@/components/NewNavbar'
import Footer from '@/components/Footer'

  export default{
    components:{
      NewNavbar,Footer
    }
  }
</script>
<style>
body{
  font-family: 'Rokkitt', serif;
}
</style>