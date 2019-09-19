<template>
  <div>
    <div class="back_color"></div>
    <!-- 旋转轮播1: 无点击事件 -->
    <div class="flex-center-center">
      <div class="flex-center-center photo-content">
        <div class="photo-box">
          <div class="photo-imgs animation">
            <div class="photo-item photo-item1"></div>
            <div class="photo-item photo-item2"></div>
            <div class="photo-item photo-item3"></div>
            <div class="photo-item photo-item4"></div>
            <div class="photo-item photo-item5"></div>
            <div class="photo-item photo-item6"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      currType: 1
    }
  },
  methods: {
    triggerToClick (type) {
      this.currType = type
    }
  }
}
</script>
<style lang="less" scoped>
.photo {
  &-content {
    margin-top: 50px;
    width: 1000px;
    height: 290px;
    border: 10px solid #fff;
    box-shadow: 0 0 10px 0 rgba(124, 63, 63, 0.5) inset;
    background: rgba(255, 255, 255, 0.3);
  }
  &-box {
    width: 100%;
    height: 100%;
    perspective: 2000px;
  }
  &-imgs {
    margin: 0 auto;
    width: 100%;
    height: 100%;
    position: relative;
    perspective-origin: 50% 50%;
    transform-style: preserve-3d;
    transition: all .3s ease-out;
  }
  &-item {
    position: absolute;
    top: 70px;
    left: 325px;
    width: 350px;
    height: 150px;
    background: pink;
    opacity: 0.5;
    transition: all .3s ease-out;
  }
  &-item1 {
    transform: rotateZ(0deg) translateZ(303px);
  }
  &-item2 {
    background: rgb(248, 128, 148);
    transform: rotateY(60deg) translateZ(303px);
  }
  &-item3 {
    background: rgb(192, 255, 208);
    transform: rotateY(120deg) translateZ(303px);
  }
  &-item4 {
    background: rgb(118, 245, 213);
    transform: rotateY(180deg) translateZ(303px);
  }
  &-item5 {
    background: rgb(108, 200, 243);
    transform: rotateY(240deg) translateZ(303px);
  }
  &-item6 {
    background: rgb(185, 135, 250);
    transform: rotateY(300deg) translateZ(303px);
  }
}
.animation {
  animation: rotateImg 8s linear infinite;
}
@keyframes rotateImg {
  0% {
    transform: rotateY(0deg);
  }
  0% {
    transform: rotateY(360deg);
  }
}
</style>