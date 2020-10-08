<template>
    <div>
        <div v-if="grafico === '/linea'">
            <h3 class="m-3"> Grafico de Lineas</h3>
            <hr>
        </div>
        <div v-if="grafico === '/barra'">
            <h3 class="m-3"> Grafico de Barras</h3>
            <hr>
        </div>
        <div v-if="grafico === '/donut'">
            <h3 class="m-3"> Grafico de Donut</h3>
            <hr>
        </div>    
        <div v-if="grafico === '/radar'">
            <h3 class="m-3"> Grafico de Radar</h3>
            <hr>
        </div>              
    </div>
</template>

<script>
export default {
    name: 'HeaderComponent',
    data(){
        return {
        grafico: []
        }
    },   
    mounted(){
        // Llamamos al metodo
        this.getGrafico();
    },
    methods: {
        // Metodo para obtener los articulos
        getGrafico(){
        // Log de seguimiento
        console.log('HeaderComponent.vue - Metodo getGrafico');
        
        this.grafico = this.$route.path;
        }
    }    
}
</script>