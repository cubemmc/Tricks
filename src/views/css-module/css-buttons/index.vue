<template>
  <div class="container">
    <!-- <div class="back_color"></div> -->
    <!-- 切换不同的样式 -->
    <SiderBar title='按钮' :list="siderbarList"></SiderBar>
    <!-- button hover styles -->
    <div class="button1-box">
      <div class="button1-text">line-button</div>
    </div>
  </div>
</template>
<script>
import SiderBar from '@/components/SiderBar/index'
export default {
  components: { SiderBar },
  data () {
    return {
      siderbarList: [
        { name: '边框动画' }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
.container {
  flex-direction: column;
  position: relative;
  min-height: 100vh;
  padding: 40px 0 40px 140px;
}
/** button1 样式 **/
.button1 {
  &-box {
    position: relative;
    margin-top: 100px;
    margin-left: 50%;
    padding: 1px;
    width: 200px;
    height: 60px;
    transform: translateX(-50%);
    background: #68ABAD;
  }
  &-text {
    width: 200px;
    height: 60px;
    background: #fff;
    text-align: center;
    line-height: 60px;
  }
}
</style>
