<template>
  <div class="header">
    <img class="banner-img" src="@/assets/images/banners/team-banner.jpg" />
  </div>
  <div class="introduction-box">
    <div class="left-box">
      <h2 class="font-22 font-bold">团队简介</h2>
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
      <h2 class="font-22 font-bold">所有奖项</h2>
      <img class="bottom-border" src="@/assets/images/about/2.png" />
      <div class="content">
        <img class="honor" src="@/assets/images/about/cup.png" />
      </div>
    </div>
    <div class="part">
      <h2 class="font-22 font-bold">软件著作</h2>
      <img class="bottom-border" src="@/assets/images/about/3.png" />
      <div class="content hornor-content">
        <div class="hornor" :class="isLeft ? 'hornor-left' : 'hornor-right'">
          <img class="hornor-img" src="@/assets/images/about/honor.jpg" />
        </div>

        <div class="option-btns">
          <div class="left-btn option-btn">
            <span
              @click="iconClick('prev')"
              class="iconfont boe-icon-left"
              :class="isLeft ? 'not-allowed' : ''"
            ></span>
          </div>
          <div class="right-btn option-btn">
            <span
              @click="iconClick('next')"
              class="iconfont boe-icon-right"
              :class="!isLeft ? 'not-allowed' : ''"
            ></span>
          </div>
        </div>
      </div>
    </div>
    <div class="part">
      <h2 class="font-22 font-bold">加入我们</h2>
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
        <div
          class="join-us-content"
          :class="'left' + activeIndex"
          id="career-box"
        >
          <div
            class="career-item"
            v-for="career in careerData"
            :key="career.label"
          >
            <div class="career-header">
              <h4 class="font-18 font-bold">{{ career.label }}</h4>
            </div>
            <div class="career-body">
              <div
                class="career-text-box"
                v-for="(item, index) in career.body"
                :key="'textBox' + index"
              >
                <p class="font-bold text-title">{{ item.title }}</p>
                <p
                  class="career-text-item"
                  v-for="(text, textIndex) in item.text"
                  :key="'textIndex' + textIndex"
                >
                  {{ text }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="part">
      <h2 class="font-22 font-bold">联系我们</h2>
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
export default defineComponent({
  setup() {
    const careerData = reactive([
      {
        label: '产品经理',
        body: [
          {
            title: '岗位职责：',
            text: [
              '1、基于对研发业务的深入了解，挖掘研发工程师在开发工作中的痛点，并针对可通过自动化手段解决的部分并提出产品化方案；',
              '2、负责数字化研发的建设中的需求调研、方案设计、原型设计、PRD文档编制等工作；',
              '3、负责数字化研发业务的企划，基于行业和竞品分析，持续进行技术交流、技术评估及技术导入；',
              '4、负责数字化研发业务的落地应用、收益分析及后续产品迭代升级等工作；',
            ],
          },
          {
            title: '岗位要求：',
            text: [
              '1、本科及以上学历，2年以上工作经验，有显示产品开发或软件产品开发经验者优先；',
              '2、了解数字化研发，具备产品思维，快速理解开发业务需求，善于分析并诊断业务问题，通过准确评估需求价值，做出合理决策；',
              '3、学习能力强，有较强的逻辑思维、业务梳理能力以及数据整理能力；',
              '4、善于表达，具备跨组织资源协调能力，有PM经验者优先；',
              '5、有主人翁意识，乐于发现问题、提出问题、解决问题，行动敏捷能够快速响应变化；',
            ],
          },
        ],
      },
      {
        label: 'EDA运维工程师',
        body: [
          {
            title: '岗位职责：',
            text: [
              '1.负责改善EDA设计环境的方案企划、推进与实施，不断提升研发各组织对EDA环境需求的支持；',
              '2.负责EDA设计环境系统平台运维，如研发云，资源调度、数据存储、用户域等；',
              '3.负责EDA工具软硬件技术管理；',
            ],
          },
          {
            title: '岗位要求：',
            text: [
              '1.教育背景：',
              '  -理工类，计算机、通信或自动化相关专业优先，本科及以上学历；',
              '2.技能/素质：',
              '-了解Linux系统，对软硬件、信息系统，网络，有一定经验或爱好者优先；',
              '-熟悉CI/CD，hadoop，spark，docker部署者优先；',
              '-踏实耐劳，主动学习，善沟通，有责任心，注重团队合作，能够承受工作压力和挑战；',
              '-有较高的用户服务意识，对运维工作有热情。',
            ],
          },
        ],
      },
      {
        label: 'Web前端',
        body: [
          {
            title: '岗位职责：',
            text: [
              '-负责前端项目代码开发、页面重构以及交互设计逻辑处理;',
              '-负责前端技术架构设计，推进新技术在业务中落地;',
              '-解决产品开发过程中的疑难问题，性能优化问题.',
            ],
          },
          {
            title: '岗位要求：',
            text: [
              '-2-3年以上web相关项目工作经验，有其他大厂相关方向优先;',
              '有以下经验者优先：',
              '-有B端系统开发经验',
              '-熟悉W3C规范，熟练掌握html5、css3、js、vue等前端技术；',
              '-熟悉npm，webpack等前端自动化构建工具;',
              '-熟悉LESS，SCSS等一种css语言，熟悉 css模块化思想;',
              '-熟悉响应式布局和各大浏览器兼容性问题;',
              '-熟练使用版本控制工具git',
              '-能够优化前端功能设计，解决各种浏览器和终端设备的兼容性问题，利用技术手段，提升用户体验。',
            ],
          },
        ],
      },
      {
        label: '后端开发',
        body: [
          {
            title: '岗位职责：',
            text: [
              '-负责后端项目代码开发、代码重构以及业务设计逻辑处理;',
              '-负责后端技术架构设计，推进新技术在业务中落地;',
              '-解决产品开发过程中的疑难问题，性能优化问题。',
            ],
          },
          {
            title: '岗位要求：',
            text: [
              '-2-3年以上web后端相关项目工作经验，有其他大厂相关方向优先;',
              '有以下经验者优先：',
              '-有B端系统开发经验;',
              '-熟悉后端开发规范，熟练掌握spring boot、gin、flask等web后端技术;',
              '-至少熟悉Java、Python、Go等一种后端开发语言，熟悉多种语言开发者优先;',
              '-熟悉MySQL、MongoDB、Redis和PostgreSQL等数据库的操作和优化;',
              '-熟练使用版本控制工具git;',
              '-有系统优化经验者优先;',
              '-有SpringCloud开发经验者优先;',
              '-有Docker、K8S云平台开发、部署经验这优先',
            ],
          },
        ],
      },
      {
        label: 'iMask设计自动化开发研究员',
        body: [
          {
            title: '岗位职责：',
            text: [
              'iMask设计自动化，基于EDA IT自动化技术编程开发，面向半导体显示行业核心的Mask设计领域（TFT-LCD\OLED\Mini LED等），聚焦于前沿设计课题技术攻关,提供自动化产品和解决方案，帮助Mask工程师提升设计效率和设计痛难点的解决。',
            ],
          },
          {
            title: '岗位要求：',
            text: [
              '1. 热爱编程，具备基本计算机编程能力，熟练掌握1~2门编程语言优先（如：Python\Tcl\C++）；',
              '2. 具备Mask背板产品研发项目经验，能够熟练1~2款Mask设计\仿真EDA相关软件者优先；',
              '3. 本科及以上学历，工作经验1年以上，理工科专业背景（计算机、微电子、自动化、数学）；',
              '4. 具备一定独立思考和问题解决能力，对Mask设计或软件开发方向有较为深入的兴趣和职业向往；',
            ],
          },
        ],
      },
    ])
    const connectData = reactive([
      { label: '联系人：', value: '张华冰' },
      { label: '电话：', value: '13623135301' },
      { label: '工号：', value: '124635' },
      { label: '邮箱：', value: 'zhanghuabing@boe.com.cn' },
    ])
    let activeIndex = ref(0)
    let isLeft = ref(true)
    let dom: any = null
    onMounted(() => {
      dom = document.getElementById('career-box')
    })
    function switchBtn(index: number) {
      activeIndex.value = index
    }
    function iconClick(direction: string) {
      isLeft.value = direction === 'prev' ? true : false
    }
    return {
      connectData,
      careerData,
      activeIndex,
      switchBtn,
      isLeft,
      iconClick,
    }
  },
})
</script>
<style lang="less" scoped>
.header {
  width: 100%;
  min-width: 1200px;
  margin-bottom: 10px;
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
        color: #282828;
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
  .hornor-content {
    width: 1200px;
    margin: 20px 0;
    position: relative;
    height: 330px;
    overflow: hidden;
    .hornor {
      position: absolute;
      top: 0;
      height: 266px;
      transition: all 0.6s ease;
      .hornor-img {
        height: 100%;
        width: auto;
      }
    }
    .hornor-left {
      left: 0;
    }
    .hornor-right {
      left: -804px;
    }
    .option-btns {
      height: 50px;
      width: 100%;
      line-height: 100px;
      position: absolute;
      bottom: 0;
      .option-btn {
        position: absolute;
        top: -20px;
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
  height: 52px;
  line-height: 50px;
  padding-left: 118px;
  // margin: 0 auto;
  width: 700px;
  .career-btn {
    display: block;
    float: left;
    color: @font-gray;
    margin-right: 30px;
    cursor: pointer;
  }
  .active {
    border-bottom: 2px solid #3399ff;
    color: #3399ff;
  }
}
.join-us-msg {
  width: 1000px;
  height: 470px;
  overflow: hidden;
  position: relative;
  // margin-left: 20px;
  margin: 10px auto;

  .join-us-content {
    position: absolute;
    left: 0;
    right: 0;
    transition: 1s;
    width: 5080px;
    height: 576px;
    .career-item {
      float: left;
      margin-left: 17px;
      margin-top: 10px;
      width: 980px;
      height: 404px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      overflow: hidden;
      &:first-of-type {
        margin-left: 10px;
      }
      .career-header {
        background-color: @font-blue;
        color: #fff;
        height: 50px;
        line-height: 50px;
        padding-left: 30px;
      }
      .career-body {
        padding: 20px 30px;
        line-height: 24px;
        .text-title {
          margin: 10px 0;
        }
      }
    }
  }
}
.career-msg {
  width: 700px;
  height: 404px;
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  .career-item {
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    transition: 1s;
    width: 100%;
    height: 100%;
  }
  .active-career {
    opacity: 1;
  }
}
#career-box {
  &.left0 {
    left: 5px;
  }
  &.left1 {
    left: -995px;
  }
  &.left2 {
    left: -1993px;
  }
  &.left3 {
    left: -2990px;
  }
  &.left4 {
    left: -3990px;
  }
}
</style>
