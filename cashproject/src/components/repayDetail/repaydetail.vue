<template>
  <div class="page has-navbar" v-nav="{title:'还款详情',showBackButton:true}">
    <div class="page-content">
      <div class="result-top__wall t-c">
        <p class="result-title__notice flex-box">还款金额</p>
        <h3>1160.00</h3>
        <p class="notice">借款期限：30天</p>
        <div class="result-status">
          <span class="result-icon succ-icon"></span>
        </div>
      </div>
      <div class="result-bottom__wall">
        <flex-item text="借款编号" value="17000000000001"></flex-item>
        <flex-item text="借款日期" value="2017-08-06 19:48:20"></flex-item>
        <flex-item text="还款日期" value="2017-09-10 10:48:20"></flex-item>
        <flex-item text="综合费用" value="160">
          <div slot class="expend-list">
            <p class="expend_item flex-box">
              <span>利息</span>
              <span>20</span>
            </p>
            <p class="expend_item flex-box">
              <span>账户管理费</span>
              <span>60</span>
            </p>
            <p class="expend_item flex-box">
              <span>风险管理费</span>
              <span>80</span>
            </p>
          </div>
        </flex-item>
        <flex-item text="应还款金额" value="1160.00"></flex-item>
        <flex-item text="剩余还款金额" value="1160.00"></flex-item>
      </div>
      <div class="result-bottom__wall">
        <flex-item text="实际还款日期" value="2017-08-06 19:48:20"></flex-item>
        <flex-item text="实际还款金额" value="600"></flex-item>
        <flex-item text="还款方式" value="银行代扣"></flex-item>
        <flex-item text="支付方式" value="工商银行(尾号6981)"></flex-item>
      </div>
      <div class="result-bottom__wall">
        <flex-item text="实际还款日期" value="2017-08-06 19:48:20"></flex-item>
        <flex-item text="实际还款金额" value="600"></flex-item>
        <flex-item text="还款方式" value="银行代扣"></flex-item>
        <flex-item text="支付方式" value="工商银行(尾号6981)"></flex-item>
      </div>
    </div>
  </div>
</template>

<script>
import FlexItem from 'base/flexItem/flexitem'

export default {
  components: {
    FlexItem
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable'
@import '~common/stylus/mixin'

.result-top__wall
  background #fff
  padding-top 26px
  position relative

  .result-title__notice
    justify-content center
    align-items center
    font-size 18px
    color $text-label-color

  h3
    font-size 32px
    color #ff4730
    margin 12px 0 15px

  .notice
    font-size 12px
    color $text-notic-color
    padding-bottom 30px
    line-height 18px

  .result-status
    .result-icon
      position absolute
      right 40px
      top 50%
      width 58px
      height 58px
      margin-top -29px

      &.succ-icon
        bg-image('icon_dks')

.result-bottom__wall
  background #fff
  margin-top 5px
  padding 0 17px

  .expend-list
    .expend_item
      justify-content space-between
      align-items center
      font-size 12px
      color $placeholder-color-dark
      line-height 22px
</style>
