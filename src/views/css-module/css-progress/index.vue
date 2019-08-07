<template>
  <div class="container">
    <!-- body下的进度条 -->
    <div class="content-box">
      <div class="title">不可思议的css滚动条效果</div>
      <div class="desc">就是顶部黄色的滚动进度条，随着页面的滚动进度而变化长短。就是顶部黄色的滚动进度条，随着页面的滚动进度而变化长短。</div>
      <div class="desc">就是顶部黄色的滚动进度条，随着页面的滚动进度而变化长短。</div>
      <div class="desc">就是顶部黄色的滚动进度条，随着页面的滚动进度而变化长短。就是顶部黄色的滚动进度条，随着页面的滚动进度而变化长短。</div>
      <div class="desc">就是顶部黄色的滚动进度条，随着页面的滚动进度而变化长短。</div>
      <div class="desc">就是顶部黄色的滚动进度条，随着页面的滚动进度而变化长短。就是顶部黄色的滚动进度条，随着页面的滚动进度而变化长短。</div>
      <div class="desc">就是顶部黄色的滚动进度条，随着页面的滚动进度而变化长短。</div>
    
      <!-- 独立盒子里的进度条 -->
      <div class="content-box1">
        <div class="content1">
          <div class="title">不可思议的css滚动条效果</div>
          <div class="desc">就是顶部黄色的滚动进度条，随着页面的滚动进度而变化长短。就是顶部黄色的滚动进度条，随着页面的滚动进度而变化长短。</div>
          <div class="desc">就是顶部黄色的滚动进度条，随着页面的滚动进度而变化长短。</div>
          <div class="desc">就是顶部黄色的滚动进度条，随着页面的滚动进度而变化长短。就是顶部黄色的滚动进度条，随着页面的滚动进度而变化长短。</div>
          <div class="desc">就是顶部黄色的滚动进度条，随着页面的滚动进度而变化长短。</div>
          <div class="desc">就是顶部黄色的滚动进度条，随着页面的滚动进度而变化长短。就是顶部黄色的滚动进度条，随着页面的滚动进度而变化长短。</div>
          <div class="desc">就是顶部黄色的滚动进度条，随着页面的滚动进度而变化长短。</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'home',
  methods: {
    triggerToProgressCss () {
      this.$router.push({
        name: 'cssProgress'
      })
    }
  }
}
</script>
<style lang="less" scoped>
.container {
  position: relative;
  width: 100%;
  height: 100%;
  &::after {
    content: '';
    display: block;
    position: fixed;
    top: 5px;
    bottom: 0;
    left: 0;
    right: 0;
    background: #ffffff;
    z-index: 0;
  }
  .content-box {
    background: linear-gradient(to right top, #ffcc00 50%, #eeeeee 50%);
    background-repeat: no-repeat;
    background-size: 100% calc(100% - 100vh + 5px);
    z-index: -1;
  }
  .title {
    position: relative;
    margin-top: 20px;
    height: 200px;
    font-size: 13px;
    z-index: 1;
  }
  .desc {
    position: relative;
    height: 100px;
    font-size: 13px;
    margin-top: 20px;
    font-size: 12px;
    z-index: 1;
  }
}
.content-box1 {
  position: relative;
  margin-left: 25%;
  width: 50%;
  height: 400px;
  border: 1px solid #eeeeee;
  overflow: auto;
  &::after {
    content: '';
    display: block;
    position: absolute;

  }
  .content1 {
    width: 100%;
    background: linear-gradient(to right top, #ffcc00 50%, #eeeeee 50%);
    background-repeat: no-repeat;
  }
}
</style>
