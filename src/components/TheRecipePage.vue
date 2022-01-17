<template>
	<div>
		<h5 class="card-title">{{ recipe.title }} {{ recipe.id }}</h5>
		<h6 class="card-subtitle mb-2 text-muted">
			<span>počet porcií: {{ recipe.servings }} </span>
			<span>čas prípravy: {{ recipe.readyInMinutes }} min</span>
		</h6>
		<div class="recipe-image my-3">
			<img :src="recipe.image" alt="recipe-img" />
		</div>
		<p class="card-text" v-html="recipe.summary"></p>
		<a href="#" class="card-link"> {{ recipe.sourceName }}</a>
		<span class="date d-block">10/01/2022</span>
	</div>
</template>

<script>
import axios from 'axios'
export default {
	data() {
		return {
			recipe: [],
			id: this.$route.params.recId,
		}
	},
	mounted() {
		axios
			.get(
				`https://api.spoonacular.com/recipes/${this.id}/information?apiKey=cca5c58ff1fb4eb4a5bce450f87619e8`
			)
			.then((response) => (this.recipe = response.data))
	},
}
</script>
