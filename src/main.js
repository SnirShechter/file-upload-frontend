import Vue from "vue";
import Notifications from "vue-notification";
import velocity from "velocity-animate";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./styles/index.scss";
import webSockets from "./plugins/websockets";

Vue.config.productionTip = false;
Vue.use(webSockets, { url: process.env.VUE_APP_API_PATH });
Vue.use(Notifications, { velocity });

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount("#app");
