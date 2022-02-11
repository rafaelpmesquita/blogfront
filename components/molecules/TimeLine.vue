<template>
<div class="grid grid-cols-1 justify-items-center mt-10">
    <div class="container">
        <div class="flex flex-col md:grid grid-cols-9  mx-auto p-2 text-blue-50">
            <!-- left -->
            <div v-for="(a,index) in get()" :key="index" :class="a.lado=='esq' ? 'flex md:contents' : 'flex flex-row-reverse md:contents'">
                <LinhaBola v-if="a.lado=='dir'" />
                <ComponenteTimeLine :lado="a.lado" :titulo="a.titulo" :texto="a.desc" />
                <LinhaBola v-if="a.lado=='esq'" />

            </div>

        </div>
    </div>
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import {
    time
} from '@/store'
export default Vue.extend({
    methods: {
        get() {
            return time.$all
        }
    }
})
</script>

<style scoped>

</style>
