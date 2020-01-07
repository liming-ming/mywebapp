<template>

  <div id="app">
    <div style="margin-top: -50px">
    <van-nav-bar
      left-text="返回"
      title="购物车"
      left-arrow
      @click-left="onClickLeft"
    />
    </div>


    <br/>
    <div class="goodlist">

      <!--如果购物车不为空则显示下面这个DIV-->
      <div class="content" v-if="cartItemsList.length>0">
        <div class="good" v-for="(item,index) in cartItemsList" :key="index">
          <div class="good-pic">
            <img :src="item.pic" alt=""/>
          </div>
          <div class="good-desc">
            <div class="name">{{item.name}}</div>
            <div class="price" style="text-align: left">单价: <span>{{item.price}}¥</span></div>
          </div>
          <div class="operate">
            <span class="sub" @click="sub(item.id)">-</span>
            <span>{{item.count}}</span>
            <span class="add" @click="add(item.id)">+</span>
          </div>
          <div class="btn" @click="del(item.id)">
            删除
          </div>
        </div>
      </div>

      <!--如果购物车位空，则显示下面这个DIV-->
      <div class="content empty" v-if="cartItemsList.length==0">
        <img src="../../assets/images/nomore.png" alt=""/>
        <p>您的购物车还是空的哦!</p>
      </div>
    </div>

    <div class="summary" v-if="cartItemsList.length>0">
      <div class="total-price">
        <span>总数:{{totalNum}}</span>
        <span>总价:{{totalPrice}} ￥</span>
      </div>
      <div class="pay">
        <a href="/mConfirm">去结算</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Cart",
    data() {
      return {
        cartItemsList: []
      }
    },
    mounted() {
      //初始化购物车的商品集合
      //初始化购物车资料
      if (localStorage.getItem("cartItemsList") != null) {
        this.cartItemsList = JSON.parse(localStorage.getItem("cartItemsList"));
      }
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
              break;
            } else {
              return; //啥也不干。。。
            }
          }
        }
        this.updateLocalStorage();
      },
      del(id) {
        //splice
        let pos = -1;
        for (let i = 0; i < this.cartItemsList.length; i++) {
          if (this.cartItemsList[i].id == id) {
            pos = i;
            break;
          }
        }
        this.cartItemsList.splice(pos, 1); //删除一个元素；
        //重新存到本地缓存里面去。
        this.updateLocalStorage();
      },
      updateLocalStorage() {

        localStorage.setItem("cartItemsList", JSON.stringify(this.cartItemsList));
      },
      onClickLeft() {
        this.$router.go(-1);
      },


    }
  }
</script>

<style scoped>
  @import "../../assets/css/mcart.css";

  /*.del {*/
  /*margin-top: 80px;*/
  /*}*/
</style>
