<template>
	<login-template>
		<span slot="menuesquerdo">
			<img src="https://www.designerd.com.br/wp-content/uploads/2013/06/criar-rede-social.png" alt="" class=responsive-img>
		</span>
		<span slot="principal">
			<h2>Login</h2>
			<input type="email" name="" id="" />
			<input type="password" name="" id="" />
			<button type="button" class="btn">Entrar</button>
		</span>
	</login-template>
</template>

<script>
	import LoginTemplate from "@/templates/LoginTemplate.vue";
	import CardConteudoVue from "@/components/social/CardConteudoVue.vue";
	import CardDetalheVue from "@/components/social/CardDetalheVue.vue";
	import PublicarConteudoVue from "../../components/social/PublicarConteudoVue.vue";

	export default {
		components: {
			CardConteudoVue,
			CardDetalheVue,
			PublicarConteudoVue,
			LoginTemplate
		},
		name: "login",
		data() {
			return {};
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
