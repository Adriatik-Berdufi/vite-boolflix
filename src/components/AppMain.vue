<script>
import { store } from "../store";
export default {
    data() {
    return {
        store,
        
    }
    },
};

</script>
<template>
    <div class="container mt-5">
        <section class="movie">
            <span>film</span>
            <ul>
                <li v-for="film in store.filmList">
                    <span class="text-primary">tittolo film : {{ film.title }} </span>
                </li>
            </ul>
        </section>
            <section class="serie-tv">
            <span>serie Tv</span>
            <ul>
                <li v-for="film in store.tvList">
                    <span  class="text-success">tittolo serie : {{ film.original_name }} </span>
                </li>
            </ul>
        </section>
  </div>
</template>

<style scoped>

</style>