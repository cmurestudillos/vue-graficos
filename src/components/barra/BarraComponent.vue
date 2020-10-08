<script>
import { Bar } from 'vue-chartjs';
export default {
  name: 'BarraComponent',
  extends: Bar,
  data(){
      return{
        chartData: {
          labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
          datasets: [
            {
                label: 'Chocolate',
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: '#a0d080',
                borderColor: 'green',
                pointBackgroundColor: '#c9fbc2',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#09a330'
            },               
            {
                label: 'Azucar',
                data: [28, 48, 40, 19, 86, 27, 90],
                backgroundColor: 'rgba(77,83,96,0.2)',
                borderColor: 'rgba(77,83,96,1)',
                pointBackgroundColor: 'rgba(77,83,96,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(77,83,96,1)'
            }
          ]
        },
        options:{
            scales:{
            yAxes: [{}],
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
    },
    created () {
        setInterval(() => {
            this.randomize()
            this.renderChart(this.chartData, this.options);
        }, 5000)
    },     
    methods: {
        // Metodo para generar datos aleatorios en la grafica
        randomize(){
            // Log de seguimiento
            console.log('LineaComponent.vue - Metodo randomize');
            
            // Only Change 3 values
            Math.round(Math.random() * 100),59,80,
            (Math.random() * 100),56,
            (Math.random() * 100),40
        }
    }     
}
</script>