<template>
  <v-container >
    <v-row>
      <v-col cols="12">
        <postHead :user="post.user"/>
        <v-col cols="12">
          {{post.caption}}
        </v-col>
        <!-- <vascan :dtls="post.details"/> -->
        <post-footer></post-footer>
      </v-col>
      <v-row style="height:250px;overflow-y:scroll">
        <commentContainer :key="index" v-for="(zz,index) of disscussion" :userdiss = "zz" />
      </v-row>
    </v-row>
  </v-container>

</template>
<script>
import vascan from "./vascan"
import postHead from "./postHead"
import postFooter from "./postFooter"
import commentContainer from "./cmntUp"

export default {
  props:['post'],
  data(){
    return{
       disscussion:[
              {
                user:{
                  name:"paradox",
                  id:1,
                  location:"kolkata",
                  time:"12/10/19",
                  profilePic:require("~/assets/images/log3.jpg"),
                },
                msg:"lorem ipsum"
              },
              {
                user:{
                  name:"Pi",
                  id:2,
                  location:"kolkata",
                  time:"12/10/19",
                  profilePic:require("~/assets/images/log3.jpg"),
                },
                msg:"lorem ipsum khsihdn"
              }
            ]
    }
  },
  components:{
    vascan,
    postFooter,
    postHead,
    commentContainer
  }
}
</script>
<style scoped>

</style>
