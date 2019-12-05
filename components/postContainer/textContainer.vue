<template>
  <v-container fluid class="pa-0" >
    <v-row class="pa-0">
      <v-col sm="12"  class="pa-0">
        <!-- <v-img ripple :src = "src" width="100%" height="100%" style="width: 100%; height: 100%; "></v-img> -->
      </v-col>
    </v-row>
  </v-container>
</template>
<script>

// let c = document.querySelector("#canvas");
//     let w = c.parentElement.clientWidth;
//     let h = c.parentElement.clientHeight;
export default {
  data () {
    return {
      src:require("~/assets/images/log3.jpg")
    }
  },
  mounted(){
    var canvas = document.querySelector(".c");
    var ctx = canvas.getContext("2d");
    // this.$refs['my-canvas'].width = this.$refs['my-canvas'].parentElement.clientWidth
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.font = 'italic 18px Arial';
    ctx.textAlign = 'center';
    ctx. textBaseline = 'middle';
    ctx.fillStyle = 'red';  // a color name or by using rgb/rgba/hex values
    ctx.fillText('Hello World!', 150, 50);
  }
}
</script>
<style scoped>

</style>
