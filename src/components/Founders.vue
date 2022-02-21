<template>
  <section class="w-full text-5xl lg:text-7xl xl:text-9xl text-fourth font-light">
    <div class="flex mt-20 font-raleway">
      <h1 class="w-1/2 text-right" data-aos="slide-right">
        <span data-aos="fade-left" data-aos-delay="200">T</span>
        <span data-aos="fade-right" data-aos-delay="300">E</span>
      </h1>
      <h1 class="w-1/2 text-left lg:pr-2" data-aos="slide-left">
        <span data-aos="fade-right" data-aos-delay="200">A</span>
        <span data-aos="fade-left" data-aos-delay="300">M</span>
      </h1>
    </div>
    <div class="flex lg:justify-center px-4 lg:ml-40 mb-20 lg:mb-40">
      <div class=" mx-auto md:w-4/5 xl:w-2/5 text-sm lg:text-base font-raleway font-normal divide-y divide-[gray] divide-opacity-40">

        <div class="flex flex-row-reverse lg:flex-row py-12" data-aos="fade-up" data-aos-delay="300">
          <p class="lg:w-1/3"></p>
          <p class="w-1/2  sm:w-2/3  lg:pl-3 xl:w-2/3 " >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
        </div>
        <div class="flex pb-10 pt-2 justify-between" data-aos="fade-up" data-aos-delay="300">
          <p class="w-1/3">We are excited</p>
          <p class="w-1/2  sm:w-2/3   lg:pl-3 xl:w-2/3">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
        </div>

        <div class="flex pb-10 pt-2 justify-between" data-aos="fade-up" data-aos-delay="300">
          <p class="w-1/3">We take pride</p>
          <p class="w-1/2  sm:w-2/3  lg:pl-3 xl:w-2/3">

            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
        </div>
      </div>
    </div>
    <Cards/>
  </section>
</template>

<script>


import AOS from "aos";
import 'aos/dist/aos.css'
import Cards from "./Cards";

export default {
  name: "Founders",

  components: {Cards},

  mounted() {

    AOS.init({
      once: true,
      easing: 'ease-out-sine',

    })
  },

}
</script>

