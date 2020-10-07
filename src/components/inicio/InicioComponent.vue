<template>
    <div>
        <h3 class="m-3"> Grafico de Lineas</h3>
        <hr>
        <div class="row">
            <div class="col-sm-6 mx-auto">
                <LineaComponent></LineaComponent>
                <button mat-button mat-raised-button class="btn btn-4 btn-block mx-auto w-25" @click="randomize()">Aleatorio</button>
            </div>
        </div>
    </div>
</template>

<script>
import LineaComponent from '../../components/linea/LineaComponent';

export default {
  name: 'InicioComponent',
  components: {
      LineaComponent
  }

}
</script>