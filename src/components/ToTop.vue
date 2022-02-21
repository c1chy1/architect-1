<template>
  <button
      id="top"
      class="p-2 absolute left-0  w-8 sm:w-10 lg:w-12 text-primary bg-fourth rounded-r-lg "
      data-aos-once="false"
      data-aos="fade-left"
      @click="toTop"></button>
</template>

<script>
import 'aos/dist/aos.css'

export default {
  name: "ToTop",
  methods: {

    toTop: function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }

  },

}
</script>

<style scoped lang="scss">

#top:before {
   content: url(../../public/img/svg/arrow-up-solid.svg);
 }

</style>
