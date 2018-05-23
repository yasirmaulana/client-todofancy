<template>
  <div class="container">
    <Navbar></Navbar>
    <Jumbotron></Jumbotron>
    <Login></Login>
    <br/>Or<br/>
    <div class="row">
      <facebookLogin class="button"
        appId="376922789471623"
        @login="getUserData"
        @logout="onLogout"
        @get-initial-status="getUserData">
      </facebookLogin>
    </div>
    <!-- <button class="btn btn-primary navbar-btn" @click="login()">Login via Facebook</button><br> -->
    <i style="color:blue">if login by facebook, please input your phone number in your profile</i>
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
import swal from 'sweetalert'

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
      // console.log('get user......')
      FB.getLoginStatus(function(response) {
        FB.api('/me', {fields: ['last_name', 'email']}, function(response2) {
          // console.log(response, response2);
          var token = response.authResponse.accessToken
          var email = response2.email
          var name = response2.last_name
          console.log(token, email)
        });  
      })


      
      // let cek = this.cekUser()
      let url = 'https://todoserver-yasirjs-com.herokuapp.com/users/signupfb'

      // if (!cek) {
        let newUser = {
          email: email,
          // password: this.password,
          // hp: this.hp
        }
        axios
          .post(url, newUser)
          .then(response => {
            swal('Sign Up', 'you sign up via FB successfully', 'success')
            this.$router.push('/')
          })
          .catch(error => {
            console.error(error)
            swal({
              icon: 'error',
              title: 'Oops...',
              text: `${error}`
            })
          })
      // }
      this.$router.push('todo')
      localStorage.setItem('token', token)
    },
    cekUser: function () {

    },

    onLogout: function () {
      // console.log('login coy')
      FB.logout(function(response) {
        console.log('>>>>>>>>>', response)
      }).then().catch(error => {console.log(error)})
    },
  }
}
</script>
