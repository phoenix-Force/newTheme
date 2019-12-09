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
            <!-- <v-row max-height='50'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure possimus inventore, animi obcaecati odit ipsam totam aspernatur quae architecto exercitationem! Iste a maxime, soluta quae atque magnam? Nemo, consequatur neque?
            </v-row> -->
            <v-row>
              <v-col cols="12">
                <nuxt/>
                <v-row>
                  <v-col class="d-flex justify-end">
                    <v-btn class="mx-2" style="position:fixed;right:5%;bottom:5%;>Message" fab dark large color="dark">
                      <v-icon dark>mdi-message-text</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
            <!-- <v-breadcrumbs :items="items">
              <template v-slot:item="props">
                <v-breadcrumbs-item
                  :href="props.item.href"
                  :class="[props.item.disabled && 'disabled']"
                >
                  {{ props.item.text.toUpperCase() }}
                </v-breadcrumbs-item>
              </template>
            </v-breadcrumbs> -->
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
    <v-row class="d-flex justyfy-end">

    </v-row>
  </v-app>
</template>

<script>
import navBar from "~/components/Navigation"
  export default {
    data: () => ({
      drawer:true,
      footer: {
        inset: false,
      },
    }),
    components:{
      navBar
    },

  }

  // :collapse="!collapseOnScroll"
  //     :collapse-on-scroll="collapseOnScroll"
</script>
<style>

.kk{
  background-color:primary;
}
</style>
