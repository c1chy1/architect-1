<template>
  <section class="w-full text-5xl lg:text-7xl xl:text-9xl text-fourth font-light py-14">

    <div class="w-full ">
      <h1 class="uppercase text-center tracking-widest mb-20">LOFT.FM</h1>
      <img src="../../../public/img/slider/03_home.jpg" >

      <h2 class="text-center  text-4xl lg:text-7xl xl:text-9xl  py-8 tracking-widest">ON THE STRONG SIDE</h2>
    </div>
    <div class="flex flex-row-reverse text-base lg:w-3/4 px-2">
      <p class="w-2/3 mx-auto lg:w-1/3 lg:mx-0 text-center xl:text-left">LOFT.FM dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
    </div>

    <div class="flex mt-32 border-b border-[gray] border-opacity-20 lg:pb-32">
      <div class="w-1/2  px-4 lg:px-12 ">

        <img src="../../../public/img/projects/project3/01_project.jpg">

      </div>
      <div class="w-1/2 ">
        <div class=" lg:w-2/3 grid grid-cols-2 grid-rows-2 gap-x-2 lg:gap-y-28 lg:mb-20">
          <div>
            <p class="text-xs md:text-xl xl:text-xl text-[gray] text-opacity-50 font-normal">Class</p>
            <p class=" text-base md:text-xl xl:text-5xl font-semibold">C</p>
          </div>
          <div>
            <p class="text-xs md:text-xl xl:text-xl text-[gray] text-opacity-50 font-normal">Area</p>
            <p class="text-base md:text-xl xl:text-5xl font-semibold">210 000 М²</p>
          </div>
          <div>
            <p class="text-xs md:text-xl xl:text-xl text-[gray] text-opacity-50 font-normal">Number of floors</p>
            <p class="text-base md:text-xl xl:text-5xl font-semibold">30</p>
          </div>
          <div>
            <p class="text-xs md:text-xl xl:text-xl text-[gray] text-opacity-50 font-normal">Year of completion</p>
            <p class="text-base md:text-xl xl:text-5xl font-semibold">2019</p>
          </div>
        </div>
        <Accordion/>
      </div>
    </div>
    <SubmitForm/>
  </section>
</template>

<script>

import Accordion from "../../components/Accordion";
import SubmitForm from "../../components/SubmitForm";

export default {
  name: "ProjectNr3",

  components: {Accordion,SubmitForm},
}
</script>
<style>


</style>
