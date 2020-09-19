<template>
	<div id="app">
		<AppHeader></AppHeader>
		<div class="page">
			<transition name="fade" mode="out-in">
				<router-view :key="$route.name" />
			</transition>
		</div>
		<notifications
			group="notifications"
			position="bottom left"
			animation-type="velocity"
			:speed="500"
		/>
	</div>
</template>

<script>
import AppHeader from "./components/AppHeader";
export default {
	name: "App",
	components: { AppHeader }
};
</script>
<style lang="scss">
#app {
	display: flex;
	flex-direction: column;
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	.page {
		flex: 1 1 auto;
		display: flex;
		& > * {
			flex: 1 1 auto;
		}
	}
}
</style>
