/**
 * ******************************************************************************
 * global import
 * ************************************************************************
 * */

import Vue from 'vue'
import VueRouter from 'vue-router'
import VueHighlightJS from 'vue-highlightjs'
import RailwayUI from '../src/index.js'

/**
 * ******************************************************************************
 * components import
 * ************************************************************************
 * */

import DemoButton from './components/DemoButton.vue'
import DemoTest from './components/DemoTest.vue'

/**
 * ******************************************************************************
 * use
 * ************************************************************************
 * */

Vue.use(RailwayUI)
Vue.use(VueHighlightJS)
Vue.use(VueRouter)

/**
 * ******************************************************************************
 * routes
 * ************************************************************************
 * */

const router = new VueRouter({routes: [
  { path: '/components/button', component: DemoButton },
  { path: '/components/test', component: DemoTest },
  { path: '/', redirect: '/components/test' }
]})

/**
 * ******************************************************************************
 *
 * ************************************************************************
 * */

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router: router,
  template: '<router-view></router-view>'
}).$mount('#app')
