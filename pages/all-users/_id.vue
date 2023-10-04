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
      userList: [],
      meta: []
    }
  },
  mounted() {
    setTimeout(() => {
      console.log('this.meta: ', this.meta)
      this.meta = [
        { property: "og:title", content: 'Particular Title' },
        { property: "og:description", content: 'Particular Desc' },
        { property: "og:image", hid: 'akshit', content: 'https://www.befunky.com/images/prismic/82e0e255-17f9-41e0-85f1-210163b0ea34_hero-blur-image-3.jpg?auto=avif,webp&format=jpg&width=896' },
        // { property: "twitter:title", content: 'Overriden Title' },
      ]
      console.log('meta after timeout', this.meta)
    }, 5000);
  },
  head() {
    return {
      meta: this.meta
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
    },
  }
}
</script>