<template>
  <Hero/>
  <Workers/>
  <ToTop/>
</template>

<script>


import Hero from "../components/Hero";
import Workers from "../components/Workers";
import ToTop from "../components/ToTop";

export default {
  name: 'About',

  components: {
    Hero,
    Workers,
    ToTop
  },

  beforeMount() {

    window.scrollTo(0, 0)
  },


};


</script>
