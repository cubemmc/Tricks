<template>
  <div class="siderbar-box">
    <div class="flex-center siderbar-content">
      <div class="siderbar-title">{{title}}</div>
      <div class="siderbar-item-content">
        <div v-for="(item, index) in list" :key="index" class="flex-center siderbar-item" :class="{'siderbar-item-active': currentIndex === index}">
          <div>边框动画</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
      default: '标题'
    },
    list: {
      type: Array,
      required: true,
      default: () => {
        return []
      }
    },
    currentIndex: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {

    }
  }
}
</script>
<style lang="less" scoped>
.siderbar {
  &-box {
    position: relative;
    width: 200px;
    height: 100vh;
  }
  &-content {
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    width: 200px;
    height: 100vh;
    background: @back_color_siderbar;
    overflow: hidden;
    overflow-y: auto;
    box-sizing: border-box;
  }
  &-title {
    margin-top: 70px;
    margin-bottom: 20px;
    width: 100%;
    font-size: 22px;
    color: #333;
    text-align: center;
  }
  &-item {
    justify-content: center;
    padding: 15px 10px;
    color: #fff;
    border-top: 1px solid rgba(255, 255, 255, 0.3);
    transition: all .3s;
    cursor: pointer;
    &:last-child {
      border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    }
    &-content {
      width: 100%;
    }
    &:hover {
      border-color: #90d6c3;
      background: #90d6c3;
      color: #fff;
    }
  }
}
</style>
