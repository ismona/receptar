<template>
	<div class="container-fluid mt-3">
		<div class="row">
			<div class="col-lg-7">
				<div class="alert alert-success fw-bold">
					Receptár je ešte lepší ak sa prihlásiš!
				</div>
				<div class="main">
					<h2>Verejné recepty</h2>
					<div class="dropdowns">
						<div class="row">
							<div class="col-xl-3">
								<label>Chod</label>
								<div class="dropdown">
									<button
										class="btn btn-secondary dropdown-toggle"
										type="button"
										id="dropdownMenuButton1"
										data-bs-toggle="dropdown"
										aria-expanded="false"
									>
										Všetko
									</button>
									<ul
										class="dropdown-menu"
										aria-labelledby="dropdownMenuButton1"
									>
										<li>
											<a class="dropdown-item" href="#"
												>Všetko</a
											>
										</li>
										<li>
											<a class="dropdown-item" href="#"
												><span>🍱</span> Hlavné jedlo</a
											>
										</li>
										<li>
											<a class="dropdown-item" href="#"
												><span>🥣</span> Polievka</a
											>
										</li>
										<li>
											<a class="dropdown-item" href="#"
												><span>🍮</span> Dezert</a
											>
										</li>
										<li>
											<a class="dropdown-item" href="#"
												><span>🥖</span> Príloha</a
											>
										</li>
										<li>
											<a class="dropdown-item" href="#"
												><span>🍹</span> Nápoj</a
											>
										</li>
									</ul>
								</div>
							</div>
							<div class="col-xl-3">
								<label>Diéta</label>
								<div class="dropdown">
									<button
										class="btn btn-secondary dropdown-toggle"
										type="button"
										id="dropdownMenuButton2"
										data-bs-toggle="dropdown"
										aria-expanded="false"
									>
										{{ dietValue.imgIcon }}
										{{ dietValue.text }}
									</button>
									<ul
										class="dropdown-menu"
										aria-labelledby="dropdownMenuButton2"
									>
										<li
											v-for="diet in diets"
											:key="diet.id"
										>
											<a
												class="dropdown-item"
												@click="
													getDietRecipes();
													dietValue = diet
												"
												href="#"
												><span>{{ diet.imgIcon }}</span>
												{{ diet.text }}</a
											>
										</li>
									</ul>
								</div>
							</div>
							<div class="col-xl-3">
								<label>Poradie</label>
								<div class="dropdown">
									<button
										class="btn btn-secondary dropdown-toggle"
										type="button"
										id="dropdownMenuButton3"
										data-bs-toggle="dropdown"
										aria-expanded="false"
									>
										Náhodné poradie
									</button>
									<ul
										class="dropdown-menu"
										aria-labelledby="dropdownMenuButton3"
									>
										<li>
											<a class="dropdown-item" href="#"
												>Náhodné poradie</a
											>
										</li>
										<li>
											<a class="dropdown-item" href="#"
												>Dátum vytvorenia</a
											>
										</li>
									</ul>
								</div>
							</div>
							<div class="col-xl-3">
								<label>Pomalý hrniec</label>
								<div class="dropdown">
									<button
										class="btn btn-secondary dropdown-toggle"
										type="button"
										id="dropdownMenuButton4"
										data-bs-toggle="dropdown"
										aria-expanded="false"
									>
										Nezáleží
									</button>
									<ul
										class="dropdown-menu"
										aria-labelledby="dropdownMenuButton4"
									>
										<li>
											<a class="dropdown-item" href="#"
												>Nezáleží</a
											>
										</li>
										<li>
											<a class="dropdown-item" href="#"
												><span>✔</span> Áno</a
											>
										</li>
										<li>
											<a class="dropdown-item" href="#"
												><span>❌</span> Nie</a
											>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div class="recipes mt-5 d-flex flex-wrap">
						<the-recipe
							v-for="recipe in recipes"
							:key="recipe.id"
							:recipeId="recipe.id"
							:recipeTitle="recipe.title"
							:recipePortion="recipe.servings"
							:cookingTime="recipe.readyInMinutes"
							:recipeText="recipe.summary"
							:recipeAuthor="recipe.sourceName"
							:recipeDate="date"
							:imgUrl="recipe.image"
							:isVegan="recipe.vegan"
							:isVegetarian="recipe.vegetarian"
							class="me-3 mb-3"
						></the-recipe>
					</div>
				</div>
			</div>
			<div class="col-lg-5">
				<aside class="mt-5">
					<div class="vegetable-ingredients mb-3">
						<h6 class="text-center">Zelenina</h6>
						<div
							class="vegetable d-flex flex-wrap justify-content-center"
						>
							<the-ingredients
								v-for="vegetableName in vegetable"
								:key="vegetableName"
								:ingredientName="vegetableName"
								class="me-3 my-2"
							></the-ingredients>
						</div>
					</div>
					<div class="fruit-ingredients mb-3">
						<h6 class="text-center">Ovocie</h6>
						<div
							class="fruit d-flex flex-wrap justify-content-center"
						>
							<the-ingredients
								v-for="fruitName in fruit"
								:key="fruitName"
								:ingredientName="fruitName"
								class="me-3 my-2"
							></the-ingredients>
						</div>
					</div>
					<div class="meat-ingredients mb-3">
						<h6 class="text-center">Živočíšne produkty</h6>
						<div
							class="meat d-flex flex-wrap justify-content-center"
						>
							<the-ingredients
								v-for="meatName in meat"
								:key="meatName"
								:ingredientName="meatName"
								class="me-3 my-2"
							></the-ingredients>
						</div>
					</div>
					<div class="spice-ingredients mb-3">
						<h6 class="text-center">Korenie/bylinky</h6>
						<div
							class="spice d-flex flex-wrap justify-content-center"
						>
							<the-ingredients
								v-for="spiceName in spices"
								:key="spiceName"
								:ingredientName="spiceName"
								class="me-3 my-2"
							></the-ingredients>
						</div>
					</div>
					<div class="milk-ingredients mb-3">
						<h6 class="text-center">Mliečne výrobky</h6>
						<div
							class="milk d-flex flex-wrap justify-content-center"
						>
							<the-ingredients
								v-for="milkProductName in milkProducts"
								:key="milkProductName"
								:ingredientName="milkProductName"
								class="me-3 my-2"
							></the-ingredients>
						</div>
					</div>
				</aside>
			</div>
		</div>
	</div>
</template>

<script>
import TheIngredients from './TheIngredients.vue'
import TheRecipe from './TheRecipe.vue'
import axios from 'axios'

export default {
	data() {
		return {
			diets: [
				{ id: 1, imgIcon: '🌱', text: 'Vegan' },
				{ id: 2, imgIcon: '🌱', text: 'Vegetarian' },
				{ id: 3, imgIcon: '🥦', text: 'Ketogenic' },
				{ id: 4, imgIcon: '🌾', text: 'Gluten Free' },
				{ id: 5, imgIcon: '🍔', text: 'Bez diéty' },
			],
			dietValue: { id: 5, imgIcon: '🍔', text: 'Bez diéty' },
			vegetable: [
				'mrkva',
				'zemiaky',
				'cibuľa',
				'brokolica',
				'tekvica hokkaido',
				'fazuľa',
				'kyslá kapusta',
				'kukurica',
				'petržlen',
				'chilli paprička',
				'paradajka',
				'paprika',
				'šalát hlávkový',
				'paradajkový pretlak',
				'cesnak',
				'cuketa',
				'pór',
				'bambusové výhonky',
				'jalapeno',
			],
			fruit: [
				'banán',
				'avokádo',
				'citrón',
				'hrozienka',
				'jablko',
				'limetka',
			],
			meat: [
				'vajce',
				'hovädzie mäso',
				'kuracie mäso',
				'krevety',
				'bravčové mäso',
				'kačica',
				'slanina',
				'klobása',
				'hovädzí vývar',
				'hydinový vývar',
			],
			spices: [
				'soľ',
				'sladká paprika',
				'čierne korenie mleté',
				'bazalka',
				'tymián',
				'oregano',
				'škorica',
				'klinčeky',
				'muškátový orech',
				'chilli',
				'kurkuma',
				'koriander',
				'rasca drvená',
				'kôpor',
				'majoránka',
				'kari',
				'zázvor',
				'vegeta',
				'rozmarín',
				'garam masala',
			],
			milkProducts: [
				'mlieko',
				'tvaroh',
				'maslo',
				'parmezán',
				'kyslá smotana',
				'niva',
				'smotana na šľahanie',
				'jogurt',
				'smotana na varenie',
				'syr',
				'bryndza',
				'sušené mlieko',
			],
			recipes: [],
		}
	},
	components: {
		TheIngredients,
		TheRecipe,
	},
	methods: {
		getRecipes() {
			axios
				.get(
					'https://api.spoonacular.com/recipes/random?number=12&apiKey=cca5c58ff1fb4eb4a5bce450f87619e8'
				)
				.then((response) => (this.recipes = response.data.recipes))
		},
		getDietRecipes() {
			axios
				.get(
					`https://api.spoonacular.com/recipes/complexSearch?diet=${this.dietValue.text}&number=12&apiKey=cca5c58ff1fb4eb4a5bce450f87619e8`
				)
				.then((response) => (this.recipes = response.data.results))
		},
	},
	mounted() {
		this.getRecipes()
	},
}
</script>

<style scoped>
h2,
.alert,
label,
.dropdown {
	font-family: 'Neucha', cursive;
}
label,
.dropdown .btn,
.dropdown-item {
	font-weight: 700;
}
.alert {
	border: 2px solid transparent;
	border-radius: 255px 25px 225px 25px / 25px 225px 25px 255px;
}
.dropdown .btn {
	border-radius: 255px 25px 225px 25px / 25px 225px 25px 255px;
	background: #fff;
	color: #555;
	border-color: #c8c8c8;
	border-width: 2px;
}
.dropdown-menu {
	border-color: #c8c8c8;
	background: #fff;
	border-radius: 45px 15px 35px 5px/15px 5px 15px 65px;
	border-width: 2px;
}
.dropdown .btn,
.dropdown-menu {
	width: 100%;
	text-align: left;
}
</style>
