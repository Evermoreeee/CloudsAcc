import Vue from 'vue'
import App from './App.vue'
import CuiHello from '../dist/clouds-acc'
Vue.use(CuiHello)
new Vue({
  el: '#app',
  render: h => h(App)
})
