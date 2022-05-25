<template>
	<section class="landing">
		<h1 class="landing__header">Nyheter</h1>
		<figure class="landing__image">
			<img src="images/licorice-pizza.jpg" alt="">
		</figure>
	</section>
	<section class="latest">
		<figure class="latest__poster">
			<img class="poster__image" src="images/Cmon_Cmon_digiposter_1920x1080_NO_naa.jpeg" alt="">
			<figcaption class="poster__title">C'mon C'mon</figcaption>
		</figure>
	</section>
	<section class="latest">
		<figure class="latest__poster">
			<img class="poster__image" src="images/zero.png" alt="">
			<figcaption class="poster__title">Zero Fucks Given</figcaption>
		</figure>
	</section>
</template>

<script>

</script>

<style scoped>
	.landing {
		background: white;
		/* height: 300px; */
		text-align: center;
	}

	.landing__image {
		padding: 0px 25px 25px 25px;
	}

	.latest {
		padding: 20px;
	}

	.poster__title {
		padding-top: 10px;
	}
</style>
