<template>

  <section class="w-full text-5xl lg:text-7xl xl:text-9xl font-raleway text-fourth font-light  py-6 lg:py-14 mt-20">

    <div class="flex tracking-widest">

      <h1 class="w-1/2 text-right  ml-2 xl:ml-4" data-aos="slide-right" data-aos-delay="100">
        <span data-aos="fade-right">W</span>
        <span data-aos="fade-right">E</span></h1>
    </div>


    <div class="flex flex-row-reverse">
      <h1 class="w-1/2 text-left lg:mr-2 xl:mr-4"  data-aos="slide-left" data-aos-delay="200">
        <span data-aos="fade-left">M</span>
        <span data-aos="fade-left">A</span>
        <span data-aos="fade-left">K</span>
        <span data-aos="fade-left">E</span>
      </h1>
    </div>
    <div class="flex">
      <h1 class="w-1/2 text-right pr-2 lg:pr-4 xl:pr-8"  data-aos="slide-right" data-aos-delay="300">
        <span data-aos="fade-right">N</span>
        <span data-aos="fade-right">E</span>
        <span data-aos="fade-right">W</span>
      </h1>

      <h1 class="w-1/2 text-left lg:mr-5 xl:mr-8"  data-aos="slide-left" data-aos-delay="300">
        <span data-aos="fade-left">L</span>
        <span data-aos="fade-left">I</span>
        <span data-aos="fade-left">V</span>
        <span data-aos="fade-left">I</span>
        <span data-aos="fade-left">N</span>
        <span data-aos="fade-left">G</span>
      </h1>

    </div>
    <div class="flex flex-row-reverse text-sm lg:text-base font-raleway font-normal t mr-8">
      <div class="w-1/2 py-8 leading-5  " data-aos="fade-up" data-aos-delay="300">
        <p class="pl-5 lg:w-1/2 xl:w-2/5 lg:pl-3">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>
        <br>
        <p class="pl-5  lg:w-2/5 lg:pl-3">Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
      </div>
    </div>


    <div class="flex mt-20 lg:mt-40 lg:mr-8  ">
      <h1 class="w-1/2 text-right"  data-aos="slide-right">
        <span data-aos="fade-left">B</span>
        <span data-aos="fade-left">Ü</span>
      </h1>
      <h1 class="w-1/2 text-left"  data-aos="slide-left">
        <span data-aos="fade-right">R</span>
        <span data-aos="fade-right">O</span>
      </h1>
    </div>
    <div class="flex text-sm lg:text-base px-2 lg:mr-8">

      <div class="w-1/2 py-8 px-2 flex justify-center">

        <img class="h-36 lg:w-2/3 lg:h-[40rem]" data-aos="fade-up" data-aos-delay="300"
             v-lazy="{src: `${require('../../public/img/slider/03_office.jpg')}`}">
      </div>

      <div class="w-1/2 py-8 leading-5 font-normal font-raleway" data-aos="fade-up" data-aos-delay="300">
        <p class=" px-1  lg:w-2/5 lg:pl-3">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
          dolores et ea rebum. </p>
        <br>
        <p class="px-1 lg:w-2/5 lg:pl-3">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy</p>
        <br>
        <p class="px-1 lg:w-2/5 lg:pl-3">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>

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
      easing: 'ease-out-sine',
    })
  },

}
</script>

<style scoped lang="scss">

[data-aos="new-animation"] {
  opacity: 0;
  transition-property: transform, opacity;

  &.aos-animate {
    opacity: 1;
  }

  @media screen and (min-width: 768px) {
    transform: translateX(100px);

    &.aos-animate {
      transform: translateX(0);
    }
  }
}

</style>
