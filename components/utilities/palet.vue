<template>
    <v-card
    class="mx-auto rounded-card"
    max-width="344"
    min-height="120"
    v-ripple
    outlined
    >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">OVERLINE</div>
        <v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>
        <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
      </v-list-item-content>

      <!-- <v-img
        style="margin-top:25px;"
        :src="dp"
      >

      </v-img> -->

      <v-list-item-avatar
        tile
        size="80"

        style="margin-top:25px;"
      >
      <v-img
        style="height:100%;weight:100%;"
        :aspect-ratio="16/9"
        tile
        :src="src"
        size="80"
      >

      </v-img>


      </v-list-item-avatar>

    </v-list-item>
<!--
    <v-card-actions>
      <v-btn text>Button</v-btn>
      <v-btn text>Button</v-btn>
    </v-card-actions> -->
  </v-card>
</template>
<script>
export default {
  data(){
    return{
      src:require("~/assets/images/log3.jpg")
    }
  }
  // props:{
  //   header,
  //   title,
  //   content,
  //   image
  // }

}
</script>
<style scoped>

</style>
