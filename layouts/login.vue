<template>
<v-app class="dark" :style="cssProps">
    <v-container app >
      <!-- <v-row>
        <v-col cols="12" md="12"  class="mx-auto">
          <object :data="src" height="100%" width="100%" type=""></object>
        </v-col>
      </v-row> -->
      <v-row>
        <v-col cols="12" md="6" class="mx-auto">
          <nuxt class="logfrm"/>
        </v-col>
      </v-row>

  </v-container>
</v-app>
</template>
<script>

export default {
  name: '',
  data () {
    return {
      cssProps: {
          backgroundImage: `url(${require('~/assets/images/log3.jpg')})`,
          backgroundPosition: `center`,
          backgroundRepeat: `no-repeat`,
          backgroundSize: `cover`,
        }
    }
  }
}
</script>
<style scoped>
.logfrm{
  margin-top:30%;
}
</style>
