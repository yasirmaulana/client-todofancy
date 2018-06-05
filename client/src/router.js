import Vue from 'vue'
import Router from 'vue-router'
import cHome from './components/com-home.vue'
import cLogin from './components/com-login.vue'
import cTodo from './components/com-todo.vue'
import cSignup from './components/com-signup.vue'

// import Todo from './views/Todo.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: cHome
    },
    {
      path: '/login',
      name: 'login',
      component: cLogin
    },
    {
      path: '/signup',
      name: 'signup',
      component: cSignup
    },
    {
      path: '/todo',
      name: 'todo',
      component: cTodo
    }
  ]
})
