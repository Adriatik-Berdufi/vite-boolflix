<script>
import{store} from './store';
import AppTest from './components/AppTest.vue';
import axios from 'axios';
 
export default {
  data() {
    
    return {
      store,
      search:'fast and furios',
      filmList:[],
    }
  },


  components: { AppTest },
  methods:{
    searchform(){
      axios.get('https://api.themoviedb.org/3/search/movie', 
      
      {
        params:{
          api_key:'4c1d191bb7a905f2c05cb735ff5833f5',
          query: this.search,
        }
        
      }
      
      )
      .then((resp) => {
        this.filmList = resp.data.results;
        
        console.log(resp.data.results);
        console.log(this.filmList);

      });
    },

  },
    
};

</script>


<template>
  <div class="container mt-5">
    <div class=" d-flex">
      <input type="text" class="form-control" v-model="search">
      <button @click="searchform()" class="btn btn-primary">cerca</button>
    </div>

    <ul>
      <li v-for="film in filmList">
        {{ film.title}}
      </li>
    </ul>
  </div>
  <AppTest/>
  
</template>

<style lang="scss">
@use './styles/general.scss'; 
</style>
