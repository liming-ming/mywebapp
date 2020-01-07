<template>
  <div id="app" style="margin-top: -60px">
    <Mheader></Mheader>
    <!--店铺头部区域-->
    <div class="header">
      <div class="banner">
        <img src="../../assets/images/avatar.jpg" alt=""/>
      </div>
      <div class="text">
        <div class="name">万象影音商城</div>
        <div class="tips">公告:欢迎光临,流行爆款库存有限请尽快下单.</div>
      </div>
    </div>

    <!--店铺头部 操作区-->
    <div class="operators">
      <ul>
        <li :class="{active:actives[0]}" @click="sort(0)">价格升序↑</li>
        <li :class="{active:actives[1]}" @click="sort(1)">价格降序↓</li>
        <li :class="{active:actives[2]}" @click="sort(2)">销量升序↑</li>
        <li :class="{active:actives[3]}" @click="sort(3)">销量降序↓</li>
      </ul>
    </div>

    <!--商品列表-->
    <div class="goodlist">
      <div class="good" v-for="(item,index) in itemsList" :key="index">
        <!---商品图片-->
        <div class="good-pic">
          <img :src="item.pic" alt=""/>
        </div>
        <!--商品的描述-->
        <div class="good-desc">
          <div class="good-name">{{item.name}}</div>
          <div class="good-count">已售: {{item.buyCount}}件</div>
          <div class="good-price">单价: <span class="num">{{item.price}}¥</span></div>
        </div>
        <!--添加购物车的按钮-->
        <div class="btn" @click="addToCart(item.id)">
          加入购物车
        </div>
      </div>
    </div>

    <!--购物车-->
    <a href="/mCart">
      <div class="cart">
        <img src="../../assets/images/cart.png" alt=""/>
        <span class="total">{{totalNum}}</span>
      </div>
    </a>
  </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/jquery@1.12.4/dist/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/jquery-unveil@1.3.2/jquery.unveil.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/markgoodyear/scrollup@2.4.1/dist/jquery.scrollUp.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@firstandthird/toc@1.4.1/dist/toc.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/jquery-match-height@0.7.2/dist/jquery.matchHeight-min.js"></script>

<script src="https://cdn.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.3/dist/js/site.min.js"></script>


<script>
  import Mheader from "../commons/Mheader"
  export default {
    name: "MIndex",
    components: {
      Mheader
    },
    data() {
      return {
        itemsList: [],  //商品集合
        actives: [true, false, false, false],
        cartItemsList: [] //购物车里面的商品集合
      }
    },
    mounted: function () {
      this.initItemsList();
      //初始化购物车资料
      if (localStorage.getItem("cartItemsList") != null) {
        this.cartItemsList = JSON.parse(localStorage.getItem("cartItemsList"));
      }
    },
    computed: {
      totalNum: function () {
        return this.cartItemsList.length;
      }
    },
    methods: {
      //初始化商品资料，这里发送一个axios的get请求
      initItemsList() {
        let that = this;
        let url = 'http://47.104.154.103:8888/moocdemo/items/show';
        this.axios.get(url).then(function (response) {
          if (response.data.code == 200) {
            that.itemsList = response.data.data;
            // console.log(that.itemsList);
            //我只要前十个商品
            // that.itemsList = that.itemsList.slice(0,10);
            that.sort(0);
          } else {
            console.log(response.data.msg);
          }

        })
      },
      sort(index) {
        for (let i = 0; i < this.actives.length; i++) {
          //对于这种基本数据类型的数组，这样修改值，vue是检测不到属性的改变的。
          //this.actives[i] = false;
          this.$set(this.actives, i, false);
        }
        //this.actives[index] =true;
        this.$set(this.actives, index, true);
        console.log(this.actives);
        if (index == 0) {
          this.itemsList.sort(function (itemA, itemB) {
            return itemA.price - itemB.price;
          })
        } else if (index == 1) {
          this.itemsList.sort(function (itemA, itemB) {
            return itemB.price - itemA.price;
          })
        } else if (index == 2) {
          this.itemsList.sort(function (itemA, itemB) {
            return itemA.buyCount - itemB.buyCount;
          })
        } else {
          this.itemsList.sort(function (itemA, itemB) {
            return itemB.buyCount - itemA.buyCount;
          })
        }
      },
      addToCart: function (id) {

        console.log("要添加的商品编号是：" + id);
        for (let i = 0; i < this.itemsList.length; i++) {
          //找到商品资料
          if (this.itemsList[i].id == id) {
            let temp = this.itemsList[i];
            //判断这个商品在购物车中是否已经存在。修改购买数量，如果不存在添加到购物车。
            for (var j = 0; j < this.cartItemsList.length; j++) {
              if (this.cartItemsList[j].id == temp.id) {
                //说明在购物车找到了这个商品
                this.cartItemsList[j].count++;
                break;
              }
            }
            if (j == this.cartItemsList.length) {
              temp.count = 1;
              this.cartItemsList.push(temp);
            }
          }
        }

        console.log("购物车里的商品集合是");
        console.log(this.cartItemsList);

        //把购物车的资料保存到本地缓存里面
        localStorage.setItem("cartItemsList", JSON.stringify(this.cartItemsList)); //把json对象转换json字符串，保存到本地缓存里面。
      },
      onClickRight() {

      }
    }

  }
</script>

<style scoped>

  @import "../../assets/css/index.css";
  @import "https://cdn.staticfile.org/twitter-bootstrap/3.3.7/css/bootstrap.min.css";
</style>
