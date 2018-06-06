<template>
    <div class="container">
        <div class="row">
          <v-text-field v-model="plan" label="Write your plan here" required ></v-text-field>  
          <button v-on:click.prevent="writePlan" class="btn btn-success elevation-9">Set Plan</button>
        </div>
        <div class="row">
            <br>
            <table class="table table-hover">
            <thead>
            <tr>
                <th>To Do</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="(todo, index) in todos" v-bind:key="index">
                    <td v-if="todo.completed == true">
                        <strike>{{ todo.task }}</strike>
                    </td>
                    <td v-else>
                        {{ todo.task }}
                    </td>
                    <td>
                        <button v-on:click.prevent="updatePlan" :data-id="todo._id" class="btn btn-info elevation-9">Done</button>
                        <button v-on:click.prevent="deletePlan" :data-id="todo._id" class="btn btn-warning elevation-9">Delete</button>
                    </td>
                </tr>
            </tbody>
            </table>
        </div>

    </div>
</template>

<script>
import axios from 'axios'
import swal from 'sweetalert'

// const vhttp = 'http://localhost:3000/'
// const vhttp = 'https://todoserver-yasirjs-com.herokuapp.com/'
const vhttp = 'https://todoserver.yasirjs.com/'

export default {
  
  name: 'Todo',
  data () {
    return {
      headers: [
        {text:"Todo Item", value:"value"},
        {text:"Action"}
      ],
      // search:null,
      plan:null,
      todos:null,

    }
  },
  methods: {
    getTodo: function () {
      let url = `${vhttp}users/showtodo`

      axios
        .get(url, {
          headers: {
            token: localStorage.getItem('token')
          }
        })
        .then(response => {
          console.log(response.data.data)
          this.todos = response.data.data
        })
        .catch(error => {
          console.log(error)
        })
    },
    writePlan: function () {

      if(this.plan === null) {
        swal({
          icon: 'error',
          title: 'Oops',
          text: 'plan todo harus diisi...'
        })
      } else {
        let url = `${vhttp}users/inputtodo`
  
        let newTodo = {
          task: this.plan,
          deadline: this.deadline
        }
        axios
          .post(url, newTodo, {
            headers: {
              token: localStorage.getItem('token')
            }
          })
          .then(response => {
            // console.log(response)
            // swal('add Todo', 'you add Todo Successfully', 'success')
            this.todos.push(response.data.data)
  
          })
          .catch(error => {
            console.log(error)
            swal({
              icon: 'error',
              title: 'Hhhmmm',
              text: 'Something wrong...'
            })
          })
      }
    },
    updatePlan: function (event) {
      // console.log('update')
      let id = event.srcElement.dataset.id
      // console.log(id)
      let url = `${vhttp}users/update/${id}`

      let newStatus = {
        completed: true
      }
      axios
        .put(url, newStatus, {
          headers: {
            token: localStorage.getItem('token')
          }
        })
        .then(response => {
          let idCari = response.data.data._id
          let indexId = 0
          this.todos.forEach((todo, i) => {
            if (todo._id === idCari) {
              indexId = i
            }
          })
          console.log('ini index id', indexId)
          this.getTodo()
        })
        .catch(error => {
          console.log(error)
        })
    },
    deletePlan: function (event) {
      let id = event.srcElement.dataset.id
      let url = `${vhttp}users/delete/${id}`

      axios
        .delete(url, {
          headers: {
            token: localStorage.getItem('token')
          }
        })
        .then(response => {
          let idCari = response.data.data._id
          let indexId = 0
          this.todos.forEach((todo, i) => {
            if (todo._id === idCari) {
              indexId = i
            }
          })
          console.log('ini index id', indexId)
          this.todos.splice(indexId, 1)
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  mounted () {
    this.getTodo()
  }
}
</script>
 