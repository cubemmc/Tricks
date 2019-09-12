<template>
  <div class="button-content">
    <div @click="triggerToBack" class="button-box">
      <div class="button-triggle"></div>
      <div class="button-block button-block1"></div>
      <div class="button-block button-block2"></div>
      <div class="button-angle"></div>
    </div>
  </div>
</template>
<script>
export default {
  props: {},
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
    background: #49C9B4;
    border-radius: 10px;
    box-shadow: 1px 1px 0 0 #328B7E;
    transition: all .1s linear;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
    }
  }
  &-triggle {
    position: absolute;
    top: 7px;
    left: -2px;
    border: 10px solid transparent;
    border-right-color: #ffffff;
  }
  &-block {
    position: absolute;
    left: 13px;
    width: 12px;
    height: 10px;
    background: #ffffff;
  }
  &-block1 {
    top: 12px;
  }
  &-block2 {
    top: 28px;
  }
  &-angle {
    display: inline-block;
    position: absolute;
    top: 12px;
    left: 25px;
    width: 13px;
    height: 26px;
    background: #ffffff;
    border-radius: 0 13px 13px 0;
    &:after {
      content: '';
      position: absolute;
      top: 10px;
      left: 0;
      width: 3px;
      height: 6px;
      background: #49C9B4;
      border-radius: 0 3px 3px 0;
    }
  }
}
</style>