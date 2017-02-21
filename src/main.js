import Vue from 'vue'
import App from './App.vue'
import VueFire from 'vuefire'
import VueRouter from 'vue-router'
import Candidate from './Candidate.vue'

Vue.use(VueFire);
Vue.use(VueRouter);

const routes = [
  {path: '/', component: App},
  {path: '/candidate/:name', component: Candidate}
]

const router = new VueRouter({
  mode: 'history',
  routes
})


new Vue({
  el: '#app',
  router
})