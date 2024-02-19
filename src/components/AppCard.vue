<script >
import { store } from "../store";
export default {
    props:{
            filmData: Object,
        },
    data() {
    return {
        store,
         
    }
    },
};
</script>
<template>
    <div class="card">
        <!-- <div>{{ filmData }}</div>    -->
        <span class="text-primary">tittolo film : {{ filmData.title}} </span>
              
    </div>
</template>


<style lang="scss" scoped>

</style>