import Greeter from "../components/pages/greeter.vue";
import Me from "../components/pages/me.vue";
import BlogIndex from "../components/pages/blogIndex.vue";
import Blog from "../components/pages/blog.vue"
import Skill from "../components/pages/skill.vue";
import { createWebHistory, createRouter } from "vue-router";

const routes = [
  { path: "/", component: Greeter },
  { path: "/blog", component: BlogIndex },
  { path: "/skill", component: Skill },
  { path: "/me", component: Me },
  { path: "/blog/:title", component: Blog },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
