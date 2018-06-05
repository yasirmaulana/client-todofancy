<template>
  <div id="app">
    <cToolbar/>
    <router-view/>
    <cFooter/>
  </div>
</template>

<script>
  import cToolbar from '@/components/com-toolbars.vue'
  import cFooter from '@/components/com-footer.vue'
  import { mapState } from 'vuex'

  export default {
    components: {
      cToolbar,
      cFooter
    },

    computed: {
      ...mapState([
      'statusLogin',
      'statusLogout'
      ]) 
    }
  }
</script>
