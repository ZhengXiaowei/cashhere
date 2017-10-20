<template>
  <div class="msg-item__box">
    <p class="msg-item__time t-c">{{msgItemObj.time}}</p>
    <div class="msg">
      <div class="msg-intro__box">
        <h3>{{msgItemObj.typeText}}</h3>
        <p>{{msgItemObj.introText}}</p>
      </div>
      <div class="msg-see">
        <p>点击查看
          <i></i>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    msgItemObj: {
      type: Object,
      default: null
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable.styl'
@import '~common/stylus/mixin.styl'

.msg-item__box
  margin-top 10px

  .msg-item__time
    font-size 12px
    margin-bottom 10px

  .msg
    margin 0px 20px
    background #fff
    border-radius(5px)

    .msg-intro__box
      margin 0 10px
      border-color(bottom, #e1e1e1)

      h3
        font-size 16px
        line-height 60px
        color $text-label-color

      p
        no-wrap()
        padding-bottom 20px
        font-size 14px
        text-color(#949494)

    .msg-see
      padding 10px
      font-size 14px
      line-height 24px
</style>
