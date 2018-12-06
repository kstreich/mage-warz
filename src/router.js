import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Auth from './views/Auth.vue'
import SpellBooks from './views/SpellBooks.vue'
import SpellBook from './views/SpellBook.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/auth',
      name: 'auth',
      component: Auth
    },
    {
      path: '/spellbooks',
      name: 'spellbooks',
      component: SpellBooks
    },
    {
      path: '/spellbook/:bookId',
      name: 'spellbook',
      component: SpellBook
    }
    // // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: function () { 
    //     return import(/* webpackChunkName: "about" */ './views/About.vue')
    //   }
    // }
  ]
})
