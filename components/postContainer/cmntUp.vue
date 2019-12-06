<template>
  <v-container fluid class="mt-5" :class="getUserId == userdiss.user.id ?'usr':'other'"  wrap style="-webkit-box-shadow: 5px 3px 12px 3px rgba(0,0,0,0.63); box-shadow: 5px 3px 12px 3px rgba(0,0,0,0.63);">
  <v-row class="d-flex " style="max-height:100px;" v-if="getUserId===userdiss.user.id">
    <v-col cols="8" md="11" style="text-align:right">
        <h3>{{userdiss.user.name}}</h3>
        <h6>{{userdiss.user.location}}</h6>
        <h6 style="margin-top:4px;">{{userdiss.user.time}}</h6>
      </v-col>

      <v-col cols="4" md = "1" class="align-self-start" >
        <v-img
          class="d-flex justyfy-end"
          :src="src"
          size="80"
          height="80px"
          width="80px"
        >
        </v-img>
      </v-col>
    </v-row>

    <v-row class="d-flex " style="max-height:100px;" v-else >
      <v-col cols="4" md = "1" class="align-self-start" >
        <v-img
          class="d-flex justyfy-end"
          :src="userdiss.user.profilePic"
          size="80"
          height="80px"
          width="80px"
        >

        </v-img>
      </v-col>
      <v-col cols="" >
        <h3>{{userdiss.user.name}}</h3>
        <h6>{{userdiss.user.location}}</h6>
        <h6 style="margin-top:4px;">{{userdiss.user.time}}</h6>
      </v-col>
    </v-row>

    <v-row style="margin-top:1%;" :class="getUserId == userdiss.user.id ?'usr':'other'" >
      <h5 class="cmnt-txt" style="margin-left:9%;">{{userdiss.msg}}</h5>
    </v-row>
  </v-container>

</template>
<script>
export default {
  props:['userdiss'],
  data(){
    return{
      src:require("~/assets/images/log3.jpg"),
      getUserId:2,

    }
  }
}
</script>
<style scoped>
@media only screen and (max-width: 600px) {
  .cmnt-txt{
    margin-left:33%;
  }
}
.usr{
  text-align: right;
  background-color: rgba(83, 53, 250, 0.322);

}
.other{
  text-align: left;
  background-color: rgba(70, 181, 255, 0.219);
}
</style>
