<template>
    <div>
        <Navibar></Navibar>
        <ListC :newUserAcc="UserAcc">
          <InputUser @user-submit="addNewAccount"></InputUser>
        </ListC>
    </div>
</template>

<script>
export default {
  name:'AddUser',
  props: {
    oldId: {
      type: Number,
      required: false,
      default: null
    },
    oldName: {
      type: String,
      required: false,
      default: ''
    },
    oldRating: {
      type: String,
      required: false,
      default: null
    }
  },
  emits: ['user-submit'],
  data() {
    return {
      url:'http://localhost:5000/UserAccount',
      id: this.oldId,
      UserName: '',
      Password: '',
      Privilege: '',
      Status: '',
      invalidNameInput: false,
      invalidRatingInput: false,
      UserAcc: [],
    }
  },
  methods: {
    submitForm() {
      this.invalidNameInput = this.enteredName === '' ? true : false
      this.invalidRatingInput = this.rating === null ? true : false
      if (!this.invalidNameInput && !this.invalidRatingInput) {
        const newUserSubmitted = {
          UserName: this.UserName,
          Password: this.Password,
          Privilege: this.Privilege,
          Status: this.Status
        }
        this.UserName = ''
        this.Password = ''
        this.Privilege = ''
        this.Status =''
        this.$emit('user-submit', newUserSubmitted)
      }
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
  },
    async created() {
    this.UserAcc = await this.fetchUserAcc()
  }
}
</script>
