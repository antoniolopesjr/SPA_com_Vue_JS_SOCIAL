<template>
	<login-template>
		<span slot="menuesquerdo">
			<img
				src="https://www.designerd.com.br/wp-content/uploads/2013/06/criar-rede-social.png"
				alt=""
				class="responsive-img"
			/>
		</span>
		<span slot="principal">
			<h2>Login</h2>
			<input type="email" placeholder="E-mail" v-model="email" />
			<input type="password" placeholder="Senha" v-model="password" />
			<button type="button" class="btn" v-on:click="login()">
				Entrar
			</button>
			<router-link type="button" to="/cadastro" class="btn orange"
				>Cadastre-se</router-link
			>
		</span>
	</login-template>
</template>

<script>
	import LoginTemplate from "@/templates/LoginTemplate.vue";
	import axios from 'axios';

	export default {
		components: {
			LoginTemplate
		},
		name: "login",
		data() {
			return {
				email: "",
				password: ""
			};
		},
		methods: {
			login() {
				console.log("ola");
				axios
					.post(`http://127.0.0.1:8000/api/login`, {
						email: this.email,
						password: this.password
					})
					.then(response => {
						//console.log(response.data);
						if(response.data.token) {
							//sucesso
							console.log('sucesso')
							sessionStorage.setItem('usuario', JSON.stringify(response.data));
							this.$router.push('/');
						} else if(response.data.status == false) {
							//login nao existe
							console.log('login nao existe');
							alert('Login inválido!');
						} else {
							//erros
							console.log('erro de validação');
							let erros = '';
							for(let erro of Object.values(response.data)) {
								erros += erro +"";
							}
							alert(erros);
						}
					})
					.catch(e => {
						//this.errors.push(e);
						alert('Erro! Tente novamente mais tarde');
					});
			}
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
