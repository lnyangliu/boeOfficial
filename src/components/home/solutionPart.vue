<template>
  <div class="solution-box">
    <div class="part-title">
      <h1 class="title-text">解决方案</h1>
    </div>
    <div class="content">
      <div
        class="solution-item"
        v-for="solution in solutionData"
        :key="solution.name"
      >
        <img :src="solution.img" />
        <!-- <p class="solution-item-text">{{ solution.name }}</p> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, defineComponent } from 'vue'
import soluteImg1 from '../../assets/images/cases/case1.avif'
import soluteImg2 from '../../assets/images/cases/case2.avif'
import soluteImg3 from '../../assets/images/cases/case3.avif'
import soluteImg4 from '../../assets/images/cases/case4.avif'
import soluteImg5 from '../../assets/images/cases/case5.avif'
import soluteImg6 from '../../assets/images/cases/case6.avif'
export default defineComponent({
  setup() {
    const solutionData = reactive([
      {
        name: 'RFQ产品解决方案',
        img: soluteImg1,
        location: '/solution/rfq',
      },
      {
        name: '设计产品解决方案',
        img: soluteImg2,
        location: '/solution/rfq',
      },
      {
        name: '数据产品解决方案',
        img: soluteImg3,
        location: '/solution/rfq',
      },
      {
        name: '检查产品解决方案',
        img: soluteImg4,
        location: '/solution/rfq',
      },
      {
        name: '仿真产品解决方案',
        img: soluteImg5,
        location: '/solution/rfq',
      },
      {
        name: '硬件产品解决方案',
        img: soluteImg6,
        location: '/solution/rfq',
      },
    ])

    return {
      solutionData,
    }
  },
})
</script>

<style lang="less" scoped>
.solution-box {
  width: 100%;
  .part-title {
    margin-top: 50px;
    margin-bottom: 20px;
    h1 {
      color: #333;
      font-size: 20px;
      text-align: center;
    }
  }
  .content {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-row-gap: 10px;
    grid-column-gap: 10px;
    .solution-item {
      border-radius: 6px;
      height: 260px;
      overflow: hidden;
      -webkit-box-shadow: 2px 2px 12px 0 rgb(0 0 0 / 20%);
      box-shadow: 2px 2px 12px 0 rgb(0 0 0 / 20%);
      position:relative;
      img {
        width: 100%;
        height: 100%;
        margin-top: 0;
        margin-left: 0;
        transition: 0.4s;
      }
      .solution-item-text{
          position:absolute;
          left:30px;
          top:100px;
          font-size: 16px;
          color: #333;
          opacity: .7;
      }
      &:hover {
        img {
          transform: scale(1.05);
        }
        .solution-item-text{
            opacity: 1;
        }
      }
    }
  }
}
</style>
