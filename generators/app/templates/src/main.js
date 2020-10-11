import Vue from 'vue'
import echarts from 'echarts'
import App from './App.vue'
import router from './router'
import './icons'
// import 'normalize.css'
import ElementUI from 'element-ui'
import '@/css/element.css'
import '@/css/color.styl';
import 'element-ui/lib/theme-chalk/index.css'
// 引入element-ui
import '../theme/index.css'
// import '@/css/index.css'
Vue.prototype.$echarts = echarts;
Vue.use(ElementUI);
Vue.prototype.$baseRouter = router

Vue.config.productionTip = false

new Vue({
  router,
  data: {},
  render: h => h(App),
}).$mount('#app')