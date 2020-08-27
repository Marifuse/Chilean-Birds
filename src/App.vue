<template>
  <div>
    <v-app>
      <app-bar/>
      <v-container>
        <v-row>
          <v-col cols="12" sm="10" md="8">
          <!-- Falta hacerlo funcionar -->
          <!-- <v-overlay :value="loading">
            <v-progress-circular indeterminate size="64"></v-progress-circular>
          </v-overlay> -->
          </v-col>
        </v-row>
      </v-container>
      <router-view/>
      <Footer/>
    </v-app>
  </div>
</template>

<script>
import AppBar from './components/AppBar'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    AppBar,
    Footer
  }
}
</script>