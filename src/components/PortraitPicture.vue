<template>
	<div class="img">
		<div class="img__container">
			<img class="img-top" src="/img/MadsPicture.jpg">
			<img class="img-mid" src="/img/MadsPicture.jpg">
			<img class="img-bottom" src="/img/MadsPicture.jpg">
		</div>
	</div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import "/src/assets/main.scss";

@media (max-width: $breakpoint-md) {
	.img {
		display: none;
	}
}

.img {
	transform: scale(0.7);

	.img__container {
		position: relative;
		width: 450px;
		height: 800px;
		transition: transform 300ms ease;
		transform-origin: 50% 50%;

		&:hover {
			transform: rotateY(50 deg) rotateX(-20deg);
			cursor: pointer;
		}

		>img {
			position: absolute;
			height: 100%;

			&:nth-of-type(1) {
				clip-path: polygon(0 0, 0 200px, 200px 0);
				transform: translateZ(50px);
			}

			&:nth-of-type(2) {
				clip-path: polygon(250px 0%, 100% 0, 100% 550px, 150px 100%, 0 100%, 0% 250px);
			}

			&:nth-of-type(3) {
				clip-path: polygon(100% 600px, 200px 100%, 100% 100%);
				transform: translateZ(-50px);
			}
		}
	}

}
</style>