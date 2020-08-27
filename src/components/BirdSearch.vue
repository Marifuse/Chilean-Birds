<template>
  <div>
    <header class="header__container">
      <h1>Chilean Birds</h1>
      <v-text-field class="search pt-10" label='Buscador de Aves Chilenas' 
        prepend-icon='mdi-magnify'
        color="pink darken-1"
      />
    </header>
  </div>
</template>

<script>
export default {

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
}

</style>