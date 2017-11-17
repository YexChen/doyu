// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible'
import './assets/css/font-awesome.css'
import './assets/css/style.css'
import Axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, Axios)

Vue.config.productionTip = false

Vue.filter('number', v => {
  if (v > 10000) {
    return (v / 10000).toFixed() + '万'
  }
  return v
})

Vue.filter('message', v => {
  if (v.length > 12) {
    return v.substr(0, 10) + '...'
  }
  return v
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
