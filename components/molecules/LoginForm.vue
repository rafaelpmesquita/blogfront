<template>
<div class="h-screen bg-white flex flex-col space-y-10 justify-center items-center  ">
    <div class="bg-white w-96 shadow-xl rounded p-5">
        <h1 class="text-3xl font-medium text-center">Login do Administrador</h1>
        <InputLogin text="text" placeh="Email"  class="mt-10"/>
        <InputLogin text="password" placeh="Senha"  class="mt-3"/>
        <button class="text-center w-full bg-yellow-400 rounded-full text-white py-3 font-medium mt-10"> Login </button>
    </div>
</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({

})
</script>

<style scoped>

</style>
