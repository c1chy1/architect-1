<template>
  <div class="flex flex-col items-center md:flex-row md:justify-around lg:mt-20" >

    <div class='card relative  w-48 h-48 mb-12 w-44 sm:w-56 sm:h-60 sm:mb-5 md:w-64 md:h-[18rem] md:mb-6 lg:w-72 lg:h-[24rem] lg:mb-8 xl:w-80 xl:h-[28rem] xl:mb-96 bg-fourth' data-aos="slide-right" data-aos-delay="300" >
      <div class='card-container absolute w-64 h-36 top-6 -left-2 sm:w-80 sm:h-40 sm:top-10 sm:-left-4 md:w-[22.5rem] md:h-56 md:top-8 md:-left-6 lg:w-[26.5rem] lg:h-64 lg:top-10 lg:-left-8   xl:w-[34.5rem] xl:h-80 xl:top-16 xl:-left-10' >
        <main class='card-body  w-32 h-20 mt-8 -ml-6   sm:w-44 sm:h-28 sm:mt-6 sm:-ml-8 md:w-52 md:h-36 md:mt-8 md:-ml-10 lg:w-60 lg:h-44 lg:mt-8 lg:-ml-10 xl:w-72 xl:h-60 xl:-ml-12 xl:mt-0 bg-[rgb(255,255,255)] absolute flex flex-col justify-center text-center font-'>
          <h2 class="text-xs text-tertiary uppercase sm:mb-1 sm:my-2 md:mb-2 lg:mb-3 xl:mb-4">Founder</h2>
          <h1 class="relative inline-block py-0.5 mb-4 text-xs sm:text-base md:text-xl xl:text-2xl font-semibold uppercase">Eberhard Müller</h1>
        </main>
        <aside>
          <img class="absolute w-32 h-36 right-7 -top-0 sm:w-36 sm:h-44 sm:right-8 sm:-top-2 md:w-44 md:h-56  md:-top-3 lg:w-52 lg:h-64 lg:right-4 lg:-top-4 xl:w-64 xl:h-72 xl:right-14 xl:-top-4" v-lazy="{src: `${require('../../public/img/Eberhard.jpg')}`}"></aside>
      </div>
    </div>

    <div class='card relative  w-48 h-48 mb-2 w-44  sm:w-56 sm:h-60 sm:mb-5 md:w-64 md:h-[18rem] md:mb-6 lg:w-72 lg:h-[24rem] lg:mb-8 xl:w-80 xl:h-[28rem] xl:mb-12 bg-fourth' data-aos="slide-left" data-aos-delay="300" >
      <div class='card-container absolute w-64 h-36 top-6 -left-2 sm:w-80 sm:h-40 sm:top-10 sm:-left-4 md:w-[22.5rem] md:h-56 md:top-8 md:-left-6 lg:w-[26.5rem] lg:h-64 lg:top-10 lg:-left-8   xl:w-[34.5rem] xl:h-80 xl:top-16 xl:-left-10' >
        <main class='card-body  w-32 h-20 mt-8 -ml-6   sm:w-44 sm:h-28 sm:mt-6 sm:-ml-8 md:w-52 md:h-36 md:mt-8 md:-ml-10 lg:w-60 lg:h-44 lg:mt-8 lg:-ml-10 xl:w-72 xl:h-60 xl:-ml-12 xl:mt-0 bg-[rgb(255,255,255)] absolute flex flex-col justify-center text-center font-'>
          <h2 class="text-xs text-tertiary uppercase sm:mb-1 sm:my-2 md:mb-2 lg:mb-3 xl:mb-4">Founder</h2>
          <h1 class="relative inline-block py-0.5 mb-4 text-xs sm:text-base md:text-xl xl:text-2xl font-semibold uppercase">Eberhard Müller</h1>
        </main>
        <aside>
          <img class="absolute w-32 h-36 right-7 -top-0 sm:w-36 sm:h-44 sm:right-8 sm:-top-2 md:w-44 md:h-56  md:-top-3 lg:w-52 lg:h-64 lg:right-4 lg:-top-4 xl:w-64 xl:h-72 xl:right-14 xl:-top-4" v-lazy="{src: `${require('../../public/img/Fabian.jpg')}`}"></aside>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Cards"
}
</script>

<style scoped lang="scss">

$card-container-bg-start:#F0ECE3 ;
$card-container-bg-end:#C7B198  ;
$card-color: rgb(103,123,133);

@import url(https://fonts.googleapis.com/css?family=Yanone+Kaffeesatz:400,700);

.card {

  box-shadow: 0 0 3rem rgba(0,0,0,.25);
}

.card-container {
  background: linear-gradient(to right bottom, $card-container-bg-start, $card-container-bg-end);
  box-shadow: 1rem 1rem 3rem rgba(0,0,0,.25);
}

.card-body {
  font-family: Times, serif;
  color: $card-color;
  box-shadow:
      .5rem .5rem 2rem rgba(0,0,0,.25),
      2rem 2rem 3rem rgba(0,0,0,.25);

&:after,
&:before {
   content: '';
   position: absolute;
   height: 1px;
   left: 1.5rem;
   right: 1.5rem;
   background-color: rgba($card-color, .1);
 }

&:after {
   top: 1rem;
 }

&:before {
   bottom: 1rem;
 }

  h1 {

  font-family: "Yanone Kaffeesatz", sans-serif;
  letter-spacing: .5rem;
  text-indent: .5rem;
  box-shadow:
      0 -1px 0 0 rgba($card-color, .25),
      0 1px 0 0 rgba($card-color, .25);

&:after,
&:before {
   content: '';
   position: absolute;
   height: 1px;
   left: 1.5rem;
   right: 1.5rem;
   background-color: rgba($card-color, .25);
 }

&:after {
   top: -.3rem;
 }

&:before {
   bottom: -.3rem;
 }
}

}
</style>
