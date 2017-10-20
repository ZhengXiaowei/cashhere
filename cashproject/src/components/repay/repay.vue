<template>
  <div class="page has-navbar" v-nav="{title:'我要还款',showBackButton:true}">
    <div class="page-content">
      <div class="repay-top__menu flex-box">
        <button-bar theme="assertive" :tab-items="menuList" :tab-index="menuIndex" :on-tab-click="changeMenuIndex"></button-bar>
      </div>
      <div class="repay-type__item" v-show="menuIndex===0">
        <div class="type-item__title flex-box">
          <p>借款单号</p>
          <p class="repay-num">1700000001</p>
        </div>
        <div class="type-item__repayMoney">
          <div class="repay-input__box flex-box">
            <label>¥</label>
            <input type="text" class="repayInput" v-model="repayMoney">
          </div>
          <p class="repay-notice flex-box">
            <i class="icon-notice"></i>全部还款，借款金额、利息及服务费一次还清</p>
        </div>
        <div class="repay-bank__box flex-box">
          <p class="bank_text">银行卡支付(代扣)</p>
          <radio :check="radioCheck"></radio>
        </div>
        <submit-button class="allSubmit" text="确认提交" height="50" @click="payAll"></submit-button>
      </div>
      <div class="repay-type__item" v-show="menuIndex===1">
        <div class="type-item__title flex-box">
          <p>借款单号</p>
          <p class="repay-num">1700000001</p>
        </div>
        <div class="type-item__repayMoney">
          <div class="repay-input__box flex-box">
            <label>¥</label>
            <input type="text" class="repayInput" v-model="repayPartMoney" placeholder="尚有1160.00元借款待还">
          </div>
          <p class="repay-notice flex-box">
            <i class="icon-notice"></i>部分还款，滞纳金基数会减去已还部分额度</p>
        </div>
        <div class="repay-bank__box flex-box">
          <p class="bank_text">银行卡支付(代扣)</p>
          <radio :check="radioCheck"></radio>
        </div>
        <submit-button class="partSubmit" text="确认提交" height="50" @click="payPart"></submit-button>
      </div>
    </div>
  </div>
</template>

<script>
import Radio from 'base/radio/radio'
import SubmitButton from 'base/submitButton/submitbutton'

export default {
  components: {
    Radio,
    SubmitButton
  },
  data () {
    return {
      menuList: ['全部还款', '部分还款'],
      menuIndex: 0,
      repayMoney: '1160.00',
      repayPartMoney: '',
      radioCheck: true
    }
  },
  methods: {
    changeMenuIndex (index) {
      this.menuIndex = index
    },
    payPart () {
      this.$router.forward('/repayResult')
    },
    payAll () {
      this.$router.forward('/repayResult')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable'
@import '~common/stylus/mixin'

.repay-top__menu
  height 50px
  background #fff
  padding 0 12px
  justify-content center
  align-items center

  .von-button-bar
    margin 0

.repay-type__item
  margin-top 10px

  .type-item__title
    justify-content space-between
    align-items center
    padding 12px 20px
    font-size 14px
    color $text-label-color
    background #fff
    border-color(bottom, #f6f6f6)

    .repay-num
      color $text-notic-color

  .type-item__repayMoney
    padding 0 20px
    background #fff

    .repay-input__box
      justify-content flex-start
      align-items center
      padding 16px 0
      border-color(bottom, #f6f6f6)
      color $text-label-color

      label
        font-size 27px
        margin-right 17px

      .repayInput
        width 100%
        height 38px
        font-size 27px

        &::-webkit-input-placeholder
          font-size 16px
          line-height 38px

    .repay-notice
      font-size 12px
      color $text-notic-color
      padding 6px 0
      align-items center

      .icon-notice
        bg-image('icon_instru')
        width 16px
        height 16px
        display block
        margin-right 6px

  .repay-bank__box
    background #fff
    justify-content space-between
    align-items center
    padding 10px 20px
    margin-top 10px
    font-size 16px
    color $text-label-color

  .allSubmit, .partSubmit
    margin-top 50px
</style>
