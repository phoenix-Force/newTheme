<template>
  <v-container>
    <!-- <snow/> -->
    <login />
  </v-container>
</template>
<script>
import login from "~/components/login"
import snow from "~/components/Snowfall"
export default {
  layout:'login',
  name: '',
  data () {
    return {
    }
  },
  components:{
    login,
    snow
  }
}
</script>
<style scoped>

</style>
