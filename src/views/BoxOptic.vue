<template>
	<div class="container">
		<div class="bbbbbox">

			<div class="box odd">
			<div class="box even">
			<div class="box odd">
			<div class="box even">
			<div class="box odd">
			<div class="box even">
			<div class="box odd">
			<div class="box even">
			<div class="box odd">
			<div class="box even">
			<div class="box odd">
			<div class="box even">
			<div class="box odd">
			<div class="box even">
			<div class="box odd">
			<div class="box even">
			<div class="box odd">
			<div class="box even">
			<div class="box odd">
			<div class="box even">
			<div class="box odd">
			<div class="box even">
			<div class="box odd">
			<div class="box even">
			<div class="box odd">
			<div class="box even">
			<div class="box odd">
			<div class="box even">
			<div class="box odd">
			<div class="box even">
			<div class="box odd">
			<div class="box even">
			<div class="box odd">
			<div class="box even">
			<div class="box odd">
			<div class="box even">
			<div class="box odd">
			<div class="box even">
			<div class="box odd">
			<div class="box even">
			<div class="box odd">
			<div class="box even">
			<div class="box odd">
			<div class="box even">
			<div class="box odd">
			<div class="box even">
			<div class="box odd">
			<div class="box even">
			<div class="box odd">
			<div class="box even">
			<div class="box odd">
			<div class="box even">
			<div class="box odd">
			<div class="box even">
			<div class="box odd">
			<div class="box even">
			<div class="box odd">
			<div class="box even">
			<div class="box odd">
			<div class="box even">
			<div class="box odd">
			<div class="box even">
			<div class="box odd">
			<div class="box even">
			<div class="box odd">
			<div class="box even">
			<div class="box odd">
			<div class="box even">
			<div class="box odd">
			<div class="box even">
			<div class="box odd">
			<div class="box even">
			<div class="box odd">
			<div class="box even">
			<div class="box odd">
			<div class="box even">
			<div class="box odd">
			<div class="box even">
			<div class="box odd">
			<div class="box even">
			<div class="box odd">
			<div class="box even">
			<div class="box odd">
			<div class="box even">
			<div class="box odd">
			<div class="box even">
			<div class="box odd">
			<div class="box even">
			<div class="box odd">
			<div class="box even">
			<div class="box odd">
			<div class="box even">
			<div class="box odd">
			<div class="box even">
			<div class="box odd">
			<div class="box even">
			<div class="box odd">
			<div class="box even">
			<div class="box odd">
			<div class="box even">
			<div class="box odd">
			<div class="box even">
			<div class="box odd">
			<div class="box even">
			<div class="box odd">
			<div class="box even">
			<div class="box odd">
			<div class="box even">

			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>

		</div>

		<router-link :to="{ name: 'ScrollingGradient' }" ><sakura-link /></router-link>
	</div>
</template>

<script>
import SakuraLink from '@/components/SakuraLink';

export default {
	name: 'BoxOptic',
	components: {
		SakuraLink
	}
}
</script>

<style lang="scss" scoped>
.container {
	background: #fff;
  width: 100vw;
  height: 100vh;
}

.bbbbbox {
	position: fixed;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
}

.box {
	position: relative;
	border: 8px solid transparent;
	display: inline-block;
	font-size: 0;
	line-height: 0;
	letter-spacing: 0;
	box-sizing: border-box;

	&::before, &::after {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		outline-width: 8px;
		outline-style: solid;
		animation-duration: 3s;
		animation-iteration-count: infinite;
		animation-timing-function: linear;
	}
	&.odd {
		outline: 0;
	}
	&.odd::before {
		animation-name: gethighfirst;
		outline-color: #333;
	}
	&.odd::after {
		animation-name: gethighsecond;
		outline-color: #fff;
	}
	&.even {
		border-color: #333;
	}
	&.even::before {
		animation-name: gethighfirst;
		outline-color: #fff;
	}
	&.even::after {
		animation-name: gethighsecond;
		outline-color: #333;
	}
}

@keyframes gethighfirst {
	from {
		outline-width: 0;
	}
	50% {
		outline-width: 8px;
	}
	to {
		outline-width: 8px;
	}
}
@keyframes gethighsecond {
	from {
		outline-width: 0;
	}
	50% {
		outline-width: 0;
	}
	to {
		outline-width: 8px;
	}
}
</style>