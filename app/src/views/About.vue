<template>
   <h1>Om KoM</h1>
   <main class="about">
      <section class="slideshow">
         <button class="slideshow__button--prev" @click="previous()">
            btn
         </button>
         <img class="slideshow__image" :src="slides[index].src" :alt="slides[index].alt">   
         <button class="slideshow__button--next" @click="next()">
            btn
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
      width: 100vw;
   }

   button {
      width: 5%;
      font-size: 10px;
   }

   .slideshow__image {
      width: 80%;
   }
</style>

<script>
   export default {
      data() {
         return {
            index: 0,
            slides: [
               {
                  title: 'img1',
                  src: 'images/outside.jpeg',
                  caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien eu, risus, arcu erat morbi elementum vel.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien eu, risus, arcu erat morbi elementum vel.',
                  alt: 'this is img1'
               },

               {
                  title: 'img2',
                  src: 'images/inside.jpeg',
                  caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien eu, risus, arcu erat morbi elementum vel.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien eu, risus, arcu erat morbi elementum vel.',
                  alt: 'this is img2'
               },

               {
                  title: 'img3 bla bla blablabal',
                  src: 'images/food.jpeg',
                  caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien eu, risus, arcu erat morbi elementum vel.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien eu, risus, arcu erat morbi elementum vel.',
                  alt: 'this is img3'
               }
            ],
         };
      },

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
