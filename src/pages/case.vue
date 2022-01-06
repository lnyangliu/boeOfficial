<template>
  <div class="header">
    <img
      class="banner-img"
      src="@/assets/images/banners/user-story-banner.jpg"
    />
  </div>
  <div class="body">
    <div class="case-box" v-for="item in caseData" :key="item.title">
      <div class="title-box">
        <div class="title-content">
          <span class="sign">好评如潮</span>
          <span class="title-text">{{ item.title }}</span>
        </div>
      </div>
      <div class="qa">
        <div class="qa-content">
          <div class="left qa-item">
            <img :src="item.img" />
          </div>
          <div class="right qa-item">
            <div class="qa-text">
              <h4 class="qa-title font-bold">用户痛点：</h4>
              <p class="ques">{{ item.ques }}</p>
            </div>
            <div class="qa-text">
              <h4 class="qa-title font-bold">解决方案：</h4>
              <p class="answer">{{ item.answer }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="user-msg">
        <div class="user-left">
          <img :src="item.isMan?manIcon:womanIcon" alt="" class="user-pic" />
        </div>
        <div class="user-right">
          <h5 class="user-name font-18 font-bold">{{item.userName}}</h5>
          <p class="user-career">{{item.career}}</p>
        </div>
      </div>
      <div class="evaluate-part">
        <p class="user-evaluate">
          <span class="quotation-mark">“</span>{{ item.evaluate
          }}<span class="quotation-mark">”</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue'
import case1 from '@/assets/images/case-page/case1.jpg'
import case2 from '@/assets/images/case-page/case2.jpg'
import manIcon from '@/assets/images/case-page/man-icon.png'
import womanIcon from '@/assets/images/case-page/woman-icon.png'

export default defineComponent({
  setup() {
    const caseData = reactive([
      {
        title: '传感事业Mask开发科',
        img: case1,
        isMan: false,
        userName: '边若梅',
        career: '传感事业Mask开发科',
        ques: '传感事业Mask开发科部分设计工作属于重复性高、耗时长的工作，且部分工作人工完成准确率低导致出错造成损失；',
        answer:
          '数字化开发团队为传感事业Mask开发提供了自动绘图工具以及图纸检查产品，提升效率，降低出错。',
        evaluate:
          '自动化绘图功能协助mask快速绘图，同时提升了修改效率，使用情况良好；Jobfile自动化工具协助mask快速产出工厂指导文件，在提升效率的同时，提升了准确度及人员幸福感；检查平台集成了一键式check结果、项目管理、数据汇总、报告生成等众多功能，其最大的意义在于100%的准确性，能够避免误检漏检。',
      },
      {
        title: 'Cell RFQ检讨',
        img: case2,
        isMan: true,
        userName: '王建俊',
        career: 'B4 Cell开发科',
        ques: 'Cell RFQ检讨需要借助计算工具及软件，存在检讨时间长，效率低的问题，且部分工作依赖人工经验及数据，员工检讨使用个人数据库及检讨习惯，造成检讨结果的个人差异化；Cell Drawing图纸绘制大部分为重复工作，人员完成耗时长。',
        answer:
          '数字化研发团队为B4 Cell开发提供了Cell RFQ在线检讨系统及自动绘图工具，助力高效标准化研发。',
        evaluate:
          'RFQ检讨平台不仅将我们检讨的流程做了规范，而且还提供了色度模拟，像素仿真这些工作，减少了繁琐的工作，更重要的是，这个平台集成了我们宝贵的设计经验，新人也可以上手，并且研发的数据直接在云端留存了，再也没有了人员离职或转岗交接数据的麻烦；iCell自动画图直接将画图效率提升了80%，解放了工程师的双手，可以有时间去做更有深度的工作，也避免了由于操作失误造成图纸错误带来的损失。',
      },
    ])
    return { caseData,manIcon,womanIcon }
  },
})
</script>
<style lang="less" scoped>
.header {
  width: 100%;
  min-width: 1200px;
  background-size: auto 100%;
}
.body {
  margin-bottom: 50px;
}
.user-msg{
  overflow: hidden;
  width:1200px;
  margin: 10px auto;
  margin-top: 24px;
  padding-left: 50px;
  .user-left{
    float: left;
    margin-right: 30px;
    .user-pic{
      height: 80px;
    }
  }
  .user-right{
    float: left;
    line-height:36px;
  }
}
.case-box {
  .title-box {
    text-align: center;

    .title-content {
      margin: 0 auto;
      overflow: hidden;
      display: inline-block;
      padding: 30px 0;
      span {
        display: block;
        float: left;
      }
      .sign {
        margin-top: 8px;
        padding: 4px 6px;
        background-color: #1877f2;
        margin-right: 20px;
        height: 20px;
        line-height: 20px;
        font-size: 12px;
        color: #fff;
        font-weight: 300;
        border-radius: 13px;
      }
      .title-text {
        margin-top: 5px;
        font-size: 22px;
        font-weight: 600;
      }
    }
  }
}
.qa {
  background-color: @gray;
  .qa-content {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    padding-left: 420px;
    box-sizing: border-box;
    .qa-item {
      float: left;
    }
    .left {
      height: 100%;
      width: 400px;
      border-radius: 6px;
      overflow: hidden;
      position: absolute;
      left: 0;
      right: 0;
      img {
        width: 100%;
        min-height: 100%;
      }
    }
    .right {
      //   width: calc(100% - 420px);
      padding-top: 20px;
      .qa-text {
        padding: 10px 20px 10px;
        margin-bottom: 20px;
        background-color: #fff;
        border-radius: 6px;
        h4 {
          margin: 0;
        }
        p {
          line-height: 30px;
        }
      }
    }
  }
}
.evaluate-part {
  width: 1200px;
  margin: 0 auto;
  background-color: @gray;
  padding: 20px;
  border-radius: 20px 20px 0 0;
  box-sizing: border-box;
  color: #333;
  .quotation-mark {
    font-size: 40px;
  }
}
</style>
