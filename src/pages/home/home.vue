<template>
	<site-template>
		<span slot="menuesquerdo">
			<div class="row valign-wrapper">
				<grid-vue tamanho="4">
					<img
						src="https://materializecss.com/images/yuna.jpg"
						alt=""
						class="circle responsive-img"
					/>
					<!-- notice the "circle" class -->
				</grid-vue>
				<grid-vue tamanho="8">
					<span class="black-text">
						<h5>Maria Silva</h5>
						Add the "circle" class to it to make it appear circular.
					</span>
				</grid-vue>
			</div>
		</span>

		<span slot="principal">
			<publicar-conteudo-vue />

			<card-conteudo-vue
				perfil="https://materializecss.com/images/yuna.jpg"
				nome="Maria Silva"
				data="12/05/2021 12:30"
			>
				<card-detalhe-vue
					img="https://materializecss.com/images/sample-1.jpg"
					titulo="Card Title"
					txt="I am a very simple card. I am good at containing small bits of
				information. I am convenient because I require little markup to
				use effectively."
				/>
			</card-conteudo-vue>
		</span>
	</site-template>
</template>

<script>
	import SiteTemplate from "@/templates/SiteTemplate.vue";
	import CardConteudoVue from "@/components/social/CardConteudoVue.vue";
	import CardDetalheVue from "@/components/social/CardDetalheVue.vue";
	import PublicarConteudoVue from "../../components/social/PublicarConteudoVue.vue";
    import GridVue from "@/components/layouts/GridVue";

	export default {
		components: {
			CardConteudoVue,
			CardDetalheVue,
			PublicarConteudoVue,
			SiteTemplate,
            GridVue
		},
		name: "Home",
		data() {
			return {};
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
