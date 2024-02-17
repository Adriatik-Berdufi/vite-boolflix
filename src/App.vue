<script>
import{ store } from './store';
import AppTest from './components/AppTest.vue';
import axios from 'axios';
 
export default {
  data() {
    
    return {
      store,
     
    }
  },


  components: { AppTest },

};

</script>


<template>
  <div class="container mt-5">
    <div class=" d-flex">
      <input type="text" class="form-control" v-model="store.search">
      <button @click="store.searchform()" class="btn btn-primary">cerca</button>
      <button @click="store.nextPage()" class="btn btn-success">next page</button>
    </div>

    <ul>
      
      <li v-for="film in store.filmList">
        <span class="text-primary" v-if="film.media_type == 'movie'">tittolo film : {{ film.title }} tipo:{{film.media_type}}</span>
        <span class="text-success" v-if="film.media_type == 'tv'">tittolo serie : {{ film.original_name }} tipo:{{film.media_type}}</span>

      </li>
    </ul>
  </div>
  <AppTest/>
  
</template>

<style lang="scss">
@use './styles/general.scss'; 
</style>
