<template>
        <div class="grid grid-cols-8 grid-rows-6 font-custom gap-x-10 mx-10">
           
            <slot></slot>
            <div class="col-start-3 col-end-7 row-start-3 flex items-stretch">

            <p class="font-medium md:text-center text-xl self-center justify-center" style="width:100%">User List</p>
            </div>
            <div class="col-start-3 col-end-7 row-start-4 row-end-6 p-6 border-2 border-black">
                <table style="width:100%" >
                    <tr>
                    <th>User</th>
                    <th>Privilege</th> 
                    <th>Status</th>
                    </tr>
                <tr v-for="item in UserAcc" :key="item.id">
                 <td>{{ item.UserName }} </td>  
                 <td>{{ item.Privilege }} </td>  
                 <td v-if="item.Status">{{ item.Status }} </td>  
               </tr>
                </table>
            </div>
        </div>
</template>


<script>
export default {
  name: 'List',
  props: {
    newUserAcc: {
      type: Array,
      required: false,
      default: null
    }},
  data() {
    return {
      url: ' http://localhost:5000/UserAccount',
      errorMessage: null,
      UserAcc: this.newUserAcc,
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