<template>
  <div class="container">
    <Navbar></Navbar>
    <Jumbotron></Jumbotron>
    <Login></Login>
    <br/>Or login by Facebook
    <br/>
    <div class="row">
      <facebookLogin class="button"
        appId="376922789471623"
        @login="getUserData"
        @logout="onLogout"
        @get-initial-status="getUserData">
      </facebookLogin>
    </div>
    <br>
    <i style="color:red">jika login/signup menggunakan facebook maka tidak akan menerima sms reminder</i>
    <br/>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import Login from '@/components/Login.vue'
import Jumbotron from '@/components/Jumbotron.vue'
import facebookLogin from 'facebook-login-vuejs'
import axios from 'axios'

export default {
  components: {
    Navbar,
    Jumbotron,
    Footer,
    Login,
    facebookLogin
  },
  methods: {
    getUserData: function () {
      console.log('get user......')
      FB.getLoginStatus(function(response) {
        FB.api('/me', {fields: ['last_name', 'email']}, function(response2) {
          console.log(response, response2);

          let token = response.authResponse.accessToken
          let email = response2.email
          // let name = response2.last_name

          console.log(token, email)
        });  
      })
    },
    onLogout: function () {

    },
    getUserData: function () {

    }
  }
}
</script>
