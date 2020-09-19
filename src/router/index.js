import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Upload from "../views/Upload.vue";
import Download from "../views/Download.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "home",
		component: Home
	},
	{
		path: "/upload",
		name: "upload",
		component: Upload
	},
	{
		path: "/download",
		name: "download",
		component: Download
	}
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes
});

export default router;
