import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/components/Views/HomePage.vue";
import MainLayout from "@/components/Layouts/MainLayout.vue";
import Home from "@/components/Views/Home.vue";
import About from "@/components/Views/About.vue";
import Manifest from "@/components/Views/Manifest.vue";
import Contact from "@/components/Views/Contact.vue";
import Gameplay from "@/components/Views/Gameplay.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/home",
    component: MainLayout,
    children: [
      {
        path: "",
        name: "Home",
        component: Home,
      },
      {
        path: "about",
        name: "About",
        component: About,
      },
      {
        path: "manifest",
        name: "Manifest",
        component: Manifest,
      },
      {
        path: "contact",
        name: "Contact",
        component: Contact,
      },
      {
        path: "gameplay",
        name: "Gameplay",
        component: Gameplay,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
