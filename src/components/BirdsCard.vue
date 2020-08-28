<template>
  <div>
    <header class="header__container">
      <h1>Chilean Birds</h1>
      <h3>Bienvenid@ al Mundo de las Aves Chilenas</h3>  
      <v-text-field class="search mt-10 pl-3 pr-3" label='Buscador de Aves Chilenas' 
        prepend-icon='mdi-magnify'
        color="pink darken-1"
        v-model="search"
      />
    </header>
    <v-row>
      <v-col v-for="bird in computedBirds" :key="bird.uid" cols="12" lg="4" md="6" class="mt-10 mb-10">
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
        search: ""
      }
    },
    components: {
      ModalBird,
    },
    computed: {
      ...mapState(['birds', 'currentBird']),
      computedBirds() {
      return this.birds.filter((bird) => {
        return (
          bird.name.english.toLowerCase().includes(this.search.toLowerCase()) ||
          bird.name.spanish.toLowerCase().includes(this.search.toLowerCase()) ||
          bird.name.latin.toLowerCase().includes(this.search.toLowerCase())
          )
        })
      }
    },
    methods: {
      ...mapActions(['getBirds', 'setCurrentBird']),
        displayDialog(bird) {
        this.setCurrentBird(bird._links.self);
        this.dialog = true;
      }
    },
    created() {
      this.getBirds()
    }
  }
</script>

<style>
.header__container {
  background-color: pink;
  color: rgb(248, 7, 139);
  text-align: center;
  padding: 5em;
} 
.search {
  width: 30em;
  margin: auto;
  background-color: #FFF;
  border-radius: 2em;
}
</style>