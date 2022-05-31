<template>
		<section class="landing">
				<h1 class="landing__header">Nyheter</h1>
				<figure class="landing__image">
					<img :src="movies[0].poster.asset.url" alt="">
					<RouterLink  :to="{ name: 'program' }" @click="close">
						<figcaption class="poster__title">{{ movies[0].title }}</figcaption>
					</RouterLink>
				</figure>
		</section>
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
</style>
