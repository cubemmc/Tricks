<template>
  <div class="container">
    <div class="background">
      <div v-for="(item, index) in bubbleInfo" :key="index">
        <div @click="triggerToProgressCss(index)" class="background-bubble" :style="{top: item.top, left: item.left, backgroundImage: `url(${require('../../assets/images/bubble'+(index+1)+'.jpg')})`}">
          <span :style="{color: item.color}">{{item.title}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { randomColor } from '@/utils/common'
export default {
  name: 'home',
  data () {
    return {
      type: ['css进度条'],
      bubbleInfo: []
    }
  },
  mounted () {
    let screenWidth = document.body.offsetWidth
    let screenHeight = document.body.offsetHeight
    this.type.map((item, index) => {
      let top = Math.floor(Math.random() * (screenHeight - 110 - 40) + 40)
      let left = Math.floor(Math.random() * (screenWidth - 110 - 40) + 40)
      let color = randomColor()
      this.bubbleInfo.push({
        id: index,
        top: top + 'px', 
        left: left + 'px',
        color,
        title: item
      })
    })
  },
  methods: {
    triggerToProgressCss (index) {
      let name = ''
      switch (index) {
        case 0:
          name = 'cssProgress'
          break
      }
      this.$router.push({
        name
      })
    }
  }
}
</script>
<style lang="less" scoped>
.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #eeeeee url(../../assets/images/background.jpg) no-repeat;
  background-position: 0 0;
  background-size: 100% 100%;
  z-index: 0;
  &-bubble {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
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
    }
    &:hover {
      width: 70px;
      height: 70px;
      margin-top: -10px;
      margin-left: -10px;
      animation: none;
      z-index: 10;
      span {
        color: #555 !important;
      }
    }
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
    margin-top: -10px;
    margin-left: -10px;
  }
  100% {
    width: 50px;
    height: 50px;
    margin-top: 0;
    margin-left: 0;
  }
}
.btn {
  position: relative;
}
</style>
