<template>
   <h1>Program</h1>
   <main v-for="movie in movies" :key="movie.id" class="program">
      <figure class="program__film">
         <img class="film__poster" :src='movie.poster' :alt='movie.alt'>
         <figcaption class="film__caption">{{ movie.title }}</figcaption>
      </figure>

      <section class="program__viewings">
         <div class="viewings__times">
            <div class="times__day">{{ movie.todayStart }}</div>
            <div class="times__day">{{ movie.tomorrowStart }}</div>
         </div>
         <button class="viewings__tickets" @click="visible ^= true">Kjøp Billett</button>
      </section>

      <form class="form" action="" v-if="visible">
         <label class="form__element" for="date-and-time">Dag:</label>
         <select class="form__element--day" name="date-and-time" id="date-and-time">
            <option value="monday 14:30">{{ movie.todayStart }}</option>
            <option value="monday 19:30">{{ movie.tomorrowStart }}</option>
         </select>
         <div   class="form__element" >Pris:</div>
         <div   class="form__element" >{{ movie.price }}</div>
         <label class="form__element" for="quantity">Anntall:</label>
         <input class="form__element--quantity" type="number" id="quantity" name="quantity" min="1" max="10">
         <label class="form__element" for="email">Epost:</label>
         <input class="form__element--email" type="email" id="email" name="email">
         <button class="form__element--button">Kjøp</button>
      </form>
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
            visible: false,
            movies: [
               { 
               id: '001', 
               title: 'C´mon C´mon', 
               price: 120, 
               todayStart: 'Mandag 14:30', 
               tomorrowStart: 'Tirsdag 18:30', 
               poster: 'public/images/Cmon_Cmon_digiposter_1920x1080_NO_naa.jpeg', 
               alt: 'Poster of C´mon C´mon'  
               },
               { 
               id: '002', 
               title: 'Licorice Pizza', 
               price: 120, 
               todayStart: 'Mandag 19:30', 
               tomorrowStart: 'Tirsdag 11:30', 
               poster: 'public/images/licorice-pizza.jpg', 
               alt: 'Poster of Licorice Pizza' 
               }
            ] 
         }
      },
   }
</script>

<style>
   .program {
      padding: 20px;
   }

   .film__caption {
      padding-top: 10px;
   }

   .program__viewings {
      display: flex;
      justify-content: space-between;
   }

   .viewings__times {
      font-size: var(--font-size-small);
      color: white;
      padding-top: 10px;
   }

   .times__day {
      padding-top: 10px;
   }

   .viewings__tickets {
      color: white;
      font-size: var(--font-size-small);
      padding-top: 50px;
   }

   .viewings__tickets:hover {
      text-decoration: underline;
   }

   .form {
      margin-top: 20px;
      background: white;
      font-size: var(--font-size-small);
      display: grid;
      grid-template-columns: 1fr 1fr;
      padding: 10px;
      transition: ease 2s;
   }

   .form__element {
      margin: 10px;
   }

   .form__element--day {
      margin: 10px 0px 0px 10px;
      width: 120px;
      border: solid black 1px;
      color: black;
      border-radius: 0%;
   }

   .form__element--quantity {
      margin: 10px 0px 0px 10px;
      width: 120px;
      border: solid black 1px; 
      border-radius: 0%;
   }

   .form__element--email {
      margin: 10px 0px 0px 10px;
      width: 120px;
      border: solid black 1px; 
      border-radius: 0%;
   }

   .form__element--button {
      grid-area: 1 / span 2;
      grid-row: 8;
      text-align: center;
      margin-top: 20px;
   }
</style>