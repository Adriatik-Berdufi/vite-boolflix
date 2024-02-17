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
    </div>

    <ul>
      
      <li v-for="film in store.filmList">
        {{ film.title}}
      </li>
    </ul>
  </div>
  <AppTest/>
  
</template>

<style lang="scss">
@use './styles/general.scss'; 
</style>
