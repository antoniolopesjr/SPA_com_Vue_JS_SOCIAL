import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/Home'
import Login from '@/pages/Login/Login'
import Cadastro from '@/pages/Cadastro/Cadastro'
import Perfil from '@/pages/Perfil/Perfil'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/cadastro',
      name: 'Cadastro',
      component: Cadastro
    },
    {
      path: '/perfil',
      name: 'Perfil',
      component: Perfil
    }
  ]
})
