<template class="red">
  <div class="wrow">
    <div id="login-page" class="row">
      <div class="col s12 z-depth-6 card-panel">
        <form class="login-form">
          <div class="row">
            <div class="input-field col s12 center">
              <img src="../../assets/images/avtar.png" alt="" class="responsive-img valign profile-image-login">
              <p class="center login-form-text">用户登录</p>
            </div>
          </div>

          <div class="row margin">
            <div class="input-field col s12">
              <i class="mdi-social-person-outline prefix"></i>
              <input v-model="loginUser.username" placeholder="Username" class="validate" id="username" type="email">
              <!--<label for="email" data-error="wrong" data-success="right" class="center-align">Email</label>-->
            </div>
          </div>
          <div class="row margin">
            <div class="input-field col s12">
              <i class="mdi-action-lock-outline prefix"></i>
              <input v-model="loginUser.password" placeholder="Password" id="password" type="password">
              <!--<label @click="xiaoshi" for="password">Password</label>-->
            </div>
          </div>
          <!--验证码-->
          <div class="s-canvas">
            <img style="cursor:pointer" title="看不清换一张" :src="randomCodeUrl" @click="changeRandomCode">
          </div>

          <div class="row margin">
            <div class="input-field col s12">
              <i class="mdi-communication-email prefix"></i>
              <input style="height: 40px" v-model="loginUser.validateCode" placeholder="验证码"/>
            </div>
          </div>

          <div class="row">
            <div class="input-field col s12">
              <a class="btn waves-effect waves-light col s12" @click="doLogin">登　录</a>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s6 m6 l6">
              <p class="margin medium-small"><a href="mRegister">现在注册!</a></p>
            </div>
            <div class="input-field col s6 m6 l6">
              <p class="margin right-align medium-small"><a href="">忘记密码?</a></p>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

<script src="http://apps.bdimg.com/libs/jquery/1.11.1/jquery.min.js" type="text/javascript"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.1/js/materialize.min.js"
        type="text/javascript"></script>
<script>

  export default {
    name: "Plogin",
    //改变当前页面背景颜色
    beforeCreate() {
      document.querySelector('body').setAttribute('style', 'background-color:#404d5b;')
    },

    beforeDestroy() {
      document.querySelector('body').removeAttribute('style')
    },

    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        token: '', //获取验证码时，发给服务器的token值。
        randomCodeUrl: '',
        loginUser: {
          username: '',
          password: '',
          validateCode: ''
        },

        loginSuccessUser: {}
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      doLogin() {
        let url = 'http://47.104.154.103:8888/moocdemo/users/login?token=' + this.token;
        console.log(url);
        let that = this;
        this.axios.get(url, {
          params: {
            username: that.loginUser.username,
            password: that.loginUser.password,
            validateCode: that.loginUser.validateCode
          }
        }).then(function (response) {
          //console.log(response.data);
          if (response.data.code == 200) {

            console.log("登录成功用户对象->" + response.data.data);
            that.loginSuccessUser = response.data.data;
            localStorage.setItem("www.simoniu.com", JSON.stringify(that.loginSuccessUser));

            //2.页面跳转了。
            window.location.href = '/mIndex'; //跳转到pc端默认的首页。


          } else {
            that.$message({
              message: response.data.msg,
              type: 'error'
            });
          }
        }).catch(function (error) {
          that.$message({
            message: '登录失败！',
            type: 'error'
          });
        })
      },
      doLogin2() {

        let url = 'http://47.104.154.103:8888/moocdemo/users/login2?token=' + this.token;
        console.log(url);
        let that = this;
        this.axios.post(url, this.loginUser)
          .then(function (response) {
            //console.log(response.data);
            if (response.data.code == 200) {

              console.log("登录成功用户对象->" + response.data.data);
              that.loginSuccessUser = response.data.data;
              that.$message({
                message: response.data.msg,
                type: 'success'
              });


            } else {
              that.$message({
                message: response.data.msg,
                type: 'error'
              });
            }
          }).catch(function (error) {
          that.$message({
            message: '登录失败！',
            type: 'error'
          });
        })

      },
      changeRandomCode: function () {
        const jwt = require('jsonwebtoken');
        let payload = new Date().getTime() + ""; //当前时间的毫秒数
        let secret = 'www.simoniu.com'; //网站的域名
        this.token = jwt.sign(payload, secret);//那你的公钥+私钥，生成唯一token

        this.randomCodeUrl = 'http://47.104.154.103:8888/moocdemo/commons/mathRandomCode?token=' + this.token
      }
    },

    watch: {},
    mounted() {
      //去发送一个axios请求，获取一个验证码。同时保存token值。下次登录还要用呢。
      //前端如何生成一个全宇宙不重复的一个token值呢。
      this.changeRandomCode();
    }


  }

</script>


<style scoped>
  @import 'https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.1/css/materialize.min.css';

  .wrow, .row {
    height: 100%;
  }

  .wrow {
    display: table;
    margin: auto;
  }

  .row {
    display: table;
    vertical-align: middle;
  }

  .margin {
    margin: 0 !important;
  }

  .card-panel {
    min-width: 350px;
  }

  .row {
    width: 300px;
  }

  .mdi-action-outline prefix {

  }


</style>
