<template>
  <div class="home-footer flex-center">
    <div class="footer-content">
      <div class="footer-logo flex-center">
        <img src="http://www.thjj.org/img/btmlogo.png" alt="" />
      </div>
      <div class="beian-txt1">
        <p>主管单位：国家林业和草原局</p>
        <p>地址：北京市东城区和平里东街18号</p>
        <p>邮政编码：100714 电话：010-84239412</p>
        <p>传真：010-84238191 电子邮箱:thjj@thjj.org</p>
      </div>
      <div class="beian-txt2">
        <p>
          网址：<a
            class="website-link"
            href="http://www.thjj.org/"
            target="_blank"
            >www.thjj.org</a
          >
        </p>
        <p>© 2010-2019 中国绿色碳汇基金会 保留所有权利</p>
        <p>
          <a href="http://www.beian.miit.gov.cn/" target="_blank"
            >京ICP备11001953号-1</a
          >
          <a
            target="_blank"
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010102003872"
            ><img src="http://www.thjj.org/img/beian.png" /> 京公网安备
            11010102003872号</a
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home-footer",
  data() {
    return {};
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
@import '~@/css/color.styl';
a
  color color-white
.home-footer
  background-color color-grey
  height 200px
.footer-content
  max-width 1100px
  margin 0 auto
  text-align left
  line-height 28px
  display flex
  color color-white
.footer-logo
  width 415px
  flex none
  > img
    width 379px
    height 73px
.beian-txt1
  width 340px
  flex none
.beian-txt2
  width 400px
  flex none
</style>
