<script>
import{ store } from './store';
import AppSearch from './components/AppSearch.vue';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

import axios from 'axios';
 
export default {
  data() {
    
    return {
      store,
     
    }
  },


  components: { AppSearch, AppHeader, AppMain },

};

</script>


<template>
  <AppHeader/>
  
  <AppMain/>
 
  
</template>

<style lang="scss">
@use './styles/general.scss'; 
</style>
