import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import store from './store'
import '@fortawesome/fontawesome-free-webfonts/css/fontawesome.css'
import '@fortawesome/fontawesome-free-webfonts/css/fa-brands.css'
import '@fortawesome/fontawesome-free-webfonts/css/fa-regular.css'
import '@fortawesome/fontawesome-free-webfonts/css/fa-solid.css'

Vue.config.productionTip = false

const vm = new Vue({
  store,
  render: h => h(App)
}).$mount('#app')

window.vm = vm