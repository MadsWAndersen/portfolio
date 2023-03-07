<template>
	<div id="menu-icon" :class="{ active: isActive }" @click="toggleActive">
		<span class="menu-icon__line menu-icon__line-left"></span>
		<span class="menu-icon__line menu-icon__line-center"></span>
		<span class="menu-icon__line menu-icon__line-right"></span>
	</div>
</template>

<script setup>
import { ref } from 'vue'

const isActive = ref(false)
// const menu = document.getElementById('menu')

function toggleActive() {
	isActive.value = !isActive.value
	// const menu = document.getElementById('menu')
}


</script>

<style lang="scss" scoped>
#menu-icon {
	z-index: 10;
	width: 23px;
	display: flex;
	flex-direction: column;
	height: 20px;
	gap: 7px;
	position: relative;
	cursor: pointer;

	&.active {
		.menu-icon__line {
			opacity: 0;

			&-left {

				opacity: 1;
				display: block;
				width: 100%;
				transition: 0.2s ease;
				top: 50%;
				transform: rotate(-45deg);
			}

			&-center {
				width: 0%;
				transition: 0.5s ease
			}

			&-right {
				opacity: 1;
				display: block;
				width: 100%;
				transition: 0.2s ease;
				top: 50%;
				transform: translateX(0%) rotate(45deg);

			}
		}
	}

	.menu-icon__line {
		z-index: 3;
		background-color: white;
		width: 100%;
		height: 3px;

		&-center {
			position: absolute;
			transform: translateY(-50%);
			top: 50%;
			transition: 0.5s ease
		}

		&-left {
			position: absolute;
			bottom: 0;
			width: 50%;
			transition: 0.2s ease;
		}

		&-right {
			top: 0;
			position: absolute;
			width: 50%;
			transform: translateX(100%);
			transition: 0.2s ease;
		}



	}

}
</style>