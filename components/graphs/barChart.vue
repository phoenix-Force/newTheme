<template>
    <apex-chart style="color:white;"  height="500" type="area" :options="chartOptions" :series="series"></apex-chart>

</template>
<script>
import VueApexCharts from 'vue-apexcharts'
export default {
    name: '',
    data () {
        return {
            chartOptions: {
                chart: {
                    id: 'vuechart-example',
                    toolbar: {
                        show: false,
                        tools: {
                            selection: false,
                            reset: true
                        }
                    }
                },
                fontFamily: 'Helvetica, Arial, sans-serif',
                dataLabels: {
                    enabled: true,
                    style: {
                        fontSize: '14px',
                        fontFamily: 'Helvetica, Arial, sans-serif',
                        colors:['#7f86c9'],
                    },
                },
                yaxis:{
                    title: {
                        text: 'Earning'
                    },
                    labels: {
                        style: {
                            color: '#7f86c9'
                        }
                    }
                },
                xaxis: {
                    categories: [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020],
                    title: {
                        text: 'Year'
                    },
                    labels: {
                        style: {
                            colors: '#ffffff'
                        }
                    }
                },
                colors:['#7f86c9'],
                    // foreColor: '#FFFFFF',
                grid: {
                    borderColor: 'black',
                        // row: {
                        // colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                        // opacity: 0.5
                        // },
                },
                markers: {
                    size: 4
                }
            },
            series: [{
                data: [20000, 42000, 45000, 65000, 49000, 60000, 55000, 81530,100000]
            }]
        }
    },
    components:{
        apexChart:VueApexCharts
    }
}
</script>
<style scoped>

</style>
