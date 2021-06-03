<template>
	<div id="app">
		<header>
			<nav-bar color="indigo darken-1" logo="Social" url="/">
				<li><router-link to="/">Home</router-link></li>
				<li><router-link to="/login">Entrar</router-link></li>
			</nav-bar>
		</header>
		<main>
			<div class="container">
				<div class="row">
					<grid-vue tamanho="8">
						<card-menu-vue>
							<slot name="menuesquerdo"></slot>
						</card-menu-vue>
					</grid-vue>
					<grid-vue tamanho="4">
						<slot name="principal"></slot>
					</grid-vue>
				</div>
			</div>
		</main>
		<footer-vue
			color="indigo darken-4"
			logo="Social"
			descricao="Teste de descrição"
			ano="2021"
		>
			<li>
				<a class="grey-text text-lighten-3" href="#/">Home</a>
			</li>
			<li>
				<a class="grey-text text-lighten-3" href="#/login">Entrar</a>
			</li>
		</footer-vue>
	</div>
</template>

<script>
	import NavBar from "@/components/layouts/NavBar";
	import FooterVue from "@/components/layouts/FooterVue";
	import GridVue from "@/components/layouts/GridVue";
	import CardMenuVue from "@/components/layouts/CardMenuVue";

	export default {
		name: "loginTemplate",
		components: {
			NavBar,
			FooterVue,
			GridVue,
			CardMenuVue,
		},
	};
</script>

<style>
</style>
