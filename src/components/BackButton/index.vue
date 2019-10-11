<template>
  <div class="button-content">
    <div @click="triggerToBack" class="button-box" :style="{backgroundColor: backgroundColor}">
      <div class="button-triggle" :style="{borderColor: iconColor}"></div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    backgroundColor: {
      type: String,
      default: 'rgba(255, 255, 255, 0.5)'
    },
    iconColor: {
      type: String,
      default: 'rgba(255, 255, 255, 1)'
    }
  },
  methods: {
    triggerToBack () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="less" scoped>
.button {
  &-content {
    position: fixed;
    top: 40px;
    left: 40px;
    z-index: 10000;
  }
  &-box {
    position: relative;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    transition: transform .1s linear;
    opacity: 0.4;
    cursor: pointer;
    &:hover {
      opacity: 1;
      transform: scale(1.1);
    }
  }
  &-triggle {
    position: absolute;
    top: 17px;
    left: 20px;
    width: 12px;
    height: 12px;
    border: 2px solid transparent;
    border-right-color: transparent !important;
    border-bottom-color: transparent !important;
    transform-origin: 50% 50%;
    transform: rotateZ(-45deg);
  }
}
</style>