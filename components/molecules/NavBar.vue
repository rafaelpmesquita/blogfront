<template>
<nav class="nav-bar grid grid-flow-col mt-3 filter drop-shadow-lg  ">

        <NavItem class="p-2" v-for="(navItem,index) in navBarItens" :text="navItem.texto" :link="navItem.rota" :key="index" />   
   
</nav>
</template>

<script lang="ts">
import Vue from 'vue'
import {
    nav
} from '@/store'
export default Vue.extend({

    computed: {
        navBarItens() {
            return nav.$all
        }
    }

})
</script> 

<style lang="scss" scoped>

</style>
