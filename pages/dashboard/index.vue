<template>
<v-container fluid class="mx-0 px-0">
  <v-row>
    <v-col  cols="12" md="3" :key="index" v-for="(i,index) in 8">
      <palet/>
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
</style>
