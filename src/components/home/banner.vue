<template>
  <div class="swiper-box">
    <swiper
      :spaceBetween="40"
      :effect="'fade'"
      :fadeEffect="{
        crossFade: true,
      }"
      :pagination="{
        clickable: true,
      }"
      :autoplay="true"
      class="mySwiper"
    >
      <!-- <swiper-slide><img src="@/assets/images/banner0.jpg" /></swiper-slide> -->
      <swiper-slide><img class="banner-img" src="@/assets/images/banners/home-banner.jpg" /></swiper-slide>
      <!-- <swiper-slide><img src="@/assets/images/banner2.png" /></swiper-slide> -->
    </swiper>
  </div>
</template>
<script lang="ts">
import SwiperCore, {
  EffectFade,
  Navigation,
  Pagination,
  A11y,
  Autoplay,
} from 'swiper'
SwiperCore.use([EffectFade, Navigation, Pagination, A11y, Autoplay])
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css/bundle'

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper: any) => {
      console.log(swiper)
    }
    const onSlideChange = () => {
      console.log('slide change')
    }
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, EffectFade, A11y, Autoplay],
    }
  },
}
</script>
<style lang="less" scoped>
.swiper-box {
  width: 100%;
  min-width: 1200px;
  margin-top: 62px;
}
.swiper-slide {
  width: 100%;
  font-size: 30px;
  text-align: center;
}
.swiper::v-deep(.swiper-pagination .swiper-pagination-bullet) {
  background: rgb(255, 255, 255);
}
.swiper::v-deep(.swiper-pagination .swiper-pagination-bullet-active) {
  background: rgb(255, 255, 255);
}
</style>
