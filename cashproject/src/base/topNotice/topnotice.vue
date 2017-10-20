<template>
  <div class="top-notice__box" v-show="showNotice">
    <p>{{showText}}</p>
  </div>
</template>

<script>
export default {
  props: {
    showNotice: {
      type: Boolean,
      default: true
    },
    showText: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable'
@import '~common/stylus/mixin'

.top-notice__box
  font-size 12px
  color $theme-color
  background #fefcec
  text-align center
  padding 10px 0
  line-height 18px
  no-wrap()
</style>
