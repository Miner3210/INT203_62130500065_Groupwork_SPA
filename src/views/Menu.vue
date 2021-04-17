<template>
    <div class="font-custom">
    <Navibar></Navibar>
        <div class="grid grid-cols-8 grid-rows-6 font-custom gap-x-10 pt-2 mx-10">
            <div class="col-start-3 col-end-7 row-start-2">
            <p class="font-medium md:text-center text-xl">User List</p>
            </div>
            <div class="col-start-3 col-end-7 row-start-3 row-end-6 p-6 border-2 border-black mt-4">
                <table style="width:100%" >
                    <tr>
                    <th>User</th>
                    <th>Privilege</th> 
                    <th>Status</th>
                    </tr>
                <tr v-for="item in UserAcc" :key="item.id">
                 <td>{{ item.name }} </td>  
                 <td>{{ item.privilege }} </td>  
                 <td>{{ item.status }} </td>  
               </tr>
                </table>

            </div>
        </div>
    </div>   
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      url: ' http://localhost:5000/UserAccount',
      errorMessage: null,
      UserAcc: {},
    }
  },
  methods:{
     async fetchUserAcc() {
     try {
           console.log("kuyrai 0")
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