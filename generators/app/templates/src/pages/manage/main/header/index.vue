<template>
  <div class="headerDiv">
    <div class="headerLeft flex-center">
      <svg-icon icon-class="shousuo" style="color: white;font-size: 29px;" />
      <div class="headerImgBox">
        <svg-icon icon-class="message" style="color: white;font-size: 23px;"/>
      </div>
    </div>
    <div class="flex-center">
      <div class="headerRight">你好，{{userInfo.userName}}</div>
      <svg-icon icon-class="loginout" style="color: white;font-size: 15px;margin-right: 10px;"/>
      <div class="loginOut" @click="loginOut">登出</div>
    </div>
  </div>
</template>
<script>
import Storage from '@/util/storage';
import {
    loginOut
} from '@/util/util';
export default {
  name: "mainHeader",
  data() {
    const userInfo = Storage.get('userInfo')
    return {
      userInfo,
      loginOut
    };
  },
};
</script>

<style scoped lang="stylus">
@import '~@/css/color.styl';
.headerDiv {
  display: flex;
  height: 70px;
  background: rgba(88, 161, 101, 1);
}
.headerLeft {
  flex: 1;
  justify-content: space-between;
  padding: 0 32px;
  border-right: 1px solid color-white;
}
.headerRight {
  justify-content: center;
  color: color-white;
  padding 20px
}
.loginOut {
  color: color-white
  padding-right 30px
}
.loginOut:hover {
    cursor:pointer
}
</style>
