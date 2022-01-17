import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import 'bootstrap'
import './assets/custom.scss'

import TheRecipePage from './components/TheRecipePage.vue'
import TheHomePage from './components/TheHomePage.vue'

const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: '/recipe',
			component: TheRecipePage,
			name: 'recipe'
		},
		{
			path: '/',
			redirect: '/home'
		},
		{
			path: '/home',
			component: TheHomePage,
		},
	],
})

const app = createApp(App)
app.use(router)
app.mount('#app')

