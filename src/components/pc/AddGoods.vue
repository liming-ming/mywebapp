<template>
  <div class="wrow">
    <div id="login-page" class="row">
      <div class="col s12 z-depth-6 card-panel">
        <form class="login-form">
          <div class="row">
            <div class="input-field col s12 center">
              <p class="center login-form-text">添加商品</p>
            </div>
          </div>

          <div class="row margin">
            <div class="input-field col s12">
              <i class="mdi-social-person-outline prefix"></i>
              <input v-model="addGoods.goodsname" placeholder="商品名称" id="商品名称" type="text" class="validate">
              <!--<label for="username" class="center-align">Username</label>-->
            </div>
          </div>

          <div class="row margin">
            <div class="input-field col s12">
              <i class="mdi-social-person-outline prefix"></i>
              <input v-model="addGoods.price" placeholder="价格" id="价格" type="text" class="validate">
              <!--<label for="username" class="center-align">Username</label>-->
            </div>
          </div>

          <!--<div class="row margin">-->
          <!--<div class="input-field col s12">-->
          <!--<i class="mdi-action-lock-outline prefix"></i>-->
          <!--<input v-model="addGoods.isFreePost" placeholder="是否免邮" id="password" type="text" class="validate">-->
          <!--&lt;!&ndash;<label for="password">Password</label>&ndash;&gt;-->
          <!--</div>-->
          <!--</div>-->

          <!--<div class="row margin">-->
            <!--<div class="input-field col s12">-->
              <!--<i class="mdi-action-lock-outline prefix"></i>-->
              <!--<input v-model="addGoods.number" placeholder="库存数量" id="库存数量" type="text">-->
              <!--&lt;!&ndash;<label for="password-again">Re-type password</label>&ndash;&gt;-->
            <!--</div>-->
          <!--</div>-->

          <!--<div class="row margin">-->
            <!--<div class="input-field col s12">-->
              <!--<i class="mdi-social-person-outline prefix"></i>-->
              <!--<input v-model="addGoods.pic" placeholder="商品图片" id="商品图片" type="text" class="validate">-->
              <!--&lt;!&ndash;<label for="username" class="center-align">Username</label>&ndash;&gt;-->
            <!--</div>-->
          <!--</div>-->


          <!--<div class="row margin">-->
            <!--<div class="input-field col s12">-->
              <!--<i class="mdi-social-person-outline prefix"></i>-->
              <!--<input v-model="addGoods.province" placeholder="产地" id="产地" type="text" class="validate">-->
              <!--&lt;!&ndash;<label for="username" class="center-align">Username</label>&ndash;&gt;-->
            <!--</div>-->
          <!--</div>-->

          <!--<div class="row margin">-->
          <!--<div class="input-field col s12">-->
          <!--<i class="mdi-social-person-outline prefix"></i>-->
          <!--<input v-model="addGoods.shopId" placeholder="商品编号" id="商品编号" type="text" class="validate">-->
          <!--&lt;!&ndash;<label for="username" class="center-align">Username</label>&ndash;&gt;-->
          <!--</div>-->
          <!--</div>-->


          <div class="row">
            <div class="input-field col s12">
              <a href="#" class="btn waves-effect waves-light col s12" @click="doAdd">立刻添加</a>
            </div>

            <!--<div>-->
            <!--<tr v-for="(item,index) in list" :key="index">-->
            <!--<td>{{item.id}}</td>-->
            <!--<td>{{item.name}}</td>-->
            <!--&lt;!&ndash;<td>{{item.ctime | fmtTime('-')}}</td>&ndash;&gt;-->
            <!--<td>-->
            <!--<button @click="delData(item.id)">删除</button>-->
            <!--</td>-->
            <!--</tr>-->


            <!--</div>-->

          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AddGoods",
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
        addGoods: {
          goodsname: '',
          price: '',
          // pic: '',
          // isFreePost: '',
          // shopId: '',
          // number: '',
          // province: '',

        },
        // list: [],

        loginSuccessUser: {}
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      //执行商品添加
      doAdd() {
        let url = 'http://47.104.154.103:8888/moocdemo/items/add/';
        let that = this;
        this.axios({
          url: url,
          method: 'post',
          params: {
            name: this.addGoods.goodsname,
            price: this.addGoods.price
          },

        }).then(function (response) {
          if (response.data.code == 200) {
            that.$message({
              message: response.data.msg,
              type: 'success'
            })
          } else {
            that.$message({
              message: response.data.msg,
              type: 'error'
            });
          }
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
