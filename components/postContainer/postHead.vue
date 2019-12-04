<template>
  <v-container warp fluid class="pa-0">
    <v-row class="pa-0">
      <v-col cols="2">
        <v-img
          :src="src"
          style="height:100%;weight:100%;"
        >
        </v-img>
      </v-col>
      <v-col cols="9">
        <h1>Paradox</h1>
        <h5 class="text--right">Date and time</h5>
      </v-col>
      <v-col cols="1">
        <v-row>
          <v-btn class="ma-auto" style="height:100%;width:100%">
            <v-icon>
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
  data(){
    return{
      src:require("~/assets/images/log3.jpg")
    }
  }

}
</script>
<style scoped>

</style>
