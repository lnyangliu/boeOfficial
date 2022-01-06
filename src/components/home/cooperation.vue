<template>
  <div class="cooperation-box">
    <div class="part-title">
      <h1 class="title-text">合作用户</h1>
    </div>
    <Waypoint @change="onChange">
        <img class="businessImg" src="@/assets/images/business/0.jpg" />
      <div class="content">
        <!-- <div class="item" v-for="(item, index) in data" :key="'img' + index">
          <img :src="item" />
        </div> -->
      </div>
    </Waypoint>
  </div>
</template>
<script lang="ts">
import { reactive, defineComponent } from 'vue'
import { Waypoint } from 'vue-waypoint'
import Img1 from '../../assets/images/business/1.jpg'
import Img2 from '../../assets/images/business/2.jpg'
import Img3 from '../../assets/images/business/3.jpg'
import Img4 from '../../assets/images/business/4.jpg'
import Img5 from '../../assets/images/business/5.jpg'
import Img6 from '../../assets/images/business/6.jpg'
import Img7 from '../../assets/images/business/7.jpg'
import Img8 from '../../assets/images/business/8.jpg'
import Img9 from '../../assets/images/business/9.jpg'
import Img10 from '../../assets/images/business/10.jpg'
import Img11 from '../../assets/images/business/11.jpg'
import Img12 from '../../assets/images/business/12.jpg'
import Img13 from '../../assets/images/business/13.jpg'
import Img14 from '../../assets/images/business/14.jpg'
import Img15 from '../../assets/images/business/15.jpg'
export default defineComponent({
  components: {
    Waypoint,
  },
  setup() {
    const data = reactive([
      Img1,
      Img2,
      Img3,
      Img4,
      Img5,
      Img6,
      Img7,
      Img8,
      Img9,
      Img10,
      Img11,
      Img12,
      Img13,
      Img14,
      Img15,
    ])
    const onChange = (waypointState: any) => {}

    return {
      data,
      onChange,
    }
  },
})
</script>
<style lang="less" scoped>
.businessImg{
  width: 100%;
}
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
  width: 1200px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-row-gap: 10px;
  grid-column-gap: 10px;
  .item {
      border-radius: 6px;
      height: 126px;
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
      &:hover {
        img {
          transform: scale(1.05);
        }
      }
    }
}
</style>
