<template>
  <v-container fluid >
    <v-row justify="space-around">
        <v-btn text icon class ="indigo--text darken-2" v-if="liked">
          <span>Hellow</span>
          <v-icon>mdi-thumb-up</v-icon>
        </v-btn>

        <v-btn text icon class ="indigo--text darken-2" else>
          <span>100</span >
          <v-icon class="mx-auto">mdi-thumb-up-outline</v-icon>
        </v-btn>

        <v-btn text icon class="indigo--text darken-2 " v-if="disliked" >
          <v-icon>
            mdi-thumb-down
          </v-icon>
        </v-btn>

        <v-btn text icon class="indigo--text darken-2 " else >
          <v-icon>
            mdi-thumb-down-outline
          </v-icon>
        </v-btn>

        <v-btn text icon class="indigo--text darken-2" v-if="commented">
          <v-icon>
            mdi-comment-multiple
          </v-icon>
        </v-btn>
        <v-btn text icon class="indigo--text darken-2" else >
          <v-icon>
            mdi-comment-multiple-outline
          </v-icon>
        </v-btn>
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
  name: '',
  data () {
    return {
      like:100,
      dislike:60,
      comments:78,
      liked:false,
      disliked:false,
      commented:false,
    }
  }
}
</script>
<style scoped>
.btnico:hover{
  font-size: 35px;
  animation: heartBeat 2s infinite;
}
</style>
<script>
export default {

}
</script>
