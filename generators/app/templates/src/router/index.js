import VueRouter from 'vue-router'
import Vue from 'vue'
import guide from './guide'
import main from './main'


Vue.use(VueRouter)

const notFound = {
  path: '*',
  redirect: '/'
}
const defaultPage = {
  path: '/',
  redirect: {
    path: '/guide/home'
  }
}

const router = new VueRouter({
  routes: [
    ...guide,
    main,
    notFound,
    defaultPage
  ]
})

export const mainConfig = main
export default router