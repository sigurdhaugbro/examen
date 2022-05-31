<template>
   <h1>Meny</h1>
   <section class="menu">
      <div class="menu__item">
         <h2 class="item__title">Licorice Pizza</h2>
         <div class="item__price">150kr</div>         
         <div class="item__description">pizza med lakris og annet digg</div>
      </div>


      <div class="menu__item">
         <h2 class="item__title">Royal with Cheese</h2>
         <div class="item__price">120kr</div>         
         <div class="item__description">Because of the Metric System</div>
      </div>

      <div class="menu__item">
         <h2 class="item__title">Fish are friends not food</h2>
         <div class="item__price">190kr</div>         
         <div class="item__description">42 Wallaby Way Sydney</div>
      </div>

      <div class="menu__item">
         <h2 class="item__title">An offer you can't refuse</h2>
         <div class="item__price">140kr</div>         
         <div class="item__description">Mostly horse meat</div>
      </div>

      <h3 class="menu__quote">"I'll have what she's having"</h3>
   </section>
</template>

<style>
   .menu {
      border: solid 20px var(--background);
      padding: 10px;
      background: white;
   }

   .menu__item {
      margin: 10px;
      display: grid;
      grid-template-columns: 3fr 1fr;
   }

   .item__price, .item__description {
      font-size: var(--font-size-small);
   }

   .item__price {
      text-align: right;
   }

   .menu__quote {
      text-align: center;
      margin-top: 40px;
   }

</style>