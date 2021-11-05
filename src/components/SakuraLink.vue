<template>
	<div class="moon" :style="{'top': y, 'left': x}">✿</div>
</template>

<script>
export default {
	name: 'SakuraLink',

	props: {
    y: {
      default: '50%'
    },
    x: {
      default: '50%'
    }
  }
}
</script>

<style lang="scss" scoped>
.moon {
  position: fixed;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  text-align: center;
  line-height: 30px;
  font-size: 7px;
  display: block;
  color: rgba(255, 255, 255, 0.2);
  position: fixed;
  transform: translate(-50%, -50%);
  text-decoration: none;
  background-color: transparent;
  z-index: 5;
  cursor: pointer;

  animation-name: kage;
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

@keyframes kage {
  from {
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.3), inset 0 0 5px rgba(0, 0, 0, 0.4);
  }
  to {
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.4), inset 0 0 7px rgba(255, 255, 255, 0.3);
  }
}
</style>