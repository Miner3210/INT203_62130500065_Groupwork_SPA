<template>
  <div class="home  mx-10">
    <div class="grid grid-cols-8 grid-rows-5 font-custom">
      <div class="col-start-3 col-end-7">
       <h1 class=" font-medium md:text-center text-5xl mt-20 p-2 border-b-4 border-black">Admin Setting Room</h1>
      </div>
      <div class="col-start-4 col-end-6 row-start-4 self-center ">
        <p class=" p-6 text-center">Click to Admin menu</p>
        <router-link to="/main" class="md:p-6 md:px-28 bg-black text-white text-2xl shadow-xl hover:bg-white hover:text-black rounded-full">Menu</router-link>
      </div>
       </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
}
</script>
