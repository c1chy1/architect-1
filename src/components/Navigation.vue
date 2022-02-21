<template>
  <Menu as="nav" class="bg-white shadow navbar w-full z-20 " :class="{ 'navbar--hidden': !showNavbar }" v-slot="{ open }">
    <div class=" mx-auto mb-4    px-3">
      <div class=" w-full flex justify-between h-12 lg:h-24">
        <div class="w-1/2 flex items-center font-grotesque lg:text-3xl">

          <router-link  :to="homelink">
           ACME STUDIOS
          </router-link>

        </div>
        <div class="hidden w-1/2 justify-between  px-2 md:flex  text-left  font-semibold font-raleway uppercase">
          <div v-for="item in items" :key="item.title" class="nav-mobile  text-gray-500  hover:text-tertiary inline-flex items-center  pt-1 text-xs font-medium">
            <router-link v-if="home" :to="item.url" v-smooth-scroll>
              {{ item.title }}
            </router-link>
            <router-link v-else :to="item.url">
              {{ item.title }}
            </router-link>
          </div>
        </div>
        <div class="-mr-2 flex items-center md:hidden  text-left uppercase font-raleway font-semibold ">
          <!-- Mobile menu button -->
          <MenuButton class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary">
            <span class="sr-only">Open main menu</span>
            <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </MenuButton>
        </div>
      </div>
    </div>
    <transition
        name="expand"
        @enter="enter"
        @after-enter="afterEnter"
        @leave="leave"
    >
      <MenuItems class="md:hidden outline-none focus:outline-none transition-all">
        <div class="pt-2 pb-4 space-y-2 outline-none focus:outline-none ">
          <menu-item v-for="item in items" :key="item.title">
            <router-link v-if="home" :to="item.url" v-smooth-scroll class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-emerald-500 hover:text-gray-700 focus:border-emerald-400 block pl-3 pr-4 py-4 border-l-4 text-base font-medium">
              {{ item.title }}
            </router-link>
            <router-link v-else :to="item.url" v-smooth-scroll class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-emerald-500 hover:text-gray-700 focus:border-emerald-400 block pl-3 pr-4 py-4 border-l-4 text-base font-medium">
              {{ item.title }}
            </router-link>
          </menu-item>
          <div class="flex justify-center text-base font-medium group py-2">
                        <span class="pr-2 text-gray-500 group-hover:text-gray-700 transition duration-300">
                          <PhoneIcon class="block h-6 w-6" aria-hidden="true" />
                        </span>
            <span class="text-gray-500 group-hover:text-gray-700 transition duration-300">
                          <a href="tel:4921490984162">+49 (0) 214 - 90 98 41 62</a>
                        </span>
          </div>
          <div class="flex justify-center text-base font-medium group py-2">
                        <span class="pr-2 text-gray-500 group-hover:text-gray-700">
                          <MailIcon class="block h-6 w-6" aria-hidden="true"/>
                        </span>
            <span class="text-gray-500 group-hover:text-gray-700">
                          <a href="mailto:info@deltaconsulting.de">info@acmestudios.de</a>
                        </span>
          </div>
        </div>
      </MenuItems>
    </transition>
  </Menu>



</template>

<script>
import { ref } from 'vue'
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { MenuIcon, XIcon, PhoneIcon, MailIcon} from '@heroicons/vue/outline'



export default {
  name: "Navbar",
  props:{
    home: Boolean,
  },
  components: {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
    MenuIcon,
    XIcon,
    PhoneIcon,
    MailIcon,
  },
  setup() {
    const open = ref(false)
    return {
      open,
    }
  },
  data () {
    return {

      homelink: '/',
      items: [
        {
          url: '/',
          title: 'Home'
        },
        {
          url: '/uber-uns',
          title: 'About'
        },
        {
          url: '/projekte',
          title: 'Projekte'
        },
        {
          url: '/kontakt',
          title: 'Kontakt'
        },
        {
          url: '/impressum',
          title: 'Impressum'
        },
        {
          url: '/datenschutz',
          title: 'Datenschutz'
        },
      ]
    }
  },
  methods: {
    onScroll () {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
      if (currentScrollPosition < 0) {
        return
      }
      // Stop executing this function if the difference between
      // current scroll position and last scroll position is less than some offset
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
        return
      }
      this.showNavbar = currentScrollPosition < this.lastScrollPosition
      this.lastScrollPosition = currentScrollPosition
    },
    enter(element) {
      const width = getComputedStyle(element).width;
      element.style.width = width;
      element.style.position = 'absolute';
      element.style.visibility = 'hidden';
      element.style.height = 'auto';
      const height = getComputedStyle(element).height;
      element.style.width = null;
      element.style.position = null;
      element.style.visibility = null;
      element.style.height = 0;
      getComputedStyle(element).height;
      requestAnimationFrame(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = 'auto';
    },
    leave(element) {
      const height = getComputedStyle(element).height;
      element.style.height = height;
      getComputedStyle(element).height;
      requestAnimationFrame(() => {
        element.style.height = 0;
      });
    },
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeUnmount () {
    window.removeEventListener('scroll', this.onScroll)
  },
}
</script>
