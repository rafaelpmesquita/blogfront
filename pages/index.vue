<template>
<div>
    
    <QuemSouEuTemplate/>
    <TimeLineTemplate/>
    <Conhecimentos/>
    <Footer/>
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import {
    nav,especialidade,time
} from '@/store'
export default Vue.extend({
    async asyncData() {
        await especialidade.getConhecimentos()
        await nav.getNav()
        await time.get()
    },

   
})
</script>

<style>
  
</style>
