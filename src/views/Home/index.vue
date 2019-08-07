<template>
  <div class="home">
    <div @click="triggerToProgressCss">css进度条效果</div>
  </div>
</template>
<script>
export default {
  name: 'home',
  methods: {
    triggerToProgressCss () {
      this.$router.push({
        name: 'cssProgress'
      })
    }
  }
}
</script>
