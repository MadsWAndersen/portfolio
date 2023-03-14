<template>
	<div class="img">
		<div class="img__container">
			<img class="img-top" src="https://source.unsplash.com/7r1HxvVC7AY/450x800">
			<img class="img-mid" src="https://source.unsplash.com/TAj4X5-eRqE/450x800">
			<img class="img-bottom" src="https://source.unsplash.com/bULD0lNVXOA/450x800">
		</div>
	</div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@keyframes flipme {
	0% {
		transform: rotateY(-30deg) rotateX(0deg);
	}

	50% {
		transform: rotateY(0deg) rotateX(10deg);
	}

	100% {
		transform: rotateY(-30deg) rotateX(0deg);
	}
}

.img {
	transform: scale(0.7);

	.img__container {
		position: relative;
		width: 450px;
		height: 800px;
		transform: rotateY(0deg) rotateX(0deg) scale(0.5);
		transform-style: preserve-3d;
		animation: 15s flipme linear infinite;
		transition: transform 300ms ease;
		transform-origin: 50% 50%;

		&:hover {
			transform: rotateY(30deg) rotateX(5deg);
			cursor: pointer;
		}

		>img {
			position: absolute;

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