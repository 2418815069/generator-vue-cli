<template>
  <div class="successCaseList">
    <div class="successCaseListC">
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
      <div class="list-content">
        <div class="list-item flex-spaceBwtween" :key="i" v-for="i in 5">
          <img class="logo" src="@/static/assets/home-nav-banner2.png" alt="">
          <div class="content">
            <div class="title f26 fw700 ac">内蒙古盛乐国际生态示范区林业碳汇及生态修复项目</div>
            <div class="des">
              项目地位于内蒙古和林格尔县盛乐经济开发区，和林格尔，是蒙古语，意思是20户人家。大约1600年前，对中国历史影响深远的北魏王朝定都盛乐，并从此走向中原，当时这一地区土地肥沃、生态适宜，“天苍苍、野茫茫、风吹草低现牛羊”的美丽诗句就是描绘了那个时期的风景。但是由于后来不适宜的生产生活方式加上气候变化的影响，到清代，这里生态恶化，只剩下20户人家。

根据全国沙漠、戈壁和沙化土地普查及荒漠化调研结果表明，中国荒漠化土地面积为262.2万平方公里，占国土面积的27.4%，近4亿人口受到荒漠化的影响。据中、美、加国际合作项目研究，中国因荒漠化造成的直接经济损失约为541亿人民币。从1978年，我国政府先后启动了“三北防护林”、“京津风沙源治理”等多项大型的植被恢复项目，在局部取得了很好的效果，但整体形势并不乐观。
            </div>
          </div>
          <div class="more" @click="goMore">
            <div class="flex-center">
              <span>更多</span>
              <i class="el-icon-d-arrow-right"></i>
            </div>
          </div>
        </div>
        <div class="pagination">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-size="100"
            layout="total, prev, pager, next"
            :total="1000">
          </el-pagination>
          <span class="pageBtn">
            下一页
          </span>
          <span class="prePage pageBtn">
            上一页
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'successCaseList',
    components: {
    },
    data() {
        return {
          currentPage: 1
        };
    },
    methods: {
      goBack() {
        this.$router.go(-1)
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      goMore() {
        this.$router.push({
          path: '/guide/successCaseDetail'
        })
      }
    },
    created() {
    }
};
</script>

<style scoped lang="stylus">
@import '~@/css/color.styl'
.successCaseListC
  background-color color-white
  line-height 28px
.successCaseList
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
.list-content
  padding 30px
.list-item
  padding-bottom 70px
  > .content
    padding 0 17px
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
  flex none
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