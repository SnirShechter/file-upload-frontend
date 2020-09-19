import io from "socket.io-client";

export default {
	install(Vue, { url }) {
		const ws = io(url);

		Vue.prototype.$ws = ws;

		// On download event, notify the user
		ws.on("download", () => {
			Vue.prototype.$notify({
				group: "notifications",
				title: "Hurray!",
				text: "<br>Someone downloaded your file",
				type: "success"
			});
		});
	}
};
