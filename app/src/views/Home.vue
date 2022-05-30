<template>
	<section class="landing">
			<h1 class="landing__header">Nyheter</h1>
		
		<figure class="landing__image">
			<img :src="movies[0].poster.asset.url" alt="">
		</figure>
	</section>
	<section class="latest">
		<figure class="latest__poster">
			<img class="poster__image" :src="movies[1].poster.asset.url" alt="">
			<figcaption class="poster__title">{{movies[1].title}}</figcaption>
		</figure>
	</section>
	<section class="latest">
		<figure class="latest__poster">
			<img class="poster__image" :src="movies[2].poster.asset.url" alt="">
			<figcaption class="poster__title">{{ movies[2].title }}</figcaption>
		</figure>
	</section>
</template>

<script>
	import query from '../groq/movie.groq?raw'
	import viewMixins from '../mixins/viewMixin.js'

	export default {
		mixins: [viewMixins],

      async created() {
        await this.sanityFetch(query)
        this.movies = this.content
      },

		data() {
			return {
				movies: [
					{
						title: 'Licorice Pizza', 
						image: 'images/licorice-pizza.jpg', 
						alt: 'poster'
					},
					{
						title: 'C´mon C´mon', 
						image: 'images/Cmon_Cmon_digiposter_1920x1080_NO_naa.jpeg', 
						alt: 'poster'
					},
					{
						title: 'Zero Fucks Given', 
						image: 'images/zero.png', 
						alt: 'poster'
					}
				]
			}
		}
	}
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
