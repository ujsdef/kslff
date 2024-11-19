import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router'; // Import createRouter and createWebHistory from 'vue-router'
import AboutPage from './components/AboutPage.vue';
import ProssingOne from './components/ProssingOne.vue';
import BlogOne from './components/BlogOne.vue';
import Home from './components/HomePage.vue';
import ProssingTwo from './components/ProssingTwo.vue';
import BlogTwo from './components/BlogTwo.vue';
import ProssingThree from './components/ProssingThree.vue';
import BlogThree from './components/BlogThree.vue';
import ProssingFour from './components/ProssingFour.vue';
import BlogFour from './components/BlogFour.vue';
import ServicePage from './components/ServicePage.vue';
import BlogFive from './components/BlogFive.vue';
// import ShowData from './components/ShowData.vue';
// import HelloWorld from './components/HelloWorld.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/prossingone', component: ProssingOne },
    { path: '/about', component: AboutPage },
    { path: '/blogone', component: BlogOne },
    { path: '/prossingtwo', component: ProssingTwo },
    { path: '/Service', component: ServicePage },
    { path: '/blogtwo', component: BlogTwo },
    { path: '/prossingthree', component: ProssingThree },
    { path: '/blogthree', component: BlogThree },
    { path: '/prossingfour', component: ProssingFour },
    { path: '/blogfour', component: BlogFour },
    { path: '/blogfive', component: BlogFive },
    // { path: '/hellolist', component: HelloWorld },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

createApp(App).use(router).mount('#app');
