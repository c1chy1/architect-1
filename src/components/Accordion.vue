<template>

  <ul class="">
    <li v-for="item in items" :key="item.title"
        class="border border-t-0 border-[gray] border-opacity-20 border-l-0 border-r-0">
      <input class="mt-4 " type="checkbox" checked  >
      <svg  class="absolute mr-2 mt-4 lg:mt-7 lg:w-8 lg:h-8 right-0 "  width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.60671 0.5V17.5M0 9H17" stroke="#636363" stroke-width="2"/>
      </svg>
      <h2 class=" text-sm  lg:text-3xl  py-2  lg:py-6 block uppercase leading-8 tracking-wide font-light cursor-pointer">{{item.title}}</h2>
      <p class="text-sm lg:text-base text-fourth overflow-hidden max-h-80 opacity-100 relative leading-5 tracking-wide translate-x-0 translate-y-0">{{item.text}}</p>
    </li>
  </ul>
</template>

<script>

const items = [

  {
    title: 'concept',
    text: 'N’ice Loft is also a full-fledged sports cluster. It will become a point of attraction and focus of the sports life in the metropolis. Sports and creative architecture will play together on the same field to revive world-class sports schools and children’s teams led by competent coaches, and lay the foundation for new achievements and exciting victories.',

  },

  {
    title: 'sport city',
    text: 'The center of attraction is an ice palace with two all-season training rinks and changing rooms with high-quality equipment, a sauna and relaxation areas. It can also boast gyms and fitness facilities, a hall for general physical and specialized hockey training, halls for group classes, a universal hall for tennis, volleyball and basketball, as well as squash rackets halls.',
  },


  {
    title: 'architecture',
    text: 'We built this project from the ground up, taking the very best loft solutions, from high ceilings and large windows to open layouts. Original and versatile architecture offers corner glazing, clinker bricks and aluminum panels, combinations of various materials, colors and textures. The play of light and shadows creates a dynamic 3D effect, which makes the facades look almost like canvases.',
  },


  {
    title: 'Location',
    text: 'N\'ice Loft is strategically positioned for exciting game dynamics. The border of Central Administrative District is just behind the apartment building. There are several parks surrounding N\'ice Loft. Among them, Tagansky Park is one of the oldest park areas in Moscow. A walk in another direction will lead you to Lefortovo Park, next to Rogozhskaya Sloboda.',
  },
]

export default {
  name: "Accordion",

  setup() {
    return {
      items,
      isOpen: false
    }
  },



}
</script>

<style scoped>
.transition, p, ul li svg {
  transition: all 0.25s ease-in-out; }

.flipIn, h1, ul li {
  animation: flipdown 0.5s ease both; }


ul {
  list-style: none;
  padding: 0;
  margin: 0; }
ul li:nth-of-type(1) {
  animation-delay: 0.5s; }
ul li:nth-of-type(2) {
  animation-delay: 0.75s; }
ul li:nth-of-type(3) {
  animation-delay: 1.0s; }
ul li:last-of-type {
  padding-bottom: 0; }


ul li input[type=checkbox] {
  position: absolute;
  cursor: pointer;
  width: 100%;
  height: 100%;
  z-index: 10;
  opacity: 0;

}
ul li input[type=checkbox]:checked ~ p {
  margin-top: 0;
  max-height: 0;
  opacity: 0;
  transform: translate(0, 50%); }
ul li input[type=checkbox]:checked ~ svg {

  transform: rotate(90deg);
 }
@keyframes flipdown {
  0% {
    opacity: 0;
    transform-origin: top center;
    transform: rotateX(-90deg); }
  5% {
    opacity: 1; }
  80% {
    transform: rotateX(8deg); }
  83% {
    transform: rotateX(6deg); }
  92% {
    transform: rotateX(-3deg); }
  100% {
    transform-origin: top center;
    transform: rotateX(0deg); } }

</style>
