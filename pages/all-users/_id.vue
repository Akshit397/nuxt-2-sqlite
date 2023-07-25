<template>
  <div>
    <p v-for="user of userList">
      {{ user.name }}
    </p>
    <button @click="getUsers()">
      CLICK ME
    </button>
    <button @click="getUsersFromLocalStorage()">
      GET USERS from LOCAL
    </button>
  </div>
</template>

<script>
export default {
  name: 'AllUsers',
  data() {
    return {
      userList: []
    }
  },
  methods: {
    async getUsers() {
      const { users } = await this.$http.$get(`${window.location.origin}/api/users`)
      this.userList = users
      console.log('users: ', users);
    },

    getUsersFromLocalStorage() {
      this.userList = localStorage.getItem('users')
      console.log('this.userList: ', this.userList);
    }
  }
}
</script>