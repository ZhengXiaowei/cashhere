<template>
  <div class="page has-navbar" v-nav="{title:'我要还款',showBackButton:true}">
    <div class="page-content">
      <div class="result-top__wall t-c">
        <p class="result-title__notice flex-box">
          <i class="icon-success"></i>还款成功</p>
        <h3>1160.00</h3>
        <p class="notice">本金利息1000+利息20+账户管理费60+风险管理费80元</p>
      </div>
      <div class="result-bottom__wall">
        <flex-item text="还款方式" value="银行代扣"></flex-item>
        <flex-item text="支付方式" value="工商银行(尾号6981)"></flex-item>
        <flex-item text="还款订单" value="170000000001"></flex-item>
        <flex-item text="还款时间" value="2017-08-06 19:48:20"></flex-item>
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
  padding-top 30px
  border-bottom 2px solid #f6f6f6

  .result-title__notice
    justify-content center
    align-items center
    font-size 18px
    color $text-label-color

  .icon-success
    width 18px
    height 18px
    display block
    bg-image('icon_succed')
    margin-right 4px

  h3
    font-size 32px
    color #ff4730
    margin 15px 0 22px

  .notice
    margin 0 35px
    font-size 12px
    color $text-notic-color
    padding-bottom 27px
    line-height 18px

.result-bottom__wall
  background #fff
  padding 0 17px
</style>
