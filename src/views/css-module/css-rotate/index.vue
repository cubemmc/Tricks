<template>
  <div class="container">
    <!-- 切换不同的loading样式按钮 -->
    <!-- <div v-if="false" class="flex-center btns-box">
      <button class="btns-item" :class="{'btns-current': type === 1}" @click="triggerToChangeType(1)">balls</button>
      <button class="btns-item" :class="{'btns-current': type === 2}" @click="triggerToChangeType(2)">circle</button>
      <button class="btns-item" :class="{'btns-current': type === 3}" @click="triggerToChangeType(3)">round</button>
      <button class="btns-item" :class="{'btns-current': type === 4}" @click="triggerToChangeType(4)">pinwheel</button>
    </div> -->
    <!-- rotate -->
    <div class="flex-center-center rotate1-box">
      <div class="flex-center-center rotate1-content">
        <div class="rotate1-square rotate1-square1"></div>
        <div class="rotate1-square rotate1-square2"></div>
        <div class="rotate1-square rotate1-square3"></div>
        <div class="rotate1-square rotate1-square4"></div>
        <div class="rotate1-square rotate1-square5"></div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.container {
  flex-direction: column;
  position: relative;
  min-height: 100vh;
  padding: 40px 0 40px 140px;
  background: #000;
}

// 按钮样式
/*.btns {
  &-box {
    flex-direction: column;
    position: fixed;
    top: 40px;
    left: 40px;
    padding: 20px 0;
    width: 100px;
    max-height: 500px;
    background: #68ABAD;
    overflow: hidden;
    overflow-y: auto;
  }
  &-item {
    width: 81px;
    height: 46px;
    border-radius: 5px;
    background: #D1E5E6;
    color: #7E9293;
    font-size:16px;
    cursor: pointer;
    &:hover {
      background: #fff;
      color: #333;
    }
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
  &-current {
    background: #fff;
  }
}*/

/** rotate1 样式 **/
.rotate1 {
  &-box {
    margin-top: 100px;
    margin-left: 50%;
    width: 300px;
    height: 300px;
    transform: translateX(-50%);
  }
  &-content {
    margin:0 auto;
    width:300px;
    height:300px;
    position: relative;
  }
  &-square {
    position: absolute;
    background: #D40204;
    border: 8px solid #ffffff;
    border-left-color: rgba(255, 255, 255, 0.2);
    border-right-color: rgba(255, 255, 255, 0.2);
    transform-origin: 50% 50%;
    box-sizing: border-box;
  }
  &-square1 {
    top: calc(50% - 18px);
    left: calc(50% - 18px);
    width: 36px;
    height: 36px;
    animation: square1 6s ease-in-out infinite;
    z-index: 5;
  }
  &-square2 {
    top: calc(50% - 32px);
    left: calc(50% - 32px);
    width: 64px;
    height: 64px;
    animation: square1 6s ease-in-out .1s infinite;
    z-index: 4;
  }
  &-square3 {
    top: calc(50% - 46px);
    left: calc(50% - 46px);
    width: 92px;
    height: 92px;
    animation: square1 6s ease-in-out .2s infinite;
    z-index: 3;
  }
  &-square4 {
    top: calc(50% - 60px);
    left: calc(50% - 60px);
    width: 120px;
    height: 120px;
    animation: square1 6s ease-in-out .3s infinite;
    z-index: 3;
  }
  &-square5 {
    top: calc(50% - 74px);
    left: calc(50% - 74px);
    width: 148px;
    height: 148px;
    animation: square1 6s ease-in-out .4s infinite;
    z-index: 3;
  }
}
@keyframes square1{
  0%{
    background-color: rgba(100%, 0%, 0%, 0.3);
    transform: rotateZ(0deg);
  }
  25% {
    background-color: rgba(100%, 100%, 0%, 0.3);
  }
  40%{
    transform: rotateZ(720deg);
  }
  50%{
    transform: rotateZ(720deg);
    background-color: rgba(0%, 100%, 0%, 0.3);
  }
  75% {
    background-color: rgba(0%, 0%, 100%, 0.3);
  }
  90%{
    transform: rotateZ(0deg);
  }
  100%{
    transform: rotateZ(0deg);
    background-color: rgba(100%, 0%, 100%, 0.3);
  }
}
</style>
