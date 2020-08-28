<template>
  <div>
    <v-row>
      <v-col v-for="bird in birds" :key="bird.uid" cols="12" lg="4" md="6" class="mt-10">
        <v-hover
          v-slot:default="{ hover }"
          open-delay="200"
        >
          <v-card
            class="mx-auto text-center"
            max-width="400"
            :elevation="hover ? 16 : 2"
          >
            <v-img class="white--text align-end" height="500px" :src="bird.images.main">
            </v-img>
            <h2>{{ bird.name.spanish }}</h2>
            <v-btn color="pink" text class="mt-5 mb-5">
              Información
            </v-btn>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
    <modal-bird
      :dialog="dialog"
      :bird="currentBird"
      @close-dialog="dialog = false"
    ></modal-bird>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import ModalBird from './ModalBird'
  export default {
    data() {
      return {
        dialog: false,
      };
    },
    components: {
      ModalBird,
    },
    computed: {
      ...mapState(['birds']),
    },
    methods: {
      ...mapActions(['getBirds', 'setCurrentBird']),
        displayDialog(bird) {
        this.setCurrentBird(bird._links.self);
        this.dialog = true;
      },
    },
    created() {
      this.getBirds()
    }
  }
</script>

<style>

</style>