<template>
  <div id="app">
    <div style="margin-top: -50px">
      <van-nav-bar
        left-text="返回"
        title="订单"
        left-arrow
        @click-left="onClickLeft"
      />
    </div>
    <!--选择地址-->
    <div class="address-box">
      <div class="title">收货地址</div>
      <div class="address-list">
        <div class="address" v-for="(addr,index) in addressList" :class="{active:addr.active}"
             @click="selectAddress(index)">
          {{addr.name}},{{addr.mobile}},{{addr.address}}
        </div>
      </div>
    </div>
<hr/>
    <!--选择支付方式-->
    <div class="address-box pay-box">
      <div class="title">支付方式</div>
      <div class="address-list">
        <div class="address pay" v-for="(pay,index) in payList" :key="index" :class="{active:pay.active}"
             @click="selectPay(index)"><span>{{pay.name}}</span><img :src="'images/'+pay.logo" alt=""/></div>

      </div>
    </div>
    <hr/>

    <!--商品列表预览-->

    <div class="goodlist-box">
      <div class="title">商品列表</div>

      <div class="content">
        <div v-if="cartItemsList.length>0">
          <div class="good" v-for="(item,index) in cartItemsList">
            <div class="good-pic"><img
              :src="item.pic" alt=""/></div>
            <div class="good-desc">
              <div class="name">{{item.name}}</div>
              <div class="desc">再来哦!</div>
            </div>
            <div class="good-count">x{{item.count}}</div>
            <div class="good-price">{{item.price}}¥</div>
          </div>
        </div>

        <div class="empty" v-if="cartItemsList.length==0">
          购物车中还没有商品!
        </div>
      </div>
    </div>

    <div class="summary">
      <div class="total">总价: {{totalPrice}}¥</div>
      <div class="pay">去支付</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Confirm",
    data(){
      return{
        addressList:[
          {
            "name": "宋小宝",
            "mobile": "18991123456",
            "address": "辽宁省铁岭市",
            "active": true
          },
          {
            "name": "宋小宝",
            "mobile": "18991123456",
            "address": "北京市朝阳大街10号",
            "active": false
          },
          {
            "name": "宋小宝",
            "mobile": "18991123456",
            "address": "河北省邯郸市太极路19号",
            "active": false
          }
        ],
        payList: [
          {
            "name": "支付宝",
            "logo": "alipay.jpg",
            "active": true
          },
          {
            "name": "微信",
            "logo": "weixin.jpg",
            "active": false
          },
          {
            "name": "银联",
            "logo": "unipay.jpg",
            "active": false
          }
        ],
        cartItemsList: []
      }
    },
    computed: {
      totalPrice: function () {
        let total = 0;
        for (let i = 0; i < this.cartItemsList.length; i++) {
          total += this.cartItemsList[i].price * this.cartItemsList[i].count;
        }
        return total;
      }

    },
    mounted() {

      if (localStorage.getItem("cartItemsList") != null) {
        this.cartItemsList = JSON.parse(localStorage.getItem("cartItemsList"));
      }

    },

    methods: {
      selectAddress: function (index) {
        for (let i = 0; i < this.addressList.length; i++) {
          this.addressList[i].active = false;
        }

        this.addressList[index].active = true;
      },
      selectPay: function (index) {
        for (let i = 0; i < this.payList.length; i++) {
          this.payList[i].active = false;
        }

        this.payList[index].active = true;
      },
      onClickLeft() {
        this.$router.go(-1);
      },
    }
  }
</script>

<style scoped>

  @import "../../assets/css/mconfirm.css";
</style>
