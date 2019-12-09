<template>
  <v-container fluid>
    <v-row>
      <v-col  sm="12" md="4" id="colls" :key="index" v-for="(itr,index) of src">
        <v-img

            lazy-src="https://picsum.photos/id/11/10/6"
            :src="itr"
            class="grey lighten-2 "
            max-width="100%"
            max-height="100%"
            style="width: 100% !important;height: auto !important;"
            >
            </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  layout:'index',
  data(){
    return{
    //   images: [
    //         {
    //         title: "title 1",
    //         description: "des 1",
    //         href: require("~/assets/images/ironman.jpg"),
    //         },
    //         {
    //         title: "title 2",
    //         description: "des 2",
    //         href:require("~/assets/images/ironman.jpg")
    //         },
    // ],
      src:[require("~/assets/images/ironman.jpg"),require("~/assets/images/log3.jpg"),require("~/assets/images/log2.jpg"),require("~/assets/images/ironman.jpg"),require("~/assets/images/log.jpg")]
    }
  }

  // components:{
  //   commentContainer
  // }
}
</script>
<style  scoped>
#colls{
  display: inline;
}
</style>
