<template>
<div class="nav"></div>
  <router-view/>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      url: ' http://localhost:5000/UserAccount',
      errorMessage: null,
      UserAcc: [
      ]
    }
  },
  methods: {
    async fetchSurveyResult() {
      const res = await fetch(this.url)
      const data = await res.json()
      // parses JSON response into native JavaScript objects
      return data
    }
  },
  async created() {
    this.UserAcc = await this.fetchSurveyResult()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
