<template lang="html">
  <header>
    <i class = "icon-reorder" @click = "showSlide"></i>
    <slot></slot>
    <i class = "icon-user"></i>
  </header>
</template>

<script>
import bus from "../bus"
export default {
  methods : {
    showSlide(){
      bus.$emit('showSide')
    }
  }
}
</script>

<style lang="css" scoped>
  header {
    height: 44px;
    background: #333;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 100;
    padding: 0 15px;
    color: #fff;
    line-height: 44px;
    font-size: 16px;
  }
  header i {
    color: #999;
  }

  .title {
    margin-left: 15px;
    display: inline-block;
  }

  .icon-user {
    float: right;
    line-height: 44px;
  }
</style>
