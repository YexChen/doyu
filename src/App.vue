<template>
  <div id="app">
    <transition name = "side">
      <side-menu v-show = "show" @hide = "hideSide"></side-menu>
    </transition>
    <router-view/>
  </div>
</template>

<script>
import SideMenu from "./components/SideMenu"
import bus from "./bus"
export default {
  name: 'app',
  components : {
    SideMenu
  },
  created(){
    this.$http.get(`/douyuapi/RoomApi/live?offset=1&limit=20`).then(res=>{
      console.log(res.data.data);
    })
  },
  data(){
    return {
      show : false
    }
  },
  mounted () {
    bus.$on("showSide",this.side)
  },
  methods : {
    side(){
      this.show = !this.show
    },
    hideSide(){
      this.show = false
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
