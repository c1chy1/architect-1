<template>

  <section class="w-full text-5xl lg:text-7xl xl:text-9xl font-light text-fourth py-6 lg:py-14 mt-20 bg-secondary font-raleway">

    <div class="flex" data-aos="slide-right">

      <h1 class="w-7/12 text-right pr-3 lg:pr-16 tracking-widest">
        <span data-aos="fade-left" data-aos-delay="200">P</span>
        <span data-aos="fade-left" data-aos-delay="300">R</span>
        <span data-aos="fade-left" data-aos-delay="400">E</span>
        <span data-aos="fade-left" data-aos-delay="500">S</span>
        <span data-aos="fade-left" data-aos-delay="600">S</span>
      </h1>
    </div>


    <div class="flex flex-row-reverse flex pb-5" data-aos="slide-left">
      <h1 class="w-7/12 text-left pl-3 lg:pl-16">
        <span data-aos="fade-right" data-aos-delay="500">C</span>
        <span data-aos="fade-right" data-aos-delay="400">E</span>
        <span data-aos="fade-right" data-aos-delay="300">N</span>
        <span data-aos="fade-right" data-aos-delay="200">T</span>
        <span data-aos="fade-right" data-aos-delay="200">E</span>
        <span data-aos="fade-right" data-aos-delay="200">R</span>
      </h1>
    </div>

    <div class="grid grid-cols-2 grid-rows-3 gap-x-4  lg:gap-x-7 gap-y-3 px-2 justify-center font-medium mt-4">


      <div class="w-full flex justify-end"  data-aos="fade-up" data-aos-delay="300">
        <p class=" lg:w-1/2 text-sm lg:text-base text-right">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat.<br>
          <small class="text-xs">08.02.2022</small>
        </p>

      </div>
      <div class="w-full flex mb-4 lg:mb-0">
        <img class=" lg:h-96 lg:w-1/2" data-aos="fade-up" data-aos-delay="300"
             v-lazy="{src: `${require('../../public/img/slider/06_home.jpg')}`}">
      </div>

      <div class="w-full flex justify-end mb-4 lg:mb-0">
        <img class=" lg:h-96 lg:w-1/2" data-aos="fade-up" data-aos-delay="300"
             v-lazy="{src: `${require('../../public/img/slider/08_home.jpg')}`}">
      </div>
      <div class="w-full flex justify-start mb-4">
        <p class="lg:w-1/2 text-sm lg:text-base text-left"  data-aos="fade-up" data-aos-delay="300">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat.<br>
          <small class="text-xs">04.01.2022</small>
        </p>

      </div>


      <div class="w-full flex justify-end lg:mt-0">
        <p class="lg:w-1/2 text-sm lg:text-base text-right"  data-aos="fade-up" data-aos-delay="300">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat.<br>
          <small class="text-xs">08.11.2021</small>
        </p>

      </div>
      <div class="w-full flex mb-4 lg:mb-0">
        <img class=" lg:h-96 lg:w-1/2" data-aos="fade-up" data-aos-delay="300"
             v-lazy="{src: `${require('../../public/img/slider/09_home.jpg')}`}">
      </div>

    </div>
  </section>
</template>

<script>

import AOS from "aos";
import 'aos/dist/aos.css'


export default {
  name: "News",

  mounted() {

    AOS.init({
      once: true,
      duration: 750,
      easing: 'ease-out-sine',
      disable: 'mobile'
    })
  },

}
</script>

<style scoped lang="scss">

@import url("https://use.typekit.net/zsm0hjd.css");


</style>
