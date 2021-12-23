<template>
  <div class="product-swiper-box">
    <div class="part-title">
      <h1 class="title-text">产品</h1>
    </div>
    <swiper
      :spaceBetween="-30"
      :loop="true"
      :autoplay="true"
      :speed="400"
      :slidesPerView="4"
      :centeredSlides="true"
      :watchSlidesProgress="true"
      navigation
      @setTranslate="setTranslate"
      class="mySwiper"
    >
      <swiper-slide>1</swiper-slide>
      <swiper-slide>2</swiper-slide>
      <swiper-slide>3</swiper-slide>
      <swiper-slide>4</swiper-slide>
      <swiper-slide>5</swiper-slide>
      <swiper-slide>6</swiper-slide>
      <swiper-slide>7</swiper-slide>
      <swiper-slide>8</swiper-slide>
      <swiper-slide>9</swiper-slide>
    </swiper>
    <div class="option-btns">
      <div class="left-btn option-btn">
        <span @click="iconClick('prev')" class="iconfont boe-icon-left"></span>
      </div>
      <div class="right-btn option-btn">
        <span @click="iconClick('next')" class="iconfont boe-icon-right"></span>
      </div>
    </div>
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
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const setTranslate = (swiper: any) => {
      let slides = swiper.slides
      for (let i = 0; i < slides.length; i++) {
        let slide = slides.eq(i)
        let progress = slides[i].progress
        slide.css({ opacity: '', background: '' })
        slide.transform('') //清除样式

        slide.transform('scale(' + (1 - Math.abs(progress) / 8) + ')')
      }
    }
    const iconClick = (dir: string) => {
      const node: any =
        dir === 'prev'
          ? document.querySelector('.swiper-button-prev')
          : document.querySelector('.swiper-button-next')
      node.click()
    }
    return {
      setTranslate,
      iconClick,
      modules: [Navigation, Pagination, EffectFade, A11y, Autoplay],
    }
  },
})
</script>
<style lang="less">
.product-swiper-box {
  .swiper-slide {
    height: 300px;
    width: 100%;
    line-height: 500px;
    font-size: 30px;
    text-align: center;
    background: #C6D2E5;
    opacity: 0.6;
  }
  .swiper-button-prev,
  .swiper-button-next {
    top: 110%;
    left: 47%;
  }
}
</style>
<style lang="less" scoped>
.product-swiper-box {
  width: 100%;
  min-width: 1200px;
  .part-title {
    margin-top: 50px;
    margin-bottom: 20px;
    h1 {
      color: #333;
      font-size: 20px;
      text-align: center;
    }
  }
  .option-btns {
    height: 100px;
    line-height: 100px;
    position: relative;
    .option-btn {
      position: absolute;
      top: -10px;
      height: 30px;
      width: 30px;

      .iconfont {
        font-size: 35px;
        color: #000095;
        opacity: 0.6;
        cursor: pointer;
        &:hover {
          opacity: 1;
        }
      }
    }
    .left-btn {
      left: 50%;
      margin-left: -40px;
    }
    .right-btn {
      right: 50%;
      margin-right: -40px;
    }
  }
}
.swiper-slide {
  height: 300px;
  width: 100%;
  line-height: 500px;
  font-size: 30px;
  text-align: center;
  background: #C6D2E5;
  opacity: 0.6;
}
.swiper::v-deep(.swiper-pagination .swiper-pagination-bullet) {
  background: rgb(255, 255, 255);
}
.swiper::v-deep(.swiper-pagination .swiper-pagination-bullet-active) {
  background: rgb(255, 255, 255);
}
</style>
