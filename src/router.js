import { createRouter, createWebHistory } from "vue-router";
import HomePage from './pages/HomePage.vue';
import AboutUs from './pages/AboutUs.vue';
import NotFound from './pages/NotFound.vue';
import Projects from './pages/Projects.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [

        {
            path: "/",
            name: "home",
            component: HomePage,
        },
        {
            path: "/about-us",
            name: "about",
            component: AboutUs,
        },
        {
            path: "/progetti",
            name: "projects",
            component: Projects,
        },
        // da mettere alla fine 
        {
            path: "/:pathMatch(.*)*",
            name: "not-found",
            component: NotFound,
        }
    ]
});

export { router };