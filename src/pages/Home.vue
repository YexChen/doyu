<template lang="html">
  <div class="mr-root">
    <app-header>
      <p class = "title">斗鱼TV</p>
    </app-header>
    <loading v-if="showLoading"></loading>
    <home-item v-for = "(room,index) in roomList" :room = "room" :key = "index">
    </home-item>
    <p v-if = "error">加载失败，请稍后再试...</p>
    <div class="clear"></div>
    <div class="load-more">
      <span @click = "loadMore">点击加载更多</span>
    </div>
  </div>
</template>

<script>
import Public from "../public"
import HomeItem from "../components/HomeItem"
export default {
  mixins : [
    Public
  ],
  data(){
    return {
      showLoading : true,
      error : false,
      roomList : [],
      page : 0
    }
  },
  components : {
    HomeItem
  },
  created(){
    this.getInfo(this.page)
  },
  methods : {
    getInfo(page){
      this.$http.get(`/douyuapi/RoomApi/live?offset=1&limit=20`).then(res=>{
        this.error = false
        this.roomList = this.roomList.concat(res.data.data)
        setTimeout(()=>{
          this.showLoading = false
        },1000)
      })
      .catch(err=>{
        this.error = true
        this.showLoading = false
      })
    },
    loadMore(){
      this.page++
      this.getInfo(this.page)
    }
  }
}
</script>

<style lang="css">
.mr-content {
  padding: 44px 0 0 .3rem;
  overflow: hidden;
}
.load-more {
  margin: 10px;
  text-align: center;
}
.load-more span {
  display: inline-block;
  line-height: 30px;
  padding: 0 20px;
  border-radius: 10px;
  border: 1px solid #000;
}
</style>
