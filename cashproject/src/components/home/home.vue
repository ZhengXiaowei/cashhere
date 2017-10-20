<template>
  <div class="page has-navbar has-tabbar" v-tabbar-menu-index="0">
    <von-header theme="light">
      <span slot="title">借款</span>
    </von-header>
    <div class="page-content">
      <div class="top-banner">
        <div class="banner-bg__bottom"></div>
        <div class="banner-middle">
          <div class="banner-middle__info flex-box t-c">
            <p class="info_title">最高额度</p>
            <p class="info_max_loan">5000.00</p>
            <p class="info_my_loan">我的额度：0.00</p>
            <button class="active_loan_btn" @click="activeLoan">待激活</button>
          </div>
        </div>
      </div>
      <div class="middle-info">
        <group label-width="auto" label-margin-right="1em" label-align="left">
          <x-input class="middle-input" text-align="right" title="借款金额(元)" :show-clear="showClear" type="number" v-model="loanInfo.money" placeholder="借款金额大于300且为100的倍数">
            <div slot="right" class="middle-input__right">元</div>
          </x-input>
          <popup-picker title="借款期限(天)" :data="daylist" v-model="limitDay" class="middle-select" value-text-align="right" cancel-text="请选择借款期限" @on-show="onShow" @on-hide="onHide" @on-change="onChange" placeholder="选择借款天数"></popup-picker>
          <x-input class="middle-input allmoney" :readonly="readOnly" text-align="right" :show-clear="showClear" type="text" v-model="loanInfo.allMoney">
            <div class="label-icon" slot="label">综合费用(元)
              <i class="icon-dkw_bangzhu icon" @click="showNotice"></i>
            </div>
          </x-input>
        </group>
        <submit-button height="50" text="立即激活" @click="toLoan"></submit-button>
        <div class="middle-notice flex-box">
          <i class="icon-dkw_shuoming icon"></i>不向学生提供服务
        </div>
        <div class="bottom-operator flex-box">
          <div class="operator-item" @click="getLoanProgress">
            <p class="icon_box">
              <i class="icon-dkw_shenhezhong"></i>
            </p>
            <p class="icon_text">借款进度</p>
          </div>
          <div class="operator-item" @click="repay">
            <p class="icon_box">
              <i class="icon-dkw_huankuan"></i>
            </p>
            <p class="icon_text">我要还款</p>
          </div>
        </div>
        <!-- <input type="file" accept="image/*"name=""id=""> -->
        <!-- <input type="file"capture="camera"accept="image/*"name=""id=""> -->
        <!-- <input type="file"accept="video/*"name=""id=""> -->
        <!-- <input type="file"capture="camera"accept="video/*"name=""id=""> -->
      </div>
    </div>
  </div>
</template>

<script>
import { Group, PopupPicker, XInput } from 'vux'
import SubmitButton from 'base/submitButton/submitbutton'

export default {
  components: {
    Group,
    PopupPicker,
    XInput,
    SubmitButton
  },
  data () {
    return {
      showClear: false,
      readOnly: true,
      loanInfo: {
        money: '',
        allMoney: '0.00'
      },
      daylist: [['7天', '14天', '21天', '28天', '35天']],
      limitDay: ['7天'],
      noticeArr: {
        money: 1000,
        rate: 20,
        acountMoney: 80,
        fengxianMoney: 60,
        total: 1160
      }
    }
  },
  methods: {
    activeLoan () {
      // 激活操作
    },
    showNotice () {
      let noticeArr = this.noticeArr
      let options = {
        components: {
          'NoticeDialog': {
            template: `<div class="notice-box">
                <div class="notice-title flex-box">综合费用<span>{{repayMoney.total}}</span></div>
                  <div class="notice-list">
                    <p class="notice_item flex-box"><span>还款金额</span><span>{{repayMoney.money}}</span></p>
                    <p class="notice_item flex-box"><span>利息</span><span>{{repayMoney.rate}}</span></p>
                    <p class="notice_item flex-box"><span>账户管理费</span><span>{{repayMoney.acountMoney}}</span></p>
                    <p class="notice_item flex-box"><span>风险管理费</span><span>{{repayMoney.fengxianMoney}}</span></p>
                  </div>
                <div class="notice-btn__box"><button class="notice-btn"
                  @click="doAction">我知道了</button></div>
              </div>`,
            data () {
              return {
                repayMoney: null
              }
            },
            methods: {
              doAction () {
                this.$parent.hide()
              }
            },
            created () {
              this.repayMoney = noticeArr
            }
          }
        }
      }
      window.$popup.fromTemplate('<notice-dialog></notice-dialog>', options).show()
    },
    toLoan () {
      this.$router.forward('/loanApply')
    },
    getLoanProgress () {
      this.$router.forward('/checkProgress')
    },
    repay () {
      this.$router.forward('/repaylist')
    },
    onHide (str) {
      console.log('on-hide', str)
    },
    onShow (str) {
      console.log('on-show')
    },
    onChange (val) {
      console.log(val)
    }
  }
}
</script>

<style lang="stylus">
@import '~common/stylus/variable'
@import '~common/stylus/mixin'

.top-banner
  background $theme-color
  height 206px
  position relative

  .banner-bg__bottom
    bg-image('bg_bolang')
    position absolute
    bottom 0
    width 100%
    height 30px

  .banner-middle
    bg-image('ring')
    background-size cover
    position absolute
    top 8px
    left 66px
    right 66px
    bottom 52px

    .banner-middle__info
      justify-content center
      align-items center
      flex-direction column
      margin-top 24px
      color #fff

      .info_title
        font-size 18px

      .info_max_loan
        margin-top 16px
        font-size 27px
        padding-bottom 12px
        border-color(bottom, #fff)

      .info_my_loan
        margin 8px 0 15px
        font-size 14px

      .active_loan_btn
        border none
        color #fff
        width 95px
        height 40px
        font-size 14px
        background #fc6e53
        border-radius(20px)

.middle-info
  .middle-input
    height $input-height
    font-size 14px
    color $text-label-color

    input
      font-size 12px

    .middle-input__right
      margin-left 10px
      color $text-label-color

  .middle-select .weui-cell_access
    height $input-height
    color $text-label-color

    .vux-cell-value
      color $text-label-color

  .allmoney
    input
      font-size 14px
      color $theme-color

    .label-icon
      .icon
        color $theme-color
        margin-left 7px
        vertical-align middle

  .middle-notice
    margin-top 10px
    color $theme-color
    font-size 12px
    justify-content center
    align-items center

    .icon
      margin-right 5px

  .bottom-operator
    margin-top 18px
    align-items center
    justify-content center

    .operator-item
      flex 1
      text-align center
      background #fff

      .icon_box
        margin 9px 0 6px
        display inline-block
        width 50px
        height 50px
        line-height 50px
        background #f9d2c8
        border-radius 18px

        i
          font-size 25px
          color #222221

      .icon_text
        font-size 14px
        color $text-label-color
        padding-bottom 11px

      &:not(:last-child)
        border-color(right, #f6f6f6)

.notice-box
  .notice-title
    font-size 18px
    height 30px
    border-bottom 1px solid #d5d5d5
    justify-content space-between
    align-items center

    span
      color $theme-color
      font-size 18px

  .notice-list
    .notice_item
      justify-content space-between
      align-items center
      font-size 14px
      color #8a8a8a
      line-height 36px

  .notice-btn__box
    margin-top 20px
    text-align center

    .notice-btn
      border none
      width 80%
      height 40px
      color #fff
      border-radius 20px
      background #ff5532
      box-shadow 0px 0px 6px 3px rgba(255, 85, 50, 0.2)
</style>
