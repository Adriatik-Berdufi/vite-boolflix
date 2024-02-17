
import { reactive }  from 'vue';
import axios from 'axios';
// credenziali per la chiamata api
const apiUri = 'https://api.themoviedb.org/3/search/movie';
const apiKey = '4c1d191bb7a905f2c05cb735ff5833f5';


export const store = reactive({
    
    search:'fast and furios',
    filmList:[],
    
    searchform(){
        axios.get(apiUri,{
        params:{
            api_key: apiKey,
            query: this.search,
        }})

        .then((resp) => {
        this.filmList = resp.data.results;
        
        console.log(resp.data.results);
        console.log(this.filmList);

        });
    },
    
     
      
});
