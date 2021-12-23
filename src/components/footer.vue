<template>
  <div class="s-footer_box">
    <div class="article">
      <div class="section s-footer ie-clearfix">
        <!-- <dl class="s-qr_code">
          <dt><img src="/static/img_code.jpg" alt="" /></dt>
          <dd><i class="icon_down a-b_o_in"></i></dd>
          <dd>与我们互动</dd>
        </dl> -->
        <dl class="s-footer_list">
          <dt>联系我们</dt>
          <dd>电话：010-57676800</dd>
          <dd>邮箱：liuyang8581@boe.com.cn</dd>
          <dd>网址：https://www.boe.com.cn/</dd>
          <dd>地址：北京市通州区经济技术开发区经海一路118号</dd>
          <dt style="margin-top: 30px">友情链接</dt>
          <dd>
            <a href="https://www.boe.com.cn/" target="_blank"
              >京东方<i class="iconfont boe-icon-right"></i
            ></a>
          </dd>
        </dl>
        <dl class="s-footer_list">
          <dt></dt>
          <dd>媒体垂询：liuyang8581@boe.com.cn</dd>
          <dd>加入我们：hr@boe.com.cn</dd>
          <dd>投诉建议：hr@boe.com.cn</dd>
          <dd>合作洽谈：hr@boe.com.cn</dd>
        </dl>
      </div>
      <!-- <div class="s-beian">
        <span class="s-icp"
          >© 版权所有 北京京东方显示技术有限公司
          <a
            href="http://beian.miit.gov.cn"
            target="_blank"
            class="s-jgwa"
            style="display: inline-block"
            >京ICP备12345号</a
          ></span
        >
        <a
          class="s-jgwa"
          target="_blank"
          style=""
          href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502038491"
          ><img src="/static/pic_jh.png" style="margin-left: 20px" />京公网安备
          11010502038491号</a
        >
      </div> -->
    </div>
  </div>
</template>
<script lang="ts">
export default {}
</script>
<style lang="less" scoped>
.s-footer_box {
  // height: 380px;
  box-sizing: border-box;
  background: #f4f6fb;
  background-size: auto 289px;
  .article {
    width: 1200px;
    margin: 0 auto;
  }
}
.s-footer {
  padding: 80px 60px 40px;
  display: flex;
  justify-content: space-between;
}
.s-qr_code {
  & > dt {
    width: 179px;
    height: 179px;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  & > dd {
    font-size: 16px;
    // font-family: $fontFamily;
    // font-weight:500;
    color: #333;
    text-align: center;
    margin-top: 10px;
    i {
      display: inline-block;
      height: 14px;
      width: 14px;
    }
  }
}
.s-footer_list {
  & > dt {
    min-height: 16px;
    font-size: 16px;
    // font-family: $fontFamily;
    color: #333;
    position: relative;
    t: 0;
    // }
  }
  & > dd {
    margin-top: 18px;
    font-size: 14px;
    // font-family: $fontFamily;
    color: #6b798e;
    i {
      display: inline-block;
      height: 10px;
      width: 6px;
      margin-left: 5px;
    }
    a {
      color: #1977f1;
      font-size: 14px;
      width: 90px;
      display: inline-block;
      align-items: center;
    }
  }
}
.s-beian {
  text-align: center;
  padding-bottom: 15px;
  color: #aaa;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 20px;
  a.s-jgwa {
    color: #aaa;
    font-size: 12px;
    display: flex;
    align-items: center;
    line-height: 21px;
    &:hover {
      color: #1977f1;
      text-decoration: underline;
    }
  }
}
</style>
