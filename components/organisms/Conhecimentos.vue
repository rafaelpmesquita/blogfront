<template>
<div class="mt-12 grid ">
 
    <ConhecimentosProg/>
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 mt-10 md:px-8">
        <CardConhecimentos v-for="(i,index) in getAllItens" class="mt-3" :titulo="i.lang" :desc="i.desc" :img="i.img" :key="index" />
    </div>

</div>
</template>

<script lang="ts">
import Vue from 'vue'
import {
    especialidade
} from '@/store'
export default Vue.extend({
    computed: {
        getAllItens() {
            
            return especialidade.$all
        }
    }
})
</script>

<style scoped>

</style>
