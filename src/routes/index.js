import Vue from 'vue';
// Rutas
import VueRouter from 'vue-router';
// Componentes
import InicioComponent from '../components/inicio/InicioComponent.vue';
import BarraComponent from '../components/barra/BarraComponent.vue';

// ---------------------------------------------------------------//
// Configuracion del enrutamiento                                 //
// ---------------------------------------------------------------//
Vue.use(VueRouter);

const routes = [
    {path: '/', component: InicioComponent},
    {path: '/barra', component: BarraComponent},
    {path: '*', component: InicioComponent }
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;