<template>
  <div class="container">
    <!-- 切换不同的loading样式按钮 -->
    <div class="flex-center btns-box">
      <button class="btns-item" :class="{'btns-current': type === 1}" @click="triggerToChangeType(1)">balls</button>
      <button class="btns-item" :class="{'btns-current': type === 2}" @click="triggerToChangeType(2)">circle</button>
      <button class="btns-item" :class="{'btns-current': type === 3}" @click="triggerToChangeType(3)">round</button>
      <button class="btns-item" :class="{'btns-current': type === 4}" @click="triggerToChangeType(4)">pinwheel</button>
    </div>
    <!-- loading1 -->
    <div v-if="type === 1" class="flex-center-center loading1-box">
      <div class="flex-center-center loading1-content">
        <div class="loading1-roll loading1-roll1">
          <div></div>
        </div>
        <div class="loading1-roll loading1-roll2">
          <div></div>
        </div>
        <div class="loading1-roll loading1-roll3">
          <div></div>
        </div>
        <div class="loading1-roll loading1-roll4">
          <div></div>
        </div>
      </div>
    </div>
    <!-- loading2 -->
    <div v-if="type === 2" class="flex-center-center loading2-box">
      <div class="flex-center-center loading2-content">
        <div class="loading2-lgCircle"></div>
        <div class="loading2-smCircle"></div>
      </div>
    </div>
    <!-- loading3 -->
    <div v-if="type === 3" class="flex-center-center loading3-box">
      <div class="flex-center-center loading3-content">
        <div class="loading3-dotCircle"></div>
      </div>
    </div>
    <!-- loading4 -->
    <div v-if="type === 4" class="flex-center-center loading4-box">
      <div class="flex-center-center loading4-content">
        <!--风车3部件-->
        <div class="loading4-pinwheel1"></div>   
        <div class="loading4-pinwheel2"></div>
        <div class="loading4-pinwheel3"></div>
        <!--动画部分-->
        <div class="loading4-pin"></div>  
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      type: 1
    }
  },
  methods: {
    triggerToChangeType (type) {
      this.type = type
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
  background: #68ABAD;
}

// 按钮样式
.btns {
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
}

/** loading1样式 **/
.loading1 {
  &-box {
    margin-top: 100px;
    margin-left: 50%;
    width: 100px;
    height: 100px;
    transform: translateX(-50%);
  }
  &-content {
    margin:0 auto;
    width:100px;
    height:100px;
    position: relative;
  }
  &-roll {
    width:40px;
    height:40px;
    position: absolute;
    -webkit-border-radius:50%;
    -moz-border-radius:50%;
    border-radius:50%;
    transform-origin: 20px 20px;
    animation: roll1 1.5s linear infinite reverse;
    div{
      position: absolute;
      width:20px;
      height:20px;
      border-radius:50%;
    }
  }
  &-roll1 {
    top:20px;
    left:30px;
    div {
      background: rgba(10,155,123,0.8);
      bottom:0;
      left:10px;
    }
  }
  &-roll2 {
    top:30px;
    left:40px;
    div {
      background: rgba(246,194,45,0.8);
      top:10px;
      left:0px;
    }
  }
  &-roll3 {
    top:40px;
    left:30px;
    div {
      background: rgba(213,83,57,0.8);
      top:0px;
      left:10px;
    }
  }
  &-roll4 {
    top:30px;
    left:20px;
    div {
      background: rgba(57,151,216,0.8);
      top:10px;
      right:0px;
    }
  }
}
@keyframes roll1{
    0%{
        transform: rotateZ(0deg);
    }
    25%{
        transform: rotateZ(120deg);
    }
    50%{
        transform: rotateZ(240deg);
    }
    75%{
        transform: rotateZ(360deg);
    }
    100%{
        transform: rotateZ(360deg);
    }
}

/** loading2样式 **/
.loading2 {
  &-box {
    margin-top: 100px;
    margin-left: 50%;
    width: 100px;
    height: 100px;
    transform: translateX(-50%);
  }
  &-content {
    margin:0 auto;
    width:100px;
    height:100px;
    position: relative;
  }
  &-lgCircle{
    width:100px;
    height:100px;
    background: #fff;
    border-radius: 50%;
    position: absolute;
    top:0;
    left:0;
    animation: Calpha2 1.2s linear infinite;
  }
  &-smCircle{
    width:0;
    height:0;
    background: #68ABAD;
    border-radius: 50%;
    position: absolute;
    top:50px;
    left:50px;
    animation: Cscale2 1.2s linear infinite;
  }
}
@keyframes Calpha2 {
  0%{
    opacity:1;
  }
  16%{
    opacity:0.9;
  }
  34%{
    opacity:0.6;
  }
  50%{
    opacity:0.3;
  }
  100%{
    opacity:0;
  }
}
@keyframes Cscale2 {
  0%{
    width:0px;  height:0;
    top:50px;   left:50px;
  }
  16%{
    width:36px;  height:36px;
    top:32px;    left:32px;
  }
  34%{
    width:72px;  height:72px;
    top:14px;    left:14px;
  }
  50%{
    width:100px;  height:100px;
    top:0;        left:0;
  }
  100%{
    width:100px;  height:100px;
    top:0;        left:0;
  }
}

/** loading3样式 **/
.loading3 {
  &-box {
    margin-top: 100px;
    margin-left: 50%;
    width: 100px;
    height: 100px;
    transform: translateX(-50%);
  }
  &-content {
    margin:0 auto;
    width:100px;
    height:100px;
    position: relative;
  }
  &-dotCircle{
    width: 50px;
    height: 50px;
    border:2px dashed #333;
    border-radius: 50%;
    animation: dotRotate3 2s linear infinite reverse;
  }
}
@keyframes dotRotate3 {
  0%{
    transform: rotateZ(0deg) scale(1);
  }
  75%{
    transform: rotateZ(45deg) scale(0.4);
  }
  100%{
    transform: rotateZ(190deg) scale(1);
  }
}

/** loading4样式 **/
.loading4 {
  &-box {
    margin-top: 100px;
    margin-left: 50%;
    width: 100px;
    height: 100px;
    transform: translateX(-50%);
  }
  &-content {
    margin:0 auto;
    width:100px;
    height:100px;
    position: relative;
    padding-top: 40px;
    transform-origin: 50px 90px;
  }
  &-pinwheel1{
    width:20px;
    border-bottom: 70px solid #B4D5D6;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    position: absolute;
    bottom:0;
    left: 28px;
  }
  &-pinwheel2,
  &-pinwheel3{
    position: absolute;
    top:87px;
    left:10px;
    width:80px;
    height:5px;
    background: #fff;
    animation: roll41 1.5s linear infinite;
  }
  &-pinwheel3{
    top:47px;
    left:46px;
    width:5px;
    height:80px;
  }
  &-pin{
    width:75px;
    height:75px;
    border-radius: 50%;
    border:3px dashed #B4D5D6;
    position: absolute;
    top:50px;
    left:9px;
    animation: roll42 .2s linear infinite;
  }
}
@keyframes roll41{
  0%{
    transform: rotate(0deg);
  }
  0%{
    transform: rotate(360deg);
  }
}
@keyframes roll42{
  0%{
    transform: scale(1.0);
    border:3px dashed #B4D5D6;
  }
  70%{
    transform: scale(1.6);
    border:2px dashed #B4D5D6;
  }
  100%{
    transform: scale(1.8);
    border:1px dashed #B4D5D6;
  }
}
</style>
