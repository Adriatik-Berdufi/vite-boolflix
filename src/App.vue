<script>
import{ store } from './store';
import AppSearch from './components/AppSearch.vue';
import AppHeader from './components/AppHeader.vue';

import axios from 'axios';
 
export default {
  data() {
    
    return {
      store,
     
    }
  },


  components: { AppSearch, AppHeader },

};

</script>


<template>
  <AppHeader/>
  <div class="container mt-5">
    <div class="d-flex">
      <ul>
        <span>film</span>
        <li v-for="film in store.filmList">
          <span class="text-primary">tittolo film : {{ film.title }} </span>
        </li>
      </ul>
      <ul>
        <span>serie Tv</span>
        <li v-for="film in store.tvList">
          <span  class="text-success">tittolo serie : {{ film.original_name }} </span>
        </li>
      </ul>
    </div>
  </div>
 
  
</template>

<style lang="scss">
@use './styles/general.scss'; 
</style>
