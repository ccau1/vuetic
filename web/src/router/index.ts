import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

export const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/todos",
    name: "Todos",
    component: () => import("@/views/Todos.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login.vue")
  },
  {
    path: "/posts",
    name: "Posts",
    component: () => import("@/views/Posts.vue")
  },
  // {
  //   path: "/posts/:id",
  //   name: "PostDetail",
  //   component: () => import("@/views/PostDetail.vue")
  // }
  {
    path: "/posts/slugs/:slug",
    // name: "PostDetail",
    component: () => import("@/views/PostDetail.vue")
  },
  {
    path: "/posts/create",
    name: "Write Post",
    component: () => import("@/views/CreatePost.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
