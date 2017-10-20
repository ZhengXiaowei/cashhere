<template>
  <div class="record-item__box" @click="getItem(recordItemObj.id)">
    <div class="record-item__title" :style="{'border-color':borderColor}">
      <p>借款编号：{{recordItemObj.no}}</p>
    </div>
    <div class="record-item__content">
      <div class="content_top flex-box">
        <p class="money">{{recordItemObj.money}}</p>
        <slot name="right">
          <p class="status">{{recordItemObj.status}}</p>
        </slot>
      </div>
      <div class="content_desc flex-box">
        <p>{{moneyText}}（元）</p>
        <p>{{timeText}}：{{recordItemObj.time}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recordItemObj: {
      type: Object,
      default: null
    },
    moneyText: {
      type: String,
      default: '借款金额'
    },
    timeText: {
      type: String,
      default: '申请时间'
    },
    borderColor: {
      type: String,
      default: '#8a8a8a'
    }
  },
  methods: {
    getItem (id) {
      this.$emit('click', id)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable'
@import '~common/stylus/mixin'

.record-item__box
  background #fff
  margin-bottom 10px

  .record-item__title
    font-size 12px
    padding 14px 20px
    border-color(bottom, #8a8a8a)

  .record-item__content
    padding 15px 20px
    position relative

    .content_top
      justify-content space-between
      align-items flex-end

      .money
        color $theme-color
        font-size 24px
        font-weight 100

      .status
        color $theme-color
        font-size 14px

    .content_desc
      margin-top 5px
      flex-direction column
      font-size 12px
      text-color(#8a8a8a)
      line-height 24px
</style>
