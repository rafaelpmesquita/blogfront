<template>
    <a href="#responsive-header" class="no-underline block mt-4 sm:inline-block sm:mt-0 text-teal-lighter hover:text-white mr-4">
        {{text}}
    </a>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        props:{
            text: {
                required:true,
                type: String
            },
            link: {
                required:true,
                type: String
            }
        }
    })
</script>

<style scoped>

</style>