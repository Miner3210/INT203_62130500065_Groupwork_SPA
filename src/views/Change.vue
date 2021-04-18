<template>
    <div>
        <Navibar></Navibar>
        <ListC @user-change="setOldData" :newUserAcc="UserAcc" :getCheckEdit="true" >
          <InputUser v-if="Edit" @user-submit="editSubmit"  :OldUserName="OldUserName" :OldPassword="OldPassword" :OldPrivilege="OldPrivilege" :OldStatus="OldStatus" :OldId="OldId"></InputUser>
          <InputUser v-else @user-submit="addNewAccount"></InputUser>
        </ListC>

    </div>
</template>

<script>
import InputUser from '../components/InputUser.vue'
export default {
  name:'Change',
  data() {
    InputUser
    return {
      url:'http://localhost:5000/UserAccount',
      id: null,
      OldUserName: '',
      OldPassword: '',
      OldPrivilege: '',
      OldStatus: '',
      OldId:null,
      Edit:false,
      invalidNameInput: false,
      invalidRatingInput: false,
      UserAcc: [],
    }
  },
  methods: {
    validateName() {
      this.invalidNameInput = this.enteredName === '' ? true : false
      console.log(`name: ${this.invalidNameInput}`)
    },
    async addNewAccount(newAccount) {
      const res = await fetch(this.url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          UserName: newAccount.UserName,
          Password: newAccount.Password,
          Privilege: newAccount.Privilege,
          Status: newAccount.Status
        })
      })
      const data = await res.json()
      this.UserAcc = [...this.UserAcc,data]
    },
    async fetchUserAcc() {
     try {
        const res = await fetch(this.url);
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(`Could not get! ${error}`);
      }
    },
    setOldData(olddata){
      this.Edit = olddata.isEdit
      this.OldId = olddata.oldId
      console.log(this.OldId)
      this.OldUserName = olddata.oldUserName
      this.OldPassword = olddata.oldPassword
      this.OldPrivilege = olddata.oldPrivilege
      this.OldStatus = olddata.oldStatus
    },
        async editSubmit(editingData) {
      const res = await fetch(`${this.url}/${editingData.Id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          UserName: editingData.UserName,
          Password: editingData.Password,
          Privilege: editingData.Privilege,
          Status: editingData.Status
        })
      })
      const data = await res.json()
      this.UserAcc = this.UserAcc.map((UserAcc) =>
        UserAcc.id === data.id
          ? {
              ...UserAcc,
          UserName: data.UserName,
          Password: data.Password,
          Privilege: data.Privilege,
          Status: data.Status
            }
          : UserAcc
      )
      this.Edit = false
    }
  
  },
    async created() {
    this.UserAcc = await this.fetchUserAcc()
  }
}
</script>
