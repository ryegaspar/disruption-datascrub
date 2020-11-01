import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TableConfiguration from "@/views/TableConfiguration";
import Run from '@/views/Run'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/table-configuration',
		name: 'TableConfiguration',
		component: TableConfiguration
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		// component: function () {
		// 	return import(/* webpackChunkName: "about" */ '../views/About.vue')
		// }
	},
	{
		path: '/run',
		name: 'Run',
		component: Run
	}
]

const router = new VueRouter({
	linkExactActiveClass: 'bg-gray-700',
	routes
})

export default router
