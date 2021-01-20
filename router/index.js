import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Audio from '../views/Audio.vue'
import Group from '../views/Group.vue'
import Broadcast from '../views/Broadcast.vue'
import Mine from '../views/Mine.vue'

import Movie from '@/views/audio/Movie'
import City from '@/views/audio/City'
import TV from '@/views/audio/TV'
import Music from '@/views/audio/Music'
import Read from '@/views/audio/Read'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/home',
    component:Home
  },
  {
    path: '/audio',
    component:Audio,
    children:[
      {
        path:'/movie',
        component:Movie
      },
      {
        path:'/tv',
        component:TV
      },
      {
        path:'/read',
        component:Read
      },
      {
        path:'/music',
        component:Music
      },
      {
        path:'/city',
        component:City
      },
    ]
  },
  {
    path: '/broadcast',
    component:Broadcast
  },
  {
    path: '/group',
    component:Group
  },
  {
    path: '/mine',
    component:Mine
  }
]

const router = new VueRouter({
  routes
})

export default router
