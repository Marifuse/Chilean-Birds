<template>
  <div>
    <header class="header__container">
      <h1>Chilean Birds</h1>
      <v-text-field class="search mt-10 pl-3 pr-3" label='Buscador de Aves Chilenas' 
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
  background-color: #FFF;
  border-radius: 2em;
}

</style>