import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import AddContactForm from './components/addContactForm.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/addcontact',
      name: 'addContact',
      component: AddContactForm
    }
  ]
})
