<template>

  <section class="w-full text-5xl lg:text-7xl xl:text-9xl  text-fourth font-light lg:py-14 lg:mt-20">
    <div class="flex flex-col items-center sm:flex-row">
      <div class="lg:w-1/2 tracking-widest "
           data-aos="fade-in" data-aos-delay="300"

      >
        <img class="w-full h-72 mx-auto px-1 my-4 sm:px-3 sm:h-full " src="../../public/img/slider/05_office.jpg">
      </div>
      <div class="w-1/2 flex flex-col lg:px-6 self-center">
      <div class="flex ">
      <h1 class=" lg:w-1/3 xl:w-5/12  text-left hidden lg:block  self-center"  data-aos="slide-right">
        <span data-aos="fade-right" data-aos-delay="500">O</span>
        <span data-aos="fade-right" data-aos-delay="400">U</span>
        <span data-aos="fade-right" data-aos-delay="300">R</span>
      </h1>

      <h1 class="w-full lg:w-1/2 text-center lg:text-left self-center" data-aos="slide-left">
        <span data-aos="fade-right" data-aos-delay="500">B</span>
        <span data-aos="fade-right" data-aos-delay="400">Ü</span>
        <span data-aos="fade-right" data-aos-delay="300">R</span>
        <span data-aos="fade-right" data-aos-delay="300">O</span>
      </h1>
    </div>

      <div class="flex text-xs sm:text-base font-normal text-center lg:text-left">
        <div class="xl:w-1/2  py-4 lg:py-8 leading-5 lg:pl-2" data-aos="fade-up" data-aos-delay="300">
          <p class=" px-1 lg:w-4/5 ">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>
          <br>
          <p class="px-1 lg:w-4/5 ">Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
        </div>
      </div>

      </div>

    </div>


    <div class="flex justify-center py-10 mt-20 lg:mt-40 lg:ml-16 xl:ml-32">
      <h1 class=" pr-4 lg:pr-12 text-center self-center" data-aos="slide-right">
        <span data-aos="fade-right" data-aos-delay="500">O</span>
        <span data-aos="fade-right" data-aos-delay="400">U</span>
        <span data-aos="fade-right" data-aos-delay="300">R</span>
      </h1>

      <h1 class=" self-center" data-aos="slide-left">
        <span data-aos="fade-left" data-aos-delay="500">V</span>
        <span data-aos="fade-left" data-aos-delay="400">A</span>
        <span data-aos="fade-left" data-aos-delay="300">L</span>
        <span data-aos="fade-left" data-aos-delay="300">U</span>
        <span data-aos="fade-left" data-aos-delay="300">E</span>
        <span data-aos="fade-left" data-aos-delay="300">S</span>
      </h1>
    </div>
<div class="flex justify-center px-4  lg:ml-40 xl:ml-52 mb-20">
    <div class="  lg:w-2/5 text-base font-normal divide-y-2 divide-[gray] divide-opacity-10 border-t border-t-2 border-[gray] border-opacity-10">

      <div class="flex pb-10 pt-2" data-aos="fade-up">
        <p class="w-1/3">Drive</p>
        <p class="w-2/3">We convert the potential of the team into the energy of creation</p>
      </div>
      <div class="flex pb-10 pt-2" data-aos="fade-up">
        <p class="w-1/3">Distinctiveness</p>
        <p class="w-2/3 lg:w-1/2">We create real estate superbrands for personalities</p>
      </div>

      <div class="flex pb-10 pt-2" data-aos="fade-up">
        <p class="w-1/3">Confidence</p>
        <p class="w-2/3">We value our reputation, appreciate the confidence of our customers and are willing to trust our partners</p>
      </div>


      <div class="flex pb-10 pt-2" data-aos="fade-up">
        <p class="w-1/3">Innovation</p>
        <p class="w-2/3">Today we create what will meet the demands of tomorrow.</p>
      </div>
    </div>

</div>

    <div class=" px-1 grid grid-rows-1 grid-cols-2 gap-x-10">

      <img class="w-full" v-lazy="{src: `${require('../../public/img/slider/04_office.jpg')}`}"
           data-aos="slide-right" data-aos-delay="200">
      <img class="w-full" v-lazy="{src: `${require('../../public/img/slider/02_office.jpg')}`}"
           data-aos="slide-left" data-aos-delay="200"
      >

    </div>

</section>

</template>

<script>
import 'aos/dist/aos.css'

export default {
  name: "Hero",

}
</script>
