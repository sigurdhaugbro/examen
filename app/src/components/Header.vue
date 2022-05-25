<template>
   <header class="header">
      <RouterLink class="header__logo" :to="{ name: 'home' }">KoM</RouterLink>
      <button class="header__button" @click="visible ^= true">
         <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M26.25 22.5H3.75V20H26.25V22.5ZM26.25 16.25H3.75V13.75H26.25V16.25ZM26.25 10H3.75V7.5H26.25V10Z" fill="black"/>
         </svg>
      </button>
   </header>
   <section class="menu" v-if="visible">
      <div class="menu__link">
         <RouterLink class="menu__link" :to="{ name: 'program' }" @click="close">Program</RouterLink>
      </div>
      <div class="menu__link">
         <RouterLink class="menu__link" :to="{ name: 'trailers' }" @click="close">Trailere</RouterLink>
      </div>
      <div class="menu__link">
         <RouterLink class="menu__link" :to="{ name: 'menu' }" @click="close">Meny</RouterLink>
      </div>
   </section>
</template>

<script>
   	export default {
		
		data() {
			return {
				visible: false,
			}
		},

      methods: {
         close() {
            this.visible = false;
         }
      }
   }
</script>

<style scoped>

   .header {
      display: flex;
      justify-content: space-between;
      height: 50px;
      padding: 0px 10px 0px 10px;
   }

   .header__logo {
      margin-top: 10px;
      text-decoration: none;
      color: black;
   }

   .menu {
      position: absolute;
      z-index: 1;
      height: 350px;
      width: 100%;
      margin-top: 10px;
      padding: 10px;
      background: var(--background);
      clip-path: polygon(0 0, 100% 0, 100% 10%, 0 63%);
   }

   .menu__link {
      margin-top: 15px;
      text-decoration: none;
      color: black;
   }

</style>
