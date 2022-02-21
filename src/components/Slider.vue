<template>
  <Splide id="splide" :options="options">
    <SplideSlide class="flex px-3  h-52 md:h-96 xl:h-[45rem]"
                 v-for="slide in sliders"
                 :key="slide">
      <div class="w-1/2 grid grid-rows-1  lg:grid-rows-2 ">
        <div class="flex flex-col lg:justify-end lg:mb-12 lg:px-3">
          <h3 class="uppercase text-xl  sm:text-4xl  md:text-5xl lg:text-6xl  xl:text-8xl font-grotesque text-fourth"
              data-aos="new-animation" data-aos-delay="200"
          > {{ slide.title }}
          </h3>
          <small class="py-4 text-tertiary " data-aos="fade-in" data-aos-delay="300">
            {{ slide.made }}</small>
          <div class="flex justify-between lg:w-11/12"
               data-aos="fade-in" data-aos-delay="300">
            <div>
            </div>
            <div class=" lg:w-1/2"><p class="mb-4 font-muli text-xs md:text-sm  lg:text-base"

            >{{ slide.text }}</p>
              <router-link
                  :to="{ name: slide.router}"
                  class="uppercase font-muli font-bold text-fourth border-0 hover:border-b-2 transition-all  text-sm lg:text-base xl:text-xl ">
                More Details
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="w-1/2">
        <img
            :src="slide.src" alt="Sample 1"
            class=" px-2 h-48  md:h-full ml-auto  relative"></div>
    </SplideSlide>
  </Splide>
</template>

<script>

import {Splide, SplideSlide} from '@splidejs/vue-splide';
import {defineComponent} from 'vue';
import '@splidejs/splide/dist/css/splide.min.css';
import 'aos/dist/aos.css'

const sliders = [

  {
    title: "KLEINHOUSE",
    made: "MADE IN 2022",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
    src: `${require('../../public/img/slider/01_home.jpg')}`,
    router: 'ProjectNr1'

  },
  {
    title: "N`ICE LOFT",
    made: "MADE IN 2021",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
    src: `${require('../../public/img/slider/02_home.jpg')}`,
    router: 'ProjectNr2'
  },
  {
    title: "LOFT.FM",
    made: "MADE IN 2020",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
    src: `${require('../../public/img/slider/03_home.jpg')}`,
    router: 'ProjectNr3'
  },
  {
    title: "N`ICE RIVER",
    made: "MADE IN 2019",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
    src: `${require('../../public/img/slider/04_home.jpg')}`,
    router: 'ProjectNr4'
  },
  {
    title: "TALLER",
    made: "MADE IN 2018",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
    src: `${require('../../public/img/slider/05_home.jpg')}`,
    router: 'ProjectNr5'
  },


]


export default defineComponent({
  name: 'Home',


  components: {

    Splide, SplideSlide

  },

  beforeMount() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  },

  setup() {


    const options = {

      classes: {
        prev: 'splide__arrow--prev button--left',
        next: 'splide__arrow--next button--next',
        arrow: 'splide__arrow my_splide--arrow',
        arrows: 'splide__arrows my_splide--arrows',
      },
      autoplay: true,
      rewind: false,
      drag: true,
      type: 'fade',
      speed: 1000,
      focus: 'center',
      pagination: false,
      easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
      wheel: false,
      flickPower: 600,
      arrowPath: "M23.5146 1.51472L30.7615 8.76165H0V9.76165H30.8305L23.5167 17.0755L24.215 17.7912L32.7003 9.30594L32.6887 9.29403L32.6982 9.28426L24.213 0.798981L23.5146 1.51472Z",
      arrows: true
    };

    return {options, sliders};
  }
});
</script>

<style scoped lang="scss">


[data-aos="new-animation"] {
  opacity: 0;
  transition-property: transform, opacity;

  &.aos-animate {
    opacity: 1;
  }

  @media screen and (min-width: 768px) {
    transform: translateY(100px);

    &.aos-animate {
      transform: translateY(0);


    }
  }
}

</style>
