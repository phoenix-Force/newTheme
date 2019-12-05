<template>
  <v-container fluid class="pa-0" wrap>
    <v-row  style="max-height:60px;">


      <v-col cols="3">
        <v-container>
          <v-row>
            <span class="my-auto txt">{{like}}</span>
            <v-menu open-on-hover top offset-y v-if="liked">
              <template v-slot:activator="{ on }">

                <v-btn
                  text icon
                  v-on="on"
                  class ="indigo--text darken-2 mx-auto"
                  @click="likes()"
                  >
                    <v-icon>mdi-thumb-up</v-icon>
                </v-btn>
              </template>

              <v-list class="lst">
                <v-list-item
                  v-for="(item, index) in likeslist"
                  :key="index"
                >
                  <v-list-item-title @click="chk(item)" >{{ item }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>


            <v-menu open-on-hover top offset-y  v-else>
              <template v-slot:activator="{ on }">

                <v-btn
                text icon
                class ="indigo--text darken-2 mx-auto"
                v-on="on"
                @click="likes()">

                  <v-icon class="mx-auto">mdi-thumb-up-outline</v-icon>
                </v-btn>
              </template>

              <v-list class="lst" >
                <v-list-item
                  v-for="(item, index) in likeslist"
                  :key="index"
                >
                  <v-list-item-title  @click="chk(item)"> {{ item }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>

          </v-row>
        </v-container>
      </v-col>


      <v-col cols="3">
        <v-container>
          <v-row>
            <span class="my-auto">{{dislike}}</span>
            <v-menu open-on-hover top offset-y  v-if="disliked">
              <template v-slot:activator="{ on }">

                <v-btn
                  text icon
                  v-on="on"
                  class ="indigo--text darken-2 mx-auto"
                  @click="dislikes"
                  >
                    <v-icon >
                      mdi-thumb-down
                    </v-icon>
                </v-btn>
              </template>

              <v-list class="lst">
                <v-list-item
                  v-for="(item, index) in dislikeslist"
                  :key="index"
                >
                  <v-list-item-title @click="chk(item)">{{ item }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>


            <v-menu open-on-hover top offset-y  v-else>
              <template v-slot:activator="{ on }">

                <v-btn
                text icon
                class ="indigo--text darken-2 mx-auto"
                v-on="on"
                @click="dislikes">

                  <v-icon class="mx-auto">mdi-thumb-down-outline</v-icon>
                </v-btn>
              </template>

              <v-list class="lst">
                <v-list-item
                  v-for="(item, index) in dislikeslist"
                  :key="index"
                >
                  <v-list-item-title @click="chk(item)"> {{ item }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-row>
        </v-container>
      </v-col>


      <v-col cols="3">
        <v-container>
          <v-row>
            <v-btn text icon class="indigo--text darken-2 mx-auto" v-if="commented">
              <v-icon>
                mdi-comment-multiple
              </v-icon>
            </v-btn>

            <v-btn text icon class="indigo--text darken-2 mx-auto" style="margin-left:40%;" v-else >
              <v-icon>
                mdi-comment-multiple-outline
              </v-icon>
            </v-btn>
          </v-row>
        </v-container>
      </v-col>


      <v-col cols="3">
        <v-container>
          <v-row>
            <v-btn class="mx-auto red--text" >
              <v-icon>
                mdi-share
              </v-icon>
            </v-btn>
          </v-row>
        </v-container>
      </v-col>







      <!-- <div class="justify-space-between">
        <v-btn text icon>
          <v-icon>
          </v-icon>
        </v-btn>
      </div> -->
    </v-row>
  </v-container>
</template>
<script>
export default {
  data(){
    return{
      like:100,
      dislike:60,
      comments:78,
      liked:false,
      disliked:false,
      commented:false,
      likeslist:[
        "jack",
        "vish"
      ],
      dislikeslist:[
        "paradox",
        "dox"
      ]
    }
  },
  methods:{
    likes(){
      if(this.liked){
        this.like--;
        this.liked=false
      }else{
        this.like++;
        this.liked=true;
        if(this.disliked){
          this.dislike--;
          this.disliked=false;
        }
      }
    },
    dislikes(){
      if(this.disliked){
        this.dislike--;
        this.disliked=false
      }else{
        this.dislike++;
        this.disliked=true;
        if(this.liked){
          this.like--;
          this.liked=false;
        }
      }
    },
    chk(x){
      console.log(x)
    }




  }
}
</script>
<style scoped>
@media only screen and (max-width: 600px) {
  .txt{
    margin-left:-20px;
  }


}
.lst{
    min-width: 100px;
    cursor: pointer;
  }

</style>
