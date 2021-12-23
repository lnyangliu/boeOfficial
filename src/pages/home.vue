<template>
  <Banner />
  <div class="main-box">
    <Solution />
    <Product />
    <WeHave />
    <Cooperation />
    <History />
  </div>
</template>

<script setup lang="ts">
import Banner from '../components/home/banner.vue'
import Solution from '../components/home/solutionPart.vue'
import Product from '../components/home/product.vue'
import WeHave from '../components/home/weHave.vue'
import Cooperation from '../components/home/cooperation.vue'
import History from '../components/home/history.vue'

// components: {
//   Banner
//   Solution
//   Product
//   WeHave
// }
</script>

<style scoped>
a {
  color: #42b983;
}
.main-box {
  width: 1200px;
  margin: 0 auto;
}
</style>
