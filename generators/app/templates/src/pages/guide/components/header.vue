<template>
  <div class="guide-header">
    <div class="guide-nav flex-spaceBwtween f14">
      <div class="nav-left">
        <span class="goHome nav-btn pr39" @click="goLink('/guide/home')"
          >首页</span
        >
        <span class="about nav-btn pr39" @click="goLink('/guide/about')"
          >关于我们</span
        >
        <span
          class="successCase nav-btn pr39"
          @click="goLink('/guide/successCaseList')"
          >成功案例</span
        >
        <span class="faq nav-btn" @click="goLink('/guide/faq')">常见问题</span>
      </div>
      <div class="nav-right flex-spaceBwtween">
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
    <div class="carousel">
      <el-carousel trigger="click">
        <el-carousel-item>
          <img src="@/static/assets/banner/banner1.jpg" alt class="banner" />
        </el-carousel-item>
        <el-carousel-item>
          <img src="@/static/assets/banner/banner2.jpg" alt class="banner" />
        </el-carousel-item>
        <el-carousel-item>
          <img src="@/static/assets/banner/banner3.jpg" alt class="banner" />
        </el-carousel-item>
        <el-carousel-item>
          <img src="@/static/assets/banner/banner4.jpg" alt class="banner" />
        </el-carousel-item>
        <el-carousel-item>
          <img src="@/static/assets/banner/banner5.jpg" alt class="banner" />
        </el-carousel-item>
        <el-carousel-item>
          <img src="@/static/assets/banner/banner6.jpg" alt class="banner" />
        </el-carousel-item>
        <el-carousel-item>
          <img src="@/static/assets/banner/banner7.png" alt class="banner" />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: "guide-header",
  data() {
    return {};
  },
  methods: {
    goLink(path) {
      this.$router.push({
        path
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
@import '~@/css/color.styl';

.guide-nav {
  padding: 10px 8%;
  background-color: color-white;
}

.goHome {
  font-size: 14px;
  font-family: Microsoft YaHei;
}

.nav-right {
  width: 95px;
}

.li {
  width: 1px;
  height: 100%;
  background-color: color-black;
}

.nav-btn:hover, .nav-btn:active {
  color: color-primary;
  font-weight: bold;
  cursor:pointer
}
.pr39 {
  padding-right 39px
}

.banner {
  width: 100%;
  overflow: hidden;

  > img {
    width: 100%;
  }
}
</style>
