<template>
  <Projects/>
</template>


<script>
import Projects from "../components/Projects";


export default {
  name: "Project",
 components: {Projects},


  beforeMount() {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  },

}
</script>

