<template>
	<nav :class="color || 'indigo darken-1'">
		<div class="nav-wrapper container">
			<router-link :to="url || '/'" class="brand-logo">{{ logo || 'Site'}}</router-link>
			<ul id="nav-mobile" class="right hide-on-med-and-down">
				<slot></slot>
			</ul>
		</div>
	</nav>
</template>
<script>
	export default {
		name: "NavBar",
        props: ['logo', 'url', 'color']
	};
</script>
<style scoped></style>
