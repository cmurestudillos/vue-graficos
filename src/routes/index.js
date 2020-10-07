import Vue from 'vue';
// Rutas
import VueRouter from 'vue-router';

// Componentes
import LineaComponent from '../components/linea/LineaComponent.vue';

// ---------------------------------------------------------------//
// Configuracion del enrutamiento                                 //
// ---------------------------------------------------------------//
Vue.use(VueRouter);

const routes = [
    {path: '/', component: LineaComponent},
    {path: '/linea', component: LineaComponent},
    {path: '*', component: LineaComponent }
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;