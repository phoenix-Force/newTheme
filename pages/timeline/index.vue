<template>
    <v-container>
      <post-model :key="index" v-for="(i,index) of 6"/>
    </v-container>
</template>
<script>
import PostModel from "~/components/postContainer/postModel"
export default {
  layout:'index',
  components:{
    PostModel
  }
}
</script>
<style scoped>

</style>
