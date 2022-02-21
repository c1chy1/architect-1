<template>
     <Form/>
    <ToTop/>
</template>

<script>

import Form from "../components/Form";
import ToTop from "../components/ToTop";


export default {
  name: "Contact",

  components: {ToTop,Form},


  beforeMount() {

    window.scrollTo(0, 0)

  },

}
</script>
