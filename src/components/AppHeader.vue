<script>
import { store } from "../store";
import AppSearch from './AppSearch.vue';
export default {
    data() {
    return {
        store,
        
    }
    },
    components:{AppSearch}
};

</script>



<template>
    <header>
       <div class="d-flex ">
            <h1 class="me-5">BoolFlix</h1>
            <ul class="d-flex">
                <!-- Todo: abbilitare il click   -->
                <li @click="" class="me-3">Movie</li>
                <li @click="" class="me-3">Serie Tv</li>
            </ul>
       </div>

        <AppSearch class="app-search"/>
        
    </header>
</template>


<style lang="scss" scoped>
header{
    position: sticky;
    display: flex;
    justify-content: space-between;
    height: 70px;
    background-color: rgb(175, 75, 68);
    h1{ 
        margin: 0 30px;
        align-self: center;
    }
    ul{
        align-self: center;
        li{
            padding: 6px 12px;
            cursor: pointer;
        }
    }
   
}
.app-search{
    margin-right: 50px;
    align-self: center;
    width: 40%;
}
</style>