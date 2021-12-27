<template>
  <div class="have-box">
    <div class="part-title">
      <h1 class="title-text">我们拥有</h1>
    </div>
    <Waypoint @change="onChange" :options="options">
      <div class="content">
        <div class="have-item" v-for="item in data" :key="item.text">
          <span>{{ item.num }}+</span>
        </div>
      </div>
    </Waypoint>
  </div>
</template>
<script lang="ts">
import { reactive,onMounted,defineComponent } from 'vue'
import { Waypoint } from 'vue-waypoint'
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
      },
    //   {
    //     count: 98,
    //     num: 0,
    //     text: '案例数量',
    //   },
    //   {
    //     count: 38,
    //     num: 0,
    //     text: '产品数量',
    //   },
    ])
    const options = {
        threshold: [0.8]
    }
    onMounted(() => {
        
    })
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
.content{
    height: 300px;
}
</style>
