<template>
<div class="flex flex-col lg:flex-row mt-20 text-center lg:text-left">

  <div class="lg:w-1/2">
    <h2 class="text-5xl lg:text-7xl xl:text-8xl py-4 lg:py-0 tracking-widest">SUBMIT YOUR APPLICATION</h2>
  </div>
  <div class="lg:w-1/2 py-6 lg:py-0">
<form class="flex flex-col items-center">
    <input

  placeholder="YOUR SURNAME*"
        class = "focus:border-sky-500 h-16 w-2/3 pl-4 mb-5 bg-[#f4f4f4] border-b focus:outline-none  text-2xl font-light">
  <input placeholder="YOUR PHONE NUMBER*"
      class = "focus:border-sky-500 h-16 w-2/3  pl-4 mb-2 bg-[#f4f4f4] border-b focus:outline-none  text-2xl font-light">
  <span class="text-xs py-2 flex items-center">  <input type="checkbox" class="mr-2"
      >I agree with&nbsp;<a href="/privacy-policy" class="text-fourth"> privacy policy</a></span>
  <button class="text-2xl h-20 w-2/3 mt-8  bg-fourth text-primary border uppercase hover:bg-primary hover:text-fourth  transition-all " type="submit">
    Send</button>

</form>
  </div>

</div>


</template>

<script>
export default {
  name: "SubmitForm",


}
</script>

<style scoped>


</style>
