import { createApp } from 'vue'
import App from './App.vue'
import { routes } from './routes.js'
import { createRouter, createWebHistory } from 'vue-router'
import {createPinia} from "pinia"

import "normalize.css"

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const pinia = createPinia();

app.use(router)
app.use(pinia);
app.mount('#app')
