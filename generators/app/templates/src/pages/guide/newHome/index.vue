<template>
  <div class="guide-home-new">
    <div class="nw">
      <!-- 头部 -->
      <div class="header">
        <div class="nav-right f14 flex-spaceBwtween flex-center">
          <span class="login nav-btn" @click="goLink('/guide/accounts/login')"
            >登录</span
          >
          <div class="li nav-btn"></div>
          <span
            class="register nav-btn"
            @click="goLink('/guide/accounts/register')"
            >注册</span
          >
        </div>
      </div>
      <!-- 大盘数据区域 -->
      <div class="tape flex-spaceBwtween">
        <!-- 数据展示和土地权属 -->
        <div class="tape-left">
          <div class="newHomeTitle">
            数据展示
          </div>
          <!-- 数据展示 -->
          <div class="data-show">
            <div class="data-show-top flex-spaceBwtween">
              <div class="project-num data-item">
                <div class="num">282</div>
                <div class="unit">(个)</div>
                <div class="des">
                  项目数量
                </div>
              </div>
              <div class="all-area data-item">
                <div class="num">80</div>
                <div class="unit">(万顷)</div>
                <div class="des">
                  总面积
                </div>
              </div>
            </div>
            <div class="data-show-bottom flex-spaceBwtween">
              <div class="year-cer data-item">
                <div class="num">673</div>
                <div class="unit">(tCO2e)</div>
                <div class="des">
                  年预计减排量
                </div>
              </div>
              <div class="province data-item">
                <div class="num">30</div>
                <div class="unit">(个)</div>
                <div class="des">
                  涉及省份
                </div>
              </div>
            </div>
          </div>
          <!-- 土地权属 -->
          <div class="land">
            <div class="newHomeTitle">
              土地权属
            </div>
            <div class="land-data" ref="landCharts">
            </div>
          </div>
        </div>
        <!-- 地图 -->
        <div class="tape-map">
          <img src="@/static/assets/newHome/map.png" alt="">
        </div>
        <!-- 项目统计 -->
        <div class="tape-statistics">
          <div class="newHomeTitle">
            项目统计
          </div>
          <div class="tape-statistics-content">
            <div class="projectType" ref="projectType">

            </div>
            <div class="projectStage">
              <div class="projectStageCharts" ref="projectStageCharts">

              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 排名统计 -->
      <div class="rank mt20">
        <div class="newHomeTitle">
          排名统计
        </div>
      </div>
      <div class="rank-content flex-spaceBwtween">
        <!-- 省份排名 -->
        <div class="rank-item province-rank">
          <div class="rank-charts" ref="provinceRankCharts">

          </div>
        </div>
        <!-- 面积排名 -->
        <div class="rank-item area-rank">
          <div class="rank-charts" ref="areaRankCharts">

          </div>
        </div>
        <!-- 减排量排名 -->
        <div class="rank-item cer-rank">
          <div class="rank-charts" ref="cerRanks"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { landOptions, projectTypeOptions, projectStageOptions,
provinceRankChartsOptions, areaRankChartsOptions, cerRanksOptions  } from './config'
import echarts from 'echarts'
export default {
  name: "guide-home-new",
  components: {},
  data() {
    return {
    };
  },
  methods: {
    goLink(path) {
      this.$router.push({
        path
      })
    },
    // 设置土地权属
    setLandCharts() {
      const landCharts = echarts.init(this.$refs.landCharts)
      landCharts.setOption(landOptions)
    },
    // 设置项目类型
    setProjectTypeCharts() {
      const projectTypeCharts = echarts.init(this.$refs.projectType)
      projectTypeCharts.setOption(projectTypeOptions)
    },
    // 设置项目阶段分类
    setProjectStageCharts() {
      const projectStageCharts = echarts.init(this.$refs.projectStageCharts)
      projectStageCharts.setOption(projectStageOptions)
    },
    // 排名统计表图
    setRankCharts() {
      // 省份排名
      const provinceRankCharts = echarts.init(this.$refs.provinceRankCharts)
      provinceRankCharts.setOption(provinceRankChartsOptions)
      // 面积排名
      const areaRankCharts = echarts.init(this.$refs.areaRankCharts)
      areaRankCharts.setOption(areaRankChartsOptions)
      // 减排量排名
      const cerRanks = echarts.init(this.$refs.cerRanks)
      cerRanks.setOption(cerRanksOptions)
    },
    init() {
      this.setLandCharts()
      this.setProjectTypeCharts()
      this.setProjectStageCharts()
      this.setRankCharts()
    }
  },
  created() {},
  mounted() {
    this.init()
  }
};
</script>

<style scoped lang="stylus">
@import '~@/css/color.styl';
.guide-home-new
  background linear-gradient(180deg,rgba(7,10,61,1),rgba(5,7,56,1))
  padding-bottom 26px
.header
  text-align center
  height 110px
  background-image url('~@/static/assets/newHome/head.png')
  background-size 1204px 110px
  background-position center
  background-repeat no-repeat
  position relative
.nav-right
  width 95px
  height 16px
  color color-white
  position absolute
  right 76px
  top 27px
.li
  width 1px
  height 100%
  background-color color-white
.nav-btn:hover, .nav-btn:active
  color color-primary
  font-weight bold
  cursor pointer
.pr39
  padding-right 39px
.newHomeTitle
  border-left 2px solid color-newHome-title
  height 30px
  display flex
  align-items center
  padding-left 8px
  font-size 16px
  color color-newHome-color
  font-weight bold
.data-show
  padding 34px 30px
  background-image url('~@/static/assets/newHome/data.png')
  background-size 100% 100%
  background-repeat no-repeat
.data-item
  background-image url('~@/static/assets/newHome/ellipse.png')
  background-size contain
  background-repeat no-repeat
  width calc( (100% - 25px) / 2 )
  height 116px
  font-size 12px
  color color-white
  position relative
  text-align center
  > .num
    font-size 28px
    color color-newHome-color
    padding-top 32px
  > .unit
    font-size 16px
    color color-newHome-color
    padding-top 10px
  > .des
    width 100%
    position absolute
    bottom -5px
.data-show-bottom
  padding-top 54px
.land
  margin-top 20px
.land-data
  height 354px
  background-image url('~@/static/assets/newHome/data.png')
  background-size 100% 100%
  background-repeat no-repeat
.tape-left
  width 25.9%
.tape-statistics
  width 25.9%
.tape-map
  width 41.8%
  max-height 757px
  background-color color-white
  margin-top 30px
  overflow hidden
.tape-map > map
  width 100%
  height 100%
.tape-statistics-content
  height 757px
  background-image url('~@/static/assets/newHome/statistics.png')
  background-size 100% 100%
  background-repeat no-repeat
.projectType
  width 100%
  height 50%
.projectStage
  width 100%
  height 50%
  padding 50px 0
.projectStageCharts
  width 100%
  height 100%
.rank-content
  height 354px
  background-image url('~@/static/assets/newHome/rank.png')
  background-size 100% 100%
  background-repeat no-repeat
  padding 30px
.rank-item
  width 30%
  height 100%
  > .rank-charts
    width 100%
    height 100%
</style>
