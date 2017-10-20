// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import FastClick from 'fastclick'
import router from './router'
import store from './store'
import axios from 'axios'
import storage from 'good-storage'
import Vonic from 'vonic'
// import VueScroller from 'vue-scroller'

// Vue.use(VueScroller)

import 'common/stylus/index.styl'
FastClick.attach(document.body)
Vue.config.productionTip = false

// 路由设置
const beforeEach = (to, from, next) => {
  // if (!to.meta.allowBack && to.meta.allowBack !== undefined) {
  //   history.pushState(null, null, location.href)
  // }
  next()
}

Vonic.app.setConfig('beforeEach', beforeEach)

// 拦截器 如果已经登录 每次发送请求都会带上token
axios.interceptors.request.use(
  config => {
    if (store.getters.token) {
      config.headers.token = `${store.getters.token}`
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)
// 拦截器 判断用户是否登录
axios.interceptors.response.use(
  response => {
    if (response.data.code === 10005 || response.data.code === 10008) {
      storage.clear()
      location.reload()
    }
    return response
  },
  err => {
    return Promise.reject(err)
  }
)

/* eslint-disable no-new */
Vue.use(Vonic.app, {
  routes: router.options.routes,
  pageTransition: 'ios',
  store
})

// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app-box')
