<template>
	<section class="download">
		<div>
			<h1>Enter your code to download the file</h1>
			<input type="text" v-model="id" placeholder="Code" />
			<div class="btn-container">
				<button @click="download(id)">submit</button>
			</div>
		</div>
	</section>
</template>

<script>
import { mapActions } from "vuex";
export default {
	name: "Download",
	data() {
		return {
			id: ""
		};
	},
	methods: {
		...mapActions({ download: "download" })
	}
};
</script>

<style lang="scss" scoped>
.download {
	display: flex;
	justify-content: center;
	align-items: center;
	.btn-container {
		margin-top: 30px;
	}
}
</style>
