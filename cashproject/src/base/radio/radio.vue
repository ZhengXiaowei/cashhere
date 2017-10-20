<template>
  <div class="radio">
    <input type="radio" :checked="check" />
  </div>
</template>

<script>
export default {
  props: {
    check: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      radioSelected: ''
    }
  }
}
</script>

<style scoped lang="stylus">
@import '~common/stylus/variable'
@import '~common/stylus/mixin'

.radio
  extend-click()

  input
    vertical-align middle
    user-select none
    appearance none
    width 20px
    height 20px
    border-radius 50%
    background #fff
    border 1px solid #454545
    position relative

    &:checked:after
      content ''
      position absolute
      width 10px
      height 10px
      border-radius 50%
      background $theme-color
      left 50%
      top 50%
      margin-top -5px
      margin-left -5px
</style>
