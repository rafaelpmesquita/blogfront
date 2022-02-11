<template>
<div :class="lado=='dir' ? 'bg-yellow-400 p-4 rounded-xl my-4 ml-auto shadow-md col-start-6 col-end-10 w-full transform transition duration-500 hover:scale-110 hover:bg-black hover:text-yellow-400 place-self-start' :'transform transition duration-500 hover:scale-110 bg-yellow-400 w-full p-4 rounded-xl my-4 ml-auto shadow-md col-start-1 col-end-5 hover:bg-black hover:text-yellow-400'">
    <h3 class="font-semibold text-lg mb-1 text-center">{{titulo}}</h3>
    <p class="leading-tight text-center">
        {{texto}}
    </p>
</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    props: {
        lado: {
            type: String,
            required: true
        },
        titulo: {
            type: String,
            required: true
        },
        texto: {
            type: String,
            required: true
        },
    },

})
</script>

<style scoped>

</style>
