<template>
		<h1>Nyheter</h1>
	<main class="home">
		<section class="landing">
				<figure class="landing__image">
					<img :src="movies[0].poster.asset.url" alt="">
					<RouterLink  :to="{ name: 'program' }" @click="close">
						<figcaption class="poster__title">{{ movies[0].title }}</figcaption>
					</RouterLink>
				</figure>
		</section>
		<section class="side-section">
			<section class="latest">
				<figure class="latest__poster">
					<img class="poster__image" :src="movies[1].poster.asset.url" alt="">
					<RouterLink  :to="{ name: 'program' }" @click="close">
						<figcaption class="poster__title">{{ movies[1].title }}</figcaption>
					</RouterLink>
				</figure>
			</section>
			<section class="latest">
				<figure class="latest__poster">
					<img class="poster__image" :src="movies[2].poster.asset.url" alt="">
					<RouterLink  :to="{ name: 'program' }" @click="close">
						<figcaption class="poster__title">{{ movies[2].title }}</figcaption>
					</RouterLink>
				</figure>
			</section>
		</section>
	</main>
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
				movies: []
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
		color: black;
		text-decoration: underline;
	}

	@media screen and (min-width: 1000px) {

		.home {
			display: flex;
		}
		.landing {
			padding-top: 40px;
			width: 200%;
			background: var(--background);
		}
		.latest {
			width: 81%;
			padding-top: 40px;

		}

		.poster__title {
			text-align: left;
		}
		
	}
</style>
