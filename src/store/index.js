import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
Vue.use(Vuex);

const axios = Axios.create({
	baseURL: process.env.VUE_APP_API_PATH
});

export default new Vuex.Store({
	state: {},
	mutations: {},
	actions: {
		async upload(context, { formData, socketId }) {
			let {
				data: { id }
			} = await axios.post(`files?socketId=${socketId}`, formData, {
				headers: {
					"Content-Type": "multipart/form-data"
				}
			});

			return id;
		},
		async download(context, id) {
			window.location = process.env.VUE_APP_API_PATH + `files/${id}`;
		}
	},
	modules: {}
});
