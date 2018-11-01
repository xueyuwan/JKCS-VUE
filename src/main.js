// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import axios from 'axios'
import qs from 'qs'
import 'lib-flexible' //移动端适配
import 'mint-ui/lib/style.css'
import '@/assets/css/style.css'
Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.$qs = qs


var instance = axios.create({
    headers: {'content-type': 'application/x-www-form-urlencoded'}
});


Vue.use(MintUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
