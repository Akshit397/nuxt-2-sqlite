<template>
  <div>
    <input type="text" @keyup.enter="addRecords($event.target.value)" placeholder="Add no. of records to be added">
    <ShareNetwork
      network="linkedin"
      url="https://www.npmjs.com/package/vue-social-sharing"
      title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
      description="This week, I’d like to introduce you to 'Vite', which means 'Fast'. It’s a brand new development setup created by Evan You."
      quote="The hot reload is so fast it\'s near instant. - Evan You"
      hashtags="vuejs,vite"
    >
      Share on Facebook
  </ShareNetwork>
  {{ data }}
  <button @click="fetchCount()">GET RESULT</button>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  mounted() {
    console.log('process.env.NODE_ENV', process.env.NODE_ENV);
    // this.fetchCount()
  },
  data() {
    return {
      count: 0,
      data: null,
      page: 0
    }
  },
  head: {
    meta: [
      { property: "og:title", content: 'Overriden Title' },
      { property: "og:description", content: 'Overriden Desc' },
      { property: "og:image", content: 'https://imgv3.fotor.com/images/cover-photo-image/a-beautiful-girl-with-gray-hair-and-lucxy-neckless-generated-by-Fotor-AI.jpg' },
      // { property: "twitter:title", content: 'Overriden Title' },
    ]
  },

  methods: {
    async fetchCount() {
      try {
        this.page = this.page+1
        const data = await this.$axios.$get(`/api/products?page=${this.page}`)
        this.data = data
        // if(!window.localStorage.getItem('productData')) {
        //   window.localStorage.setItem('productData', JSON.stringify(this.data))
        // }
        // this.count = count
        // this.data = window.localStorage.getItem('productData')
        console.log('window.localStorage.getItem', window.localStorage.getItem('productData'));
        
      } catch (error) {
        console.log('error: ', error);
        
      }
    },

    async addRecords(number) {
      number = +number + this.count
      for(let i = this.count; i <= number; i++) {
        await this.$axios.$post('/api/articles', {
          title: `Automated Article ${i}`,
          preview_lead: `Automated Article ${i}`,
          prestige_id: i.toString()
        })
      }
    }
  }
}
</script>
