<template>
  <div class="guide-beian">
    <div class="guide-beianC">
      <div class="tabsC flex-spaceBwtween">
        <div class="tabs">
          <div class="tab f24 checked" :key="item" v-for="item in ['备案项目']">
            {{ item }}
          </div>
        </div>
        <div class="goback" @click="goBack">
          <span class="flex-center">返回上一级 <i class="el-icon-d-arrow-right"></i></span>
        </div>
      </div>
    </div>
    <div class="beian-content">
      <div class="title f16">
        湖北省恩施州恩施市农村沼气利用项目
      </div>
      <div>
        <el-table stripe :data="tableData" border style="width: 50%;margin: 30px auto">
          <el-table-column prop="beianId" label="备案号"> </el-table-column>
          <el-table-column prop="name" label="821">
            <template slot-scope="scope">
              <div v-html="scope.row.name"></div>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "guide-beian",
  components: {},
  data() {
    return {
      tableData: [
        {
          beianId: "项目活动名称",
          name: `湖北省恩施州恩施市农村沼气利用项目<a style="color: #1f3f99" href="http://cdm.ccchina.org.cn/archiver/cdmcn/UpFile/Files/ccer/20160908814p.pdf" target="_blank">(附项目文件)</a>`
        },
        {
          beianId: "项目业主",
          name: "武汉天颖环境工程股份有限公司"
        },
        {
          beianId: "项目类别",
          name: "（一）"
        },
        {
          beianId: "项目类型",
          name: "能源工业、农业"
        },
        {
          beianId: "方法学",
          name: "CMS-001-V02、CMS-026-V01、CMS-021-V01"
        },
        {
          beianId: "预计减排量",
          name: "53,122吨二氧化碳当量（年减排量）"
        },
        {
          beianId: "计入期",
          name: "2013年1月1日-2019年12月31日"
        },
        {
          beianId: "审定机构",
          name: "北京中创碳投科技有限公司"
        },
        {
          beianId: "审定报告",
          name:
            '<a  style="color: #1f3f99" href="http://cdm.ccchina.org.cn/archiver/cdmcn/UpFile/Files/ccer/20160908814r.pdf" target="_blank">附项目审定报告</a>'
        },
        {
          beianId: "备案时间",
          name: "2016年07月28日"
        },
        {
          beianId: "其他相关文件",
          name: ""
        }
      ]
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  },
  created() {}
};
</script>

<style scoped lang="stylus">
@import '~@/css/color.styl'
.guide-beianC
  background-color color-white
  line-height 28px
  text-indent 20px
.guide-beian
  padding 20px 8% 40px 8%
  color color-grey
  line-height 16px
.beian-content
  background-color color-white
  padding 30px
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
.goback
  color color-primary
  padding-right 20px
  padding-bottom 10px
  display flex
  align-items flex-end
.title
  font-weight 700
  text-align center
</style>
