import Vue from "vue"
import VueRouter from "vue-router"
import Aplications from "../components/pages/Aplications.vue"
import Fonts from "../components/pages/Fonts.vue"

// Vue.config.productionTip = false
Vue.use(VueRouter)

export const routes = [
  {
    path: "/",
    name: 'Aplicativos',
    component: Aplications,
  },
  {
    path: "/fontes",
    name: 'Fontes',
    component: Fonts,
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router