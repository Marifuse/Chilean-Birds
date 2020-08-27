<template>
  <div>
    <v-row>
      <v-col v-for="bird in birds" :key="bird.id" cols="12" lg="4" md="6">
        <v-hover
          v-slot:default="{ hover }"
          open-delay="200"
        >
          <v-card
            class="mx-auto text-center"
            max-width="400"
            :elevation="hover ? 16 : 2"
          >
            <v-img class="white--text align-end" height="200px" :src="bird.data.images.main">
            </v-img>
            <h2>{{ bird.data.name.spanish }}</h2>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
  export default {
     computed: {
      ...mapState(['bird']),
    },
    methods: {
      ...mapActions(['getBird']),
    },
  }
</script>
<style>

</style>