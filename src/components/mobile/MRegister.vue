<template>
  <div class="wrow">
    <div id="login-page" class="row">
      <div class="col s12 z-depth-6 card-panel">
        <form class="login-form">
          <div class="row">
            <div class="input-field col s12 center">
              <img src="../../assets/images/avtar.png" alt="" class="responsive-img valign profile-image-login">
              <p class="center login-form-text">用户注册</p>
            </div>
          </div>

          <div class="row margin">
            <div class="input-field col s12">
              <i class="mdi-social-person-outline prefix"></i>
              <input v-model="regUser.username" placeholder="用户名" id="email" type="text" class="validate">
              <!--<label for="username" class="center-align">Username</label>-->
            </div>
          </div>


          <div class="row margin">
            <div class="input-field col s12">
              <i class="mdi-action-lock-outline prefix"></i>
              <input v-model="regUser.password" placeholder="密码" id="password" type="password" class="validate">
              <!--<label for="password">Password</label>-->
            </div>
          </div>

          <div class="row margin">
            <div class="input-field col s12">
              <i class="mdi-action-lock-outline prefix"></i>
              <input v-model="regUser.confirmpass" placeholder="确认密码" id="password-again" type="password">
              <!--<label for="password-again">Re-type password</label>-->
            </div>
          </div>

          <div class="row margin">
            <div class="input-field col s12">
              <i class="mdi-social-person-outline prefix"></i>
              <input v-model="regUser.mobile" placeholder="手机号码" id="username" type="text" class="validate">
              <!--<label for="username" class="center-align">Username</label>-->
            </div>
          </div>

          <el-button @click="sendRandomCode">发送验证码</el-button>

          <div class="row margin">
            <div class="input-field col s12">
              <i class="mdi-communication-email prefix"></i>
              <input style="height: 40px" v-model="regUser.validateCode" placeholder="验证码"/>
            </div>
          </div>

          <div class="row">
            <div class="input-field col s12">
              <a href="#" class="btn waves-effect waves-light col s12" @click="doReg">立刻注册</a>
            </div>
            <div class="input-field col s12">
              <p class="margin center medium-small sign-up">已经有了账号? <a href="mPlogin">登录</a></p>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Register",
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
        regUser: {
          username: '',
          mobile: '',
          password: '',
          confirmpass: '',
          validateCode: ''
        },

        loginSuccessUser: {}
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      //执行用户注册
      doReg() {
        let url = 'http://47.104.154.103:8888/moocdemo/users/reg?token=' + this.token;
        let that = this;
        this.axios.post(url, this.regUser).then(function (response) {
          //console.log(response.data);
          if (response.data.code == 200) {

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
            message: '验证码发送失败！',
            type: 'error'
          });
        })



      },
      //给手机发送验证码
      sendRandomCode: function () {
        let url = 'http://47.104.154.103:8888/moocdemo/commons/mrcode?mobile=' + this.regUser.mobile;
        let that = this;
        this.axios.get(url)
          .then(function (response) {
            //console.log(response.data);
            if (response.data.code == 200) {
              that.token = response.data.data;
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
            message: '验证码发送失败！',
            type: 'error'
          });
        })
      },
    },
    watch: {},
    mounted() {

    }

  }
</script>

<style scoped>
  @import url("https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.1/css/materialize.min.css");

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
    color: #404d5b;
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

</style>
