<template>
  <Header />
  <router-view></router-view>
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from './components/header.vue'
import Footer from './components/footer.vue'

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Footer,
  },
})
</script>

<style>
body {
  margin: 0 !important;
}
</style>
