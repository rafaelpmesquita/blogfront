<template>
  <div
    class="
      grid
      gap-4
      md:grid-flow-col
      lg:grid-flow-col
      justify-items-center
      bg-yellow-400
    "
  >
    <Logo class="align-center" />
    <NavBar class="hidden md:inline lg:inline" />
    <SearchBar class="hidden md:block lg:block" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style scoped></style>
