<template>
    <v-container>
      <v-row  :key="i" v-for="(itr,i) in timeline" >
        <post-model :post="itr.post"/>
        <!-- {{itr}} -->
      </v-row>
    </v-container>
</template>
<script>
import PostModel from "~/components/postContainer/postModel"
import PostText from "~/components/postContainer/textModel"
export default {
  layout:'index',
  components:{
    PostModel,
    PostText
  },
  data(){
    return{
      timeline:[
        {
          post:{
            details:{
              pt:"image",
              imageSrc:require("~/assets/images/log3.jpg"),
            },
            id:1,
            caption:"lorem ipsum is the best article that i have ever seen in my entire life",
            user:{
              name:"paradox",
              id:1,
              location:"kolkata",
              time:"12/10/19",
              profilePic:require("~/assets/images/log3.jpg"),
            },
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
        {
          post:{
            details:{
              pt:"text",
              imageSrc:require("~/assets/images/log3.jpg"),
            },
            id:1,
            caption:"lorem ipsum is the best article that i have ever seen in my entire life",
            user:{
              name:"paradox",
              id:1,
              location:"kolkata",
              time:"12/10/19",
              profilePic:require("~/assets/images/log3.jpg"),
            },
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

        }
      ],
    }
  },
}
</script>
<style scoped>

</style>
