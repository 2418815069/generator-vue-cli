<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>

<style lang="stylus">
@import '~@/css/global.styl';
@import '~@/css/color.styl';
body
  background-color color-bgc
</style>
