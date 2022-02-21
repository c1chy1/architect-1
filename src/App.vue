<template>
  <div class="max-w-screen-2xl mx-auto overflow-x-hidden">
    <Navigation/>
    <router-view
        v-slot="{ Component }">
      <component :is="Component"/>
    </router-view>
    <Footer/>
  </div>
</template>
<script>

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";


export default {

  components: {Navigation, Footer},

}
</script>
<style scoped>


</style>

