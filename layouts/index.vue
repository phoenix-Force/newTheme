<template>
  <v-app id="sandbox">

    <nav-bar></nav-bar>
    <v-content>
      <v-container fluid>
        <v-row
          align="center"
          justify="center"
        >
          <v-col cols="12">
            <nuxt/>
          </v-col>
        </v-row>
      </v-container>
    </v-content>




    <v-footer
      :inset="footer.inset"
      app
    >
      <!-- <span class="px-4">&copy; {{ new Date().getFullYear() }}</span> -->
    </v-footer>
  </v-app>
</template>

<script>
import navBar from "~/components/Navigation"
  export default {
    data: () => ({
      drawer:false,
      footer: {
        inset: false,
      },
    }),
    components:{
      navBar
    }
  }

  // :collapse="!collapseOnScroll"
  //     :collapse-on-scroll="collapseOnScroll"
</script>
<style>

.kk{
  background-color:primary;
}
</style>
