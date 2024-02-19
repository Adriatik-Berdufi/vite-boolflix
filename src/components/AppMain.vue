<script>
import { store } from "../store";
import AppCard from "./AppCard.vue";
export default {
    data() {
    return {
        store,
        
    }
    },
    components:{AppCard}
};

</script>
<template>
    <div class="container mt-5">
        
        <section class="movie">
            <span>film</span>
            <ul>
                <li v-for="film in store.filmList">
                    <AppCard :filmData="film"/>
                </li>
            </ul>
        </section>
            <section class="serie-tv">
            <span>serie Tv</span>
            <ul>
                <li v-for="serie in store.tvList">
                    <AppCard :filmData="serie"/>
                    <!-- <span  class="text-success">tittolo serie : {{ film.original_name }} </span> -->
                </li>
            </ul>
        </section>
  </div>
</template>

<style scoped>

</style>