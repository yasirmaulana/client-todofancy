<template>
  <v-container>
    <div>
      <i>or signin using</i> 
      <img  src="../assets/fbIcon.png" 
            alt="fb" 
            class="elevation-24" 
            @click="loginFB"
            style="cursor: pointer"/>
      <img  src="../assets/gIcon.png" 
            alt="google" 
            class="elevation-24"
            @click="loginGoogle"
            style="cursor: pointer"/>
    </div>
  </v-container>
</template>

<script>
import swal from 'sweetalert'
import axios from 'axios'
import firebase from 'firebase';

// const vhttp = 'http://localhost:3000/'
// const vhttp = 'https://todoserver-yasirjs-com.herokuapp.com/'
const vhttp = 'https://todoserver.yasirjs.com/'

export default {
  name: 'Signup',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    loginFB () {
      let self = this

      const provider = new firebase.auth.FacebookAuthProvider()

      firebase.auth().signInWithPopup(provider).then(function(result) {
        const token = result.credential.accessToken;
        const user = result.user;
        // console.log(user.displayName)
        const email = user.email

        if(email === null) {
          swal({
            type: 'error',
            title: 'Oops...',
            text: 'ada kesalahan pada saat pendaftaran email menggunakan provider google !',
          })  
        } else {
          let objLogin = {
            email: user.email,
            loginMedsos: true
          }
  
          let url = `${vhttp}users/signin`
          axios
            .post(url, {
              email: objLogin.email,
              isMedsos: objLogin.loginMedsos
            })
            .then(response => {
              let token = response.data.token
              localStorage.setItem('token', token)
              swal(
                'Good job!',
                'log in Success!',
                'success'
              )
              self.$store.dispatch('changeStLogin')
              self.$router.push('todo')
            })
            .catch(error => {
              console.log(error)
            })
            
        }

      }).catch(function(error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = error.credential;
        // console.log('gagal login dengan facebook', error)
        swal({
          type: 'error',
          title: 'Oops...',
          text: 'log in Fail, please try again!',
        })
      });
    },

    loginGoogle () {this
      let self = this

      const provider = new firebase.auth.GoogleAuthProvider()

      firebase.auth().signInWithPopup(provider).then(function(result) {
        const token = result.credential.accessToken;
        const user = result.user;
        const email = user.email

        if(email === null) {
          swal({
            type: 'error',
            title: 'Oops...',
            text: 'ada kesalahan pada saat pendaftaran email menggunakan provider google !',
          })  
        } else {
          let objLogin = {
            email: user.email,
            loginMedsos: true
          }
  
          let url = `${vhttp}users/signin`
          axios
            .post(url, {
              email: objLogin.email,
              isMedsos: objLogin.loginMedsos
            })
            .then(response => {
              let token = response.data.token
              localStorage.setItem('token', token)
              swal(
                'Good job!',
                'log in Success!',
                'success'
              )
              self.$store.dispatch('changeStLogin')
              self.$router.push('todo')
            })
            .catch(error => {
              console.log(error)
            })
            
        }

      }).catch(function(error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = error.credential;
        // console.log('gagal login dengan gmail', error)
        swal({
          type: 'error',
          title: 'Oops...',
          text: 'log in Fail, please try again!',
          // footer: '<a href>Why do I have this issue?</a>',
        })
      });
    },
    
  }
}
</script>