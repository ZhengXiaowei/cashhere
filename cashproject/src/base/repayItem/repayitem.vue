<template>
  <div class="repay-item__box">
    <div class="repay-item__title flex-box">
      <p>借款编号：{{repayItemObj.no}}</p>
      <p>{{repayItemObj.status}}</p>
    </div>
    <div class="repay-item__content">
      <div class="content_top flex-box">
        <div class="repay repay-number">
          <p class="number-text">{{repayItemObj.money}}</p>
          <p class="repay-text">借款金额(元)</p>
        </div>
        <div class="repay repay-daynum">
          <p class="number-text">{{repayItemObj.day}}天</p>
          <p class="repay-text">借款期限(天)</p>
        </div>
        <div class="repay repay-advance">
          <button class="repay-advance__btn" @click="repay(repayItemObj.id)">提前还款</button>
        </div>
      </div>
      <div class="content_desc flex-box">
        <p class="repay-time">借款日期：{{repayItemObj.time}}</p>
        <p class="repay-last-time">距还款日{{repayItemObj.lastDay}}天</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    repayItemObj: {
      type: Object,
      default: null
    }
  },
  methods: {
    repay (id) {
      this.$router.forward({
        path: `/repay/${id}`
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable'
@import '~common/stylus/mixin'

.repay-item__box
  background #fff
  margin 0px 10px 10px
  border-radius(10px)
  box-shadow 0px 0px 6px 3px rgba(201, 201, 201, 0.5)

  .repay-item__title
    padding 14px 10px
    font-size 12px
    color $text-notic-color
    border-color(bottom, #d5d5d5)
    justify-content space-between
    align-items center

  .repay-item__content
    padding 10px
    font-size 12px
    color $text-notic-color

    .content_top
      margin-top 10px
      margin-bottom 18px
      align-items flex-end

      .repay
        flex 1
        text-align left

        .number-text
          font-size 24px
          color $theme-color
          font-weight 300
          margin-bottom 10px

        .repay-advance__btn
          border none
          width 100%
          color #fff
          background $theme-color
          border-radius(20px)
          height 30px

    .content_desc
      justify-content space-between
</style>
