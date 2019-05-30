import Vue from 'vue'
import Router from 'vue-router'
import cinemaRouter from './Cinema/index'
import mineRouter from './Mine/index'
import miveRouter from './Mive/index'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    cinemaRouter,mineRouter,miveRouter
  ]
})
