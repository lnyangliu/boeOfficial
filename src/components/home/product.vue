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
      <swiper-slide
        v-for="(pro, index) in swiperData"
        :key="index + 'pro'"
        @click="toProduct(pro.params)"
      >
        <img class="product-img" :src="pro.img" />
      </swiper-slide>
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
import { defineComponent, reactive } from 'vue'
import { useRouter } from 'vue-router'

import p1 from '@/assets/images/home-product/p1.png'
import p2 from '@/assets/images/home-product/p2.png'
import p3 from '@/assets/images/home-product/p3.png'
import p4 from '@/assets/images/home-product/p4.png'
import p5 from '@/assets/images/home-product/p5.png'
import p6 from '@/assets/images/home-product/p6.png'
import p7 from '@/assets/images/home-product/p7.png'
import p8 from '@/assets/images/home-product/p8.png'
import p9 from '@/assets/images/home-product/p9.png'
import p10 from '@/assets/images/home-product/p10.png'
import p11 from '@/assets/images/home-product/p11.png'

export default defineComponent({
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    let router = useRouter()
    const swiperData = reactive([
      {
        params: 'ibox',
        img: p1,
      },
      {
        params: 'maskz',
        img: p2,
      },
      {
        params: 'quest',
        img: p3,
      },
      {
        params: 'gongyi',
        img: p4,
      },
      {
        params: 'cell',
        img: p5,
      },
      {
        params: 'fangzhen',
        img: p6,
      },
      {
        params: 'icheck',
        img: p7,
      },
      {
        params: 'cellz',
        img: p8,
      },
      {
        params: 'dianluz',
        img: p9,
      },
      {
        params: 'jixiez',
        img: p10,
      },
      {
        params: 'guangxuez',
        img: p11,
      },
    ])
    // const swiperData = reactive([p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11])
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
    const toProduct = (params: string) => {
      router.push({
        name: 'production',
        params: {
          pro: params,
        },
      })
    }
    return {
      setTranslate,
      iconClick,
      swiperData,
      toProduct,
      modules: [Navigation, Pagination, EffectFade, A11y, Autoplay],
    }
  },
})
</script>
<style lang="less">
.product-swiper-box {
  .swiper-slide {
    height: 470px;
    width: 100%;
    line-height: 500px;
    font-size: 30px;
    text-align: center;
    cursor: pointer;
  }
  .swiper-button-prev,
  .swiper-button-next {
    top: 110%;
    left: 47%;
  }
}
</style>
<style lang="less" scoped>
.product-img {
  width: 100%;
}
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
    height: 50px;
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
  cursor: pointer;
}
</style>
