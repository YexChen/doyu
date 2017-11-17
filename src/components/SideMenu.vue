<template lang="html">
  <div class="side-menu" @click = "hideSide">
    <ul>
      <router-link v-for = "(item,index) in list" :to="item.url" :key = "index">
        {{item.title}}
        <i class = "icon-chevron-right"></i>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      list : [
        {title : "首页",url : "/"},
        {title : "全部分类",url : "/category"}
      ]
    }
  },
  methods : {
    hideSide(){
      this.$emit("hide")
    }
  }
}
</script>

<style lang="css">
  .side-menu {
    background: rgba(10,10,10,.3);
    height: 100%;
    position: fixed;
    width: 100%;
    top: 0;
    padding-top: 44px;
    z-index: 11;
  }
  .side-menu ul {
    width: 70%;
    background: #282828;
    height: 100%;
    border-top: 1px solid #222;
  }
  .side-menu ul li {
    height: 50px;
    border-bottom: 1px dotted #333;
    font-size: 14px;
    line-height: 50px;
    padding: 0 30px 0 20px;
    color: #9a9a9a;
  }
  .side-menu ul li i {
    float: right;
    line-height: 50px;
  }
</style>
