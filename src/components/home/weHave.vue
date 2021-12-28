<template>
  <div class="have-box">
    <div class="part-title">
      <h1 class="title-text">我们拥有</h1>
    </div>
    <Waypoint @change="onChange" :options="options">
      <div class="content">
        <div class="have-item" v-for="item in data" :key="item.text">
          <div class="show-num">
            <span class="num">{{ item.num }}</span>
            <span class="unit" v-show="item.unit">{{ item.unit }}</span>
            <span class="more" v-show="item.unit !== '人'">+</span>
          </div>
          <div class="show-name">
            <img class="name-icon" :src="item.img" />
            <span class="name-text">{{ item.text }}</span>
          </div>
        </div>
      </div>
    </Waypoint>
  </div>
</template>
<script lang="ts">
import { reactive, onMounted, defineComponent } from 'vue'
import { Waypoint } from 'vue-waypoint'
import user from '@/assets/images/we-have/user.png'
import cover from '@/assets/images/we-have/cover.png'
import count from '@/assets/images/we-have/count.png'
import certificate from '@/assets/images/we-have/certificate.png'
import surport from '@/assets/images/we-have/surport.png'

export default defineComponent({
  components: {
    Waypoint,
  },
  setup() {
    let isFirstChange = true
    const data = reactive([
      {
        count: 998,
        num: 0,
        text: '用户数量',
        unit: '',
        img: user,
      },
      {
        count: 15,
        num: 0,
        text: '覆盖组织',
        unit: '',
        img: cover,
      },
      {
        count: 38,
        num: 0,
        text: '累计节省成本',
        unit: '万',
        img: count,
      },
      {
        count: 15,
        num: 0,
        text: '取得证书、软著',
        unit: '',
        img: certificate,
      },
      {
        count: 38,
        num: 0,
        text: '技术团队支持',
        unit: '人',
        img: surport,
      },
    ])
    const options = {
      threshold: [0.8],
    }
    onMounted(() => {})
    const onChange = (waypointState: any) => {
      console.log(waypointState.direction)
      if (
        isFirstChange &&
        waypointState.going === 'IN' &&
        waypointState.direction === 'UP'
      ) {
        isFirstChange = false
        let timers: any = []
        data.forEach((item, index) => {
          const step = item.count / 10
          let timer = setInterval(() => {
            item.num = Math.floor(item.num + step)
          }, 100)
          timers.push(timer)
        })
        setTimeout(() => {
          data.forEach((item, index) => {
            item.num = item.count
            clearInterval(timers[index])
          })
        }, 1000)
      }
    }

    return {
      data,
      options,
      onChange,
    }
  },
})
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
  width:1200px;
  margin: 0 auto;
  display:flex;
  align-items: center;
  justify-content: space-around;
  padding: 30px 0;
  text-align:center;
  .show-num{
    font-size: 24px;
    color: #1877f2;
    font-weight: 500;
  }
  .show-name{
    font-size: 18px;
    padding: 10px 20px;
    background-image: linear-gradient(#fff, #9198e5);
    border-radius: 10px;
    overflow: hidden;
    .name-icon{
      height: 20px;
      margin-top: 5px;
      display: block;
      float: left;
    }
    .name-text{
      display: block;
      float: left;
      margin-top: 2px;
      margin-left: 5px;
    }
  }
}
</style>
