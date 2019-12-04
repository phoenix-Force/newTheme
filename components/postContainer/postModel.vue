<template>
  <v-container >
    <v-row>
      <v-col cols="12">
        <postHead/>
        <v-col cols="12">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae maxime laborum exercitationem a, deserunt blanditiis quas nobis ea, qui totam commodi repudiandae, deleniti dolores temporibus cum repellendus quidem ipsa. Molestias!
        </v-col>
        <vascan/>
        <post-footer></post-footer>
      </v-col>
    </v-row>
  </v-container>

</template>
<script>
import vascan from "./vascan"
import postHead from "./postHead"
import postFooter from "./cmntUp"
export default {
  components:{
    vascan,
    postFooter,
    postHead
  }
}
</script>
<style scoped>

</style>
