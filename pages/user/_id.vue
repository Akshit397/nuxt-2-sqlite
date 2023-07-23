<template>
  <div>
    <div>USER</div>
    <nuxt-link :to="'/'">HOME</nuxt-link>
    <client-only>
      <!-- <component :is="getTemplate"></component> -->
      <div v-html="template"></div>
    </client-only>
  </div>
</template>

<script>
import pushToWindow from '@/utils/pushToWindow'
import MyTutorial from '@/components/MyTutorial'
export default {
  name: 'UserPage',
  mounted() {
    pushToWindow()
    console.log('ON MOUNT',this.$hello())
  },
  methods: {
    onClick() {
      console.log('CLICKED');
    }
  },
  data() {
    return {
      template: '<MyTutorial />',
      mdCont: '# Hello World!'
    }
  },
  computed: {
    getTemplate() {
      return {
        template: this.template,
        components: {
          MyTutorial
        }
      }
    }
  },
  destroyed() {
    console.log('DESTROYED');
  }
}
</script>
