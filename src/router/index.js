import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ReadExcel from "@/components/ReadExcel";

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'ReadExcel',
		component: ReadExcel
	},
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: function () {
			return import(/* webpackChunkName: "about" */ '../views/About.vue')
		}
	}
]

const router = new VueRouter({
	linkExactActiveClass: 'bg-gray-700',
	routes
})

export default router
