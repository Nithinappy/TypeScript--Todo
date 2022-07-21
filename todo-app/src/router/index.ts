import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/Home/HomeView.vue";
import AddTaskView from "../views/AddTask/AddTaskView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/add_task",
    name: "AddTask",
    component: AddTaskView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
console.log("history", process.env.BASE_URL);
export default router;
