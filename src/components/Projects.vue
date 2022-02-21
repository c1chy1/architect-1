<template>

  <div class="w-full flex flex-col rotate-0 -translate-x-0 lg:-translate-x-full lg:-rotate-90 lg: lg:grid lg:grid-rows-1  p-2 bg-primary horizontal-scroll-wrapper squares lg:absolute top-15 left-5">
    <div class="box my-8 relative w-full h-80 bg-cover bg-repeat-round bg-origin-border overflow-hidden rounded-lg text-primary"
         v-for="project in projects"
         :key="project.name"
         :style="{'background-image': project.backgroundDiv}">
      <router-link :to="{path:project.routerTo}">
        <div class="overlay transition-all hover:bg-black h-full text-left text-primary font-muli py-16 pl-6 opacity-0 hover:opacity-100">
          <h1 class="uppercase text-8xl">{{ project.name }}</h1>
          <p class="pl-2">{{ project.address }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>


const projects = [
  {
    name: 'KLEINHOUSE',
    address: 'Augustastraße | Herne 1.PREIS',
    backgroundDiv: `url(${require('../../public/img/slider/01_home.jpg')})`,
    routerTo: '/projektNr1'
  },
  {
    name: 'N`ICE LOFT',
    address: 'Bochum | 2.PREIS',
    backgroundDiv: `url(${require('../../public/img/slider/02_home.jpg')})`,
    routerTo: '/projektNr2'

  },

  {
    name: 'LOFT.FM',
    address: 'Hilden',
    backgroundDiv: `url(${require('../../public/img/slider/03_home.jpg')})`,
    routerTo: '/projektNr3'
  },

  {
    name: 'N`ICE RIVER',
    address: 'Essen | 2.RANG',
    backgroundDiv: `url(${require('../../public/img/slider/04_home.jpg')})`,
    routerTo: '/projektNr4'
  },
  {
    name: 'TALLER',
    address: 'Herne | 2.RANG',
    backgroundDiv: `url(${require('../../public/img/slider/05_home.jpg')})`,
    routerTo: '/projektNr5'
  },


  {
    name: 'RÜTTENSCHEID',
    address: 'Essen | Gutachten',
    backgroundDiv: `url(${require('../../public/img/slider/06_home.jpg')})`,
    routerTo: '/projektNr6'
  },


  {
    name: 'NEUES WOHNEN',
    address: 'Augustastraße | Herne 1.PREIS',
    backgroundDiv: `url(${require('../../public/img/slider/08_home.jpg')})`,
    routerTo: '/projektNr7'
  },
  {
    name: 'NEUES WOHNEN',
    address: 'Augustastraße | Herne 1.PREIS',
    backgroundDiv: `url(${require('../../public/img/slider/07_home.jpg')})`,
    routerTo: ''
  },

  {
    name: 'NEUES WOHNEN',
    address: 'Augustastraße | Herne 1.PREIS',
    backgroundDiv: `url(${require('../../public/img/slider/09_home.jpg')})`,
    routerTo: ''
  },


  {
    name: 'NEUES WOHNEN',
    address: 'Augustastraße | Herne 1.PREIS',
    backgroundDiv: `url(${require('../../public/img/slider/10_home.jpg')})`,
    routerTo: ''
  },


  {
    name: 'NEUES WOHNEN',
    address: 'Augustastraße | Herne 1.PREIS',
    backgroundDiv: `url(${require('../../public/img/slider/11_home.jpg')})`,
    routerTo: ''
  },


  {
    name: 'NEUES WOHNEN',
    address: 'Augustastraße | Herne 1.PREIS',
    backgroundDiv: `url(${require('../../public/img/slider/12_home.jpg')})`,
    routerTo: ''
  },


  {
    name: 'NEUES WOHNEN',
    address: 'Augustastraße | Herne 1.PREIS',
    backgroundDiv: `url(${require('../../public/img/slider/13_home.jpg')})`,
    routerTo: ''
  },


  {
    name: 'NEUES WOHNEN',
    address: 'Augustastraße | Herne 1.PREIS',
    backgroundDiv: `url(${require('../../public/img/slider/14_home.jpg')})`,
    routerTo: ''
  },


  {
    name: 'NEUES WOHNEN',
    address: 'Augustastraße | Herne 1.PREIS',
    backgroundDiv: `url(${require('../../public/img/slider/15_home.jpg')})`,
    routerTo: ''
  },


  {
    name: 'NEUES WOHNEN',
    address: 'Augustastraße | Herne 1.PREIS',
    backgroundDiv: `url(${require('../../public/img/slider/16_home.jpg')})`,
    routerTo: ''
  },


  {
    name: 'NEUES WOHNEN',
    address: 'Augustastraße | Herne 1.PREIS',
    backgroundDiv: `url(${require('../../public/img/slider/17_home.jpg')})`,
    routerTo: ''
  },


  {
    name: 'NEUES WOHNEN',
    address: 'Augustastraße | Herne 1.PREIS',
    backgroundDiv: `url(${require('../../public/img/slider/18_home.jpg')})`,
    routerTo: ''
  },


  {
    name: 'NEUES WOHNEN',
    address: 'Augustastraße | Herne 1.PREIS',
    backgroundDiv: `url(${require('../../public/img/slider/19_home.jpg')})`,
    routerTo: ''
  },


  {
    name: 'NEUES WOHNEN',
    address: 'Augustastraße | Herne 1.PREIS',
    backgroundDiv: `url(${require('../../public/img/slider/20_home.jpg')})`,
    routerTo: ''
  },
]

export default {
  name: "Projects",

  setup() {
    return {
      projects,
    }
  },

  beforeMount() {

    window.scrollTo(0, 0)
  },

}
</script>

<style scoped lang="scss">

$finalHeight: 85vh;
$finalWidth: 3 * $finalHeight;
$scrollBarHeight: 1px;

::-webkit-scrollbar {
  width: $scrollBarHeight;
  height: $scrollBarHeight;
}

::-webkit-scrollbar-button {
  width: $scrollBarHeight;
  height: $scrollBarHeight;
}



.horizontal-scroll-wrapper {
  width: calc(#{$finalHeight} + #{$scrollBarHeight});
  max-height: $finalWidth;
  margin: 0;
  padding-top: $scrollBarHeight;
  overflow-y: auto;
  overflow-x: hidden;

  transform-origin: right top;
& > div {
    display: block;
    transform: rotate(90deg);
    transform-origin: right top;
  }
}

.squares {
  padding: $finalHeight 0 0 0;
& > div {
    width: $finalHeight;
    height: $finalHeight;
  }
}

.box {
  box-shadow: inset 1px 1px 40px 0 rgba(0, 0, 0, 0.45);
  border-bottom: 2px solid #fff;
  border-right: 2px solid #fff;
}
.overlay {
  background: rgba(0, 0, 0, 0.75);
  -webkit-transition: opacity 0.25s ease;
  -moz-transition: opacity 0.25s ease;
}


</style>
