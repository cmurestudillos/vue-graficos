<script>
import { Line } from 'vue-chartjs';

export default {
  name: 'LineaComponent',
  extends: Line,
  data(){
      return{
        chartData: {
          labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
          datasets: [
            {
                label: 'Pizza',
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
            {
                label: 'Spaguetti',
                data: [28, 48, 40, 19, 86, 27, 90],
                backgroundColor: 'rgba(77,83,96,0.2)',
                borderColor: 'rgba(77,83,96,1)',
                pointBackgroundColor: 'rgba(77,83,96,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(77,83,96,1)'
            },
            {
                label: 'Macarrones',
                data: [180, 480, 770, 90, 1000, 270, 400],
                backgroundColor: '#a0d080',
                borderColor: 'green',
                pointBackgroundColor: '#c9fbc2',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#09a330'
            }                          

          ]
        },
        options:{
            scales:{
            yAxes: [{
                id: 'y-axis-0',
                position: 'left',
            },
            {
            id: 'y-axis-1',
            position: 'right',
                gridLines: {
                    color: 'rgba(255,0,0,0.3)',
                },
                ticks: {
                    fontColor: 'red',
                }
            }],
            xAxes: [{}]                            
            },
          legend: {
            display: true
          },
          responsive: true,
        },                  
      }
    },
    mounted () {
        this.renderChart(this.chartData, this.options);
        this.pintaBoton();
    },
    methods: {
        // Metodo para generar datos aleatorios en la grafica
        pintaBoton(){
            // Log de seguimiento
            console.log('LineaComponent.vue - Metodo pintaBoton');
            document.write = '<button mat-button mat-raised-button class="btn btn-4 btn-block mx-auto w-25" @click="randomize()">Aleatorio</button>';
        },        
        // Metodo para generar datos aleatorios en la grafica
        randomize(){
            // Log de seguimiento
            console.log('LineaComponent.vue - Metodo randomize');
            
            for (var i = 0; i < this.chartData.datasets.length; i++) {
                for (let j = 0; j < this.chartData.datasets[i].data.length; j++) {
                    this.chartData.datasets[i].data[j] = this.generateNumber(i);
                }
            }
            //this.chart.update();
        },
        // Metodo para generar los numeros
        generateNumber(i){
            // Log de seguimiento
            console.log('LineaComponent.vue - Metodo generateNumber');

            return Math.floor((Math.random() * (i < 2 ? 100 : 1000)) + 1);
        },        
    }      
}
</script>