<template>
  <div class="flex-center-center container">
    <div class="back_color"></div>
    <backButton></backButton>
    <div class="block-box">
      <div class="block-item block-item1"></div>
      <div class="block-item block-item2"></div>
      <div class="block-item block-item3"></div>
      <div class="block-item block-item4"></div>
      <div class="block-item block-item5"></div>
    </div>
  </div>
</template>
<script>
import backButton from '@/components/BackButton'
export default {
  components: { backButton }
}
</script>
<style lang="less" scoped>
.container {
  height: 100vh;
}
.block {
  &-box {
    position: relative;
    width: 450px;
    height: 50px;
  }
  &-item {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 50px;
    height: 50px;
    border-radius: 5px;
  }
  &-item1 {
    background: rgb(235, 64, 144);
    box-shadow: 0 0 4px 0 rgb(235, 64, 144);
    animation: blockLinear 6s linear infinite;
  }
  &-item2 {
    left: 100px;
    transform-origin: -25px 25px;
    background: rgb(43, 89, 214);
    box-shadow: 0 0 4px 0 rgb(43, 89, 214);
    animation: blockJump1 6s linear .2s infinite;
  }
  &-item3 {
    left: 200px;
    transform-origin: -25px 25px;
    background: rgb(74, 111, 212);
    box-shadow: 0 0 4px 0 rgb(74, 111, 212);
    animation: blockJump2 6s linear .8s infinite;
  }
  &-item4 {
    left: 300px;
    transform-origin: -25px 25px;
    background: rgb(100, 129, 207);
    box-shadow: 0 0 4px 0 rgb(100, 129, 207);
    animation: blockJump3 6s linear 1.4s infinite;
  }
  &-item5 {
    left: 400px;
    transform-origin: -25px 25px;
    background: rgb(133, 152, 204);
    box-shadow: 0 0 4px 0 rgb(133, 152, 204);
    animation: blockJump4 6s linear 2s infinite;
  }
}
@keyframes blockLinear {
  0% {
    left: 0;
  }
  50% {
    left: 400px;
  }
  100% {
    left: 0;
  }
}
@keyframes blockJump1 {
  0% {
    width: 50px;
    height: 50px;
    transform: rotateZ(0deg);
  }
  10% {
    width: 70px;
    height: 30px;
    transform: rotateZ(-90deg);
  }
  20% {
    width: 50px;
    height: 50px;
    transform: rotateZ(-180deg);
  }
  80% {
    width: 50px;
    height: 50px;
  }
  85% {
    transform: rotateZ(-180deg);
  }
  90% {
    width: 70px;
    height: 30px;
  }
  100% {
    width: 50px;
    height: 50px;
    transform: rotateZ(0deg);
  }
}
@keyframes blockJump2 {
  0% {
    width: 50px;
    height: 50px;
    transform: rotateZ(0deg);
  }
  10% {
    width: 70px;
    height: 30px;
  }
  20% {
    width: 50px;
    height: 50px;
    transform: rotateZ(-180deg);
  }
  58% {
    width: 50px;
    height: 50px;
  }
  63% {
    transform: rotateZ(-180deg);
  }
  70% {
    width: 70px;
    height: 30px;
  }
  80% {
    width: 50px;
    height: 50px;
    transform: rotateZ(0deg);
  }
}
@keyframes blockJump3 {
  0% {
    width: 50px;
    height: 50px;
    transform: rotateZ(0deg);
  }
  10% {
    width: 70px;
    height: 30px;
  }
  20% {
    width: 50px;
    height: 50px;
    transform: rotateZ(-180deg);
  }
  35% {
    width: 50px;
    height: 50px;
  }
  40% {
    transform: rotateZ(-180deg);
  }
  45% {
    width: 70px;
    height: 30px;
  }
  55% {
    width: 50px;
    height: 50px;
    transform: rotateZ(0deg);
  }
}
@keyframes blockJump4 {
  0% {
    width: 50px;
    height: 50px;
    transform: rotateZ(0deg);
  }
  8% {
    width: 70px;
    height: 30px;
  }
  18% {
    width: 50px;
    height: 50px;
    transform: rotateZ(-180deg);
  }
  18% {
    width: 50px;
    height: 50px;
  }
  23% {
    width: 70px;
    height: 30px;
    transform: rotateZ(-90deg);
  }
  33% {
    width: 50px;
    height: 50px;
    transform: rotateZ(0deg);
  }
}
</style>
