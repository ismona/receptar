<template>
	<div class="card" style="width: 18rem" @click="showRecipe()">
		<div class="card-body">
			<h5 class="card-title">{{ recipeTitle }} {{ recipeId }}</h5>
			<h6 class="card-subtitle mb-2 text-muted d-flex">
				<span
					><span class="d-flex flex-column me-3">Porcie</span>
					{{ recipePortion }}</span
				>
				<span
					><span class="d-flex flex-column">Varenie</span>
					{{ cookingTime }} min</span
				>
			</h6>
			<p v-if="isVegan" class="badge rounded-pill bg-success me-2">
				Vegan
			</p>
			<p v-if="isVegetarian" class="badge rounded-pill bg-primary">
				Vegetarian
			</p>

			<div class="recipe-image my-3">
				<img :src="imgUrl" alt="recipe-img" />
			</div>
			<p class="card-text" v-html="recipeText"></p>
			<a href="#" class="card-link"> {{ recipeAuthor }}</a>
			<span class="date d-block">{{ recipeDate }}</span>
		</div>
	</div>
</template>

<script>
export default {
	props: [
		'recipeTitle',
		'recipePortion',
		'cookingTime',
		'recipeText',
		'recipeAuthor',
		'recipeDate',
		'imgUrl',
		'isVegan',
		'isVegetarian',
		'recipeId',
	],
	methods: {
		showRecipe() {
			this.$router.push({
				name: 'recipe',
				params: {
					recId: this.recipeId,
				},
			})
		},
	},
}
</script>

<style scoped>
.card-text {
	display: -webkit-box;
	-webkit-line-clamp: 5;
	-webkit-box-orient: vertical;
	overflow: hidden;
}
.card {
	border-radius: 5px 5px 5px 5px/25px 25px 25px 5px;
	border-width: 2px;
	width: 340px !important;
	cursor: pointer;
}

img {
	width: 400px;
}
.recipe-image {
	display: block;
	height: 180px;
	border-radius: 255px 25px 225px 25px/25px 225px 25px 255px;
	overflow: hidden;
	width: 100%;
}
</style>
