<template  >
  <v-container fluid>
    <v-row >
      <v-col cols="12" md="6" >
        <v-img
          :src="src"
          :lazy-src="src"
          aspect-ratio="16/9"
          class="grey lighten-2"
          max-width="100%"
          max-height="100%"
          style="height:100%;width:100%"
        ></v-img>
      </v-col>
      <v-col cols="12" md="6">
        <v-row>
          <v-col cols="8">
            <h1 >Paradox (<span>tufan</span>)</h1>
            <h4><span><v-icon>mdi-map-marker</v-icon></span>Kolkata</h4>
          </v-col>
          <v-col cols="4">
            <v-btn>
              follow
            </v-btn>
          </v-col>
        </v-row>

      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  layout:'index',

  name: '',
  data () {
    return {
      src:require("~/assets/images/error2.svg")
    }
  }
}
</script>
<style scoped>
.profile{
  background-image: url("../../assets/images/ftr/back12.png");
    background-position: center;
        background-repeat:  no-repeat;
        background-attachment: fixed;
        background-size:auto;
        height: 100vh;
}
</style>
