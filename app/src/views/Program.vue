<template>
   <h1>Program</h1>
   <main class="program">
      <figure class="program__film">
         <img class="film__poster" src="public/images/Cmon_Cmon_digiposter_1920x1080_NO_naa.jpeg" alt="{{alt}}">
         <figcaption class="film__caption">C'mon C'mon</figcaption>
      </figure>

      <section class="program__viewings">
         <div class="viewings__times">
            <div class="times__day">Mandag 14:30</div>
            <div class="times__day">Tirsdag 19:00</div>
         </div>
         <button class="viewings__tickets" @click="visible ^= true">Kjøp Billett</button>
      </section>

      <form class="form" action="" v-if="visible">
         <label class="form__element" for="date-and-time">Dag:</label>
         <select class="form__element--day" name="date-and-time" id="date-and-time">
            <option value="monday 14:30">Mandag 14:30</option>
            <option value="monday 19:30">Tirsdag 19:30</option>
         </select>
         <div   class="form__element" >Pris:</div>
         <div   class="form__element" >120kr</div>
         <label class="form__element" for="quantity">Anntall:</label>
         <input class="form__element--quantity" type="number" id="quantity" name="quantity" min="1" max="10">
         <label class="form__element" for="email">Epost:</label>
         <input class="form__element" type="email" id="email" name="email">
         <div class="form__element">Sum:</div>
         <div class="form__element">sum</div>
         <button class="form__element--button">Kjøp</button>
      </form>
   </main>
</template>

<script>
   export default {
      data() {
         return {
            visible: false
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

   .form {
      margin-top: 20px;
      background: white;
      font-size: var(--font-size-small);
      display: grid;
      grid-template-columns: 1fr 1fr;
      padding: 10px;
   }

   .form__element {
      margin: 10px;
   }

   .form__element--day {
      margin: 10px 0px 0px 10px;
      width: 120px; 
   }

   .form__element--quantity {
      margin: 10px 0px 0px 10px;
      width: 25px; 
   }

   .form__element--button {
      grid-area: 1 / span 2;
      grid-row: 8;
      text-align: center;
   }
</style>