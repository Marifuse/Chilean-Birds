<template>
  <div>
    <v-app-bar
      app
      color="pink darken-1"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title> ~Chilean Birds~ </v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
        >

          <v-list-item>
            <v-btn
              text
            >
              <span class="mr-1">Iniciar Sesión</span>
              <v-icon>mdi-lock</v-icon>
            </v-btn>
          </v-list-item>

          <v-list-item>
            <v-btn
              text
              to="/home"
            >
              <span class="mr-1">Home</span>
              <v-icon>mdi-home</v-icon>
            </v-btn>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false
  }),  
}
</script>