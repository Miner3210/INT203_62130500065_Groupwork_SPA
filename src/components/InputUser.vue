<template>
             
          <form v-on:submit="submitForm" class="col-start-3 col-end-7 row-start-2 inline-flex justify-center">
           <div class="col-start-3 col-end-4 row-start-2 justify-center flex-1 ">
               <label for="UserName px-5">UserName</label>
               <input type="text" id="Password" name="UserName" class="w-28 border-2 border-black" placeholder="Insert User" v-model="UserName">
           </div>
           <div class="col-start-4 col-end-5 row-start-2 justify-center flex-1">
                <label for="Password" class="justify-center px-5">Password</label>
                <input type="text" id="Password" name="Password" class="w-28 border-2 border-black" placeholder="Insert Password" v-model="Password">     
           </div>
           <div class="col-start-5 col-end-6 row-start-2 justify-center flex-1">
                <label for="Privilege" class="justify-center px-5" >Privilege </label>
                <select id="Privilege" name="Privilege" class="w-28 border-2 border-black" v-model="Privilege">
                  <option value="Student">Student</option>
                  <option value="Teacher">Teacher</option>
                  <option value="Staff">Staff</option>
                </select>
           </div>
           <div class="col-start-6 col-end-7 row-start-2 justify-center flex-1">
                <label for="Status" class="justify-center px-5">Status</label>
                <select id="Status" name="Status" class="w-28 border-2 border-black" v-model="Status">
                  <option value="Online">Online</option>
                  <option value="Offline">Offline</option>
                  <option value="Lock">Lock</option>
                </select>
           </div>
           <input type="submit" value="Submit" class="px-2 border-2 bg-black text-white w-24 h-24">
          </form>
          
</template>

<script>
export default {
  name:'InputUser',
  props: {
    OldUserName: {
      type: String,
      required: false,
      default: ''
    },
     OldPassword: {
      type: String,
      required: false,
      default: ''
    },
     OldPrivilege: {
      type: String,
      required: false,
      default: ''
    },
    OldStatus:{
      type: String,
      required: false,
      default: '' 
    },

    OldId:{
      type: Number,
      required: false,
      default: null 
    }
    
  },
  emits: ['user-submit'],
  data() {
    return {
      id: this.OldId,
      UserName: this.OldUserName,
      Password: this.OldPassword,
      Privilege: this.OldPrivilege,
      Status: this.OldStatus,
      invalidUserName: false,
      invalidPassword: false,
      invalidPrivilege: false,
      invalidStatus:false
    }
  },
  methods: {
    submitForm() {
      this.invalidUserName = this.UserName === '' ? true : false
      this.invalidPassword = this.Password === '' ? true : false
      this.invalidPrivilege = this.invalidPrivilege === '' ? true : false
      this.invalidStatus = this.invalidStatus === '' ? true : false
      console.log(this.UserName)
      console.log(this.Password)
      console.log(this.Privilege)
      console.log(this.Status)
      if(this.invalidUserName || this.invalidPassword || this.invalidPrivilege || this.invalidStatus == true){
          alert("please Insert Data")
      }

      if (!this.invalidUserName && !this.invalidPassword) {
        const newUserSubmitted = {
          Id:this.id,
          UserName: this.UserName,
          Password: this.Password,
          Privilege: this.Privilege,
          Status: this.Status
        }
        console.log(this.id)
        this.UserName = ''
        this.Password = ''
        this.Privilege = ''
        this.Status =''
        this.$emit('user-submit', newUserSubmitted)
      }
    },

    validateName() {
      this.invalidNameInput = this.enteredName === '' ? true : false
      console.log(`name: ${this.invalidNameInput}`)
    }
  }
}
</script>
