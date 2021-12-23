<template>
  <div class="team-header">
    <img src="@/assets/images/about/about.jpg" />
  </div>
  <div class="introduction-box">
    <div class="left-box">
      <h2>团队简介</h2>
      <img class="bottom-border" src="@/assets/images/about/1.png" />
      <div class="team-introduction">
        <p class="mb-50">
          在“一个数字化，可视的京东方”战略号召下，EDA开发运维部致力于数字化研发建设，推出“一个平台、三个产品系列，两大服务”的全流程数字化研发解决方案。
        </p>
        <p>-One Design数字化研发平台；</p>
        <p>-自动绘图、自动仿真、数据分析三个产品系列；</p>
        <p>-提供研发软件调度及管理服务及研发硬件云服务。</p>
      </div>
    </div>
    <div class="part">
      <h2>所有奖项</h2>
      <img class="bottom-border" src="@/assets/images/about/2.png" />
      <div class="content">
        <img class="honor" src="@/assets/images/about/cup.png" />
      </div>
    </div>
    <div class="part">
      <h2>软件著作</h2>
      <img class="bottom-border" src="@/assets/images/about/3.png" />
      <div class="content">
        <img class="honor" src="@/assets/images/about/honor.png" />
      </div>
    </div>
    <div class="part">
      <h2>加入我们</h2>
      <img class="bottom-border" src="@/assets/images/about/4.png" />
      <div class="join-us-header">
        <span
          class="career-btn"
          :class="activeIndex === index ? 'active' : ''"
          v-for="(btn, index) in careerData"
          :key="btn.label"
          @click="switchBtn(index)"
          >{{ btn.label }}</span
        >
      </div>
      <div class="join-us-msg">
        <div class="join-us-content" id="career-box">
          <div
            class="career-item"
            v-for="career in careerData"
            :key="career.label"
          >
            <img :src="career.value" />
          </div>
        </div>
      </div>
      <!-- <div class="career-msg">
        <div
          class="career-item"
          v-for="(career, index) in careerData"
          :key="career.label"
          :class="activeIndex === index ? 'active-career' : ''"
        >
          <img :src="career.value" />
        </div>
      </div> -->
    </div>
    <div class="part">
      <h2>联系我们</h2>
      <img class="bottom-border" src="@/assets/images/about/5.png" />
      <div class="connect-box">
        <div class="connect-left">
          <img class="huabing" src="@/assets/images/about/huabing.png" />
        </div>
        <div class="connect-right">
          <p class="connect-msg" v-for="item in connectData" :key="item.label">
            <span class="label">{{ item.label }}</span>
            <span class="text">{{ item.value }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { onMounted, reactive, ref, defineComponent } from 'vue'
import zhaopin1 from '@/assets/images/about/career1.png'
import zhaopin2 from '@/assets/images/about/career2.png'
import zhaopin3 from '@/assets/images/about/career3.png'
import zhaopin4 from '@/assets/images/about/career4.png'
import zhaopin5 from '@/assets/images/about/career5.png'
export default defineComponent({
  setup() {
    const careerData = reactive([
      { label: '产品经理', value: zhaopin1 },
      { label: 'EDA运维工程师', value: zhaopin2 },
      { label: 'Web前端', value: zhaopin3 },
      { label: '后端开发', value: zhaopin4 },
      { label: 'IMask设计自动化开发研究员', value: zhaopin5 },
    ])
    const connectData = reactive([
      { label: '联系人：', value: '张华冰' },
      { label: '电话：', value: '13623135301' },
      { label: '工号：', value: '124635' },
      { label: '邮箱：', value: 'zhanghuabing@boe.com.cn' },
    ])
    let activeIndex = ref(0)
    let dom: any = null
    onMounted(() => {
      dom = document.getElementById('career-box')
    })
    function switchBtn(index: number) {
      let left: any = ''
      if (index !== 0) {
        left = 720 * index + 'px'
        left = '-' + left
      } else {
        left = 0
      }
      activeIndex.value = index
      dom.style.left = left
    }
    return {
      connectData,
      careerData,
      activeIndex,
      switchBtn,
    }
  },
})
</script>
<style lang="less" scoped>
.team-header {
  img {
    width: 100%;
    height: 500px;
    // background: url('@/assets/images/banner1.png') no-repeat;
  }
}
.bottom-border {
  width: 95px;
  height: 3px;
}
h2 {
  margin-bottom: 0;
}
.introduction-box {
  width: 1200px;
  margin: 0 auto;
  .left-box {
    padding-top: 20px;
    padding-right: 500px;
    height: 433px;
    position: relative;
    background: url('@/assets/images/about/bg.png') no-repeat;
    background-size: cover;
    .team-introduction {
      padding-top: 35px;
      p {
        line-height: 35px;
        color: #999;
      }
      .mb-50 {
        margin-bottom: 45px;
        color: #282828;
      }
    }
  }
  .content {
    width: 1100px;
    margin: 0 auto;
    img {
      width: 100%;
    }
  }
  .connect-box {
    overflow: hidden;
    padding-top: 20px;
    padding-bottom: 40px;
    .connect-left {
      float: left;
      .huabing {
        width: 100px;
      }
    }
    .connect-right {
      float: left;
      margin-left: 50px;
      color: #282828;
      font-size: 12px;
      p {
        line-height: 23px;
        span {
          display: inline-block;
        }
      }
      .label {
        width: 48px;
      }
    }
  }
  p {
    margin: 0;
  }
  .mb-50 {
    margin-bottom: 30px;
  }
}
.join-us-header {
  height: 50px;
  line-height: 50px;
  padding-left: 70px;
  // margin: 0 auto;
  width: 700px;
  .career-btn {
    display: block;
    float: left;
    color: #282828;
    margin-right: 30px;
    cursor: pointer;
  }
  .active {
    border-bottom: 2px solid #3399ff;
    color: #3399ff;
  }
}
.join-us-msg {
  width: 700px;
  height: 404px;
  overflow: hidden;
  position: relative;
  // margin: 10px auto;

  .join-us-content {
    position: absolute;
    left: 0;
    right: 0;
    transition: 1s;
    width: 3580px;
    .career-item {
      float: left;
      margin-left: 20px;
      width: 1000px;
      // height: 404px;
      &:first-of-type {
        margin-left: 0;
      }
      img {
        width: 100%;
      }
    }
  }
}
.career-msg{
  width: 700px;
  height: 404px;
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  .career-item{
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    transition: 1s;
    width:100%;
    height: 100%;
    img {
      width: 100%;
    height: 100%;
    }
  }
  .active-career{
    opacity: 1;
  }
}
</style>
