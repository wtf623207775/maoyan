import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: "/films",
    component: () => import("@/views/Films"),
    children: [
      {
        path: "nowplaying",
        component: () => import("@/views/films/Nowplaying")
      },
      {
        path: "/films/comingsoon",
        component: () => import("@/views/films/Comingsoon")
      }
    ]
  },
  {
    path:"/cinema",
    component:()=>import("@/views/Cinema")
  },
  {
    path:"/center",
    component:()=>import("@/views/Center")
  },
  {
    path:"/login",
    component:()=>import("@/views/Login")
  },
  {
    path:"/",
    redirect:"/films"//重定向
  },
  {
    path:"*",
    redirect:"/films"
  }
]

const router = new VueRouter({
  routes
})

export default router
