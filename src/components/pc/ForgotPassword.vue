<template>
  <div class="wrow">
    <div id="login-page" class="row">
      <div class="col s12 z-depth-6 card-panel">
        <form class="login-form">
          <div class="row">
            <div class="input-field col s12 center">
              <img src="../../assets/images/avtar.png" alt="" class="responsive-img valign profile-image-login">
              <p class="center login-form-text">忘记密码</p>
            </div>
          </div>
          <div class="row margin">
            <div class="input-field col s12">
              <i class="mdi-social-person-outline prefix"></i>
              <input v-model="loginUser.email" placeholder="Email" class="validate" id="email" type="email">
              <!--<label for="email" data-error="wrong" data-success="right" class="center-align">Email</label>-->
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <a href="forgot-password.html" class="btn waves-effect waves-light col s12">重置我的密码</a>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s6 m6 l6">
              <p class="margin medium-small"><a href="register">立刻注册!</a></p>
            </div>
            <div class="input-field col s6 m6 l6">
              <p class="margin right-align medium-small"><a href="plogin">登录</a></p>
            </div>
          </div>

        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Forgot-Password",
    beforeCreate() {
      document.querySelector('body').setAttribute('style', 'background-color:#404d5b;')
    },

    beforeDestroy() {
      document.querySelector('body').removeAttribute('style')
    },
    data() {
      return {
        identifyCode: '',
        msg: '',
        activeIndex: '1',
        activeIndex2: '1',
        loginUser: {
          email: '',
          username: '',
          password: '',
          randomCode: ''
        }
      };
    },
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
  .row{
    width: 300px;
  }
</style>
