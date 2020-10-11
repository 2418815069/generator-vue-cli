<template>
  <div class="guide-list">
    <div class="guide-listC">
      <div class="tabsC flex-spaceBwtween">
        <div class="tabs">
          <div class="tab f24 checked"
          :key="item" v-for="item in ['通知公告']">
            {{item}}
          </div>
        </div>
        <div class="goback" @click="goBack">
          <span class="flex-center">返回上一级 <i class="el-icon-d-arrow-right"></i></span>
        </div>
      </div>
      <div class="list-content">
        <div class="list-item flex-spaceBwtween" :key="i" v-for="i in 20">
          <div>中华人民共和国国家发展和改革委员会公告 2017年第2号</div>
          <div class="colorPrimary">2017-03-21</div>
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
    name: 'guide-list',
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
      }
    },
    created() {
    }
};
</script>

<style scoped lang="stylus">
@import '~@/css/color.styl'
.guide-listC
  background-color color-white
  line-height 28px
.guide-list
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
.goback
  color color-primary
  padding-right 20px
  padding-bottom 10px
  display flex
  align-items flex-end
.colorPrimary
  color color-primary
.pagination
  display flex
  justify-content flex-end
  padding-top 10px
.prePage
  padding-left 10px
.pageBtn:hover
  color color-primary
</style>