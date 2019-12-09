<template  >
  <v-container fluid class="pa-0">
    <v-row >
      <v-col cols="12" md="6" >
        <v-img
          :src="src"
          :lazy-src="src"
          aspect-ratio="16/9"
          class="grey lighten-2"
          max-width="100%"
          max-height="100%"
          style="height:100%;width:100%;border-radius:20px;"
        ></v-img>
      </v-col>
      <v-col cols="12" md="6">
        <v-row>
          <v-col cols="8">
            <h1 >Paradox (<span>tufan</span>)</h1>
            <h5><span><v-icon>mdi-map-marker</v-icon></span>Kolkata</h5>
            <h6><span><v-icon>mdi-cellphone</v-icon></span> 8116927786</h6>
            <h6><span><v-icon>mdi-email</v-icon></span> Paradox.joe.007@gmail.com</h6>

          </v-col>
          <v-col cols="4" class="d-flex justify-center">
            <v-btn>
              <span style="font-size:20px;">+</span>follow
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="2" >
            About
          </v-col>
          <v-col cols="12" md="10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores hic voluptate unde. Recusandae vel magnam dignissimos hic pariatur incidunt, et iure odit nam. Voluptatum repellat, velit eligendi quisquam saepe eveniet!
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" d-flex justify-space-between>
            <v-btn>a</v-btn>
            <v-btn>a</v-btn>
            <v-btn>a</v-btn>
            <v-btn>a</v-btn>
            <v-btn>a</v-btn>
            <v-btn>a</v-btn>
            <v-btn>a</v-btn>
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
      src:require("~/assets/images/ironman.jpg")
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
