<template>
    <v-carousel >
      <v-carousel-item v-for="(item,i) in items" :src="item.src" :key="i"></v-carousel-item>
    </v-carousel>
</template>

<script>

  export default {
    data () {
      return {
        items: [
          {
            src: 'https://storage.googleapis.com/happygram/todo4.jpg'
          },
          {
            src: 'https://storage.googleapis.com/happygram/todo1.png'
          },
          {
            src: 'https://storage.googleapis.com/happygram/todo5.png'
          },
          {
            src: 'https://storage.googleapis.com/happygram/todo6.jpg'
          }
        ]
      }
    },
    components: {
    }
  }
</script>

<style scoped>
  #inspire {
    height: 100vh;
  }
</style>
