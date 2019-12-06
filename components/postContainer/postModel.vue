<template>
  <v-container >
    <v-row>
      <v-col cols="12">
        <postHead :user="post.user"/>
        <v-col cols="12">
          {{post.caption}}
        </v-col>
        <vascan :dtls="post.details"/>
        <post-footer @cmntclick = "isClickComment = $event"></post-footer>
      </v-col>
      <v-row style="height:250px;overflow-y:scroll;overflow-x:hidden;" id = "scrl" v-if="isClickComment">
        <v-col cols="12">
          <commentContainer :key="index" v-for="(zz,index) of post.disscussion" :userdiss = "zz" />
        </v-col>
        <v-row>
          <v-col cols="8" md="10">
            <v-textarea

              prepend-icon="mdi-comment"
              placeholder="Comments here"
            ></v-textarea>
          </v-col>
          <v-col cols="4" md="2" class="d-flex align-end mb-3">
            <v-btn >sumbit</v-btn>
          </v-col>
        </v-row>
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
      isClickComment:false,
      // disscussion:[
      //         {
      //           user:{
      //             name:"paradox",
      //             id:1,
      //             location:"kolkata",
      //             time:"12/10/19",
      //             profilePic:require("~/assets/images/log3.jpg"),
      //           },
      //           msg:"lorem ipsum"
      //         },
      //         {
      //           user:{
      //             name:"Pi",
      //             id:2,
      //             location:"kolkata",
      //             time:"12/10/19",
      //             profilePic:require("~/assets/images/log3.jpg"),
      //           },
      //           msg:"lorem ipsum khsihdn"
      //         }
      //       ]
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
#scrl::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgb(255, 255, 255);
	border-radius: 10px;
	background-color: rgba(0, 0, 0, 0.096);;
}

#scrl::-webkit-scrollbar
{
	width: 12px;
	background-color:rgba(255, 0, 0, 0);
}

#scrl::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.377);
	background-color: rgb(73, 2, 2);
}
</style>
