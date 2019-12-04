<template>
  <v-container fluid class="pa-0" wrap>
    <v-row  style="max-height:60px;">


      <v-col cols="3">
        <v-container>
          <v-row>
            <span class="my-auto">{{like}}</span>
            <v-btn text icon class ="indigo--text darken-2 mx-auto"   v-if="liked">
              <v-icon>mdi-thumb-up</v-icon>
            </v-btn>

            <v-btn text icon class ="indigo--text darken-2 mx-auto" v-else>
              <v-icon class="mx-auto">mdi-thumb-up-outline</v-icon>
            </v-btn>
          </v-row>
        </v-container>
      </v-col>


      <v-col cols="3">
        <v-container>
          <v-row>
            <v-btn text icon class="indigo--text darken-2 mx-auto " v-if="disliked" >
              <v-icon>
                mdi-thumb-down
              </v-icon>
            </v-btn>

            <v-btn text icon class="indigo--text darken-2 mx-auto " v-else >
              <v-icon>
                mdi-thumb-down-outline
              </v-icon>
            </v-btn>
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
      liked:true,
      disliked:true,
      commented:false,
    }
  }
}
</script>
<style scoped>

</style>
