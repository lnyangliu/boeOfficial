<script lang="ts">
import { ref, reactive, defineComponent, onMounted } from 'vue'

export default defineComponent({
  name: 'Modal',
  emits: ['closeModal'],
  props: { title: String, content: String, showModal: Boolean },
  setup(props, context) {
    let isFullPage = false
    // 记录最大化之前的位置及大小，以便恢复原状时候使用
    let position = { x: 0, y: 0, height: 0, width: 0 }
    // 当前弹窗是否最小化
    const isMini = ref(false)
    let content = null
    onMounted(() => {
      // 挂载之后才可操作dom
      content = document.getElementById('modal-content')
    })
    // 拖拽开始
    function mousedown(event: MouseEvent): void {
      changeDelay(false)
      var event = event || window.event
      // 获取鼠标在页面的位置Í
      var pageX = event.pageX || event.clientX
      var pageY = event.pageY || event.clientY
      // 获取鼠标按下的一瞬间在盒子中的位置
      var boxX = pageX - (content as unknown as HTMLElement).offsetLeft
      var boxY = pageY - (content as unknown as HTMLElement).offsetTop
      document.onmousemove = function (event) {
        var event = event || window.event
        // 鼠标在页面的位置
        var pageX = event.pageX || event.clientX
        var pageY = event.pageY || event.clientY
        // 让个盒子跟着鼠标移动
        content.style.left = pageX - boxX + 'px'
        content.style.top = pageY - boxY + 'px'
      }
      document.onmouseup = function () {
        changeDelay(true)
        document.onmousemove = document.onmouseup = null
      }
    }
    // 保证拖拽时候没有延迟
    function changeDelay(isDelay: Boolean) {
      content.style.transition = isDelay ? '.5s' : '0s'
    }
    // 最大化
    function toFullPage(): void {
      isFullPage = true
      getHistoryPosition()
      content.style.width = window.innerWidth + 'px'
      content.style.height = window.innerHeight + 'px'
      content.style.left = '0'
      content.style.top = '0'
      content.style.transform = 'translateX(0)'
    }
    // 获取弹框样式 最大化 或者 最小化 之前的状态
    function getHistoryPosition() {
      position.width = content.offsetWidth
      position.height = content.offsetHeight
      position.x = content.offsetLeft
      position.y = content.offsetTop
    }
    // 将弹框样式恢复到 最大化 或者 最小化 之前的状态
    function toHistoryPosition() {
      content.style.width = position.width + 'px'
      content.style.height = position.height + 'px'
      content.style.left = position.x + 'px'
      content.style.top = position.y + 'px'
      content.style.transform = 'translateX(-50%)'
      content.style.opacity = '1'
    }
    // 双击弹窗标题部分触发最大化或恢复原大小
    function changeSize() {
      if (!isFullPage) {
        toFullPage()
      } else {
        toHistoryPosition()
        isFullPage = !isFullPage
      }
    }
    //最小化和正常状态切换
    function toggleMiniPage(): void {
      if (!isMini.value) {
        getHistoryPosition()
        const width = window.innerWidth
        const height = window.innerHeight
        content.style.width = '40px'
        content.style.height = '40px'
        content.style.left = width - 60 + 'px'
        content.style.top = height - 60 + 'px'
        content.style.transform = 'translateX(0)'
        content.style.opacity = '0'
        setTimeout(() => {
          isMini.value = !isMini.value
        }, 400)
      } else {
        isMini.value = !isMini.value
        toHistoryPosition()
      }
    }
    //关闭弹窗
    function closeModal(): void {
      context.emit('closeModal')
    }

    return {
      mousedown,
      toFullPage,
      toggleMiniPage,
      closeModal,
      changeSize,
      isMini,
    }
  },
})
</script>

<template>
  <div class="modal-content" id="modal-content" v-if="showModal">
    <div class="buttons">
      <button class="modal-button" @click="toggleMiniPage">
        <img src="../assets/images/jianhao.png" title="最小化" alt="" />
      </button>
      <button class="modal-button" @click="toFullPage">
        <img src="../assets/images/jiahao.png" title="最大化" alt="" />
      </button>
      <button class="modal-button" @click="closeModal">
        <img src="../assets/images/guanbi.png" title="关闭" alt="" />
      </button>
    </div>
    <div class="modal-title" @mousedown="mousedown" @dblclick="changeSize">
      {{ title }}
    </div>
    <div class="modal-body">{{ content }}</div>
  </div>
  <div class="mini-button" v-show="isMini" @click="toggleMiniPage">
    <img src="../assets/images/message.png" title="弹框" alt="" />
  </div>
</template>

<style scoped>
.mini-button {
  position: fixed;
  right: 40px;
  bottom: 40px;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  cursor: pointer;
  z-index: 101;
}
.mini-button img {
  width: 50px;
  height: 50px;
}
.modal-content {
  transition: 0.5s;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  top: 150px;
  z-index: 99;
  width: 520px;
  border: 0;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
  pointer-events: auto;
}
.buttons {
  position: absolute;
  right: 0;
  top: 0;
  width: 120px;
  height: 40px;
}
.modal-button {
  width: 40px;
  height: 40px;
  border: none;
  cursor: pointer;
  background-color: rgb(255, 255, 255);
  padding: 10px;
}
.modal-button img {
  width: 20px;
  height: 20px;
}
.modal-title {
  height: 40px;
  line-height: 40px;
  text-align: left;
  padding-left: 20px;
  font-size: 14px;
  font-weight: 500;
  border-bottom: 1px solid #ddd;
}
.modal-body {
  box-sizing: border-box;
  padding: 20px;
  text-align: left;
  font-size: 12px;
}
</style>
