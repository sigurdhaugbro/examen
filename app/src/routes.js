import Home from './views/Home.vue';
import Menu from './views/Menu.vue';
import Program from './views/Program.vue';
import Trailers from './views/Trailers.vue';



export default [
	{ name: 'home', path: '/', component: Home },
	{ name: 'menu', path: '/menu', component: Menu},
	{ name: 'program', path: '/program', component: Program},
	{ name: 'trailers', path: '/trailerrs', component: Trailers}

];
