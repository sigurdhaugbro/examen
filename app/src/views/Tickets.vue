<template>
   <h1>Billetter</h1>
   <figure>
      <img src="public/images/Cmon_Cmon_digiposter_1920x1080_NO_naa.jpeg" alt="">
      <figcaption>C'mon C'mon</figcaption>
   </figure>
   <form action="">
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
</template>

<style>
   form {
      background: white;
      border: solid 20px var(--background);
      font-size: var(--font-size-small);
      display: grid;
      grid-template-columns: 1fr 1fr;
      padding: 10px;

   }

   .form__element {
      margin: 10px;
      /* border: solid; */
   }

   .form__element--day {
      margin: 10px 0px 0px 10px;
      width: 120px; 

      /* border: solid; */
   }

   .form__element--quantity {
      margin: 10px 0px 0px 10px;
      width: 25px; 
      /* border: solid */
   }

   .form__element--button {
      grid-area: 1 / span 2;
      grid-row: 8;
      text-align: center;
   }
   
</style>