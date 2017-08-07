// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Todo from './components/Todo'
import Util from './lib/util'

Vue.config.productionTip = false
Vue.filter('date', function(date) {
  return Util.string(date);
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<Todo/>',
  components: { Todo }
})

// Make it flat-earth
window.Vue = Vue;
