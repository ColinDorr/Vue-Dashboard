<template>
   <div>
     <apexchart 
      class="weather-chart" 
      type="line" 
      :options="chartOptions" 
      :series="series"/>
   </div>
</template>

<script>
export default {
    data: function() {
      return {
        chartOptions: {
          chart: {
            id: 'rain-prediction',
             toolbar: {
              show: false
            }
          },
          
          colors: ['#77B6EA', '#000'],
          dataLabels: {
            enabled: true,
          },
        stroke: {
          show: true,
          curve: 'smooth',
          lineCap: 'butt',
          colors: ['#fff'],
          width: 2,
          dashArray: 0,      
        },
          grid: {
            borderColor: '#fff',
            row: {
              colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
              opacity: 0.5
            },
          },
          markers: {
            size: 6
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
          },
          yaxis: {
            min: 0,
            max: 24
          },
        },
        series: [{
          name: 'Rain',
          data: [0.1, 5, 8, 19, 7, 6, 2, 0]
        }]
      }
    },
};
</script>

<style lang="scss" scoped>
.weather-chart{
  width: 100%;
}
</style>
