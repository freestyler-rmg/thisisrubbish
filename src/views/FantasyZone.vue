<template>
	<div class="container">
		<div class="go-away">
			<div class="longggggg" v-for="long in 10" :key="long">
				<div class="boxxxxx" v-for="box in 50" :key="long + box"><div></div></div>
			</div>
		</div>

		<router-link :to="{ name: 'Revolver' }" ><sakura-link y="50%" /></router-link>
	</div>
</template>

<script>
import SakuraLink from '@/components/SakuraLink';

export default {
	name: 'FantasyZone',
	components: {
		SakuraLink
	}
}
</script>

<style lang="scss" scoped>
$color-one-fresh: #333;
$color-one-pale: #ddd;
$color-two-fresh: #222;
$color-two-pale: #ccc;

.container {
	background: linear-gradient(to bottom, $color-one-fresh, #fff);
	width: 100vw;
  height: 100vh;
}

.go-away {
  position: fixed;
  left: 50%;
  top: 50%;
  width: 100vw;
  transform-style: preserve-3d;
  transform: translate(-50%, -50%) perspective(50px) rotateX(15deg) scaleX(5);
}

.longggggg {
  width: 100%;
  font-size: 0;
  letter-spacing: 0;
  line-height: 0;
	.boxxxxx {
		display: inline-block;
		width: 4%;
		position: relative;
		&::before, &::after {
			content: '';
			position: absolute;
			left: 0;
			top: 0;
			right: 0;
			width: 100%;
			padding-top: 0;
			animation-duration: .3s;
			animation-timing-function: linear;
			animation-iteration-count: infinite;
		}

		& > div {
			width: 100%;
			padding-top: 100%;
		}

		&::before {
			animation-name: first;
		}
		&::after {
			animation-name: second;
		}

		&:nth-child(even) {
      &::before {
        background-color: $color-one-pale;
      }
      &::after, & > div {
        background-color: $color-two-pale;
      }

      &:nth-child(n + 26) {
        &::before {
          background-color: $color-one-fresh;
        }
        &::after, & > div {
          background-color: $color-two-fresh;
        }
      }
    }

		&:nth-child(odd) {
      &::before {
        background-color: $color-two-fresh;
      }
      &::after, & > div {
        background-color: $color-one-fresh;
      }

      &:nth-child(n + 26) {
        &::before {
          background-color: $color-two-pale;
        }
        &::after, & > div {
          background-color: $color-one-pale;
        }
      }
    }

	}
}

@keyframes first {
  from {
    padding-top: 0;
  }
  50% {
    padding-top: 100%;
  }
  to {
    padding-top: 100%;
  }
}
@keyframes second {
  from {
    padding-top: 0;
  }
  50% {
    padding-top: 0;
  }
  to {
    padding-top: 100%;
  }
}
</style>