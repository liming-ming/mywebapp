<template>
  <div>
    <Header style="margin-top: -80px"></Header>

    <div class="jumbotron masthead" style="margin-top: 0px">
      <br/>
      <br/>
      <div class="container" style="height: 250px">
        <br/>
        <br/>
        <h1 style="color: white;">万象影音商城</h1>
        <h2 style="color: white;">万象影音，购得着，购精彩，购有趣。</h2>
      </div>
    </div>

    <div class="container projects">
      <div>
        <el-row :gutter="20">
          <el-col :span="12 ">
            <div class="grid-content bg-purple" style="background-color: white">
              <a href="#">
                <img src="http://p4.music.126.net/kQqf40w-NFhLXIksQPgSwg==/109951164207184328.jpg"/>
              </a>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content bg-purple" style="background-color: white">
              <a href="#"><img src="http://p4.music.126.net/QtFPuBnRPFatpnGsyNJYhw==/109951163973446450.jpg"/></a>
            </div>
          </el-col>
        </el-row>

      </div>
      <br/>

      <div style="position: relative;background-color: whitesmoke;height: 180px">
        <div style="padding: 15px 0;">
          <div style="position: absolute;left: 0;padding: 9px 0;margin-left: 60px">
            <span style="font-size: 40px;color: black"><strong><van-icon name="video-o"/>数字专辑</strong></span>
            <p><em style="font-size: 15px">Taylor Swift 新专辑火热售卖中</em></p>
            <a href="#" style="color: black;font-size: 30px;margin-left: -50px;"><strong>立即购买 ></strong></a>
          </div>
        </div>
        <div style="text-align:right;margin:0px auto 0px auto;margin-right: 55px">
          <img src="https://p1.music.126.net/D1gL45hPNWNxoq1Foanh6Q==/109951164370176967.jpg?param=120y120"/>
          <img src="https://p2.music.126.net/6CB6Jsmb7k7qiJqfMY5Row==/109951164260234943.jpg?param=120y120"/>
          <i class="circle"></i>
        </div>
      </div>
      <br/>

      <div class="row" style="min-height:816px">
        <span
          style="font-weight: bold;font-size: 24px;color: #333333;display: block;text-align: left">&nbsp;&nbsp;热门商品</span>

        <div id="app">
          <!--商品列表-->
          <div class="row">
            <el-row :gutter="20">

              <div class="" v-for="(item,index) in goodsList" :key="index">
                <!--商品图片-->
                <el-col :span="6">
                 <router-link :to="'/goodsDetails/'+item.id">
                    <img style="width: 263px;height: 263px;background-color: whitesmoke" :src="item.pic" alt=""/>
                 </router-link>

                  <!--商品描述-->
                  <div class="">
                    <router-link :to="'/goodsDetails/'+item.id" style="font-size: 15px;color: black" class="">{{item.name}}</router-link>
                    <div class="">已售: {{item.buyCount}}件</div>
                    <div class="">单价:<span style="color: #d33a31;font-size: large" class="">{{item.price}}¥</span></div>
                  </div>

                </el-col>
              </div>

            </el-row>
          </div>
        </div>


      </div>
    </div>
    <br/>

    <footer class="footer " style="">
      <div class="container">
        <div class="row footer-top" style="height: 100px">
          <div class="col-md-6 col-lg-6">
            <h4>
              <img src="../../assets/images/minlogo.png">
            </h4>
            <p>万象影音商城是专注于音乐场景打造的音乐购物平台，包含音乐人周边、3c影音数码、音乐市集等，和我们一起让音乐购有趣，给生活加点料</p>
          </div>
          <div class="col-md-6  col-lg-5 col-lg-offset-1">
            <div class="row about">
              <div class="col-sm-3">
                <h4>关于</h4>
                <ul class="list-unstyled">
                  <li><a href="">关于我们</a></li>
                  <li><a href="">广告合作</a></li>
                  <li><a href="">友情链接</a></li>
                  <li><a href="">招聘</a></li>
                </ul>
              </div>
              <div class="col-sm-3">
                <h4>联系方式</h4>
                <ul class="list-unstyled">
                  <li><a href="" title="Bootstrap中文网官方微博" target="_blank">新浪微博</a></li>
                  <li><a href="">电子邮件</a></li>
                </ul>
              </div>
              <div class="col-sm-4">
                <h4>旗下网站</h4>
                <ul class="list-unstyled">
                  <li><a href="" target="_blank">Laravel中文网</a></li>
                  <li><a href="" target="_blank">Ghost中国</a></li>
                  <li><a href="" target="_blank">BootCDN</a></li>
                  <li><a href="" target="_blank">Packagist中国镜像</a></li>
                </ul>
              </div>
              <div class="col-sm-2">
                <h4 style="width: 64px;">特别致谢</h4>
                <ul class="list-unstyled" style="width: 64px">
                  <li><a href="https://www.maoyuncloud.com/" target="_blank">猫云</a></li>
                  <li><a href="https://www.jdcloud.com/" target="_blank">京东云</a></li>
                  <li><a href="https://www.upyun.com" target="_blank">又拍云</a></li>
                </ul>
              </div>
            </div>

          </div>
        </div>
        <hr/>
        <div class="row footer-bottom" style="height: 10px">
          <ul class="list-inline text-center">
            <li><a href="http://www.miibeian.gov.cn/" target="_blank">京ICP备11008151号-6</a></li>
            <li>京公网安备11010802014853</li>
          </ul>
        </div>
      </div>
    </footer>
    <BackToTop></BackToTop>
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
  import Header from "../commons/Header";
  import BackToTop from "../commons/BackToTop"
  import index from "../../router";

  export default {
    name: "Index",
    components: {
      Header,
      BackToTop
    },
    data() {
      return {
        goodsList: [],

      }
    },
    mounted: function () {
      this.doshow();
    },

    methods: {
      doshow() {
        var that = this;
        var url = 'http://47.104.154.103:8888/moocdemo/items/show';
        this.axios.get(url).then(function (response) {
          if (response.data.code == 200) {
            that.goodsList = response.data.data;
            // console.log(that.goodsList);
          } else {
            console.log(response.data.msg);
          }
        })
      }

    }


  }
</script>


<style scoped>
  @import "https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css";
  @import "https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css";
  @import "https://cdn.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.3/dist/css/site.min.css";
  @import "//s2.music.126.net/store/s/w/pt_common_macro.css?e0a0a92bc67a7fa219cd802fd5d336f8";
  @import "//s2.music.126.net/store/s/w/pt_module_product_list_index.css?cb5a6b5ad81d20d014752111dab90f24";

  .job-hot {
    position: absolute;
    color: #d9534f;
    right: 0;
    top: 15px;
  }

  Header {
    height: 43px;
    margin-top: -42.6px;
  }

</style>
<style lang="scss">
  .el-row {
    margin-bottom: 20px;

    &
    :last-child {
      margin-bottom: 0;
    }

  }

  .el-col {
    border-radius: 4px;
  }

  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

  .grid-content bg-purple a {
    cursor: pointer;
    text-decoration: none;
    color: #333;
  }
</style>


