import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import HomePage from "./components/HomePage.vue";
import MenuPage from "./components/MenuPage.vue";
import DetallePage from "./components/DetallePage.vue";
import PagoPage from "./components/PagoPage.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: "/", component: HomePage },
    { path: "/MenuPage", component: MenuPage },
    { path: "/DetallePage", component: DetallePage },
    { path: "/PagoPage", component: PagoPage },
  ],
});

new Vue({
  router,
  render: (e) => e(App),
}).$mount("#app");