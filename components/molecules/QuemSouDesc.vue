<template>
<div class="">
    <p class="Lora text-3xl text-center">Olá!</p>
    <p class="Yanone text-5xl text-center color ">Meu nome é Rafael Mesquita</p>
    <p  class="Hind text-center px-16 ">{{calculoSemestre()}} Atualmente sou sou Desenvolvedor Full Stack, atuando como estagiário no grupo Otimiza, aonde assumo o papel de diferente projetos, sou uma pessoa proativa e focada que ama programar. Sou muito bom com trabalho em equipe, gosto de ser organizado com meus horários para assim planejar meu dia. </p>
</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    computed: {

    },
    methods: {
        calculoSemestre() {
            const mes = new Date().toLocaleDateString("pt-br")
            // const ano = new Date()

            let a = mes.split('/')
            let b;
            if (Number(a[2]) >= 2023) {
                b = 'Sou formado em Ciência da Computação pela Puc Minas, me formei no ano de 2023'
            } else if (Number(a[1]) > 6) {

                b = 'Sou estudante de Ciência da Computação na Puc Minas, estou no ' + (Number(a[2]) - 2019) * 2 + '° período.';

            } else {

                b = 'Sou estudante de Ciência da Computação na Puc Minas, estou no ' + ((Number(a[2]) - 2019) * 2 - 1) + '° período.';

            }
            return b
        }
    },
})
</script>

<style scoped>

</style>
