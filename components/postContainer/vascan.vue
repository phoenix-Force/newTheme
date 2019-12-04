<template>
  <v-container fluid class="pa-0" >
    <v-row class="pa-0">
      <v-col sm="12"  class="pa-0">
        <v-img ripple :src = "src" width="100%" height="100%" style="width: 100%; height: 100%; "></v-img>
        <!-- <canvas width="100%" height="100%" style="width: 100%; height: 100%; " class="c"></canvas> -->
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
    // var c = document.querySelector(".c");
    // var ctx = c.getContext("2d");
    // // this.$refs['my-canvas'].width = this.$refs['my-canvas'].parentElement.clientWidth
    // let bg = new Image();
    // bg.src =
    // ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
    // console.log(bg);
    // ctx.drawImage(bg, 0, 0);
  }
}
</script>
<style scoped>

</style>
