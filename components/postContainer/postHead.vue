<template>
  <v-container warp fluid class="pa-0">
    <v-row class="pa-0">

      <v-col cols="5" md="2" >
        <v-img
          :src="user.profilePic"
          style="height:100%;weight:100%;"
          :aspect-ratio="16/9"
        >
        </v-img>
      </v-col>
      <v-col cols="6" md="9">
        <h1>{{user.name}}</h1>
        <h5 class="text--right">{{user.time}}</h5>
        <h5 class="text--right">{{user.location}}</h5>
      </v-col>
      <v-col cols="1">
        <v-row>
          <v-btn text icon class="ma-auto"  @click = "saving()">
            <v-icon :style="stl">
              mdi-bookmark
            </v-icon>
          </v-btn>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  props:['user'],
  data(){
    return{
      src:require("~/assets/images/log3.jpg"),
      saved:false,
      stl:{
        fontSize:null,
        fontColor:null
      }
    }
  },
  methods:{
    saving(){
      if(this.saved){
        this.saved = false;
        console.log("unsave")
        this.stl={
          fontSize: `25px`,
          fontColor:'red',
        }
      }
      else{
        console.log("save")
        this.saved = true;
        this.stl={
          fontSize: `40px`,
          color:'red',
        }
      }
    }
  }

}
</script>
<style scoped>

</style>
