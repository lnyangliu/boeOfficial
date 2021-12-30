<template>
  <div class="production">
    <div class="header">
      <img class="banner-img" src="@/assets/images/banners/team-banner.jpg" />
    </div>
    <div class="product-data" v-for="module in detailData" :key="module.name" v-show="module.name===showName">
      <div class="product-item" v-for="pro in module.data" :key="pro.video">
        <a :href="pro.video" target="_blank">
          <img class="product-img" :src="pro.img" />
          <div class="product-play">
            <img src="@/assets/images/production/play.png" />
          </div>
          <div class="cover"></div>
        </a>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import router from '../routes/index'
import fangzhen from '@/assets/images/production/fangzhen.png'
import gongyi from '@/assets/images/production/gongyi.png'
import cell from '@/assets/images/production/cell.jpg'
import ibox from '@/assets/images/production/ibox.png'
import icheck from '@/assets/images/production/icheck.png'
import quest from '@/assets/images/production/quest.png'
import { onBeforeRouteUpdate } from 'vue-router'

export default defineComponent({
  setup() {
    const detailData = reactive([
      {
        name: 'fangzhen',
        data: [
          {
            img: fangzhen,
            video: 'https://boe-video.boe.com/2021/fangzhen0106.mp4',
          },
        ],
      },
      {
        name: 'gongyi',
        data: [
          {
            img: gongyi,
            video: 'https://boe-video.boe.com/2021/gongyipingai%20.mp4',
          },
        ],
      },
      {
        name: 'cell',
        data: [
          {
            img: cell,
            video: 'https://boe-video.boe.com/2021/Cell%20RFQ2021-09-15.mp4',
          },
        ],
      },
      {
        name: 'ibox',
        data: [
          {
            img: ibox,
            video: 'https://boe-video.boe.com/2021/iBox0106%281%29.mp4',
          },
        ],
      },
      {
        name: 'icheck',
        data: [
          {
            img: icheck,
            video: 'https://boe-video.boe.com/2021/iCheck.mp4',
          },
        ],
      },
      {
        name: 'quest',
        data: [
          {
            img: quest,
            video: 'https://boe-video.boe.com/2021/Quest0106.mp4',
          },
        ],
      },
    ])
    // 首次进入该页面判断当前路由
    const params = router.currentRoute.value.params.pro
    const showName = ref(router.currentRoute.value.params.pro)
    // 监听路由变化
    onBeforeRouteUpdate((to) => {
      showName.value = to.params.pro
    })
    return { detailData, showName }
  },
})
</script>
<style lang="less" scoped>
.header {
  width: 100%;
  min-width: 1200px;
}
.product-data {
  width: 1200px;
  margin: 0 auto;
  padding: 20px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 10px;
  grid-column-gap: 10px;
  .product-item {
    width: 595px;
    position: relative;
    border-radius: 6px;
    overflow: hidden;
    .product-play {
      position: absolute;
      width: 60px;
      height: 60px;
      left: 50%;
      top: 50%;
      z-index: 9;
      transform: translate(-50%, -50%);
      img {
        width: 100%;
        opacity: 0.6;
      }
    }
    .product-img {
      width: 100%;
    }
    .cover {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      background-color: rgba(40, 40, 44, 0.8);
    }
  }
}
</style>
