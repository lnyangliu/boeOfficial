<template>
  <div class="header"></div>
  <div class="solution-box">
    <div
      class="solution-case"
      v-for="solute in solutionData"
      :key="solute.title"
    >
      <img class="solute-bg" :src="solute.bg" alt="" />
      <div class="solute-msg">
        <div class="msg-header">
          <div class="title-icon">
            <img src="@/assets/images/solution/title-icon.png" alt="" />
          </div>
          <h3 class="title-text">{{ solute.title }} 解决方案</h3>
        </div>
        <div class="text-below-title">{{ solute.text }}</div>

        <div class="jicheng" v-show="solute.isJicheng">集成</div>
        <div class="justify-line" v-show="solute.isJicheng"></div>
        <div class="data-box" :class="solute.isJicheng?'jicheng-active':''">
          <div class="item" v-for="item in solute.datas" :key="item.label">
            <div class="col-line" v-show="solute.isJicheng"></div>
            <img :src="item.icon" alt="" />
            <span class="icon-label">{{ item.label }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue'
import bg1 from '@/assets/images/solution/bg1.jpg'
import bg2 from '@/assets/images/solution/bg2.jpg'
import bg3 from '@/assets/images/solution/bg3.jpg'
import bg4 from '@/assets/images/solution/bg4.jpg'
import bg5 from '@/assets/images/solution/bg5.jpg'
import icon1 from '@/assets/images/solution/icon1.png'
import icon2 from '@/assets/images/solution/icon2.png'
import icon3 from '@/assets/images/solution/icon3.png'
import icon4 from '@/assets/images/solution/icon4.png'
import icon5 from '@/assets/images/solution/icon5.png'
import icon6 from '@/assets/images/solution/icon6.png'
import icon7 from '@/assets/images/solution/icon7.png'
import icon8 from '@/assets/images/solution/icon8.png'
import icon9 from '@/assets/images/solution/icon9.png'

export default defineComponent({
  setup() {
    const solutionData = reactive([
      {
        bg: bg1,
        title: 'RFQ产品',
        text: '线上同一协同平台确保金链路数字化应用',
        isJicheng: true,
        datas: [
          {
            label: '数据库与企业管理系统',
            icon: icon1,
          },
          {
            label: 'WebOffice',
            icon: icon2,
          },
          {
            label: '自动化工具',
            icon: icon3,
          },
          {
            label: '标准化规则',
            icon: icon4,
          },
          {
            label: '报告自动生成',
            icon: icon5,
          },
        ],
      },
      {
        bg: bg2,
        title: '检查产品',
        text: '讲人工检车过程、内容，利用Web技术封装，建立一个自动化的检查平台',
        isJicheng: false,
        datas: [
          {
            label: '检查流程规范化',
            icon: icon6,
          },
          {
            label: '检查业务协同化',
            icon: icon7,
          },
          {
            label: '检查数据可视化',
            icon: icon8,
          },
          {
            label: '检查结果一键出',
            icon: icon9,
          }
        ],
      },
    ])
    return { solutionData }
  },
})
</script>
<style lang="less" scoped>
@media (min-width: 1550px) {
  .header {
    background-size: 100% 100% !important;
  }
}
.header {
  width: 100%;
  min-width: 1200px;
  height: 450px;
  background: url('@/assets/images/case-page/case-banner.png') no-repeat center
    center;
  background-size: auto 100%;
}
.solution-box {
  width: 1200px;
  margin: 0 auto;
  margin-bottom: 20px;
  .solution-case {
    width: 100%;
    height: 600px;
    margin-top: 20px;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    &:hover {
      .solute-msg {
        top: 0;
      }
      .solute-bg{
          transform: scale(1.1)
      }
    }
    .solute-bg {
      width: 100%;
      height: 100%;
      transition: all 1s ease;
    }
    .solute-msg {
      transition: all 1s ease;
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 380px;
      background-color: rgba(0, 0, 0, 0.4);
      color: #fff;
      padding-top: 60px;

      .msg-header {
        height: 26px;
        margin: 50px;
        margin-bottom: 30px;
        overflow: hidden;
        .title-icon {
          height: 20px;
          width: 30px;
          margin-right: 20px;
          margin-top: 3px;
          float: left;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .title-text {
          float: left;
          margin: 0;
        }
      }
      .text-below-title {
        font-size: 12px;
        padding-left: 102px;
        margin-bottom: 40px;
      }
      .jicheng {
        width: 80px;
        height: 30px;
        line-height: 30px;
        background-color: rgba(0, 0, 0, 0.99);
        font-size: 12px;
        text-align: center;
        border-radius: 10px;
        margin-left: 590px;
        margin-bottom: 60px;
      }
      .justify-line {
        height: 1px;
        background-color: #fff;
        width: 771px;
        margin-left: 230px;
      }
      .data-box {
        display: flex;
        align-items: baseline;
        justify-content: space-around;
        width: 1000px;
        margin: 0 auto;
        margin-top: 80px;
        .item {
          text-align: center;
          //   position: relative;
          &:nth-child(3) {
            .col-line {
              height: 100px;
            }
          }
          .col-line {
            width: 1px;
            background-color: #fff;
            height: 50px;
            margin: 0 auto;
            margin-bottom: 10px;
          }
          img {
            height: 50px;
            width: 50px;
          }
          .icon-label {
            display: block;
            text-align: center;
            height: 30px;
            line-height: 30px;
            background-color: #999;
            padding: 8px 20px;
            border-radius: 10px;
            margin-top: 10px;
          }
        }
      }
      .jicheng-active{
          margin-top: -50px;
      }
    }
  }
}
</style>
