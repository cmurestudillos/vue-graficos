<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-custom">
            <img src="../../../assets/img/logo.png" alt="Graficos" title="Graficos" class="navbar-brand">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li><router-link to="/linea" active-class="active">Lineas</router-link></li>
                    <li><router-link to="/barra" active-class="active">Barras</router-link></li>
                    <li><router-link to="/donut" active-class="active">Donut</router-link></li>
                    <li><router-link to="/radar" active-class="active">Radar</router-link></li>
                </ul>
            </div>
        </nav>    
    </div>
</template>

<script>
export default {
    name: 'NavbarComponent'
}
</script>