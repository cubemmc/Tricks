<template>
  <div class="container">
    <div class="header-container">
      <span>css相关</span>
    </div>
    <div class="flex-center-center card-container">
      <div class="card-content">
        <div v-for="(item, index) in cssList" :key="index" class="flex-center card-item">
          <div class="card-item-content">
            <div v-if="!item.isHide" @click="triggerToCssLink(item.routeName)">
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
          id: 6,
          cover: '5.jpg',
          title: 'css特效之按钮悬浮特效',
          desc: 'css特效之按钮悬浮特效',
          isHide: true,
          routeName: 'cssButtons'
        },
        {
          id: 5,
          cover: '5.jpg',
          title: 'css特效之rotate',
          desc: 'css特效之rotate',
          isHide: false,
          routeName: 'cssRotate'
        },
        {
          id: 4,
          cover: '2.jpg',
          title: 'css特效之手风琴(无序列表)',
          desc: 'css特效之手风琴(无序列表)',
          isHide: true,
          routeName: 'according'
        },        
        {
          id: 1,
          cover: '3.jpg',
          title: 'css特效之css进度条',
          desc: 'css特效之css进度条',
          isHide: false,
          routeName: 'cssProgress'
        },        
        {
          id: 3,
          cover: '2.jpg',
          title: 'css动画之cssLoading',
          desc: 'css动画之cssLoading',
          isHide: false,
          routeName: 'cssLoading'
        },
        {
          id: 2,
          cover: '1.jpg',
          title: 'css动画之css方块跳动',
          desc: 'css动画之css方块跳动',
          isHide: false,
          routeName: 'blockJump'
        }
      ]
    },
    triggerToCssLink (name) {
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
    padding: 50px 0 100px;
  }
  &-content {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 1075px;
  }
  &-item {
    flex-direction: column;
    margin-bottom: 30px;
    width: 215px;
    height: 250px;
    &-content {
      position: relative;
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
      &:hover {
        transform: scaleX(1.1) scaleY(1.1);
      }
    }
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
}
</style>
