import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home.vue'
import classify from '../components/classify.vue'
import message from '../components/message.vue'
import myself from '../components/myself.vue'
import shopping from '../components/shopping.vue'

import login from '../components/login.vue'
import passwordlogin from "../components/passwordlogin.vue"
import messagelogin from "../components/messagelogin.vue"
import register from '../components/register.vue'

import inner from '../components/inner'
import inner2 from '../components/inner2'

import newProduct from '../components/newProduct'
import topSail from '../components/topSail'
import priceUp from '../components/priceUp'

import homechild from '../components/homechild'
import furniture from '../components/furniture'
import house from '../components/house'
import activity from '../components/activity'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path: '/home',
      component: home,
      children:[{path:'homechild',component:homechild},
                {path:'activity',component:activity},
                {path:'house',component:house},
                {path:'furniture',component:furniture},
                {path:'/',redirect:"/home/homechild"}]
    },
    {
      path: '/classify',
      component: classify,

    },
    {
      path: '/message',
      component: message

    },
    {
      path: '/myself',
      component: myself
    },

    {
      path: '/shopping',
      component: shopping,

    },

    {
       path:'/login',
       component:login
     },
     {
       path:'/messagelogin',
       component:messagelogin
     },
     {
        path:'/passwordlogin',
        component:passwordlogin
     },
     
   
    

    

    {
      path: '/register',
      component: register
    },

    // {
    //   path:"*",
    //   redirect:"/home", 
    // } 
    {
    
      path: "/inner",
      component: inner,
      children:[
          {
            path:"newProduct",
            component:newProduct
          },
          {
            path:"topSail",
            component:topSail
          },
          {
            path:"priceUp",
            component:priceUp
          },
          {
            path:"/",
            redirect:"/inner/newProduct"
          }
      ]
    },

    {
      path: "/inner2",
      component: inner2,
      children:[
          {
            path:"newProduct",
            component:newProduct
          },
          {
            path:"topSail",
            component:topSail
          },
          {
            path:"priceUp",
            component:priceUp
          },
          {
            path:"/",
            redirect:"/inner2/newProduct"
          }
      ]
    }

  ]
})
