<template>
  <div>
    <Header style="margin-top: -80px"></Header>
    <div style="width: 80%;margin: 0 auto; min-height: 30px;margin-top:0;border-bottom: 1px solid #333;">
      <div style=" text-align: left;  font-size: 18px;text-decoration: none;padding: 30px 0 19px 0;font-weight: 600;">
        <span>商品详情页</span>
      </div>


    </div>
    <div style="width: 80%;margin: 0 auto;">
      <!--商品列表-->
      <div style="font-size: 18px;text-decoration: none;padding: 30px 0 19px 0;font-weight: 600;"
           class="goodlist">
        <el-row :gutter="20">
          <el-col :span="12 ">
            <!--商品图片-->
            <div style="display: inline-block;margin-left: -300px;height: 300px" class="">
              <el-card :body-style="{ padding: '0px' }">
                <img :src="goodsDetails.pic" class="image"/>
              </el-card>
            </div>
          </el-col>
          <el-col :span="12">
            <!--商品描述-->
            <div style="height: 300px;" class="">
              <div class="">{{goodsDetails.name}}</div>
              <br/><br/>
              <div class="">已售: {{goodsDetails.buyCount}}件</div>
              <br/><br/>
              <div class="">单价:<span class="">{{goodsDetails.price}}¥</span></div>
              <br/><br/><br/>
              <el-button @click="addCart" style="background-color: #D33A31;color: white;margin-right: -300px">
                加入购物车
              </el-button>
            </div>
          </el-col>
        </el-row>


      </div>


    </div>


    <BackToTop></BackToTop>
  </div>
</template>

<script>
  import Header from "../commons/Header";
  import BackToTop from "../commons/BackToTop"

  export default {
    name: "GoodsDetails",
    components: {
      Header,
      BackToTop
    },
    data() {
      return {
        goodsId: "",
        goodsDetails: [],
        currentDate: new Date(),
        cartItemsList: []
      };
    },
    mounted() {
      //初始化购物车资料
      if (localStorage.getItem("cartItemsList") != null) {
        this.cartItemsList = JSON.parse(localStorage.getItem("cartItemsList"));
      }
    },
    created() {
      // 接收GoodsInfo.vue传过来的goodsId
      this.goodsId = this.$route.params.id
      console.log("商品编号是：" + this.goodsId)
      this.getGoodsInfo();
    },

    methods: {
      getGoodsInfo() {
        let that = this;
        let url = 'http://47.104.154.103:8888/moocdemo/items/qbyid?id=' + this.goodsId;
        this.axios.get(url,).then(function (response) {
          if (response.data.code == 200) {
            // this.goodsDetails=response.data.data;
            that.goodsDetails = response.data.data;
            //console.log(response.data.data)
          } else {
            console.log(response.data.msg);
          }
        })
      },
      addCart: function () {
        console.log("要添加的商品编号是：" + this.goodsDetails.id);
        let temp = this.goodsDetails;
        for (var j = 0; j < this.cartItemsList.length; j++) {
          if (this.cartItemsList[j].id == temp.id) {
            this.cartItemsList[j].count++;
            break;
          }
        }
        if (j == this.cartItemsList.length) {
          temp.count = 1;
          this.cartItemsList.push(temp);
        }

        console.log("购物车里的商品集合是：");
        console.log(this.cartItemsList);
        //把购物车的资料保存到本地缓存里面
        localStorage.setItem("cartItemsList", JSON.stringify(this.cartItemsList));
        //把json对象转换json字符串，保存到本地缓存里面。
        this.$message({
          message:'加入购物车成功',
          type:'success'
        });



        // let that = this;
        // let url = 'http://localhost:8888/moocdemo/cart/acart';
        // this.axios.post(url,JSON.stringify(that.goodsDetails),{
        //   headers:{
        //     'Content-type':'application/json;charset=UTF-8'
        //   }
        // }).then(function (res) {
        //   if (res.data.code == 200) {
        //     console.log(that.goodsDetails)
        //     console.log(res.data.data)
        //   } else {
        //     console.log(res.data.msg)
        //   }
        // })
      }
    }
  }
</script>

<style scoped>
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
</style>
