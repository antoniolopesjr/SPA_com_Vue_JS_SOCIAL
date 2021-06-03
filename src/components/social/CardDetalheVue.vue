<template>
	<div>
		<span
			><div v-if="img" class="card-image">
				<img :src="img" />
				<span class="card-title">{{ titulo || "" }}</span>
			</div>
		</span>
		<span
			><div v-if="txt" class="card-content">
				<p>
					{{ txt }}
				</p>
			</div>
		</span>
	</div>
</template>
<script>
	export default {
		name: "CardDetalheVue",
		props: ["img", "titulo", "txt"],
		components: {
		},
	};
</script>
<style>
</style>