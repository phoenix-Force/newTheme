<template>
<v-container fluid class="mx-0 px-0">
  <v-row>
    <v-col  cols="12" md="3" :key="index" v-for="(k,index) in 8">
      <palet class="plt"/>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="12">
      <v-row>
        <v-col cols="12" md="4">
          <bar-chart></bar-chart>
        </v-col>
        <v-col cols="12" md="4">
          <bar-chart></bar-chart>
        </v-col>
        <v-col cols="12" md="4">
          <bar-chart></bar-chart>
        </v-col>

      </v-row>

    </v-col>
  </v-row>
</v-container>




</template>
<script>
import barChart from "~/components/graphs/barChart.vue"
import palet from "~/components/utilities/palet.vue"
export default {
  layout:'index',
  name: '',
  data () {
    return {

    }
  },
  components:{
    palet,
    barChart,

  }
}
</script>
<style scoped>
/* <v-container class="px-0 mx-0">

</v-container> */
/* .plt{
background: #22003B;
background: -moz-linear-gradient(45deg, #22003B 0%, #B807FF 49%, #FE7FF9 100%);
background: -webkit-linear-gradient(45deg, #22003B 0%, #B807FF 49%, #FE7FF9 100%);
background: linear-gradient(45deg, #22003B 0%, #B807FF 49%, #FE7FF9 100%);
} */
</style>
