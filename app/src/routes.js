import Home from './views/Home.vue';
import Menu from './views/Menu.vue';
import Program from './views/Program.vue';
import About from './views/About.vue'

export default [
	{ name: 'home', path: '/', component: Home },
	{ name: 'menu', path: '/menu', component: Menu},
	{ name: 'program', path: '/program', component: Program},
	{ name: 'about', path: '/about', component: About}
];
