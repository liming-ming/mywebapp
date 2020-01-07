<template>
  <header style="height: 80px">

    <div class="container" style="margin-top: 16px">
      <el-row>
        <el-col :span="2">
          <div class="nav-head" style="margin-left: -60px;margin-top: 6px">
            <a href="/" class="head-brand" style="font-size: 18pt;color: white"><img
              src="../../assets/images/maxlogo.png"/></a>
          </div>
        </el-col>
        <el-col :span="11.1">
          <ul class="main-nav" style="margin-top: 10px;margin-left: 30px">
            <li><a href="/" class="current" style="font-size: 15px;color: white"><span
              class="el-icon-shopping-bag-2">首页</span></a>
            </li>
            <li><a href="/catalog" target="_blank" style="font-size: 15px;color: white"><span
              class="el-icon-sunny">热销爆品</span></a></li>
            <li>
              <a href="#" target="_blank" style="font-size: 15px;color: white"><span
                class="el-icon-present">IP周边</span></a>
            </li>
            <li><a href="#" target="_blank" style="font-size: 15px;color: white"><span
              class="el-icon-headset">数码影音</span></a></li>
          </ul>
        </el-col>

        <div class="otherLink">
          <div class="dd" style="margin-top: 10px"><span class="el-icon-coin">积分商城</span> <i
            class="el-icon-arrow-down"></i>
            <ul class="dd-menu" style="color: black">
              <li><a href="#">选项1</a></li>
              <li><a href="/case">选项2</a></li>
              <li><a href="#">选项3</a></li>
              <li><a href="#">选项4</a></li>
            </ul>
          </div>
        </div>
        <el-col :span="3">
          <div class="login-register" v-if="!isLogin" style="margin-top: 10px;margin-right: 0px">
            <a style="cursor: pointer; color: white" href="/plogin"><span
              class="el-icon-shopping-cart-full">购物车</span></a>
          </div>
          <div class="login-register" v-if="isLogin" style="margin-top: 10px;">
            <a style="cursor: pointer; color: white;" href="/shoppingCart"><span
              class="el-icon-shopping-cart-full">购物车</span></a>

          </div>
        </el-col>
        <el-col :span="3">
          <div class="login-register" v-if="!isLogin" style="margin-right: -60px;margin-top: 10px">
            <a style="color: white" href="/plogin">登录</a>&nbsp;&nbsp; <span style="color: white">|</span>&nbsp;&nbsp;
            <a style="color: white" href="/register">注册</a>
          </div>
          <div class="login-register" v-if="isLogin">
            <div class="dd" style="margin-right: -60px;margin-top: 10px">欢迎您:{{this.loginSuccessUser.username}} <i
              class="el-icon-arrow-down"></i>
              <ul class="dd-menu">
                <li><a href="#"><i class="el-icon-info"></i>&nbsp;个人中心</a></li>
                <li><a href="#"><i class="el-icon-edit-outline"></i>选项2</a></li>
                <li><a href="#"><i class="el-icon-date"></i>&nbsp;我的订单</a></li>
                <li><a href="#" @click="doLogout"><i class="el-icon-back"></i>&nbsp;注销</a></li>
              </ul>
            </div>
          </div>
        </el-col>

      </el-row>
    </div>

  </header>
</template>

<script>

  var graceChecker = require("../../assets/minified_js/commons/graceChecker.js");
  export default {
    name: "Header",
    data() {
      return {
        isLogin: false, //判断用户登录状态
        loginSuccessUser: {} //登录成功的用户对象。
      }

    },

    created() {

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

        window.location.href = '/plogin'
      }
    }
  }
</script>

<style scoped lang="scss">
  /*@import "../../assets/vendor/bootstrap-3.3.7-dist/css/bootstrap.min.css";*/
  @import "../../assets/minified_css/index-header.min.css";
  /*@import "../../assets/minified_css/index.min.css";*/
  @import "https://cdn.staticfile.org/twitter-bootstrap/3.3.7/css/bootstrap.min.css";

  header {
    /*height: 43px;*/
    background-color: #222222;
    color: white;
  }

  /*header a{*/
  /*color: white;*/
  /*}*/
  .el-row {
    margin-bottom: 20px;

    &
    :last-child {
      margin-bottom: 0;
    }

  }

  .el-col {
    border-radius: 4px;
  }

</style>
