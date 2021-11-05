<template>
  <div class="container">
    <router-link :to="{ name: 'FantasyZone' }" ><sakura-link /></router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import SakuraLink from '@/components/SakuraLink'

export default {
  name: 'ScrollingGradient',
  components: {
    SakuraLink
  }
}
</script>

<style lang="scss" scoped>
.container {
	background: linear-gradient(to bottom,
    #ddd 0%,
    #333 25%,
    #ddd 50%,
    #333 75%,
    #ddd 100%);
  background-size: 100% 200%;
	width: 100vw;
  height: 100vh;
  animation-name: animateBackground;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  box-shadow: inset 0 0 70px #333;
}

@keyframes animateBackground {
  from {
    background-position: 0% 0%;
    box-shadow: inset 0 0 70px #333;
  }

  50% {
    background-position: 0% 50%;
    box-shadow: inset 0 0 30px #333;
  }

  to {
    background-position: 0% 100%;
    box-shadow: inset 0 0 70px #333;
  }
}
</style>