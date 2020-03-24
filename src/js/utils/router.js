import Vue from "vue"
import VueRouter from "vue-router"
import Aplications from "../components/pages/Aplications"
import Fonts from "../components/pages/Fonts"
import KnowMore from "../components/pages/KnowMore"

// Vue.config.productionTip = false
Vue.use(VueRouter)

export const routes = [
  {
    id: 0,
    path: "/",
    name: 'Aplicativos',
    component: Aplications,
  },
  {
    id: 1,
    path: "/fontes",
    name: 'Fontes',
    component: Fonts,
  },
  {
    id: 2,
    path: "/saiba-mais",
    name: 'SaibaMais',
    component: KnowMore,
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router