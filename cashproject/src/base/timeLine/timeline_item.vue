<template>
  <div class="timeline__item flex-box">
    <div class="item__left">
      <p>{{itemObj.time}}</p>
      <p>{{itemObj.date}}</p>
    </div>
    <div class="item__middle">
      <span class="icon" :class="[itemObj.status === 0 ? 'icon-ok': itemObj.status === 1 ? 'icon-loading loading' : 'icon-err']"></span>
    </div>
    <div class="item__right">
      <p>{{itemObj.intro}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    itemObj: {
      type: Object,
      default: () => {
        return null
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.timeline__item
  justify-content flex-start
  align-items center
  padding 0 15px
  position relative
  min-height 60px

  &:before
    content ''
    width 2px
    height 100%
    position absolute
    background #cdcdcd
    left 121px
    z-index 0

  &.is_first:before, &.is_end:before
    height 50%

  &.is_first:before
    top 0%

  &.is_end:before
    bottom 0%

  .item__left
    width 85px
    font-size 14px
    line-height 20px
    color #717171

  .item__middle
    position relative
    width 24px
    height 24px
    background url('./dot2.png')
    background-repeat no-repeat
    background-size 100% 100%
    margin 0 10px
    display flex
    justify-content center
    align-items center

    .icon-ok
      background url('./ok1.png') no-repeat

    .icon-err
      background url('./close.png') no-repeat

    .icon-loading
      background url('./loading1.png') no-repeat

      &.loading
        animation aniLoading 0.5s linear infinite

      @keyframes aniLoading
        0%
          transform rotate(0deg)

        100%
          transform rotate(360deg)

    .icon
      display block
      width 16px
      height 16px
      background-size contain

  .item__right
    flex 1
    font-size 14px
    line-height 24px
    text-align left
    color #717171
</style>
