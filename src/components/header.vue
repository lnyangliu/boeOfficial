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
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
export default {
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
            name: '数字化产品方案',
            children: [
              { name: '检讨产品方案', location: '/production/detail/review' },
              { name: '设计产品方案', location: '/production/detail/design' },
              { name: '检查产品方案', location: '/production/detail/check' },
              {
                name: '仿真产品方案',
                location: '/production/detail/simulation',
              },
            ],
          },
          {
            name: '传统化产品方案',
            children: [
              { name: '检讨产品方案', location: '/production/detail/review' },
              { name: '设计产品方案', location: '/production/detail/design' },
              { name: '检查产品方案', location: '/production/detail/check' },
              {
                name: '仿真产品方案',
                location: '/production/detail/simulation',
              },
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
      if(item.location == path) {
        activeNavBarIndex.value = index
      } else if (path.indexOf('/production') > -1) {
        activeNavBarIndex.value = 2
      }
    })
    function navClick(location: any, barIndex: number) {
      if (location) {
        router.push(location)
        activeNavBarIndex.value = barIndex
      }
    }
    return {
      navData,
      activeNavBarIndex,
      navClick,
    }
  },
}
</script>
<style lang="less" scoped>
.header-box {
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
            height: 194px;
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
          -webkit-transition: all .4s ease;
          -o-transition: all .4s ease;
          transition: all .4s ease;
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
