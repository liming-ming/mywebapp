<template>
  <div>
    <Header style="margin-top: -90px"></Header>
    <div style="width: 80%;margin: 0 auto; min-height: 30px;margin-top:0;border-bottom: 1px solid #333;">
      <div style=" text-align: left;  font-size: 18px;text-decoration: none;padding: 30px 0 19px 0;font-weight: 600;">
        <span>购物车</span>
      </div>
    </div>

    <div class="goodlist" style="border-bottom: red">
      <!--购物车不为空-->
      <div class="content" v-if="cartItemsList.length>0">
        <div class="good" v-for="(item,index) in cartItemsList" :key="index">
          <div class="good-pic">
            <img :src="item.pic" alt=""/>
          </div>
          <div class="good-desc">
            <div class="name">{{item.name}}</div>
            <div class="price">单价: <span>{{item.price}}¥</span></div>
          </div>
          <div class="operate">
            <span class="sub" @click="sub(item.id)">-</span>
            <span>{{item.count}}</span>
            <span class="add" @click="add(item.id)">+</span>
          </div>
          <div class="del">
            <el-button @click="del(item.id)">删除</el-button>
          </div>
        </div>
      </div>
    </div>

    <!--购物车为空-->
    <div v-if="cartItemsList.length==0">
      <div style="margin: 0 auto">
        <i
          style="font-size: 100px;margin-left: -40px; width: 140px;height: 125px;margin: 0 auto 10px auto;padding-left: 14px;background-position: 0px -0px;">
          <img src="../../assets/images/nomore.png"/>
        </i><br/><br/>
        <span>
          <span style="color: #666;text-align: center;font-size: 18px;">购物车还是空的 ,</span>
          <a href="/" style="color: #328ad4;cursor: pointer;text-decoration: none;font-size: 18px;text-align: center;">去逛逛 ></a>
        </span>
      </div>
    </div>

    <div class="summary" v-if="totalPrice>0">
      <div class="total-price">
        <span>总数:{{totalNum}}</span>
        <span>总价:{{totalPrice}} ￥</span>
      </div>
      <div class="pay">
        <a href="/confirm">去结算</a>
      </div>
    </div>

    <BackToTop></BackToTop>
  </div>
</template>

<script>
  import Header from "../commons/Header"
  import BackToTop from "../commons/BackToTop";

  export default {
    name: "ShoppingCart",
    components: {
      BackToTop,
      Header
    },
    data() {
      return {
        cartItemsList: []
      }
    },
    mounted() {
      //初始化购物车资料
      if (localStorage.getItem("cartItemsList") != null) {
        this.cartItemsList = JSON.parse(localStorage.getItem("cartItemsList"));
      }
      console.log(this.cartItemsList)
    },
    computed: {
      totalPrice: function () {
        let total = 0;
        for (let i = 0; i < this.cartItemsList.length; i++) {
          total += this.cartItemsList[i].price * this.cartItemsList[i].count;
        }
        return total;
      },

      totalNum: function () {
        return this.cartItemsList.length;
      }

    },
    methods: {
      add(id) {
        //规定购买的商品数量不能超过100。
        for (let i = 0; i < this.cartItemsList.length; i++) {
          if (this.cartItemsList[i].id == id) {
            if (this.cartItemsList[i].count < 100) {
              this.cartItemsList[i].count++;
              break;
            } else {
              return; //啥也不干。。。
            }
          }
        }
        this.updateLocalStorage();
      },
      sub(id) {
        //规定购买的商品数量不能少于1;
        for (let i = 0; i < this.cartItemsList.length; i++) {
          if (this.cartItemsList[i].id == id) {
            if (this.cartItemsList[i].count > 1) {
              this.cartItemsList[i].count--;

            } else {
              return;
              // this.cartItemsList.splice(i, 1);
              // this.updateLocalStorage();
            }
          }
        }
        this.updateLocalStorage();
      },
      del(id) {
        for (let i = 0; i < this.cartItemsList.length; i++) {
          if (this.cartItemsList[i].id == id) {
            this.cartItemsList.splice(i, 1);
          }
        }
        this.updateLocalStorage();
      },

      updateLocalStorage() {

        localStorage.setItem("cartItemsList", JSON.stringify(this.cartItemsList));
      }
    }

  }
</script>

<style scoped>

  @import "../../assets/css/cart.css";

  .del {
    margin-top: 80px;
  }


</style>
