<template lang="html">
  <div class="mr-item">
    <router-link :to="'/room/'+room.room_id">
      <img :src="room.room_src" alt="">
      <div class="room-info">
        <span class = "nickname">{{room.nickname}}</span>
        <span class = "count">
          <i class = "icon-group"></i>
          {{room.online | number}}
        </span>
      </div>
      <div class="room-title">
        <i class = "icon-desktop"></i>
        {{room.room_name | message}}
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props : ["room"]
}
</script>

<style lang="css" scoped>
  .mr-item {
    margin-top: 10px;
    float: left;
    width: 4.4rem;
    margin-right: .3rem;
    position: relative;
  }

  .mr-item img {
    width: 100%;
    height: 2.6rem;
    border-radius: 5px;
  }

  .room-info {
    position: absolute;
    bottom: 33px;
    color: #fff;
    padding: 0 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    background: rgba(10,10,10,.5);
    line-height: 24px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  .room-info .count {
    float: right;
  }

  .room-title {
    line-height: 30px;
  }

</style>
