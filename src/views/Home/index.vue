<template>
  <div class="container">
    <div class="background">
      <div class="background-box">
        <div @click="triggerToProgressCss(1)" class="background-bubble background-bubble1">
          <span>css进度条</span>
        </div>
        <div @click="triggerToProgressCss(2)" class="background-bubble background-bubble2">
          <span>css方块跳动</span>
        </div>
        <div @click="triggerToProgressCss" class="background-bubble background-bubble3">
          <span>cssLoading</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { randomColor } from '@/utils/common'
export default {
  name: 'home',
  methods: {
    triggerToProgressCss (index) {
      let name = ''
      switch (index) {
        case 1:
          name = 'cssProgress'
          break
        case 2:
          name = 'blockJump'
          break
        case 3:
          name = 'cssLoading'
          break
      }
      if (name) {
        this.$router.push({
          name
        })
      } else {
        alert('敬请期待！')
      }
    }
  }
}
</script>
<style lang="less" scoped>
.background {
  padding: 40px;
  width: 100wh;
  min-height: 100vh;
  background: #eeeeee url(../../assets/images/background.jpg) no-repeat;
  background-position: 0 0;
  background-size: 100% 100%;
  z-index: 0;
  box-sizing: border-box;
  &-box {
    position: relative;
    height: 100px;
  }
  &-bubble {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #ffffff url(../../assets/images/bubble1.jpg) no-repeat;
    background-position: 0 0;
    background-size: 100% 100%;
    box-shadow: 0 0 5px 0 rgb(51, 39, 39);
    animation: bubble 2s ease infinite;
    cursor: pointer;
    span {
      display: block;
      width: 50px;
      font-size: 14px;
      color: #666;
      text-align: center;
      word-break: break-all;
    }
    &:hover {
      width: 70px;
      height: 70px;
      transform: translate(-10px, -10px);
      animation: none;
      z-index: 10;
      span {
        color: #555 !important;
      }
    }
  }
  &-bubble1 {}
  &-bubble2 {
    top: 0;
    left: 90px;
  }
  &-bubble3 {
    top: 0;
    left: 180px;
  }
}
@keyframes bubble {
  0% {
    width: 50px;
    height: 50px;
  }
  50% {
    width: 70px;
    height: 70px;
    transform: translate(-10px, -10px);
  }
  100% {
    width: 50px;
    height: 50px;
  }
}
.btn {
  position: relative;
}
</style>
