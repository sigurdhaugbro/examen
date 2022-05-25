<template>
   <section>
      <h1>Trailere</h1>
      <figure class="trailer">
         <iframe class="trailer__video" width="560" height="315" src="https://www.youtube.com/embed/a2dfJhaNdCA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
         <figcaption class="trailer__caption">Zero Fucks Given</figcaption>
      </figure>
      <figure class="trailer">
         <iframe class="trailer__video" width="560" height="315" src="https://www.youtube.com/embed/a2dfJhaNdCA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
         <figcaption class="trailer__caption">Zero Fucks Given</figcaption>
      </figure>
   </section>
   
   
</template>

<style>
   .trailer {
      width: 100vw;
      text-align: center;
      padding: 20px;
   }


   .trailer__video {
      width: 100%;
   }

   .trailer__caption {
      text-align: left;
      padding: 10px 0px 0px 10px;
   }
</style>