<template>
	<div id="app">
		<header>
			<nav-bar color="indigo darken-1" logo="Social" url="/">
				<li v-if="!usuario"><router-link to="/login">Entrar</router-link></li>
				<li v-if="!usuario"><router-link to="/cadastro">Cadastre-se</router-link></li>
				<li v-if="usuario"><router-link to="/perfil">{{usuario.name}}</router-link></li>
				<li v-if="usuario"><a v-on:click="sair()">Sair</a></li>
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
				<router-link class="grey-text text-lighten-3" to="/">Home</router-link>
			</li>
			<li>
				<router-link class="grey-text text-lighten-3" to="/login">Entrar</router-link>
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
		data() {
			return {
				usuario: false
			}
		},
		components: {
			NavBar,
			FooterVue,
			GridVue,
			CardMenuVue,
		},
		created() {
			let usuarioAux = sessionStorage.getItem('usuario');
			if(usuarioAux) {
				this.usuario = JSON.parse(usuarioAux);
				this.$router.push('/');
			}
		},
		methods: {
			sair() {
				sessionStorage.clear();
				this.usuario = false;
				//location.reload();
			}
		},
	};
</script>

<style>
</style>
