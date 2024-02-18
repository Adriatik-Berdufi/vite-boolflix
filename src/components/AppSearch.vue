<script>
import{ store } from '../store';
export default {
    data() {

        const title = 'New Project';
        return {
            title,
            store,
            
        }
    },
    
};

</script>


<template>
    <div class=" d-flex">
      <input type="text" class="form-control" v-model="store.search">
      <button @click="store.searchform()" class="btn btn-primary">cerca</button>
      <button @click="store.nextPage()" class="btn btn-success">next page</button>
    </div>
</template>



<style lang="scss" scoped>

</style>