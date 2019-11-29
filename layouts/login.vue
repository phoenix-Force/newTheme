<template>
<v-app class="dark">
    <v-container app >

    <nuxt/>
    <object :data="src" type=""></object>
  </v-container>
</v-app>
</template>
<script>

export default {
  name: '',
  data () {
    return {
      src:require("~/assets/images/login.svg")
    }
  }
}
</script>
<style scoped>

</style>
