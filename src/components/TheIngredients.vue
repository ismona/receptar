<template>
	<div class="form-check">
		<input
			class="form-check-input"
			type="checkbox"
			value=""
			id="flexCheckDefault"
		/>
		<label class="form-check-label" for="flexCheckDefault">
			{{ ingredientName }}
		</label>
	</div>
</template>

<script>
export default {
	props: ['ingredientName'],
}
</script>

<style scoped>
</style>
