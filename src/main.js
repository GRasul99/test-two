// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import firebase from 'firebase'
import App from './App'
import router from './router'
import store from '@/store'
import AppDate from '@/components/AppDate'
import vuelidate from 'vuelidate'

Vue.use(vuelidate)
Vue.component('AppDate', AppDate)

Vue.config.productionTip = false

// Initialize Firebase
const config = {
  apiKey: "AIzaSyAXYRhhFnhKLGmrqzXfwSPAHqLZcBpr0i0",
  authDomain: "test-two-79c4e.firebaseapp.com",
  databaseURL: "https://test-two-79c4e.firebaseio.com",
  projectId: "test-two-79c4e",
  storageBucket: "",
  messagingSenderId: "717613718553"
}
firebase.initializeApp(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
