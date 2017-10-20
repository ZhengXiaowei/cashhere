<template>
  <div class="page has-navbar" v-nav="{title:'借款申请',showBackButton:true}">
    <div class="page-content">
      <div class="loan-apply__form">
        <group label-width="auto" label-margin-right="1em" label-align="left" class="loan-apply__group">
          <x-input class="middle-input loanmoney" title="借款金额(元)" :readonly="readOnly" text-align="right" :show-clear="showClear" type="text" v-model="loanInfo.money">
          </x-input>
          <x-input class="middle-input" title="借款期限(天)" :readonly="readOnly" text-align="right" :show-clear="showClear" type="text" v-model="loanInfo.day">
          </x-input>
        </group>
        <div class="loan-multi__money">
          <div class="multi flex-box">
            <div class="multi-lable">综合费用</div>
            <div class="multi-value">160</div>
          </div>
          <div class="multi-list">
            <p class="flex-box">
              <span>利息</span>
              <span>20</span>
            </p>
            <p class="flex-box">
              <span>账户管理费</span>
              <span>60</span>
            </p>
            <p class="flex-box">
              <span>风险管理费</span>
              <span>80</span>
            </p>
          </div>
        </div>
        <group label-width="auto" label-margin-right="1em" label-align="left" class="bank_picker">
          <popup-radio ref="bankpicker" title="收款账号" class="bankpicker" :options="banks" v-model="loanInfo.bank">
            <div slot="popup-header" class="bank-picker__operate flex-box">
              <div class="operate operate__left">请选择您的收款银行卡</div>
              <div class="operate operate__right" @click="hideBankPopup">确定</div>
            </div>
            <template slot-scope="props" slot="each-item">
              <img class="vux-radio-icon" :src="dealImage(props.icon)" alt="">{{props.label}}
            </template>
          </popup-radio>
        </group>
        <p class="agreements">我已阅读并同意
          <i>《借款协议书》</i>
        </p>
        <submit-button class="be-sure__apply" text="确认申请" height="50" @click="loanApply"></submit-button>
      </div>
    </div>
  </div>
</template>

<script>
// TODO:字体字号 颜色需调整
import { Group, PopupRadio, XInput } from 'vux'
import SubmitButton from 'base/submitButton/submitbutton'

export default {
  components: {
    Group,
    PopupRadio,
    XInput,
    SubmitButton
  },
  data () {
    return {
      loanInfo: {
        money: '1000.00',
        day: '35天',
        bank: '1'
      },
      banks: [{
        key: '1',
        value: '中国建设银行储蓄卡(6663)',
        icon: 'logo_jsbank.png'
      }, {
        key: '2',
        value: '中国工商银行储蓄卡(6412)',
        icon: 'logo_gsbank.png'
      }, {
        key: '3',
        value: '中国农业银行储蓄卡(6521)',
        icon: 'logo_nybank.png'
      }, {
        key: '4',
        value: '招商银行储蓄卡(6266)',
        icon: 'logo_zsbank.png'
      }],
      showClear: false,
      readOnly: true
    }
  },
  methods: {
    loanApply () {
      // 确认申请
      this.$router.forward('/loanResult')
    },
    dealImage (url) {
      let nUrl = require('./' + url)
      return nUrl
    },
    hideBankPopup () {
      this.$refs.bankpicker.hide()
    }
  }
}
</script>

<style lang="stylus">
@import '~common/stylus/variable'
@import '~common/stylus/mixin'

.loan-apply__group
  .vux-no-group-title
    margin-top 0
    color $text-label-color

  .middle-input
    height $input-height

    &.loanmoney input
      color $theme-color

.loan-multi__money
  margin-top 10px
  background #fff
  padding 10px

  .multi
    justify-content space-between
    align-items center
    font-size 16px
    color #091525

    .multi-value
      color $theme-color

  .multi-list
    margin-top 5px

    p
      line-height 24px
      font-size 14px
      color $text-label-color
      justify-content space-between
      align-items center

.bank_picker
  .bankpicker
    height $input-height
    font-size 16px
    color #091525

    .vux-cell-value
      color #9ea4b3

.vux-popup-dialog
  font-size 14px

  .weui-cell_radio
    height $input-height

.bank-picker__operate
  justify-content space-between
  align-items center
  padding 10px
  height 50px
  border-color(bottom, #e9e9e9)

  .operate
    flex 1

  .operate__left
    text-align left
    color $text-label-color

  .operate__right
    text-align right
    color $theme-color

.agreements
  margin-top 10px
  padding 0 10px
  font-size 12px
  color $text-label-color

  i
    color $theme-color
    font-style normal

.submit-btn__box.be-sure__apply
  margin-top 40px
</style>
