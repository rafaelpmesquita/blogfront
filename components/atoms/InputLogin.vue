<template>
    <div>
        <input :type="text" :placeholder="placeh" class="w-full h-12 border border-gray-800 rounded px-3">
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
        props:{
            text:{
                type: String,
                required: true
            },
            placeh:{
                type: String,
                required: true
            }
        }
})
</script>