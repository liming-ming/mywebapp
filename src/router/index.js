import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Plogin from '@/components/pc/Plogin'
import Register from '@/components/pc/Register'
import ForgotPassword from '@/components/pc/ForgotPassword'
import Index from '@/components/pc/Index'
import ShoppingCart from '@/components/pc/ShoppingCart'
import Confirm from '@/components/pc/Confirm'
import GoodsDetails from '@/components/pc/GoodsDetails'
import AddGoods from '@/components/pc/AddGoods'
import MCart from '@/components/mobile/MCart'
import MConfirm from '@/components/mobile/MConfirm'
import MPlogin from '@/components/mobile/MPlogin'
import MRegister from '@/components/mobile/MRegister'
import MIndex from '@/components/mobile/MIndex'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },


    {
      path: '/plogin',
      name: 'Plogin',
      component: Plogin,
      meta: {
        index: 2,
        title: '用户登录'
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
      meta: {
        index: 3,
        title: '用户注册'
      }
    },
    {
      path: '/forgotpassword',
      name: 'ForgotPassword',
      component: ForgotPassword
    },
    {
      path: '/index',
      name: 'Index',
      component: Index,
      meta: {
        index: 1,
        title: '万象影音商城'
      }
    },


    {
      path: '/shoppingCart',
      name: 'ShoppingCart',
      component: ShoppingCart,
      meta: {
        index: 4,
        title: '购物车'
      }
    },
    {
      path: '/confirm',
      name: 'Confirm',
      component: Confirm,
      meta: {
        index: 5,
        title: '确认订单'
      }
    },
    {
      path: '/goodsDetails/:id',
      name: 'GoodsDetails',

      component: GoodsDetails,
      meta: {
        index: 6,
        title: '商品详情'
      }
    },
    {
      path: '/addGoods',
      name: 'AddGoods',
      component: AddGoods,
      meta: {}
    },

    //移动端
    {
      path: '/mIndex',
      name: 'MIndex',
      component: MIndex,

    },

    {
      path: '/mCart',
      name: 'MCart',
      component: MCart,

    },
    {
      path: '/mConfirm',
      name: 'MConfirm',
      component: MConfirm,

    },
    {
      path: '/mPlogin',
      name: 'MPlogin',
      component: MPlogin,

    },
    {
      path: '/mRegister',
      name: 'MRegister',
      component: MRegister,

    }


  ]
})
