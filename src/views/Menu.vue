<template>
    <div class="font-custom">
    <Navibar></Navibar>
        <ListC/>

    </div>
</template>


<script>

export default {
  name: 'Menu',
  data() {
    return {
      url: ' http://localhost:5000/UserAccount',
      errorMessage: null,
      UserAcc: [],
    }
  },
  methods:{
     async fetchUserAcc() {
     try {
        const res = await fetch(this.url);
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(`Could not get! ${error}`);
      }
    },

  },
    async created() {
    this.UserAcc = await this.fetchUserAcc()
  }
    }

</script>