<template>
  <div class="flex-center container">
    <div class="flex-center-center loading1-box">
      <div class="flex-center-center loading1-content">
        <div class="loading1-item loading1-item1"></div>
        <div class="loading1-item loading1-item2"></div>
        <div class="loading1-item loading1-item3"></div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.container {
  flex-direction: column;
  padding: 40px 0;
}
.loading1 {
  &-box {
    width: 1000px;
    height: 400px;
    border: 1px solid #eeeeee;
  }
  &-content {
    width: 400px;
    height: 100px;
  }
  &-item {
    width: 70px;
    height: 70px;
    background: #424ab9;
    border-radius: 50%;
  }
}
</style>
