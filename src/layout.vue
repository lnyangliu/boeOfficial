<script setup lang="ts">
import { ref } from 'vue'
import Modal from './components/modal.vue'

components: {
  Modal
}
const isShowModal = ref(true)
function closeModal() {
  isShowModal.value = false
}
</script>

<template>
  <Modal
    title="标题"
    content="文本内容"
    :showModal="isShowModal"
    @closeModal="closeModal"
  />
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
