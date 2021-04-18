<template>
      <div class="home  mx-10 ">
    <div class="grid grid-cols-8 font-custom gap-x-10 pt-2 eiei">
        <router-link to="/" class="col-start-1  text-2xl  cool-link">back</router-link>
        <router-link to="/AddUser" class="col-start-2  text-2xl cool-link">Add</router-link>
        <router-link to="/Menu" class="col-start-3 col-end-7 font-medium text-4xl">Admin Setting Menu</router-link>
        <router-link to="/Change" class="col-start-7  text-2xl cool-link">Change</router-link>
        <router-link to="/About" class="col-start-8  text-2xl cool-link">About</router-link>
       </div>
  </div>
</template>


<style>
router-link {
    margin-bottom: 10px;
}

.cool-link {
    color: #000;
    
}

.cool-link::after {
    content: '';
    display: block;
    width: 100%;
    height: 1.5px;
    background: #000;
    transition: width .3s;
    box-shadow:2px 2px 4px black
}

.cool-link:hover::after {
    width: 10%;
    transition: width .3s;
}

</style>
<script>
export default {
  name: 'Nav'
}
</script>