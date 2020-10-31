import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Multiselect from 'vue-multiselect'

Vue.config.productionTip = false

Vue.component('multiselect', Multiselect)

new Vue({
	router,
	store,
	render: function (h) {
		return h(App)
	}
}).$mount('#app')
