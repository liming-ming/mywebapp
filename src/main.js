// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Vant from 'vant';
import 'vant/lib/index.css';


Vue.use(router);
Vue.use(Vant);

//引入ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

//引入了拼图验证码组件
import SlideVerify from 'vue-monoplasty-slide-verify';

//引入axios
import axios from 'axios'
import VueAxios from 'vue-axios'


//引入video.js组件
import Video from 'video.js'
import 'video.js/dist/video-js.css'


// 全局注册MavonEditor

import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
//修改动态title vue-wechat-title
import VueWechatTitle from 'vue-wechat-title';

Vue.config.productionTip = false;

//定义一个全局变量，表示不是的服务器的地址
// Vue.prototype.websiteUrl = 'http://localhost:8888';
Vue.prototype.websiteUrl = 'http://47.104.154.103:8888';
Vue.prototype.$video = Video

//Vue.prototype.websiteUrl = 'http://47.104.101.65:8888';
Vue.prototype.$http = axios

// use
Vue.use(mavonEditor)

Vue.use(SlideVerify); //使用滑块验证组件

Vue.use(VueAxios, axios);
//使用vue-wechat-title
Vue.use(VueWechatTitle);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>',

})
