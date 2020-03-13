import Vue from "vue"
import VueRouter from "vue-router"
import Welcome from "../components/pages/Welcome.vue"

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  history: true,
  routes: [
    {
      path: "/",
      component: Welcome,
    },
  ]
})

export default router