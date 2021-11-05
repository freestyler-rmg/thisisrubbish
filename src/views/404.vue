<template>
	<div class="container">
		<div class="center">
			四０四
		</div>
	</div>
</template>

<script>
export default {
	name: '404',
}
</script>

<style lang="scss" scoped>
$value1: -45%;
$value2: -55%;

.container {
	text-align: center;
	font-size: 80px;
	font-weight: bold;
}
.center {
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	animation-name: seizure;
	animation-duration: .1s;
	animation-iteration-count: infinite;
	animation-timing-function: linear;
}

@keyframes seizure {
	from {
		transform: translate($value1, $value1);
	}

	10% {
		transform: translate($value2, $value1);
	}

	20% {
		transform: translate($value1, $value1);
	}

	30% {
		transform: translate($value1, $value2);
	}

	45% {
		transform: translate($value2, $value2);
	}

	50% {
		transform: translate($value1, $value1);
	}

	55% {
		transform: translate($value1, $value2);
	}

	70% {
		transform: translate($value2, $value2);
	}

	80% {
		transform: translate($value2, $value1);
	}

	90% {
		transform: translate($value1, $value2);
	}

	to {
		transform: translate($value2, $value2);
	}
}
</style>
