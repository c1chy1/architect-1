<template>
  <Slider/>
  <Office/>
  <Founders/>
  <News/>
  <ToTop/>
</template>

<script>

import Slider from "../components/Slider"
import Office from "../components/Office";
import Founders from "../components/Founders";
import News from "../components/News";
import ToTop from "../components/ToTop";

export default {
  name: 'Home',
  components: {
    Founders,
    Slider,
    Office,
    News,
    ToTop
  },

  beforeMount() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  },


};

</script>
