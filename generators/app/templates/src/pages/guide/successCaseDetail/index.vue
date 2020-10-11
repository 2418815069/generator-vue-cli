<template>
  <div class="successCaseDetail">
    <div class="successCaseDetailC">
      <div class="tabsC flex-spaceBwtween">
        <div class="tabs">
          <div class="tab f24 checked"
          :key="item" v-for="item in ['成功案例']">
            {{item}}
          </div>
        </div>
        <div class="goback" @click="goBack">
          <span class="flex-center">返回上一级 <i class="el-icon-d-arrow-right"></i></span>
        </div>
      </div>
      <div class="detail-content">
        <div class="detail-item">
          <img class="logo" src="http://pic1.arkoo.com/thjj/picture/p18v233bmh168j18an1d85ri2hrro.JPG" alt="">
          <div class="content">
            <div class="title f26 fw700 ac">内蒙古盛乐国际生态示范区林业碳汇及生态修复项目</div>
            <div class="des">
              项目地位于内蒙古和林格尔县盛乐经济开发区，和林格尔，是蒙古语，意思是20户人家。大约1600年前，对中国历史影响深远的北魏王朝定都盛乐，并从此走向中原，当时这一地区土地肥沃、生态适宜，“天苍苍、野茫茫、风吹草低现牛羊”的美丽诗句就是描绘了那个时期的风景。但是由于后来不适宜的生产生活方式加上气候变化的影响，到清代，这里生态恶化，只剩下20户人家。

根据全国沙漠、戈壁和沙化土地普查及荒漠化调研结果表明，中国荒漠化土地面积为262.2万平方公里，占国土面积的27.4%，近4亿人口受到荒漠化的影响。据中、美、加国际合作项目研究，中国因荒漠化造成的直接经济损失约为541亿人民币。从1978年，我国政府先后启动了“三北防护林”、“京津风沙源治理”等多项大型的植被恢复项目，在局部取得了很好的效果，但整体形势并不乐观。

和林格尔县位于内蒙古自治区中部，地形地貌多样，山、丘、川兼备，是内蒙古高原向黄土高原的过渡地带。气候属于干旱、半干旱大陆性季风气候区，多年平均降水量为392.8mm。这里正好位于中国的农牧交错带上，而中国北方的农牧交错带，正是近50年来中国荒漠化进程最为严重的区域。现有水土流失面积1053 km2， 占全县总土地面积的30.7％，水土流失程度5000-10000t／km2；沙化土地面积396km2，占全县总面积的11.5％；风沙土面积290 km2，占全县总面积的8.4％。另外，人们生产生活对水资源的需求不断扩大，而地下水位不断下降，水资源短缺愈加突出。在不断加剧的开发压力下，这些生态问题仍然有继续恶化的趋势。前车之鉴提醒我们，必须修复发展给环境带来的创伤，逐步建立稳定的生态安全格局，缓解并解决目前的主要生态问题，我们才有可能让这里的盛世永续。为此，2010 年8 月，老牛基金会联合大自然保护协会（TNC）、中国绿色碳汇基金会及内蒙古林业厅，在内蒙古和林格尔县共同设计并启动了“内蒙古盛乐国际生态示范区”项目。
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'successCaseDetail',
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
.successCaseDetailC
  background-color color-white
  line-height 28px
.successCaseDetail
  padding 20px 8% 40px 8%
  color color-grey
  line-height 16px
.tabsC
  border-bottom 1px solid color-border
.tabs
  display flex
.tab
  width 180px
  padding 18px 20px
  color color-grey
  text-align center
  &.checked
    background-color color-white
    color color-primary
    border-bottom 1px solid color-primary
.detail-content
  padding 30px
.detail-item
  padding-bottom 70px
  > .content
    padding-right 17px
    > .des
      padding-top 32px
.goback
  color color-primary
  padding-right 20px
  padding-bottom 10px
  display flex
  align-items flex-end
.colorPrimary
  color color-primary
.logo
  width 300px
  height 270px
  float left
  margin-right 20px
.pagination
  border-top 1px solid color-border
  display flex
  justify-content flex-end
  padding-top 10px
.prePage
  padding-left 10px
.pageBtn:hover
  color color-primary
.more
  width: 85px;
  flex: none;
  color: color-primary;
  font-size 16px
  display flex
  align-items flex-end
</style>