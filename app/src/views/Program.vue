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
         <RouterLink class="viewings__tickets" :to="{ name: 'tickets' }">Kjøp Billett</RouterLink>
      </section>
   </main>
</template>

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
</style>