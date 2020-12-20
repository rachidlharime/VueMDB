import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueRouter from 'vue-router'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

import Home from './pages/Home'
import Movie from './pages/Movie'

const router = new VueRouter({
  routes: [
    {path: '/', component: Home},
    {path: '/:id', component: Movie}
  ],
  mode: 'history'
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
