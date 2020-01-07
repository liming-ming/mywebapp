<template>
  <div style="background-color: black;color: white;height: 45px">
    <el-row>
      <el-col :span="20">
        <div class="login-register" v-if="!isLogin" style="text-align: right;margin-top: 10px">
          <a style="color: white" href="/mPlogin">登录</a>&nbsp;&nbsp; <span style="color: white">|</span>&nbsp;&nbsp;
          <a style="color: white" href="/mRegister">注册</a>
        </div>
        <div class="login-register" v-if="isLogin" style="text-align: right">
          <div @click="out" class="dd" style="position: relative;display: inline-block;margin-right: -60px;margin-top: 10px">
            欢迎您:{{this.loginSuccessUser.username}} <i
            class="el-icon-arrow-down"></i>
            <div class="ddc" style="display: none;position: relative;z-index: 9999;margin-top: 10px">
              <ul class="dd-menu" style="background-color: white;text-align: center">
                <li><a href="#"><i class="el-icon-info"></i>&nbsp;个人中心</a></li>
                <li><a href="#"><i class="el-icon-edit-outline"></i>选项2</a></li>
                <li><a href="#"><i class="el-icon-date"></i>&nbsp;我的订单</a></li>
                <li><a href="#" @click="doLogout"><i class="el-icon-back"></i>&nbsp;注销</a></li>
              </ul>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  var graceChecker = require("../../assets/minified_js/commons/graceChecker.js");
  export default {
    name: "Mheader",
    data() {
      return {
        isLogin: false, //判断用户登录状态
        loginSuccessUser: {} //登录成功的用户对象。
      }

    },
    mounted() {
      this.isLogin = graceChecker.isLogin();
      if (this.isLogin) {
        if (sessionStorage.getItem("www.simoniu.com") != null) {

          //JSON.parse
          //JSON.stringify   是jQuery的方法，在vue 默认是不能用。

          this.loginSuccessUser = JSON.parse(sessionStorage.getItem("www.simoniu.com"));
          console.log(this.loginSuccessUser);

        }
        if (localStorage.getItem("www.simoniu.com") != null) {

          this.loginSuccessUser = JSON.parse(localStorage.getItem("www.simoniu.com"));
          console.log(this.loginSuccessUser);

        }
      }
    },
    methods: {
      doLogout: function () {
        if (this.isLogin) {
          if (sessionStorage.getItem("www.simoniu.com") != null) {
            sessionStorage.removeItem("www.simoniu.com");
          }
          if (localStorage.getItem("www.simoniu.com") != null) {
            localStorage.removeItem("www.simoniu.com");
          }
        }

        window.location.href = '/mPlogin'
      },
      out(){
        $(".ddc").toggle();
      }
    }
  }
</script>

<style scoped>

  @import "../../assets/minified_css/index-header.min.css";
  @import "https://cdn.staticfile.org/twitter-bootstrap/3.3.7/css/bootstrap.min.css";

  /*.dd:hover ul li{*/
  /*display: block;*/
  /*}*/
</style>
