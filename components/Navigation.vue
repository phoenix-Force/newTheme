<template>
  <v-container >
    <v-navigation-drawer
      v-model="drawer"
      app
      overflow

      >
      <v-img
        v-ripple = "{class:`white--text`}"
        :src="user.dp"
        gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"

      >

      <v-row align="end" class="lightbox white--text pa-3 fill-height">
          <v-col>
            <div class="subheading xx" >{{user.name}}</div>
            <div class="body-1">paradox@gmail.com</div>
          </v-col>
        </v-row>
      </v-img>
      <v-list class="mt-1">
            <v-list-item v-for="(menu,index) in menus" ripple :key= "index" router :to = "menu.route">
              <v-list-item-action>
                <v-icon class="">{{menu.icon}}</v-icon>
              </v-list-item-action>
              <v-list-item-title>
                {{menu.name}}
              </v-list-item-title>
              <v-divider></v-divider>
            </v-list-item>
          </v-list>
      <v-spacer >

      </v-spacer>

    </v-navigation-drawer>



    <v-app-bar
      absolute
      app
    >
      <v-app-bar-nav-icon
        @click.stop="drawer = ! drawer"
      />
      <v-toolbar-title>
        <span class="font-weight-light ">para</span>
        <span class="">dox</span>
      </v-toolbar-title>
      <v-spacer>

      </v-spacer>

      <v-switch
        v-model="$vuetify.theme.dark"
          primary
          label="Dark"
          class="float-right my-auto text--center"
      />
      <v-badge>
        <template v-slot:badge>0</template>
        <v-icon>mdi-bell-ring</v-icon>
      </v-badge>
    </v-app-bar>
  </v-container>
</template>
<script>
export default {
  data: () => ({
      // drawers: ['Default (no property)', 'Permanent', 'Temporary'],
      drawer:true,
      // primaryDrawer: {
      //   model: null,
      //   type: 'default (no property)',
      //   clipped: false,
      //   floating: false,
      //   mini: false,
      // },
      footer: {
        inset: false,
      },
      menus:[
        {name:'Home',icon:'mdi-home',route:'/profile'},
        {name:'profile',icon:'mdi-account',route:'/profile'},
        {name:'Gallery',icon:'mdi-panorama',route:'/gallery'},
        {name:'Timeline',icon:'mdi-chart-timeline',route:'/timeline'},
        {name:'Dashboard',icon:'mdi-view-dashboard',route:'/dashboard'},
        {name:'Home',icon:'mdi-home',route:'/'},
        {name:'Home',icon:'mdi-home',route:'/'},
        {name:'Home',icon:'mdi-home',route:'/'},
      ],
      user:{
        name:'Paradox',
        dp:"https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
      }


    }),
    // methods: {
    //   swipe (direction) {
    //     console.log(direction);
    //   },
    // },
}
// v-touch="{
//         left: () => swipe('Left'),
//         right: () => swipe('Right'),
//         up: () => swipe('Up'),
//         down: () => swipe('Down')
//       }"
</script>
<style scoped>
.xx{
  font-family: 'Courgette', cursive;
}
</style>
