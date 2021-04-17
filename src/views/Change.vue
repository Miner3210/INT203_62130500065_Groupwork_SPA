<template>
    <div>

        <Navibar></Navibar>

        <ListC @user-change="setOldData" :newUserAcc="UserAcc" :getCheckEdit="true" >
          <InputUser v-if="Edit" @user-submit="editSubmit"  :OldUserName="OldUserName" :OldPassword="OldPassword" :OldPrivilege="OldPrivilege" :OldStatus="OldStatus" :OldId="OldId"></InputUser>
          <InputUser v-else @user-submit="addNewSurvey"></InputUser>
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
    // submitForm() {
    //   this.invalidNameInput = this.enteredName === '' ? true : false
    //   this.invalidRatingInput = this.rating === null ? true : false
    //   if (!this.invalidNameInput && !this.invalidRatingInput) {
    //     const newUserSubmitted = {
    //       UserName: this.UserName,
    //       Password: this.Password,
    //       Privilege: this.Privilege,
    //       Status: this.Status
    //     }
    //     this.UserName = ''
    //     this.Password = ''
    //     this.Privilege = ''
    //     this.Status =''
    //     this.$emit('user-submit', newUserSubmitted)
    //   }
    // },

    validateName() {
      this.invalidNameInput = this.enteredName === '' ? true : false
      console.log(`name: ${this.invalidNameInput}`)
    },
    async addNewSurvey(newAccount) {
      console.log(newAccount.UserName)
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
      //spread array
      this.UserAcc = [...this.UserAcc,data]
      //or add new item to the end of array
      // this.surveyResults.push(data)
    },
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
