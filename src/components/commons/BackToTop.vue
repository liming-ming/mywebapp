<template>
    <div v-if="btnFlag" class="el-backtop" style="right: 10px; bottom: 100px;" @click="backTop">
      <i class="el-icon-caret-top" style="margin-bottom: 4px" @click="backTop"></i>
    </div>
</template>

<script>
  export default {
    name: 'BackToTop',
    data() {
      return {
        btnFlag: false,
        scrollTop: null, //初始化scrollTop
        visiable: false, //默认不显示
      }
    },
//     // vue的两个生命钩子，这里不多解释。
// // window对象，所有浏览器都支持window对象。它表示浏览器窗口，监听滚动事件
    mounted() {
      window.addEventListener('scroll', this.scrollToTop)

    },
    destroyed() {
      window.removeEventListener('scroll', this.scrollToTop)
    },
//
//
    methods: {
      // 点击图片回到顶部方法，加计时器是为了过渡顺滑
      backTop() {
        const that = this;
        let timer = setInterval(() => {
          let ispeed = Math.floor(-that.scrollTop / 5)
          document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
          if (that.scrollTop === 0) {
            clearInterval(timer)
          }
        }, 16)
      },


//       // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
      scrollToTop() {
        const that = this;
        // 页面滚动距顶部距离
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        var scroll = scrollTop - that.moveOffset;
        that.moveOffset = scrollTop;
        that.scrollTop = scrollTop
        if (scroll > 0) {
          // 向上滑动
          that.btnFlag = true
        } else {
          // 向下滑动
          that.btnFlag = false
        }
      }
    }

  }
</script>

<style scoped>
  .el-icon-caret-top {
    right: 10px;
    bottom: 105px;
    font-size: 30px;
    color: white;

  }

  .el-backtop {
    position: fixed;
    background-color: black;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    box-shadow: 0 0 6px rgba(0, 0, 0, .12);
    cursor: pointer;
    z-index: 5;
  }

  backtotop{

    position: fixed;
  }
</style>
