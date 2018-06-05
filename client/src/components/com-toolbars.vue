<template>
  <v-toolbar color="indigo lighten-1 white--text text-xs-center">
    <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
    <v-toolbar-title>
      <router-link to="/">
        <img src="https://storage.googleapis.com/happygram/todo-manager-icon.png" alt="logo" style="height:30px">
      </router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <div>
      <v-toolbar-items>
      <!-- <v-toolbar-items class="hidden-sm-and-down"> -->
        <!-- <v-btn flat>about</v-btn> -->
        <router-link to="/">
          <v-btn color="red" class="warning elevation-9" @click="logout" v-if="statusLogout">
            sign out
          </v-btn>
        </router-link>
        <router-link to="/signup" v-if="statusLogin">
          <v-btn flat style="color:white">
            sign up
          </v-btn>
        </router-link>
        <router-link to="/login">
          <v-btn color="green" class="success elevation-9" v-if="statusLogin">
            sign in
          </v-btn>
        </router-link>
      </v-toolbar-items>
    <!-- {{statusLogout}} -->
    </div>
    
  </v-toolbar>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    computed: {
      ...mapState([
        'statusLogin',
        'statusLogout'

      ])
    },

    methods: {
      logout: function() {
        localStorage.removeItem('token')
        // this.stLogin = false
        this.$store.dispatch('changeStLogout')
        this.$router.push('/login')
      }
    },

  }
</script>
