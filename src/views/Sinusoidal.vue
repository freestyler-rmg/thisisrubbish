<template>
	<div class="container">
		<div class="round first"></div>
		<div class="round second"></div>
	</div>
</template>

<script>
export default {
	name: 'Sinusoidal'
}
</script>

<style lang="scss" scoped>
.container {
	padding: 100px;
}
.round {
	width: 200px;
	height: 400px;
	border: 8px solid #333;
	border-bottom: 0;
	border-top-left-radius: 50% 100%;
	border-top-right-radius: 50% 100%;
	display: inline-block;
	margin: 0 -4px;

	&.second {
		transform: translateY(100%) scale(-100%);
	}
}
</style>