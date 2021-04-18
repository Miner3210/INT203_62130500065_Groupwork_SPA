<template>
  <Navibar></Navibar>
    <div class="grid grid-cols-8 font-custom gap-x-10 mx-10 auto-rows-auto mt-8">
           
            <slot></slot>
            <div class="col-start-3 col-end-7 row-start-3  flex items-stretch">

            <p class="font-medium md:text-center text-xl self-center justify-center" style="width:100%">Dev Information</p>
            </div>
            <div class="col-start-3 col-end-7 row-start-4 row-end-7 p-6 border-2 border-black">
              <div><img src="../assets/pic.jpg" class="w-60 h-auto md:mx-52">
              <span>
                <p>Name : Patsakorn Janthawong</p>
                <p>StudentId : 62130500065</p>
                <p>Note : Some code ref from Teacher Exmaple</p>
              </span>
              
              </div>
              
            </div>

            </div>

</template>
  
<script>

export default {
  name: 'About',
}
</script>