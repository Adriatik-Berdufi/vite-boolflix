
import { reactive }  from 'vue';
import axios from 'axios';
// credenziali per la chiamata api
const apiUri = 'https://api.themoviedb.org/3/search/multi';
const apiKey = '4c1d191bb7a905f2c05cb735ff5833f5';


export const store = reactive({
    currentPage:1,
    search:'fast',
    filmList:[],
    tvList:[],
    allList:[],
    nextPage(){
        this.currentPage ++;
        console.log('CURRENTPAGE: '+this.currentPage);
        this.searchform();
    },
    searchform(){
        axios.get(apiUri,{
        params:{
            api_key: apiKey,
            query: this.search,
            page:this.currentPage
        }})

        .then((resp) => {
            this.allList = resp.data.results;
            this.filmList = this.allList.filter((type)=> type.media_type == 'movie'); 
            this.tvList = this.allList.filter((type)=> type.media_type == 'tv'); 


            
            console.log(resp.data.results);
            console.log(resp.data.total_pages);
            console.log(resp.data.total_results);


        console.log(this.filmList);

        });
    },
    
     
      
});
