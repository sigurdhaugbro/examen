<template>
   <h1>Meny</h1>
   <main class="menu-container">
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

         <h3 class="menu__quote">
            <span class="quote__text">"I'll have what she's having"</span> 
         </h3>
      </section>
   </main>

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

   .quote__text {
      width: fit-content;
      height: fit-content;
      position: relative;
   }

   @keyframes typwriterAnimation {
	   to {
		   left: 100%;
	   }
   }

   @keyframes blink {
	   to {
		   background: transparent;
	   }
   }

   @media screen and (min-width: 1000px) {
      .menu-container {
         padding: 0px 25% 0 25%;
      }

      .menu__item {
         margin-bottom: 50px;
      }

      .item__description {
         margin-top: 10px
      }
   
      .quote__text:before, .quote__text:after {
      	content: "";
      	position: absolute;
      	top: 0;
      	right: 0;
      	bottom: 0;
      	left: 0;
      }
   
      .quote__text::before {
      	background: white;
      	animation: typwriterAnimation 8s steps(29) forwards;
      }
   
      .quote__text::after {
	      width: 0.125em;
	      background: black;
	      animation: typwriterAnimation 8s steps(29) forwards,
	      blink 750ms steps(24) infinite;
      }
   
      }


</style>