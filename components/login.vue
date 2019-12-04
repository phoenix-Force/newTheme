<template>
<v-card class="mx-auto my-3" elevation="10">
  <v-card-title>
    <!-- <object :data="src" type="" class="mx-auto zz"></object> -->
    <h1 class="ma-auto">Login</h1>
  </v-card-title>
  <v-card-text>
    <v-form>
      <v-text-field
      label="Username"
      v-model="user.email"
      prepend-icon="mdi-account-circle"
      class="transparent"
      >
      </v-text-field>

      <v-text-field
      label="Password"
      v-model="user.password"
      :type="indicator ?'text':'password'"
      prepend-icon="mdi-lock"
      :append-icon="indicator ?'mdi-eye':'mdi-eye-off'"
      @click:append="indicator = !indicator"
      class="transparent"
      >
      </v-text-field>

    </v-form>
    <v-card-actions>
      <v-btn class="primary" @click.prevent="signin()">
        Login
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn class="success">
        Signup
      </v-btn>
    </v-card-actions>
  </v-card-text>
</v-card>
</template>

<script>
import firebase from "firebase"
import axios from "axios"
export default {
  data(){
    return{
      user:{
        email:null,
        password:null
      },
      indicator:false,
      src:require("~/assets/images/pic.svg")
    }
  },
  methods:{
    show(){
      this.indicator = !this.indicator
      console.log(this.indicator)
    },
    signin(){
      axios.auth().signInWithEmailAndPassword(this.user.email,this.user.password)
      .then(Response=>{
        console.log(Response)
      })
      .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      });
    }
  }

}
</script>



<style scoped>
.inpt{
  background-color: transparent;
}
.zz{
  height:10%;
  width:10%;

}
</style>


