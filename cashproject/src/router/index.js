import Vue from 'vue'
import Router from 'vue-router'
import HomeFrom from '@/components/HelloFromVux'
import Hello from '@/components/Hello'
import TimeLine from 'page/timelines/timelines'
import Msg from 'page/msg/msg'
import Record from 'page/record/record'

// 登录相关
import Login from 'page/login/login'
import Forget from 'page/forget/forget'
import Register from 'page/register/register'

// 首页三大模块
import Index from 'page/index/index'
import Home from 'page/home/home'
import Authentication from 'page/authentication/authentication'
import User from 'page/user/user'

// 个人中心模块
import MyBank from 'page/myBank/mybank'
import Help from 'page/help/help'
import Branch from 'page/branch/branch'
import Setting from 'page/setting/setting'

import ChangePhone from 'page/changePhone/changephone'
import ChangePassword from 'page/changePassword/changepsd'
import Message from 'page/message/message'
import MessageList from 'page/messageList/messagelist'

// 认证模块
import UserAuth from 'page/userAuth/userauth'
import UserAuthInfo from 'page/userAuthInfo/userauthinfo'
import UrgentAuth from 'page/urgentAuth/urgentauth'
import BankAuth from 'page/bankAuth/bankauth'

import BindBank from 'page/bankAuth/bindbank'
import BankList from 'page/bankAuth/banklist'

// 借贷模块
import LoanApply from 'page/loanApply/loanapply'
import LoanResult from 'page/loanResult/loanresult'
import LoanRecordList from 'page/loanRecordList/loanrecordlist'
import LoanRecordDetail from 'page/recordDetail/recorddetail'

import CheckLoanProgress from 'page/checks/checks'

// 还款模块
import RepayList from 'page/repayList/repaylist'
import Repay from 'page/repay/repay'
import RepayResult from 'page/repayResult/repayresult'
import RepayFlowList from 'page/repayFlow/repayflow'
import RepayDetail from 'page/repayDetail/repaydetail'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component: Index,
      redirect: '/index/home',
      children: [
        {
          path: 'home',
          name: '首页',
          component: Home,
          meta: {
            allowBack: false
          }
        },
        {
          path: 'auth',
          name: '认证',
          component: Authentication,
          meta: {
            allowBack: false
          }
        },
        {
          path: 'user',
          name: '我的',
          component: User,
          meta: {
            allowBack: false
          }
        }
      ]
    },
    {
      path: '/login',
      name: '登录',
      component: Login
    },
    {
      path: '/forget',
      name: '忘记密码',
      component: Forget
    },
    {
      path: '/register',
      name: '注册',
      component: Register
    },
    {
      path: '/userAuth',
      name: '个人信息认证--身份证认证',
      component: UserAuth
    },
    {
      path: '/userauth_info',
      name: '个人信息认证--个人信息认证',
      component: UserAuthInfo
    },
    {
      path: '/urgentAuth',
      name: '紧急联系人认证',
      component: UrgentAuth
    },
    {
      path: '/bankAuth',
      name: '银行卡绑定',
      component: BankAuth
    },
    {
      path: '/bindbank',
      name: '银行卡绑定-手机号验证',
      component: BindBank
    },
    {
      path: '/bankList',
      name: '银行卡列表',
      component: BankList
    },
    {
      path: '/loanApply',
      name: '借款申请',
      component: LoanApply
    },
    {
      path: '/loanResult',
      name: '借款申请结果',
      component: LoanResult
    },
    {
      path: '/checkProgress',
      name: '借款进度',
      component: CheckLoanProgress
    },
    {
      path: '/message',
      name: '消息中心',
      component: Message
    },
    {
      path: '/messageList',
      name: '系统公告',
      component: MessageList
    },
    {
      path: '/loanList',
      name: '借款记录',
      component: LoanRecordList
    },
    {
      path: '/loanDetail/:id',
      name: '借款详情',
      component: LoanRecordDetail
    },
    {
      path: '/repaylist',
      name: '还款列表',
      component: RepayList
    },
    {
      path: '/repay/:id',
      name: '我要还款',
      component: Repay
    },
    {
      path: '/repayResult',
      name: '还款结果',
      component: RepayResult
    },
    {
      path: '/repayflow',
      name: '还款流水',
      component: RepayFlowList
    },
    {
      path: '/repayDetail/:id',
      name: '还款详情',
      component: RepayDetail
    },
    {
      path: '/myBanks',
      name: '银行卡',
      component: MyBank
    },
    {
      path: '/help',
      name: '帮助中心',
      component: Help
    },
    {
      path: '/branch',
      name: '品牌中心',
      component: Branch
    },
    {
      path: '/setting',
      name: '设置',
      component: Setting
    },
    {
      path: '/changetel',
      name: '修改手机号',
      component: ChangePhone
    },
    {
      path: '/changepsd',
      name: '修改密码',
      component: ChangePassword
    },
    {
      path: '/hellofrom',
      name: 'HelloFrom',
      component: HomeFrom
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/timeline',
      name: 'TimeLine',
      component: TimeLine
    },
    {
      path: '/msg',
      name: 'Msg',
      component: Msg
    },
    {
      path: '/record',
      name: 'Record',
      component: Record
    }
  ]
})

export default router
