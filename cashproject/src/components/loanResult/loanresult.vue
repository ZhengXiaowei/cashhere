<template>
  <div class="page has-navbar" v-nav="{title:'借款申请',showBackButton:true}">
    <div class="page-content">
      <div class="result-top__wall t-c">
        <img :src="iconSuc" alt="" />
        <h3>申请提交成功</h3>
        <p class="notice">您的借款申请已经提交，结果会在2小时内通过短信告知，请您耐心等待。</p>
      </div>
      <div class="result-bottom__wall">
        <flex-item text="借款金额" value="1000.00"></flex-item>
        <flex-item text="打款银行卡" value="工商银行(6981) 钱多多"></flex-item>
        <flex-item text="借款编号" value="170000000001"></flex-item>
        <flex-item text="申请时间" value="2017-08-06 19:48:20"></flex-item>
      </div>
    </div>
  </div>
</template>

<script>
import FlexItem from 'base/flexItem/flexitem'

export default {
  components: {
    FlexItem
  },
  data () {
    return {
      iconSuc: require('./icon_success@3x.png')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable'

.result-top__wall
  padding 0 20px
  background #fff
  border-bottom 1px solid #f6f6f6

  img
    width 80px
    height 80px
    margin-top 18px

  h3
    font-size 18px
    color $text-label-color
    margin-top 15px

  p.notice
    font-size 12px
    color $text-notic-color
    line-height 18px
    margin-top 12px
    padding-bottom 20px

.result-bottom__wall
  background #fff
  padding 0 17px
</style>
