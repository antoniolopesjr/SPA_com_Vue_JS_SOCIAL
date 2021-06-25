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
			<h2>Cadastro</h2>
			<input type="text" placeholder="Nome" v-model="name" />
			<input type="email" placeholder="E-mail" v-model="email" />
			<input type="password" placeholder="Senha" v-model="password" />
			<input type="password" placeholder="Confirme sua senha" v-model="password_confirmation" />
			<button type="button" v-on:click="cadastro()" class="btn">Enviar</button>
			<router-link type="button" to="/login" class="btn orange">Ja tenho conta</router-link>
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
		name: "Cadastro",
		data() {
			return {
				name: '',
				email: '',
				password: '',
				password_confirmation: ''
			};
		},
		methods: {
			cadastro() {
				console.log("ola");
				axios
					.post(`http://127.0.0.1:8000/api/cadastro`, {
						name: this.name,
						email: this.email,
						password: this.password,
						password_confirmation: this.password_confirmation
					})
					.then(response => {
						//console.log(response.data);
						if(response.data.token) {
							//sucesso
							console.log('cadastro realizado com sucesso')
							sessionStorage.setItem('usuario', JSON.stringify(response.data));
							this.$router.push('/');
						} else if(response.data.status == false) {
							//login nao existe
							console.log('login nao existe');
							alert('Erro no cadastro! Tente novamente mais tarde.');
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
		},
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
