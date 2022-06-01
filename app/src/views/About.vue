<template>
   <h1>Om KoM</h1>
   <main class="about">
      <section class="slideshow">
         <button class="slideshow__button--prev" @click="previous()">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M3.33325 10H16.6666M9.16659 4.16666L3.33325 10L9.16659 15.8333V4.16666Z" stroke="black" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

         </button>
         <img class="slideshow__image" :src="slides[index].src" :alt="slides[index].alt">   
         <button class="slideshow__button--next" @click="next()">
             <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M16.6667 9.99999H3.33342M10.8334 4.16666L16.6667 9.99999L10.8334 15.8333V4.16666Z" stroke="black" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

         </button>
      </section>
      <h2 class="about__title">{{ slides[index].title }} </h2>
      <figcaption class="about__caption">{{ slides[index].caption }}</figcaption>
   </main>
</template>

<style scoped>
   .about {
      text-align: center;
      width: 100vw;
      padding: 20px;
   }
   .slideshow {
      display: flex;
      text-align: center;
      /* border: solid; */
   }

   button {
      width: 10%;
      text-align: center;
   }
   .slideshow__image {
      width: 80%;
      text-align: center;
   }
   .about__title {
      font-size: 30px;
      padding: 10px;
      text-align: center;
   }

   @media screen and (min-width: 1000px) {
      .about__caption {
         padding: 0 200px 0 200px;
      }
   }

</style>

<script>
   export default {
      data() {
         return {
            index: 0,
            slides: [
               {
                  title: 'KoM er er en kino med fokus på god film og god mat',
                  src: 'images/outside.jpeg',
                  caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien eu, risus, arcu erat morbi elementum vel.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien eu, risus, arcu erat morbi elementum vel.',
                  alt: 'this is img1'
               },

               {
                  title: 'Vi har 3 Saler',
                  src: 'images/inside.jpeg',
                  caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien eu, risus, arcu erat morbi elementum vel.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien eu, risus, arcu erat morbi elementum vel.',
                  alt: 'this is img2'
               },

               {
                  title: 'Vi har ny meny annen vær uke',
                  src: 'images/food.jpeg',
                  caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien eu, risus, arcu erat morbi elementum vel.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien eu, risus, arcu erat morbi elementum vel.',
                  alt: 'this is img3'
               }
            ],
         };
      },

      // koden sjekker index hvis den er på siste så begynner den på bynelsen
      // hvis ikke så går den ett hakk videre

      methods: {
         previous() {
            if (this.index === 0) {
               this.index = this.slides.length - 1;
            }

            else {
               this.index -= 1;
            }
         },

         next() {
            if (this.slides.length === this.index + 1) {
               this.index = 0;
            }

            else {
               this.index += 1;
            }
         }
      }  
   }
</script>
