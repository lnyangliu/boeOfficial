<template>
  <div class="header-box">
    <div class="header-container">
      <div class="logo">
        <img src="../assets/images/boeLogo.png" alt="Logo" />
      </div>
      <ul class="header-nav">
        <li
          class="header-nav-item"
          :class="activeNavBarIndex === barIndex ? 'bar-active' : ''"
          v-for="(navItem, barIndex) in navData"
          :key="navItem.name"
          @click="navClick(navItem.location, barIndex)"
        >
          <span class="header-nav-text">{{ navItem.name }}</span>
          <div class="header-nav-drop" v-if="navItem.children">
            <ul class="drop-container">
              <li
                class="drop-line"
                v-for="dropLine in navItem.children"
                :key="dropLine.name"
              >
                <div class="drop-title">{{ dropLine.name }} <i></i></div>
                <div
                  class="drop-item-button"
                  v-for="dropItem in dropLine.children"
                  :key="dropItem.name"
                  @click.stop="navClick(dropItem.location, barIndex)"
                >
                  {{ dropItem.name }}
                </div>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { ref, reactive, defineComponent } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  components: {},
  setup() {
    let router = useRouter()
    const navData = reactive([
      { name: '首页', location: '/' },
      {
        name: '解决方案',
        showDrop: false,
        location: '/solution',
      },
      {
        name: '产品介绍',
        location: '/production',
        children: [
          {
            name: '数字化平台',
            children: [
              { name: 'Quest平台', location: '/production/quest' },
              { name: 'Cell RFQ平台', location: '/production/cell' },
              { name: 'iCheck平台', location: '/production/icheck' },
              { name: '仿真平台', location: '/production/fangzhen' },
              { name: 'iBox平台', location: '/production/ibox' },
              { name: '工艺平台', location: '/production/gongyi' },
            ],
          },
          {
            name: '自动化工具',
            children: [
              { name: 'Mask自动化工具', location: '/production/maskz' },
              { name: 'Cell自动化工具', location: '/production/cellz' },
              { name: '电路自动化工具', location: '/production/dianluz' },
              { name: '机械自动化工具', location: '/production/jixiez' },
              { name: '光学自动化工具', location: '/production/guangxuez' },
            ],
          },
        ],
      },
      { name: '用户案例', location: '/case' },
      { name: '关于我们', location: '/about' },
    ])
    const activeNavBarIndex = ref(0)
    let path = window.location.pathname
    navData.map((item, index) => {
      if (item.location == path) {
        activeNavBarIndex.value = index
      } else if (path.indexOf('/production') > -1) {
        activeNavBarIndex.value = 2
      }
    })
    function navClick(location: any, barIndex: number) {
      if (location) {
        if (location.indexOf('/production') > -1) {
          let arr = location.split('/')
          router.push({
            name: 'production',
            params: {
              pro: arr[2] || 'quest',
            },
          })
        } else {
          router.push(location)
        }
        activeNavBarIndex.value = barIndex
      }
    }
    return {
      navData,
      activeNavBarIndex,
      navClick,
    }
  },
})
</script>
<style lang="less" scoped>
.header-box {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: #fff;
  width: 100%;
  min-width: 1200px;
  background: #fff;
  border-bottom: 1px solid #ddd;
  box-shadow: 0 0 20px rgb(0 0 0 / 10%);
  .logo {
    cursor: pointer;
    margin-top: 5px;
  }

  .header-container {
    margin: 0 auto;
    width: 1200px;
    height: 60px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    .header-nav {
      .header-nav-item {
        float: left;
        margin-left: 33px;
        height: 60px;
        position: relative;
        padding: 20px;
        box-sizing: border-box;
        cursor: pointer;
        &:after {
          content: '';
          display: block;
          width: 0;
          height: 2px;
          background: #1877f2;
          position: absolute;
          bottom: 0;
          left: 50%;
          margin-left: 0;
          -webkit-transition: all 0.4s ease;
          -o-transition: all 0.4s ease;
          transition: all 0.4s ease;
        }
        &.bar-active:after,
        &:hover:after {
          width: 20px;
          margin-left: -10px;
        }
        &.bar-active .header-nav-text,
        &:hover {
          .header-nav-drop {
            height: 262px;
          }
          .header-nav-text {
            color: #1877f2;
          }
        }
        .header-nav-text {
          color: #333;
          font: 16px microsoft Yahei, Arial, sans-serif;
        }
        .header-nav-drop {
          position: absolute;
          left: 0;
          top: 61px;
          z-index: 99;
          min-width: 100%;
          box-sizing: border-box;
          overflow: hidden;
          height: 0;
          background: #fff;
          -webkit-box-shadow: 1px 2px 8px 0 rgb(0 62 149 / 18%);
          box-shadow: 1px 2px 8px 0 rgb(0 62 149 / 18%);
          -webkit-transition: all 0.4s ease;
          -o-transition: all 0.4s ease;
          transition: all 0.4s ease;
          border-radius: 0 0 6px 6px;
          .drop-container {
            padding-top: 7px;
            padding-bottom: 7px;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            width: 300px;
            position: relative;
            padding-left: 0;
            .drop-line {
              width: 50%;
              -webkit-box-sizing: border-box;
              box-sizing: border-box;
              .drop-title {
                font-size: 14px;
                color: #333;
                line-height: 34px;
                text-align: center;
                position: relative;
                i {
                  display: block;
                  width: 60px;
                  height: 1px;
                  background: #006afa;
                  position: absolute;
                  left: 50%;
                  margin-left: -30px;
                }
                margin-bottom: 10px;
              }
              .drop-item-button {
                display: block;
                line-height: 34px;
                text-align: center;
                color: #6b798e;
                font-size: 14px;
                background: #fff;
                &:hover {
                  color: #006afa;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
