<template>
<v-container fluid>
  <v-row wrap>
    <canvas id="canvas"></canvas>
  </v-row>
</v-container>
</template>
<script>
export default {
  name: '',
  data () {
    return {
    }
  },
  mounted(){
    let c = document.querySelector("#canvas");
    let w = c.parentElement.clientWidth;
    let h = c.parentElement.clientHeight;
    c.width = w;
    c.height =`{600px}`;
  }
}
</script>
<style scoped>

</style>
