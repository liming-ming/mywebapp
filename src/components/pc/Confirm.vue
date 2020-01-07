<template>
  <div>
    <Header style="margin-top: -90px"></Header>

    <div style="width: 80%;margin: 0 auto; min-height: 30px;margin-top:0;border-bottom: 1px solid #333;">
      <div style=" text-align: left;  font-size: 18px;text-decoration: none;padding: 30px 0 19px 0;font-weight: 600;">
        <span>订单确认</span>
      </div>
    </div>

    <br/>

    <div style="width: 80%;margin: 0 auto;border: 1px solid #E5E5E5;">
      <!--选择地址-->
      <div style="">
        <div style="width: 100%;height: 40px;line-height: 40px;background-color: #F4F4F4;text-align: left">
          <span style="margin-left: 20px;color: #999999">收货信息</span>
        </div>
      </div>

      <div style="height: 26px;line-height: 26px;margin: 30px 0 25px 20px;display: block;font-size: 14px">
        <span style="margin-left: -900px;font-size: 15px">
          <i class="el-icon-map-location" style="font-size: 20px;color: #A6A6C4"></i>
          <em style="color: #A6A6C4">默认地址</em>
        </span>&nbsp;
        <div @click="updata"
             style="color: #A6A6C4;display: inline-block;width: 60px; border: 1px solid #A6A6C4;cursor: pointer">
          修改
        </div>
      </div>

      <div style="margin: 0 0 20px 20px;color: #333;height: 26px;font-size: 14px;">
        <p style="text-align:left; width: 850px;font-size: 14px">
          <em style="color: #999;">收货人 &nbsp;: &nbsp;</em>
          {{goodsAddress.name}}
        </p>
      </div>
      <div style="margin: 0 0 20px 20px;">
        <p style="text-align:left; width: 850px;font-size: 14px">
          <em style="color: #999;">联系电话 &nbsp;: &nbsp;</em>
          {{goodsAddress.phone}}
        </p>
      </div>


      <div style="color: #333;height: 26px;margin: 0 0 20px 20px;font-size: 14px;">
        <p style="text-align:left; width: 850px;font-size: 14px">
          <em style="color: #999;">收货地址 &nbsp;: &nbsp;</em>
          {{goodsAddress.area}}
          {{goodsAddress.areaDetails}}
        </p>
      </div>
    </div>
    <br/><br/><br/>
    <div style="display: inline-block; width: 80%;border: 1px solid #E5E5E5;">
      <ul>
        <li
          style="color: #999999;width: 100%;height: 40px;line-height: 40px;background-color: #F4F4F4;text-align: left">
          <span style="margin-left: 20px;width: 566px;float: left">商品信息</span>
          <span style="width: 195px;margin-left: 40px;float: left">金额</span>
          <span style="width: 50px;margin: 0 80px 0 0;float: left">数量</span>
          <span style="width: 80px;margin-left: 40px;float: left;">小计</span>
        </li>
        <br/>
        <li style="font-size: 14px;color: #333;text-align: left" v-for="(item,index) in cartItemsList" :key="index">
          <span style="width: 100px;height: 117px;float: left;margin-left: 20px">
            <img style="width: 80px;height: 80px" :src="item.pic" alt=""/>
          </span>
          <span style="float:left;line-height: 117px;width: 466px;">
            {{item.name}}
          </span>
          <span style="width: 195px;line-height: 117px;margin-left: 40px;float: left;">
            ¥{{item.price}}
          </span>
          <span style="width: 50px;line-height: 117px;margin: 0 80px 0 10px;float: left;">
            {{item.count}}
          </span>
          <span style="width: 80px;line-height: 117px;margin-left: 34px;display: inline-block;">
            ¥{{item.count*item.price}}
          </span>
        </li>
      </ul>
      <hr style="background-color: #F0F0F0;height: 0.2px;width: 95%"/>
      <div style="float: right;margin-right: 50px;text-align: right">
        <div style="font-size: 14px;">
          <span>商品合计：</span>
          <span style="font-weight: bolder">¥<em>{{totalPrice}}</em></span>
        </div>
        <br/>
        <div style="font-size: 14px;">
          <span>运费：</span>
          <span style="font-weight: bolder">¥<em>0</em></span>
        </div>
        <br/>
        <div>
          <span>实付金额：</span>
          <span style="font-size: 20px;color: #D33A31">¥<em>{{totalPrice}}</em></span>
        </div>
        <br/>
        <div class="pay" style="">

          <el-button slot="reference" @click="sub" style="background-color: #D33A31;color: white;">
            提交订单
          </el-button>
        </div>
        <br/>
        <div style="color:#999 ">
          {{goodsAddress.name}} {{goodsAddress.phone}} {{goodsAddress.area}} {{goodsAddress.areaDetails}}
        </div>
      </div>
    </div>
    <!--地址信息-->
    <div class="abc"
         style="display: none;font-size: 12px;color: #333;top: 150px;left:300px;background: #fff;width: 650px;
      position: absolute;box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);border: none;">
      <div style="background: #F6F6F6;line-height: 65px;font-size: 12px">
        <div style="text-align: left;margin-left: 20px;font-size: 25px">修改收货地址</div>
      </div>
      <br/>
      <div style="background-color: #FFFFFF">
        <div>
          <el-form :inline="true">
            <el-form-item label="收货人">
              <el-input style="width:400px;" type="text" v-model="name"></el-input>
            </el-form-item>
            <el-form-item label="联系电话">
              <el-input style="width:400px;" type="text" v-model="phone"></el-input>
            </el-form-item>
            <el-form-item label="收货地区" style="">
              <el-cascader style=""
                           size="large"
                           :options="options"
                           v-model="selectedOptions"
                           @change="handleChange">
              </el-cascader>
            </el-form-item>
            <el-form-item label="详细地址">
              <el-input style="width:400px;" type="text" v-model="address"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div>
          <el-form style="display: inline-block">
            <el-button style="background-color: #CB3B3B;color: white" @click="getAddress">保存新地址</el-button>
          </el-form>
          <el-form style="margin-left: 180px;display: inline-block">
            <el-button style="background-color: #FFFFFF;color: black" @click="updata">取消</el-button>
          </el-form>
        </div>
        <br/>
      </div>
    </div>
    <!--支付信息-->
    <div style="display: none;position: absolute;top: 600px;left:300px;" class="zf">
      <img src="../../assets/images/zwx.jpg"/>
    </div>


    <div style="height: 300px"></div>
    <BackToTop></BackToTop>

  </div>
</template>

<script>
  import Header from "../commons/Header"
  import BackToTop from "../commons/BackToTop"
  import {
    provinceAndCityData,
    regionData,
    provinceAndCityDataPlus,
    regionDataPlus,
    CodeToText,
    TextToCode
  } from 'element-china-area-data'

  export default {
    name: "Confirm",
    components: {
      Header,
      BackToTop
    },
    data() {
      return {
        cartItemsList: {},
        goodsAddress: {
          name: '',
          phone: '',
          area: '',
          areaDetails: ''
        },
        peopleAddress: [],
        name: '',
        phone: '',
        address: '',
        options: regionData,
        selectedOptions: ['', '', '']
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
      //初始化购物车资料
      if (localStorage.getItem("cartItemsList") != null) {
        this.cartItemsList = JSON.parse(localStorage.getItem("cartItemsList"));
      }
      ;
      console.log(localStorage.sheetList);
      let dd = JSON.parse(localStorage.sheetList);
      console.log(dd);
      this.goodsAddress.name = dd[0].name;
      this.goodsAddress.phone = dd[0].phone;
      this.goodsAddress.area = dd[0].area;
      this.goodsAddress.areaDetails = dd[0].areaDetails;


      // console.log(this.cartItemsList)

    },
    created() {

    },
    methods: {
      updata() {
        $(".abc").toggle();
      },
      upz() {

      },
      handleChange(value) {
        // console.log(value);

        // console.log(this.name);
        // console.log(this.phone);
        // console.log(CodeToText[this.selectedOptions[0]]);
        // console.log(this.options);
        // console.log(this.selectedOptions);
        // console.log(this.address);

      },
      getAddress: function () {

        this.goodsAddress.name = this.name;
        this.goodsAddress.phone = this.phone;
        this.goodsAddress.area = CodeToText[this.selectedOptions[0]] + " " + CodeToText[this.selectedOptions[1]] + CodeToText[this.selectedOptions[2]];
        this.goodsAddress.areaDetails = this.address;

        this.peopleAddress.push(this.goodsAddress);
        let data = JSON.stringify(this.peopleAddress);
        localStorage.sheetList = data;

        // localStorage.setItem("goodsAddress", JSON.stringify(this.goodsAddress));
        //把json对象转换json字符串，保存到本地缓存里面。
        console.log(this.name);
        console.log(this.phone);
        var addr = CodeToText[this.selectedOptions[0]] + " " + CodeToText[this.selectedOptions[1]] + " " + CodeToText[this.selectedOptions[2]] + " " + this.address;
        //console.log(this.selectedOptions[0]+","+this.selectedOptions[1]+","+this.selectedOptions[2]+","+this.address);
        console.log(addr);
        this.updata();
      },
      sub() {
        $(".zf").toggle();

      }
    }
  }
</script>

<style scoped>

</style>
