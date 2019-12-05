<template>
  <v-container >
    <v-row>
      <v-col cols="12">
        <postHead/>
        <v-col cols="12">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae maxime laborum exercitationem a, deserunt blanditiis quas nobis ea, qui totam commodi repudiandae, deleniti dolores temporibus cum repellendus quidem ipsa. Molestias!
        </v-col>
          <text-container/>
        <post-footer></post-footer>
      </v-col>
    </v-row>
  </v-container>

</template>
<script>
import textContainer from "./textContainer"
import postHead from "./postHead"
import postFooter from "./postFooter"
export default {
  components:{
    textContainer,
    postFooter,
    postHead
  }
}
</script>
<style scoped>

</style>
