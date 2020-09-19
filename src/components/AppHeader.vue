<template>
	<nav class="app-header">
		<router-link :to="{ name: 'home' }">Home</router-link> |
		<router-link :to="{ name: 'download' }">Download</router-link> |
		<router-link :to="{ name: 'upload' }">Upload</router-link>
	</nav>
</template>

<script>
export default {
	name: "AppHeader"
};
</script>

<style lang="scss" scoped>
.app-header {
	flex: 0 0 auto;
	padding: 30px;
	a:not(.router-link-exact-active) {
		color: #2c3e50;
	}
}
</style>
