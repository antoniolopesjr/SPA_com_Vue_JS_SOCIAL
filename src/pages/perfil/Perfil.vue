<template>
	<site-template>
		<span slot="menuesquerdo">
			<img
				src="https://www.designerd.com.br/wp-content/uploads/2013/06/criar-rede-social.png"
				alt=""
				class="responsive-img"
			/>
		</span>
		<span slot="principal">
			<h2>Perfil</h2>
			<input type="text" placeholder="Nome" v-model="name" />
			<input type="email" placeholder="E-mail" v-model="email" />
			<div class="file-field input-field">
				<div class="btn">
					<span>File</span>
					<input type="file" />
				</div>
				<div class="file-path-wrapper">
					<input class="file-path validate" type="text" />
				</div>
			</div>
			<input type="password" placeholder="Senha" v-model="password" />
			<input
				type="password"
				placeholder="Confirme sua senha"
				v-model="password_confirmation"
			/>
			<button type="button" v-on:click="perfil()" class="btn">
				Atualizar
			</button>
		</span>
	</site-template>
</template>

<script>
	import SiteTemplate from "@/templates/SiteTemplate.vue";
	import axios from "axios";

	export default {
		components: {
			SiteTemplate
		},
		name: "Perfil",
		data() {
			return {
				usuario: false,
				name: "",
				email: "",
				password: "",
				password_confirmation: ""
			};
		},
		created() {
			let usuarioAux = sessionStorage.getItem("usuario");
			if (usuarioAux) {
				this.usuario = JSON.parse(usuarioAux);
				this.name = this.usuario.name;
				this.email = this.usuario.email;
			}
		},
		methods: {
			perfil() {
				axios
					.put(
						`http://127.0.0.1:8000/api/perfil`,
						{
							name: this.name,
							email: this.email,
							password: this.password,
							password_confirmation: this.password_confirmation
						},
						{
							headers: {
								// "Access-Control-Allow-Origin": "*",
								// 'Access-Control-Allow-Credentials': true,
								// "Access-Control-Allow-Headers": "Content-Type",
								// "Access-Control-Allow-Methods": "POST, GET, PUT, OPTIONS, DELETE",
								// "Access-Control-Max-Age": "3600",
								// "Access-Control-Allow-Headers": "x-requested-with, content-type",
								"Authorization":"Bearer "+this.usuario.token,
								//"Content-Type": "application/x-www-form-urlencoded"
							}
						}
					)
					.then(response => {
						//console.log(response.data);
						if (response.data.token) {
							//sucesso
							console.log(response.data);
							// sessionStorage.setItem('usuario', JSON.stringify(response.data));
							// this.$router.push('/');
						}
					})
					.catch(e => {
						//this.errors.push(e);
						alert("Erro! Tente novamente mais tarde");
					});
			}
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
