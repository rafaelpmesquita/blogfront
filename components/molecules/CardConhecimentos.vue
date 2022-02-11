<template>
  <!-- <div

class="transform transition duration-500 hover:scale-110 relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">

<div class="w-full md:w-1/3 bg-white grid place-items-center">

<img :src="img" alt="tailwind logo" class="logomarca" />
        </div>

<div class="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">

<h3 class="font-black text-gray-800 md:text-3xl text-xl">{{titulo}}</h3>

<p class="md:text-lg text-gray-500 text-base">{{desc}}</p>

</div>

</div> -->
  <div
    class="
      transform
      transition
      duration-500
      hover:scale-110
      w-full
      py-4
      px-8
      bg-white
      shadow-lg
      rounded-lg
      mt-10
    "
  >
    <div class="flex justify-center md:justify-end -mt-16">
      <img
        class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
        :src="img"
      />
    </div>
    <div>
      <h2 class="text-gray-800 text-3xl font-semibold">{{ titulo }}</h2>
      <p class="mt-2 text-gray-600">{{ desc }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    img: {
      required: true,
      type: String,
    },
    titulo: {
      required: true,
    },
    desc: {
      required: true,
      type: String,
    },
  },
});
</script>

<style scoped></style>
