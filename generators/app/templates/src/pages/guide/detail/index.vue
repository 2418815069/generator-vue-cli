<template>
  <div class="guide-notice">
    <div class="guide-noticeC">
      <div class="tabsC flex-spaceBwtween">
        <div class="tabs">
          <div class="tab indent0 f18 checked"
          :key="item" v-for="item in ['通知公告']">
            {{item}}
          </div>
        </div>
        <div class="goback" @click="goBack">
            <span class="flex-center">返回上一级 <i class="el-icon-d-arrow-right"></i></span>
        </div>
      </div>
      <div class="notice-content">
        <div class="title f16">
          中华人民共和国国家发展和改革委员会公告
        </div>
        <div class="title f16">
          2017年 第2号
        </div>
        <div>
          2012年6月，我委印发施行了《温室气体自愿减排交易管理暂行办法》（以下简称《暂行办法》），对国内温室气体自愿减排项目等5个事项实施备案管理。《暂行办法》施行以来，对提高自愿减排交易的公正性，调动全社会自觉参与碳减排活动的积极性发挥了重要作用。同时，在《暂行办法》施行中也存在着温室气体自愿减排交易量小、个别项目不够规范等问题。
        </div>
        <div>
          为进一步完善和规范温室气体自愿减排交易，促进绿色低碳发展，按照简政放权、放管结合、优化服务的要求，我委正在组织修订《暂行办法》。即日起，我委暂缓受理温室气体自愿减排交易方法学、项目、减排量、审定与核证机构、交易机构备案申请。待《暂行办法》修订完成并发布后，将依据新办法受理相关申请。
        </div>
        <div>
          此次暂缓受理温室气体自愿减排交易备案申请，不影响已备案的温室气体自愿减排项目和减排量在国家登记簿登记，也不影响已备案的“核证自愿减排量（CCER）”参与交易。已向我委政务服务大厅提出备案申请、但尚未备案的事项，我委将登记在册，待《暂行办法》修订完成后，依据新办法优先办理。
        </div>
        <div>
          附件：<a class="colorBlue" href="http://cdm.ccchina.org.cn/archiver/cdmcn/UpFile/Files/Default/20170321161711758790.pdf">尚未备案的申请事项清单</a>
        </div>
        <div>
          国家发展改革委
        </div>
        <div>
          2017年3月14日
        </div>
        <div class="indent0">
          来源：国家发展改革委
        </div>
        <div class="indent0">
          时间：2017-03-21
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'guide-notice',
    components: {
    },
    data() {
        return {
        };
    },
    methods: {
      goBack() {
        this.$router.go(-1)
      }
    },
    created() {
    }
};
</script>

<style scoped lang="stylus">
@import '~@/css/color.styl'
.guide-noticeC
  background-color color-white
  line-height 28px
  text-indent 20px
.guide-notice
  padding 20px 8% 40px 8%
  color color-grey
  line-height 16px
.tabsC
  border-bottom 1px solid color-bgc
.tabs
  display flex
.tab
  width 180px
  padding 10px 20px
  color color-grey
  text-align center
  &.checked
    background-color color-white
    color color-primary
    border-bottom 1px solid color-primary
.goback
  color color-primary
  padding-right 20px
  padding-bottom 10px
  display flex
  align-items flex-end
.notice-content
  padding 30px
.title
  font-weight 700
  text-align center
.indent0
  text-indent 0
.colorBlue
  color color-blue
</style>