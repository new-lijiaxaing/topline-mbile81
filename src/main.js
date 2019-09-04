import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.css'
import './styles/index.less'
import VeeValidate, { Validator } from 'vee-validate'
// 导入VeeValiidate的中文包
import zhCN from 'vee-validate/dist/locale/zh_CN'
// 配置插件VeeValidate
Vue.use(VeeValidate)
// 配置中文
Validator.localize('zhCN', zhCN)

Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
