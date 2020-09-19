<template>
	<div class="home page">
		<div>
			<h1>Welcome to Snir's file upload</h1>
			<h5>
				You should start by
				<router-link :to="{ name: 'upload' }">uploading</router-link> a file.
			</h5>
		</div>
	</div>
</template>

<script>
export default {
	name: "home"
};
</script>

<style lang="scss" scoped>
.home {
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
