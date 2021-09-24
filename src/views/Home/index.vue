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
import './index.js'
</script>
<style lang="less" scoped>
@import './index.less';
</style>
