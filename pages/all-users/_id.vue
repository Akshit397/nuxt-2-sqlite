<template>
  <div>
    <p v-for="user of userList">
      {{ user.name }}
    </p>
    <button @click="getUsers()">
      CLICK ME
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
      const { users } = await this.$http.$get('/api/users');
      this.userList = users
      console.log('users: ', users);
    }
  }
}
</script>