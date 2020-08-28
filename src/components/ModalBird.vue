<template>
  <div>
    <v-dialog v-model="dialog" width="500">
      <v-card v-if="bird.images">
        <v-card-title class="headline grey lighten-2">
          {{ bird.uid }}
        </v-card-title>
        <v-img :src="bird.images.main" height="500px"></v-img>
        <v-card-text>
          {{ bird.didyouknow }}
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="closeDialog()">
            Cerrar Cuadro
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    dialog: {
      type: Boolean,
      default: false,
    },
    bird: {
      type: Object,
      required: true,
    },
  },
  methods: {
    closeDialog() {
      this.$emit("close-dialog");
    },
  },
};
</script>

<style>
</style>