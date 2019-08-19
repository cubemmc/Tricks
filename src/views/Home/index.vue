<template>
  <div class="container">
    <div class="header-container">
      <span>css相关</span>
    </div>
    <div class="card-container">
      <div class="card-content">
        <div v-for="(item, index) in cssList" :key="index" class="card-item">
          <div v-if="!item.isHide" @click="triggerToCssLink(item.id)">
            <img :src="require('../../assets/images/css-source-imgs/' + item.cover)" alt="">
            <div class="card-item__text">
              <div class="card-item__text--box">
                <div class="card-item__text--title text-ellipsis">{{item.title}}</div>
                <div class="card-item__text--desc text-ellipsis">{{item.desc}}</div>
              </div>
            </div>
          </div>
          <div v-if="item.isHide" class="card-item__coding">
            <div>{{item.title}}</div>
            <div>开发中，敬请期待！</div>
          </div>
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
      cssList: []
    }
  },
  mounted () {
    this.getList()
  },
  methods: {
    getList () {
      this.cssList = [
        {
          id: 5,
          cover: '5.png',
          title: 'css特效之rotate',
          desc: 'css特效之rotate',
          isHide: false
        },
        {
          id: 4,
          cover: '2.png',
          title: 'css特效之手风琴(无序列表)',
          desc: 'css特效之手风琴(无序列表)',
          isHide: true
        },        
        {
          id: 1,
          cover: '3.png',
          title: 'css特效之css进度条',
          desc: 'css特效之css进度条',
          isHide: false
        },        
        {
          id: 3,
          cover: '2.png',
          title: 'css动画之cssLoading',
          desc: 'css动画之cssLoading',
          isHide: false
        },
        {
          id: 2,
          cover: '1.png',
          title: 'css动画之css方块跳动',
          desc: 'css动画之css方块跳动',
          isHide: false
        }
      ]
    },
    triggerToCssLink (index) {
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
        case 4:
          name = 'according'
          break
        case 5:
          name = 'cssRotate'
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
.header {
  &-container {
    width: 100%;
    height: 50px;
    background: #333333;
    text-align: center;
    line-height: 50px;
    span {
      font-size: 16px;
      color: #ffffff;
      letter-spacing: 2px;
    }
  }
}
.card {
  &-container {
    padding: 50px 40px 100px;
  }
  &-content {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
  &-item {
    position: relative;
    margin-right: 30px;
    margin-bottom: 30px;
    width: 200px;
    height: 250px;
    border-radius: 4px;
    background: #80ecff url(../../assets/images/background.jpg) no-repeat;
    background-position: 0 0;
    background-size: 100% 100%;
    box-shadow: 0 0 10px 0 rgb(176, 191, 196);
    transform-origin: 50% 50%;
    overflow: hidden;
    cursor: pointer;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    &__text {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      &--box {
        position: absolute;
        left: 0;
        bottom: 0;
        padding: 10px;
        width: 100%;
        background: rgba(0, 0, 0, 0.3);
        box-sizing: border-box;
        overflow: hidden;
      }
      &--title {
        font-size: 15px;
        color: #ffffff;
      }
      &--desc {
        margin-top: 6px;
        font-size: 12px;
        color: #d8dad9;
      }
    }
    &__coding {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      font-size: 16px;
      color: #57a896;
    }
  }
  &-item:hover {
    transform: scaleX(1.1) scaleY(1.1);
  }
}
</style>
