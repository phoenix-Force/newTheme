<template>
  <v-app dark>
      <v-container app class="mx-auto">
        <v-row no-gutters>
          <v-col
            cols="12"
            sm="12"
            md="12"
          >
          <h1 class="text-center" v-if="error.statusCode === 404">
            {{ pageNotFound }}
          </h1>

          <h1 class="text-center" v-else>
            {{ otherError }}

          </h1>
          <!-- <v-btn class="mx-auto">Home</v-btn> -->
          <h6 class="text-center white--text" >Go to
            <nuxt-link to="/profile">Home</nuxt-link>
          </h6>
          <object  :data= "src" height="100%" width="100%"></object>
          </v-col>
        </v-row>

      </v-container>
  </v-app>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred',
      src:require("~/assets/images/error2.svg")
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
