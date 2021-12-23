<template>
  <div class="history-box">
    <div class="part-title">
      <h1 class="title-text">发展历程</h1>
    </div>
    <div class="content">
      <ul class="boe_fzlc_list">
        <li
          v-for="data in historyData"
          :key="data.text"
          :class="data.className"
          @mouseover="toggleRotate(data)"
          @mouseout="toggleRotate(data)"
        >
          <span
            ><img class="a-rotate_round" :src="data.img" alt="" /><b>{{
              data.text
            }}</b></span
          >
          <div>
            <p
              :class="data.isRotate ? 'active' : ''"
              v-for="(discrib, index) in data.discrib"
              :key="'discrib' + index"
            >
              {{ discrib }}
            </p>
          </div>
        </li>
      </ul>
      <div class="back-pic"></div>
    </div>
  </div>
</template>
<script lang="ts">
import { reactive, ref } from 'vue'
import img1 from '@/assets/images/history/about_fzlc-1.png'
import img2 from '@/assets/images/history/about_fzlc-2.png'
import img3 from '@/assets/images/history/about_fzlc-3.png'
import img4 from '@/assets/images/history/about_fzlc-4.png'
import img5 from '@/assets/images/history/about_fzlc-5.png'
import img6 from '@/assets/images/history/about_fzlc-6.png'
export default {
  components: {
    // Waypoint,
  },
  setup() {
    const historyData: any = reactive([
      {
        className: 's-li1',
        img: img1,
        text: '2017',
        discrib: ['发布iCell自动化工具'],
        isRotate: false,
      },
      {
        className: 's-li2',
        img: img2,
        text: '2018',
        discrib: ['荣获集团Top Coder大赛一等奖', '发布iMask自动化工具'],
        isRotate: false,
      },
      {
        className: 's-li3',
        img: img3,
        text: '2019',
        discrib: [
          '荣获iMask获得杰出贡献奖',
          '推出一大平台+三大产品系列,发布iBox产品',
          '发布工艺数据分析平台',
        ],
        isRotate: false,
      },
      {
        className: 's-li4',
        img: img4,
        text: '2020',
        discrib: [
          '荣获2020年度十大最具影响力事件',
          '荣获集团Top Coder大赛金奖',
          '发布Quest产品',
        ],
        isRotate: false,
      },
      {
        className: 's-li5',
        img: img5,
        text: '2021',
        discrib: ['发布iCheck产品', '发布Quest车载产品'],
        isRotate: false,
      },
    ])

    const toggleRotate = (data: any) => {
      data.isRotate = !data.isRotate
    }
    return {
      historyData,
      toggleRotate,
    }
  },
}
</script>
<style lang="less" scoped>
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
  position: relative;
  .back-pic {
    width: 1140px;
    height: 235px;
    position: absolute;
    left: 50px;
    top: 120px;
    background: url(@/assets/images/history/about_fzlc-bg.png) no-repeat;
    background-size: cover;
    z-index: -1;
  }
}
.boe_fzlc_list {
  width: 1200px;
  height: 455px;
  overflow: hidden;
  margin-bottom: 65px;
  padding: 0;
  position: relative;
  li {
    position: absolute;
    z-index: 1;
    span {
      display: block;
      width: 72px;
      height: 72px;
      text-align: center;
      line-height: 72px;
      font-size: 16px;
      font-weight: bold;
      color: #fff;
      img {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
      }
    }
    div {
      position: absolute;
      pre,
      p {
        font-size: 14px;
        line-height: 10px;
        text-align: justify;
        opacity: 0.7;
      }
      .active {
        opacity: 1;
      }
    }
  }
}
.a-rotate_round {
  animation: rotate_round 500s linear infinite 0s;
}
@keyframes rotate_round {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(36000deg);
  }
}
.s-li1 {
  top: 156px;
  left: 0;
  div {
    padding-bottom: 90px;
    bottom: 0;
    left: 0;
    width: 150px;
  }
}
.s-li2 {
  top: 229px;
  left: 288px;
  div {
    padding-top: 90px;
    top: 0;
    left: 0;
    width: 200px;
  }
}
.s-li3 {
  top: 138px;
  left: 570px;
  div {
    padding-bottom: 90px;
    bottom: 0;
    left: -90px;
    width: 280px;
  }
}
.s-li4 {
  bottom: 290px;
  left: 888px;
  div {
    padding-top: 90px;
    top: 0;
    right: 0;
    width: 220px;
  }
}
.s-li5 {
  bottom: 143px;
  left: 1128px;
  div {
    width: 283px;
    padding-bottom: 90px;
    top: 90px;
    right: 10px;
    width: 124px;
  }
}
</style>
