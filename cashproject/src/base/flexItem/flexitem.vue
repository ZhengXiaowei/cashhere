<template>
  <div class="flex-item__box">
    <div class="flex-item flex-box">
      <p class="flex_text">{{text}}</p>
      <p class="flex_value">{{value}}</p>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable'

.flex-item
  justify-content space-between
  align-items center
  font-size 14px
  height 40px

  .flex_text
    color $text-label-color

  .flex_value
    color $text-notic-color
</style>
