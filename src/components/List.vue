<template>
        <div class="grid grid-cols-8 font-custom gap-x-10 mx-10 auto-rows-auto mt-8">
           
            <slot></slot>
            <div class="col-start-3 col-end-7 row-start-3  flex items-stretch">

            <p class="font-medium md:text-center text-xl self-center justify-center" style="width:100%">User List</p>
            </div>
            <div class="col-start-3 col-end-7 row-start-4 row-end-7 p-6 border-2 border-black">
                <table style="width:100%" >
                    <tr>
                    <th>User</th>
                    <th v-if="CheckEdit">Password</th>
                    <th>Privilege</th> 
                    <th>Status</th>
                    </tr>
                <tr v-for="item in UserAcc" :key="item.id">
                 <td>{{ item.UserName }} </td>  
                 <td v-if="CheckEdit">{{ item.Password }}</td>
                 <td>{{ item.Privilege }} </td>  
                 <td>{{ item.Status }} </td>
                 <base-button v-if="CheckEdit" @btn-click="editUserAccount(item.id,item.UserName,item.Password,item.Privilege,item.Status)" bgcolor="bg-black" txtcolor="text-white" msg="edit"
                 class="px-2 hover:bg-white hover:text-black hover:border-black hover:shadow-md border-white border-2 "/>
                 <base-button v-if="CheckEdit" @btn-click="deleteUserAccount(item.id)" bgcolor="bg-black" txtcolor="text-white" msg="Delete"
                 class="px-2 hover:bg-white hover:text-black hover:border-black hover:shadow-md border-white border-2 ml-1"/>
               </tr>
                </table>
            </div>
        </div>
</template>


<script>
export default {

  name: 'List',
  emits: ['user-change'],
  props: {
    newUserAcc: {
      type: Array,
      required: false,
      default: null
    },
    getCheckEdit: {
      type: Boolean,
      required: false,
      default: false
    }
    },
  data() {
    return {
      isEdit: false,
      OldUserName: '',
      OldPassword: '',
      OldPrivilege: '',
      OldStatus: '',
      OldId:null,
      url: ' http://localhost:5000/UserAccount',
      errorMessage: null,
      UserAcc: this.newUserAcc,
      CheckEdit: this.getCheckEdit,
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
    editUserAccount(editId, editUserName, editPassword, editPrivilege,editStatus) {
      this.isEdit = true
      this.oldId = editId
      this.oldUserName = editUserName
      this.oldPassword = editPassword
      this.oldPrivilege = editPrivilege
      this.oldStatus = editStatus
      const data = {
      isEdit : true,
      oldId:this.oldId,
      oldUserName:this.oldUserName,
      oldPassword: this.oldPassword,
      oldPrivilege: this.oldPrivilege,
      oldStatus:  this.oldStatus
      }
      this.$emit('user-change',data)
    },
        async deleteUserAccount(id) {
      if (confirm(`Are you sure to delete ?`)) {
        const res = await fetch(`${this.url}/${id}`, {
          method: 'DELETE'
        })
        res.status === 200
          ? (this.UserAcc = this.UserAcc.filter(
              (UserAcc) => UserAcc.id !== id
            ))
          : alert('Error to delete UserAccount')
      }
    }
  },
    async created() {
    this.UserAcc = await this.fetchUserAcc()
  }
    }

</script>